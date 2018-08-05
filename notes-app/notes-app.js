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

const filters = {
    searchText: ''
}

const renderNotes = function (notes, filters) {
    const filteredNotes = notes.filter(function (element) {
        return element.title.toLowerCase().includes(filters.searchText.toLowerCase())
    })

    document.querySelector('#notes').innerHTML = ''

    filteredNotes.forEach(function (element) {
        const noteElement = document.createElement('p')
        noteElement.textContent = element.title
        document.querySelector('#notes').appendChild(noteElement)
    })
}

renderNotes(notes, filters)

document.querySelector('button#create-btn').addEventListener('click', function (e) {
    e.target.textContent = 'Adding a note'
})

document.querySelector('button#delete-btn').addEventListener('click', function (e) {
    document.querySelectorAll('.note').forEach(function (note) {
        note.remove()
    })
})

document.querySelector('#search-txt').addEventListener('input', function (e) {
    filters.searchText = e.target.value
    renderNotes(notes, filters)
})