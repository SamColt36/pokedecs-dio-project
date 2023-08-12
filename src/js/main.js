const offset = 0
const limit = 10
const url = `https://pokeapi.co/api/v2/pokemon?offset=${offset}&limit=${limit}`

function convertPokemonToLi(pokemon) {
	return `
 	<li class="relative flex flex-col m-2 p-3 pb-1 bg-verde text-white rounded-lg overflow-hidden drop-shadow-sm sm:min-w-[40vw]">
		<!--Imagens de background-->
		<figure>
			<img src="./src/assets/background-pokeball-rectangle.png" alt="Ilustração de retângulo opaco"
				class="absolute top-0 left-0 -rotate-[10deg] -translate-x-2/3 -translate-y-2/3 h-24 z-10 opacity-25">
			<img src="./src/assets/background-pokeball.png" alt="Ilustração de pokeball opaca"
				class="absolute -bottom-4 -right-4 h-32 z-10 opacity-25">
		</figure>
		<!--/Imagens de background-->
		<!--ID do Pokemon-->
		<span class="text-right text-black font-medium opacity-10 z-20 lg:text-lg">#001</span>
		<!--/ID do Pokemon-->
		<section class="grid grid-cols-2">
			<!--Nome do Pokemon-->
			<h5 class="font-medium tracking-wide col-span-2 my-2 lg:text-lg">${pokemon.name}</h5>
			<!--/Nome do Pokemon-->
			<!--Types-->
			<ol class="flex flex-col space-y-2 col-span-1">
				<li class="bg-white/25 py-1 px-3 rounded-lg text-center text-xs w-min lg:text-sm">Grass</li>
				<li class="bg-white/25 py-1 px-3 rounded-lg text-center text-xs w-min lg:text-sm">Poison</li>
			</ol>
			<!--/Types-->
			<!--Imagem do Pokemon-->
			<img class="max-w-full h-20 self-end z-20 col-span-1 lg:h-24"
				src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/1.svg"
				alt="${pokemon.name}">
			<!--/Imagem do Pokemon-->
		</section>
	</li>
	<!--/Card com Pokemon-->
 `
}

const pokemonList = document.getElementById('pokemonList')
pokeApi.getPokemons().then((pokemons = []) => {
	pokemonList.innerHTML += (pokemons.map(convertPokemonToLi)).join('')
})



