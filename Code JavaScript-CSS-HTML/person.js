const Person = function( firstName, lastName, age,likes=[]){
	this.firstName = firstName
	this.lastName = lastName
	this.age = age
	this.likes = likes
}

// The prototype property of a function help us to create functions outside of the main part of initialization
Person.prototype.getBio = function(){
	let bio = `${this.firstName} is ${this.age}.`

	this.likes.forEach((like)=>{
		bio = bio + ` ${this.firstName} likes ${like}.`
	})

	return bio
}

Person.prototype.setName = function(fullName){
	this.firstName = fullName.split(' ')[0]
	this.lastName = fullName.split(' ')[1]
}

// Person.prototype.location = 'Thailand' // This means taht we have the same variable for all objects 

const me = new Person('Andrew', 'Mead',27,['teaching','Biking'])
me.setName('miltos saratzidis')
console.log(me.getBio())
console.log(me.lastName)

const person2 = new Person('Clancey', 'Turner',51)
console.log(person2.getBio())