var input = document.getElementById('input')
var btnAdd = document.getElementById('add-item')
var list = document.getElementById('todo-list')
var btnUpdate = document.getElementById('update-item')
var btnRemoved = document.getElementById('remove-item')

var current = ''

input.addEventListener('input', function (e) {
    current = e.target.value
})

input.addEventListener('keyup', function (e) {
    if (e.keyCode === 13) {
        addlist()
    }
})

function createNewNode() {
    var newlistElement = document.createElement('li')
    var textNode = document.createTextNode(current)

    newlistElement.appendChild(textNode)
    newlistElement.id = 'Item' + (list.childElementCount + 1)
    return newlistElement
}

function addlist() {
    if (current !== undefined && current !== null && current !== '') {
        var newlistElement = createNewNode()

        list.appendChild(newlistElement)
        console.log(list.childElementCount)

        input.value = ''
        current = ''
    } else {
        alert('Please Enter valid ')
    }
}
btnAdd.addEventListener('click', createTODOItemAtBackend)

btnUpdate.addEventListener('click', function () {
    if (current !== undefined && current !== null && current !== '') {
        var firstElement = list.firstElementChild
        var newlistElement = createNewNode()
        input.value = ''
        current = ''
        list.replaceChild(newlistElement, firstElement)
    }
})

btnRemoved.addEventListener('click', function () {
    var firstElement = list.firstElementChild

    list.removeChild(firstElement)
})

function createTODODynamically(id,title){
    var newlistElement = document.createElement('li')
    var textNode = document.createTextNode(title)

    newlistElement.appendChild(textNode)
    newlistElement.id = id
    return newlistElement
}

function getTODOListFromBackend() {
    var http = new XMLHttpRequest();
    http.onreadystatechange = function () {
        if (this.readyState === 4) {
            if (this.status === 200) {
                var response = JSON.parse(this.responseText);
                for (i = 0; i < response.length; i++) {
                   list.appendChild(createTODODynamically(response[i].id,response[i].title))
                }
            } else {
                console.log('Call Failed')
            }
        }
    }
    http.open('GET', 'https://jsonplaceholder.typicode.com/todos', true)
    http.send();
}

getTODOListFromBackend();

function createTODOItemAtBackend(){
   var http = new XMLHttpRequest()
   http.open('POST', 'https://jsonplaceholder.typicode.com/todos', true)
   var obj =JSON.stringify( {
       "userId" : 1,
       "title" : current,
       "completed" : false
   })
    http.send(obj);

}