let getTip = function (total, tipPercent = 0.2) {
    if (total === undefined) {
        return null
    }
    return total * tipPercent
}

let tip = getTip(100)
console.log(tip)

tip = getTip(100, .1)
console.log(tip)

tip = getTip(100, undefined)
console.log(tip)

tip = getTip(undefined, .1)
console.log(tip)
