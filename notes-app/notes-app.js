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

document.querySelector('button').addEventListener('click', function(e) {
    console.log('click')
    console.log(e)
    e.target.textContent = 'I was clicked'
})