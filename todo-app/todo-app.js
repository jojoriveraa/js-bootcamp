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

const paragraphs = document.querySelectorAll('p')
console.log(paragraphs)

paragraphs.forEach(function (todo) {
    if (todo.textContent.toLowerCase().includes('the')) {
        todo.remove()
    }
})
