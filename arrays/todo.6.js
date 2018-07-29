let todos = [{
    title: 'Todo 1',
    completed: true
}, {
    title: 'Todo 2',
    completed: false
}, {
    title: 'Todo 3',
    completed: false
}, {
    title: 'Todo 4',
    completed: false
}, {
    title: 'Todo 5',
    completed: true
}]

let printTodos = function (todosArray = todos) {
    todosArray.forEach(function (todo, i) {
        console.log(`${i}--> ${todo.title}`)
    })
}

let deleteTodo = function (todosArray = todos, title) {
    let index = todosArray.findIndex(function (todo) {
        return todo.title.toLowerCase() === title.toLowerCase()
    })
    if (index === -1) {
        console.log(`The specified title: "${title}" could not be found`)
    }
    todosArray.splice(index,1)
}

printTodos()
deleteTodo (todos, 'todo 5')
deleteTodo (todos, 'todo 7')
printTodos()