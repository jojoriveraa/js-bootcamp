// Read existing notes from localStorate
const getSavedNotes = () => {
    const notesJSON = localStorage.getItem('notes')

    if (notesJSON !== null) {
        return JSON.parse(notesJSON)
    } else {
        console.log('there are no saved todos')
        return []
    }
}

// Remove a note from the list
const removeNote = id => {
    const noteIndex = notes.findIndex(note => id === note.id)
    if (noteIndex > -1) {
        notes.splice(noteIndex, 1)
    }
}

// Generate the dom structure for a note
const generateNoteDOM = function (note) {
    const body = document.createElement('div')
    const text = document.createElement('a')
    const button = document.createElement('button')

    button.textContent = 'x'
    body.appendChild(button)

    button.addEventListener('click', () => {
        removeNote(note.id)
        saveNotes(notes)
        renderNotes(notes, filters)
    })

    text.textContent = (note.title.length > 0) ? note.title : `Unnamed note`
    text.setAttribute('href', './edit.html')
    body.appendChild(text)

    return body
}

// Render application notes
const renderNotes = function (notes, filters) {
    const textFilter = filters.searchText.toLowerCase();
    const filteredNotes = notes.filter(note => note.title.toLowerCase().includes(textFilter))

    document.querySelector('#notes').innerHTML = ''

    filteredNotes.forEach(function (note) {
        const noteEl = generateNoteDOM(note)
        document.querySelector('#notes').appendChild(noteEl)
    })
}

// Save the notesto local storage
const saveNotes = notes => localStorage.setItem('notes', JSON.stringify(notes))

//Redirect to edit.html page
const redirectToEdit = () => redirect('./edit.html')

//Redirect to a defined page
const redirect = to => location.assign(to)