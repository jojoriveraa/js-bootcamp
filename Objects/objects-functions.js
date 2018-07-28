let myBook = {
    title: '1984',
    author: 'George Orwell',
    pageCount: 326
}

let otherBook = {
    title: 'A peoples history',
    author: 'Howard Zinn',
    pageCount: 723
}

let getSummary = function (book) {
    return {
        summary: `${book.title} by ${book.author}`,
        pageCountSummary: `${book.title} is ${book.pageCount} pages long`
    }
}

let booksum = getSummary(myBook)
console.log(booksum.summary)
let otherbooksum = getSummary(otherBook)
console.log(otherbooksum.pageCountSummary)

// Challenge
let getTemp = function (f) {
    return {
        f: f,
        c: 5 * (f - 32) / 9,
        k: 5 * (f + 459.67) / 9
    }

}

t = getTemp(74)
console.log(t)