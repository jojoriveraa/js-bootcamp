let todos = []

const filters = {
    searchText: '',
    hideCompleted: false
}

const countIncompleteTodos = function (todosList) {
    return todosList.filter(function (todo) {
        return !todo.completed
    })
}

const renderTodos = function (todos, filters) {
    const filteredTodos = todos.filter(function (todo) {
        const searchTextMatch = todo.title.toLowerCase().includes(filters.searchText.toLowerCase())
        const hideCompletedMatch = !filters.hideCompleted || !todo.completed
        return searchTextMatch && hideCompletedMatch
    })

    document.querySelector('#todos').innerHTML = ''

    const summary = document.createElement('h2')
    summary.textContent = `You have ${countIncompleteTodos(filteredTodos).length} todos left.`
    document.querySelector('#todos').appendChild(summary)

    filteredTodos.forEach(function (element, index) {
        console.log(element)
        let paragraph = document.createElement('p')
        if (element.title.length > 0) {
            paragraph.textContent = element.title
        } else {
            paragraph.textContent = `Unnamed todo (${index})`
        }
        document.querySelector('#todos').appendChild(paragraph)
    })
}

document.querySelector('#filter-text').addEventListener('input', function (e) {
    filters.searchText = e.target.value
    renderTodos(todos, filters)
})

document.querySelector('#addTodo').addEventListener('submit', function (e) {
    e.preventDefault()
    console.log(e.target.todoTitle.value)
    todos.push({
        title: e.target.todoTitle.value,
        completed: false
    })
    localStorage.setItem('todos', JSON.stringify(todos))
    renderTodos(todos, filters)
    e.target.todoTitle.value = ''
})

document.querySelector('#hide-completed').addEventListener('change', function (e) {
    filters.hideCompleted = e.target.checked
    renderTodos(todos, filters)
})

// Initialize form
document.querySelector('#filter-text').value = ''
document.querySelector('#hide-completed').checked = false

// Initialize todos aray: check for existing data
todosJSON = localStorage.getItem('todos')
if (todosJSON !== null) {
    todos = JSON.parse(todosJSON)
}

// initialize todos list
renderTodos(todos, filters)