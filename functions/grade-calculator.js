let getGrade = function (score) {
    if (score === undefined) {
        return 'Grade cannot be calculated for undefined score'
    }
    score = score * 100
    if (score < 0) {
        return 'Grade cannot be calculated for negative score'
    }
    if (score <= 59) {
        return 'F'
    }
    if (score <= 69) {
        return 'D'
    }
    if (score <= 79) {
        return 'C'
    }
    if (score <= 89) {
        return 'B'
    }
    return 'A'
}

let getScore = function (studentScore, totalScore) {
    if (studentScore === undefined || totalScore === undefined || totalScore <= 0) {
        return `Check arguments, score cannot be calculated with Student score: ${studentScore}, and Total score ${totalScore}.`
    }
    return studentScore / totalScore
}

let printScore = function (studentScore, totalScore) {
    let score = getScore(studentScore, totalScore)
    let grade = getGrade(score)
    return `${studentScore}/${totalScore} --> You got ${grade} (${score * 100}%)!`
}

console.log(printScore(15, 20))