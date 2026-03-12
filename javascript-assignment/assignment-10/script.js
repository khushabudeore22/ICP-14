function displayTodos(){

const list=document.getElementById("todoList")

list.innerHTML=""

todos.forEach(function(todo,index){

let li=document.createElement("li")

li.innerHTML = `
${todo}
<button onclick="deleteTodo(${index})">Delete</button>
`

list.appendChild(li)

})

}

function deleteTodo(index){

todos.splice(index,1)

localStorage.setItem("todos",JSON.stringify(todos))

displayTodos()

}