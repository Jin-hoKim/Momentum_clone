const todoForm = document.querySelector(".js-todoForm");
const todoInput = todoForm.querySelector("input");
const todoList = document.querySelector(".js-todoList");

const TODO_LS = "toDos";

function paintTodo(txt)
{
  const delBtn = document.createElement("button");
  delBtn.innerHTML = "X";

  const span = document.createElement("span");
  span.innerText = txt;

  const li = document.createElement("li");
  li.appendChild(delBtn);
  li.appendChild(span);

  todoList.appendChild(li);
}

function handleSubmit(event)
{
  event.preventDefault();
  const currentValue = todoInput.value;
  paintTodo(currentValue);
  todoInput.value = "";
}

function loadTodoList()
{
  const todos = localStorage.getItem(TODO_LS);
  if( todos  )
  {

  }
}

function init()
{
  loadTodoList();
  todoForm.addEventListener("submit", handleSubmit );
}

init();
