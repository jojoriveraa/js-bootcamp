// Read existing notes from localStorate
const getSavedNotes = function () {
    const notesJSON = localStorage.getItem('notes')

    if (notesJSON !== null) {
        return JSON.parse(notesJSON)
    } else {
        console.log('there are no saved todos')
        return []
    }
}

// Generate the dom structure for a note
const generateNoteDOM = function (note) {
    const noteEl = document.createElement('div')
    const textEl = document.createElement('span')
    const button = document.createElement('button')

    button.textContent = 'x'
    noteEl.appendChild(button)

    if (note.title.length > 0) {
        textEl.textContent = note.title
    } else {
        textEl.textContent = `Unnamed note`
    }
    noteEl.appendChild(textEl)

    return noteEl
}

// Render application notes
const renderNotes = function (notes, filters) {
    const filteredNotes = notes.filter(function (element) {
        return element.title.toLowerCase().includes(filters.searchText.toLowerCase())
    })

    document.querySelector('#notes').innerHTML = ''

    filteredNotes.forEach(function (note) {
        const noteEl = generateNoteDOM(note)
        document.querySelector('#notes').appendChild(noteEl)
    })
}

// Save the notesto local storage
const saveNotes = function (notes) {
    localStorage.setItem('notes', JSON.stringify(notes))
}