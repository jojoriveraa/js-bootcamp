let getTip = function (total, tipPercent = 0.2) {
    if (total === undefined) {
        return 'A check total value is needed'
    }
    let percent = tipPercent * 100
    let tip = total * tipPercent
    return `A ${percent}% tip on ${total} would be ${tip}`
}

let tip = getTip(100)
console.log(tip)

tip = getTip(100, .1)
console.log(tip)

tip = getTip(100, undefined)
console.log(tip)

tip = getTip(undefined, .1)
console.log(tip)
