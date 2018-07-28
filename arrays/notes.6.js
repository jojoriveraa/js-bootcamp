const notes = [{
    title: 'Note 1',
    body: 'I would like a pizza'
}, {
    title: 'Note 2',
    body: 'I would like a burger'
}, {
    title: 'Note 3',
    body: 'I would like a hot dog'
}]

const findNote = function (notes, title) {
    let index = notes.findIndex(function (note) {
        return note.title.toLowerCase() === title.toLowerCase()
    })
    if (index === -1) {
        console.log('Note could not be found')
        return null
    }
    return notes[index]
}

const getNote = function (notes, title) {
    return notes.find(function (note) {
        return note.title.toLowerCase() === title.toLowerCase()
    })
}

let index = notes.findIndex(function (note, index, obj) {
    return note.title === 'Note 2'
})

console.log(index)

console.log(findNote(notes, 'note 2'))
console.log(getNote(notes, 'note 2'))