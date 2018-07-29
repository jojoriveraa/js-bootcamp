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

let deleteTodo = function (array = todos, title) {
    let index = array.findIndex(function (todo) {
        return todo.title.toLowerCase() === title.toLowerCase()
    })
    if (index === -1) {
        console.log(`The specified title: "${title}" could not be found`)
    }
    array.splice(index, 1)
}

let getThingsTodo = function (array) {
    return array.filter(function (todo) {
        return !todo.completed
    })
}

let sortTodos = function (array = todos) {
    array.sort(function (a, b) {
        if (!a.completed && b.completed) {
            return -1
        } if (a.completed && !b.completed) {
            return 1
        }
        return 0
    })
}

console.log(getThingsTodo(todos))
sortTodos()
printTodos()
deleteTodo(todos, 'todo 5')
deleteTodo(todos, 'todo 7')
printTodos()
