let myBook = {
    title: '1984',
    author: 'George Orwell',
    pageCount: 326
}

console.log(myBook)
console.log(myBook.author)
console.log(`${myBook.title} by ${myBook.author}`)

myBook.title = 'Animal Farm'
console.log(`${myBook.title} by ${myBook.author}`)

// Challenge
let p = {
    name: 'Jorge',
    age: 25,
    location: 'Mexico City'
}

console.log(`${p.name} is ${p.age} and lives in ${p.location}.`)

p.age = p.age + 1
console.log(`${p.name} is ${p.age} and lives in ${p.location}.`)