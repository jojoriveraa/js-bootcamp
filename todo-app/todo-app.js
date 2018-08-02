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

let incompleteTodos = todos.filter(function(todo){
    return !todo.completed
})

let showTodos = function () {
    todos.forEach(function (todo) {
        let paragraph = document.createElement('p')
        paragraph.textContent = todo.title
        document.querySelector('body').appendChild(paragraph)
    })
}

let summary = document.createElement('h2')
summary.textContent = `You have ${incompleteTodos.length} todos left.`
document.querySelector('body').appendChild(summary)

showTodos()

document.querySelector('button').addEventListener('click', function(e){
    console.log('add new todo')
})