const notes = [{
    title: 'Note 1',
    body: 'I would like a pizza'
}, {
    title: 'Note 2',
    body: 'I would like a burger with coke'
}, {
    title: 'Note 3',
    body: 'I would like a hot dog witk coke'
}]

let sortNotes = function (array) {
    return array.sort(function (a, b) {
        if (a.title.toLowerCase() < b.title.toLowerCase()) {
            return -1
        }
        if (a.title.toLowerCase() > b.title.toLowerCase()) {
            return 1
        }
        return 0
    })
}

const findNote = function (array, title) {
    let index = array.findIndex(function (note) {
        return note.title.toLowerCase() === title.toLowerCase()
    })
    if (index === -1) {
        console.log('Note could not be found')
        return null
    }
    return array[index]
}

const filterNotes = function (notes, query) {
    return notes.filter(function (note, index) {
        let isTitleMatch = note.title.toLowerCase().includes(query.toLowerCase())
        let isBodyMatch = note.body.toLowerCase().includes(query.toLowerCase())
        return isTitleMatch || isBodyMatch
    })
}

const getNote = function (array, title) {
    return array.find(function (note) {
        return note.title.toLowerCase() === title.toLowerCase()
    })
}

let index = notes.findIndex(function (note, index, obj) {
    return note.title === 'Note 2'
})

const notesFiltered = notes.filter(function (note, index) {
    let isTitleMatch = note.title.toLowerCase().includes('note')
    let isBodyMatch = note.body.toLowerCase().includes('coke')
    return isTitleMatch && isBodyMatch
})

console.log(index)

console.log(notesFiltered)

console.log(findNote(notes, 'note 2'))

console.log(getNote(notes, 'note 2'))

console.log(filterNotes(notes, 'coke'))

console.log(sortNotes(notes))