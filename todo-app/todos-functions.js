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

// Get the DOM elements for an individual note
const generateTodoDOM = function (todo) {
    let todoElement = document.createElement('p')
    if (todo.title.length > 0) {
        todoElement.textContent = todo.title
    }
    else {
        todoElement.textContent = 'Unnamed todo'
    }
    return todoElement
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
