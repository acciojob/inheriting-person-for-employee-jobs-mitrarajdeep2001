// complete this js code
function Person(name, age) {
	this.Name = name
	this.Age = age
}

Person.prototype.greet = function () {
	return `Hello, my name is ${this.Name}, I am ${this.Age} years old.`
}

function Employee(name, age, jobTitle) {
	this.Name = name
	this.Age = age
	this.JobTitle = jobTitle
}

Employee.prototype = Object.create(Person.prototype)
const E1 = new Employee('Rajdeep', '22', 'SDE')
Employee.prototype.jobGreet = function () {
	return `Hello, my name is ${this.Name}, I am ${this.Age} years old, and my job title is ${this.JobTitle}.`
}

console.log(E1.greet()) 
console.log(E1.jobGreet()) 


// Do not change code below this line
window.Person = Person;
window.Employee = Employee;
