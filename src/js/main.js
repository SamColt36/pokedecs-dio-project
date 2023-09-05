const pokemonList = document.getElementById('pokemonList')
const loadMoreButton = document.getElementById('loadMoreButton')
const containerLoadMoreButton = document.getElementById('containerLoadMoreButton')
const maxRecords = 151
const limit = 6
let offset = 0

function capitalizeFirstLetter(string) {
	return string.charAt(0).toUpperCase() + string.slice(1);
}

function convertPokemonToLi(pokemon) {
	return `
 	<li class="${pokemon.type} relative flex flex-col m-2 p-3 pb-1 text-white rounded-lg overflow-hidden shadow-lg shadow-black/20 sm:min-w-[40vw]">
		<!--Imagens de background-->
		<figure>
			<img src="./src/assets/background-pokeball-rectangle.png" alt="Ilustração de retângulo opaco"
				class="absolute top-0 left-0 -rotate-[10deg] -translate-x-2/3 -translate-y-2/3 h-24 z-10 opacity-25">
			<img src="./src/assets/background-pokeball.png" alt="Ilustração de pokeball opaca"
				class="absolute -bottom-4 -right-4 h-32 z-10 opacity-25">
		</figure>
		<!--/Imagens de background-->
		<!--ID do Pokemon-->
		<span class="text-right text-black font-medium opacity-10 z-20 lg:text-lg">#00${pokemon.number}</span>
		<!--/ID do Pokemon-->
		<section class="grid grid-cols-2">
			<!--Nome do Pokemon-->
			<h5 class="font-medium tracking-wide col-span-2 my-2 lg:text-lg">${capitalizeFirstLetter(pokemon.name)}</h5>
			<!--/Nome do Pokemon-->
			<!--Types-->
			<ol class="flex flex-col space-y-2 col-span-1">
				${pokemon.types.map((type) => `<li class="type ${type} bg-white/25 py-1 px-3 rounded-lg text-center text-xs w-min lg:text-sm">${type}</li>`).join('')}
			</ol>
			<!--/Types-->
			<!--Imagem do Pokemon-->
			<img class="max-w-full h-20 self-end z-20 col-span-1 lg:h-24"
				src="${pokemon.photo}"
				alt="${pokemon.name}">
			<!--/Imagem do Pokemon-->
		</section>
	</li>
	<!--/Card com Pokemon-->
 	`
}

function loadPokemonItens(offset, limit) {
	pokeApi.getPokemons(offset, limit).then((pokemons = []) => {
		const newHtml = pokemons.map(convertPokemonToLi).join('')
		pokemonList.innerHTML += newHtml
	})

}

loadPokemonItens(offset, limit)

loadMoreButton.addEventListener('click', () => {
	offset += limit
	const qntRecordsNextPage = offset - limit

	if (qntRecordsNextPage >= maxRecords) {
		const newLimit = maxRecords - offset
		loadPokemonItens(offset, newLimit)

		containerLoadMoreButton.classList.add('ocultar-button')
	}
	else loadPokemonItens(offset, limit)
})
