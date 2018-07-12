let studentScore = 18
let maxScore = 20
let percent = (studentScore / maxScore) * 100

if (maxScore < studentScore) {
    console.log('Student score is greater than the maximum score possible. This could lead to misscalculation')
}

console.log('Percent: ' + percent + '%')