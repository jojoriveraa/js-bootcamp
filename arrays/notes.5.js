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

let isInArray = notes.findIndex(function (note, index, obj) {
    return note.title === 'Note 2'
})

console.log(isInArray)