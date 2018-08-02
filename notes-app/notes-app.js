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

// Query and remove
const p = document.querySelector('p')
p.remove()

// Query all and remove
const ps = document.querySelectorAll('p')
ps.forEach(function (p) {
    p.textContent = '*****'
    //p.remove()
})

//Add a new element
const newParagraph = document.createElement('p')
newParagraph.textContent = 'This is a new element from JS'
document.querySelector('body').appendChild(newParagraph)