let add = function (a, b, c) {
    return a + b + c
}

let result = add(10, 1, 5)
console.log(result)

let getScore = function (name = '', score = 0) {
    return 'Name: ' + name + ' Score: ' + score
}

let score = getScore('Jorge', 100)
console.log(score)

score = getScore(undefined, 90)
console.log(score)