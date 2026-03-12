function displayTodos(){

const list=document.getElementById("todoList")

list.innerHTML=""

todos.forEach(function(todo){

let li=document.createElement("li")

li.textContent=todo

list.appendChild(li)

})

}

displayTodos()