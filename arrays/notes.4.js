const notes = ['Note 1', 'Note 2', 'Note 3']

notes.forEach(function () {
    console.log('testing 123')
})

notes.forEach(function (item, index) {
    console.log(`i: ${index} --> ${item}`)
})

console.log(notes.length)
console.log(notes)

for (let i = 0; i <= 2; i++) {
    console.log(i)
}

for (let i = 0; i < notes.length; i++) {
    console.log(`i: ${i} --> ${notes[i]}`)
}

for (let i = notes.length - 1; i >= 0; i--) {
    console.log(`i: ${i} --> ${notes[i]}`)
}