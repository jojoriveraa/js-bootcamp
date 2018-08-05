let todos = [{
    title: 'Clean the kitchen',
    completed: true
}, {
    title: 'Book flights',
    completed: false
}, {
    title: 'Research museums',
    completed: false
}, {
    title: 'Walk the dog',
    completed: false
}, {
    title: 'Finish this course',
    completed: true
}]

const filters = {
    searchText: ''
}

const countIncompleteTodos = function (todos) {
    return todos.filter(function (todo) {
        return !todo.completed
    })
}

const renderTodos = function (todos, filters) {

    const filteredTodos = todos.filter(function (todo) {
        return todo.title.toLowerCase().includes(filters.searchText.toLowerCase())
    })

    document.querySelector('#todos').innerHTML = ''

    const summary = document.createElement('h2')
    summary.textContent = `You have ${countIncompleteTodos(filteredTodos).length} todos left.`
    document.querySelector('#todos').appendChild(summary)

    filteredTodos.forEach(function (element) {
        let paragraph = document.createElement('p')
        paragraph.textContent = element.title
        document.querySelector('#todos').appendChild(paragraph)
    })
}

document.querySelector('#filter-text').addEventListener('input', function (e) {
    filters.searchText = e.target.value
    renderTodos(todos, filters)
})

document.querySelector('#addTodo').addEventListener('submit', function (e) {
    e.preventDefault()
    const newTodoText = e.target.todoTitle
    todos.push({
        title: newTodoText.value,
        completed: false
    })
    renderTodos(todos, filters)
    newTodoText.value = ''
})

renderTodos(todos, filters)