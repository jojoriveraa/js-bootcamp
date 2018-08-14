let todos = getSavedTodos()

const filters = {
    searchText: '',
    hideCompleted: false
}

document.querySelector('#filter-text').addEventListener('input', function (e) {
    filters.searchText = e.target.value
    renderTodos(todos, filters)
})

document.querySelector('#addTodo').addEventListener('submit', function (e) {
    e.preventDefault()
    todos.push({
        id: uuidv4(),
        title: e.target.todoTitle.value,
        completed: false
    })
    saveTodos(todos);
    renderTodos(todos, filters)
    e.target.todoTitle.value = ''
})

document.querySelector('#hide-completed').addEventListener('change', function (e) {
    filters.hideCompleted = e.target.checked
    renderTodos(todos, filters)
})

// initialize todos list
renderTodos(todos, filters)