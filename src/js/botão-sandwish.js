const menuSuspenso = document.getElementById('menuSuspenso')
const exit = document.getElementById('exit')
const btnSandwish = document.getElementById('btnSandwish')
const pathElement = document.getElementById("btnSandwishSvgPath");
// Parâmetro que gera o icon menu sandwish ativado
const pathParamDactived = 'M3.75 9h16.5m-16.5 6.75h16.5'
// Parâmetro que gera o icon menu sandwish desativado
const pathParamDdisabled = 'M6 18L18 6M6 6l12 12'
let count = 1

btnSandwish.classList.add('transition', 'duration-700', 'transition-all', 'ease-in-out')
menuSuspenso.classList.add('transition', 'duration-700', 'transition-all', 'ease-in-out')

function ativarMenu() {
	pathElement.setAttribute("d", pathParamDactived);
	menuSuspenso.classList.add('translate-y-full')
}

function desativarMenu() {
	pathElement.setAttribute("d", pathParamDdisabled);
	menuSuspenso.classList.remove('translate-y-full')
}

btnSandwish.addEventListener('click', () => {
	count++
	if (count % 2 === 0) {
		desativarMenu()
	} else {
		ativarMenu()
	}
})


exit.addEventListener('click', () => {
	count = 0
	ativarMenu()
}) 
