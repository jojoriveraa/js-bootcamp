// Undefined for vars
let name

if (name === undefined) {
    console.log('please provide a name')
} else {
    console.log(name)
}

// Undefined for function args

let sqare = function(n){
    console.log(n)
}

sqare()

// Undefined for return values

console.log(sqare())

let age = 27
age = null
console.log(age)
