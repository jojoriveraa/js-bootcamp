let todos = ['todo 1', 'todo 2', 'todo 3', 'todo 4', 'todo 5']

todos.splice(2, 1)
todos.push('This is a new todo')
todos.shift()

todos.forEach(function(item, index){
    console.log(`${index}. --> ${item}`)
})
