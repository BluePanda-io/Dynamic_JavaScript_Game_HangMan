const puzzleEl = document.querySelector('#puzzle')
const guessesEl = document.querySelector('#guesses')
let game1 

render = function(){
	// puzzleEl.textContent = game1.puzzle
	puzzleEl.innerHTML = ''
	guessesEl.textContent = game1.statusMessage

	game1.puzzle.split('').forEach((letter)=>{
		const letterEl = document.createElement('span')
		letterEl.textContent = letter
		puzzleEl.appendChild(letterEl)
	})
}


window.addEventListener('keypress', function(e){
	const guess = String.fromCharCode(e.charCode)
	game1.makeGuess(guess)
	render()
})



const numWords = 2

newGame = function(){
	getPuzzle(numWords).then((data)=>{
		console.log(data.puzzle)
		game1 = new Hangman(data.puzzle,5)
		render()
	}).catch((error)=>{
		console.log(error)
	})
}
newGame()

document.querySelector('#reset').addEventListener('click',function(){
		newGame()
});
