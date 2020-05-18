
const getPuzzle = (numWords) => {
	return fetch(`http://puzzle.mead.io/puzzle?wordCount=${numWords}`,{}).then((response)=>{
		if (response.status ===200){
			return response.json()
		} else{
			throw new Error('Unable to fethch the puzzle')
		}
	})
}

