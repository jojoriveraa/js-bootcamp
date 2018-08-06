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
    const noteEl = document.createElement('p')
    if (note.title.length > 0) {
        noteEl.textContent = note.title
    } else {
        noteEl.textContent = `Unnamed note`
    }
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
const saveNotes = function () {
    localStorage.setItem('notes', JSON.stringify(notes))
}