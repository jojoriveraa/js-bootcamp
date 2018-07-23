let name = 'Jorge Rivera'

console.log(name.length)
console.log(name.toUpperCase())
console.log(name.toLowerCase())

let password = 'abc123def'
console.log(password.includes('password'))

console.log(name.trim())


// Challenge
let isValidPassword = function (p) {
    if (p.length > 8 && !p.toLowerCase().includes('password')) {
        return true
    } else {
        return false
    }
}

console.log(isValidPassword('yqewtd'))
console.log(isValidPassword('yqewtd6546754kdhwicug'))
console.log(isValidPassword('yqewtdpassword'))
