function addTodo(){

const input=document.getElementById("todoInput")
const list=document.getElementById("todoList")

let task=input.value

let li=document.createElement("li")

li.textContent=task

list.appendChild(li)

input.value=""

}