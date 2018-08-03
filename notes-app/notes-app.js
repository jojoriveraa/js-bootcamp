const notes = [{
    title: 'Note 1',
    body: 'I would like a pizza'
}, {
    title: 'Note 2',
    body: 'I would like a burger with coke'
}, {
    title: 'Note 3',
    body: 'I would like a hot dog witk coke'
}]

document.querySelector('button#create-btn').addEventListener('click', function (e) {
    e.target.textContent = 'Adding a note'
})

document.querySelector('button#delete-btn').addEventListener('click', function (e) {
    document.querySelectorAll('.note').forEach(function (note) {
        note.remove()
    })
})

document.querySelector('#search-txt').addEventListener('input', function(e){
    console.log(e.target.value)
})