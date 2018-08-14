// Fetch existing todos from localStorate
const getSavedTodos = function () {
    const todosJSON = localStorage.getItem('todos')
    if (todosJSON !== null) {
        return JSON.parse(todosJSON)
    } else {
        return []
    }
}

// Save todos to localStorage
const saveTodos = function (todos) {
    localStorage.setItem('todos', JSON.stringify(todos))
}

// Render application todos based on filters
const renderTodos = function (todos, filters) {
    const filteredTodos = getFilteredTodos(todos, filters)
    const incompleteTodos = getIncompleteTodos(filteredTodos)
    document.querySelector('#todos').innerHTML = ''
    document.querySelector('#todos').appendChild(generateSummaryDOM(incompleteTodos))
    filteredTodos.forEach(function (todo) {
        document.querySelector('#todos').appendChild(generateTodoDOM(todo));
    })
}

// Filter todos to be displayed 
const getFilteredTodos = function (todos, filters) {
    return todos.filter(function (todo) {
        const searchTextMatch = todo.title.toLowerCase().includes(filters.searchText.toLowerCase())
        const hideCompletedMatch = !filters.hideCompleted || !todo.completed
        return searchTextMatch && hideCompletedMatch
    })
}

// Remove a todo from the list
const removeTodo = function (id) {
    const removeIndex = todos.findIndex(function (todo) {
        return todo.id === id
    })
    if (removeIndex > -1) {
        todos.splice(removeIndex, 1)
    }
}

// Get the DOM elements for an individual note
const generateTodoDOM = function (todo) {
    const todoEl = document.createElement('div')
    const todoCheckbox = document.createElement('input')
    const todoText = document.createElement('span')
    const removeButton = document.createElement('button')

    todoCheckbox.setAttribute('type', 'checkbox')
    todoEl.appendChild(todoCheckbox)

    todoText.textContent = todo.title
    todoEl.appendChild(todoText)

    removeButton.textContent = 'x'
    todoEl.appendChild(removeButton)

    removeButton.addEventListener('click', function () {
        removeTodo(todo.id)
        saveTodos(todos)
        renderTodos(todos, filters)
    })

    return todoEl
}

// Get the dom for list summary
const generateSummaryDOM = function (incompleteTodos) {
    const summary = document.createElement('h2');
    summary.textContent = `You have ${incompleteTodos.length} todos left.`;
    return summary;
}

// Get the numer of pending todos in todos array
const getIncompleteTodos = function (todos) {
    return todos.filter(function (todo) {
        return !todo.completed
    })
}
