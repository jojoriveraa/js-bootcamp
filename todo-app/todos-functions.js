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

// Toggle the completed value for a given todo
const toggleTodo = function (id) {
    const todo = todos.find(function (todo) {
        return todo.id === id
    })
    console.log(todo)
    if (todo !== undefined) {
        todo.completed = !todo.completed
    }
}

// Remove a todo from the list
const removeTodo = function (id) {
    const removeIndex = todos.findIndex(function (todo) {
        return id === todo.id
    })
    if (removeIndex > -1) {
        todos.splice(removeIndex, 1)
    }
}

// Get the DOM elements for an individual note
const generateTodoDOM = function (todo) {
    const body = document.createElement('div')
    const checkbox = document.createElement('input')
    const text = document.createElement('span')
    const button = document.createElement('button')

    checkbox.setAttribute('type', 'checkbox')
    checkbox.checked = todo.completed
    checkbox.addEventListener('change', function () {
        toggleTodo(todo.id)
        saveTodos(todos)
        renderTodos(todos, filters)
    })
    body.appendChild(checkbox)

    text.textContent = todo.title
    body.appendChild(text)

    button.textContent = 'X'
    body.appendChild(button)

    button.addEventListener('click', function () {
        removeTodo(todo.id)
        saveTodos(todos)
        renderTodos(todos, filters)
    })

    return body
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
