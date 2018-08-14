
console.log(uuidv4())

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

// Remove a note from the list
const removeNote = function (id) {
    const noteIndex = notes.findIndex(function (note) {
        return id === note.id
    })
    if (noteIndex > -1) {
        notes.splice(noteIndex, 1)
    }
}

// Generate the dom structure for a note
const generateNoteDOM = function (note) {
    const body = document.createElement('div')
    const text = document.createElement('span')
    const button = document.createElement('button')
    
    button.textContent = 'x'
    body.appendChild(button)
    button.addEventListener('click', function () {
        removeNote(note.id)
        saveNotes(notes)
        renderNotes(notes, filters)
    })

    if (note.title.length > 0) {
        text.textContent = note.title
    } else {
        text.textContent = `Unnamed note`
    }
    body.appendChild(text)

    return body
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