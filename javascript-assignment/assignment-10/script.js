let todos = JSON.parse(localStorage.getItem("todos")) || []

function addTodo(){

const input=document.getElementById("todoInput")

todos.push(input.value)

localStorage.setItem("todos",JSON.stringify(todos))

displayTodos()

input.value=""

}