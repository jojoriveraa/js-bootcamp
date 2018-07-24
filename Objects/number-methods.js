let num = 103.941

console.log(num.toFixed(2))
console.log(Math.round(num))
console.log(Math.floor(num))
console.log(Math.ceil(num))

let min = 0
let max = 10
let r = Math.floor(Math.random() * (max - min + 1)) + min

console.log(r)

//Challenge
let getRandom = function(min = 1, max = 5){
    return Math.floor(Math.random() * (max - min + 1)) + min
}

let makeGuess = function(guess){
    return guess === getRandom(1,5)
}

console.log(makeGuess(2))