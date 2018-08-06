let notes = []

const filters = {
    searchText: ''
}

// Chack for existing saved data
const notesJSON = localStorage.getItem('notes')

if (notesJSON !== null) {
    notes = JSON.parse(notesJSON)
}

const renderNotes = function (notes, filters) {
    const filteredNotes = notes.filter(function (element) {
        return element.title.toLowerCase().includes(filters.searchText.toLowerCase())
    })

    document.querySelector('#notes').innerHTML = ''

    filteredNotes.forEach(function (element, index) {
        const noteElement = document.createElement('p')

        if (element.title.length > 0) {
            noteElement.textContent = element.title
        } else {
            noteElement.textContent = `Unnamed note (${index})`
        }

        document.querySelector('#notes').appendChild(noteElement)
    })
}

renderNotes(notes, filters)

document.querySelector('button#create-note').addEventListener('click', function (e) {
    notes.push({
        title: '',
        body: ''
    })
    localStorage.setItem('notes', JSON.stringify(notes))
    renderNotes(notes, filters)
})

document.querySelector('#search-text').addEventListener('input', function (e) {
    filters.searchText = e.target.value
    renderNotes(notes, filters)
})

document.querySelector('#filter-by').addEventListener('change', function (e) {
    console.log(e.target.value)
})