const notes = ['Note 1', 'Note 2', 'Note 3']

notes.forEach(function(){
    console.log('testing 123')
})

notes.forEach(function(item, index){
    console.log(`i: ${index} --> ${item}`)
})

console.log(notes.length)
console.log(notes)