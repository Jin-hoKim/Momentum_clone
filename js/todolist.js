const todoForm = document.querySelector(".js-todoForm");
const todoInput = todoForm.querySelector("input");
const todoList = document.querySelector(".js-todoList");

const TODO_LS = "toDos";

let toDos = [];

function filterFunc(todo)
{

}

function deleteTodo(event)
{
  console.log(event.target.parentNode);
  const btn = event.target;
  const li = btn.parentNode;

  todoList.removeChild( li );

  const cleanTodos = toDos.filter( function(todo) {
    return todo.id == parseInt(li.id);
  });

  toDos = cleanTodos;
  saveTodos();
}

function saveTodos()
{
  localStorage.setItem(TODO_LS, JSON.stringify(toDos));
}

function paintTodo(txt)
{
  const delBtn = document.createElement("button");
  delBtn.innerHTML = "X";
  delBtn.addEventListener("click", deleteTodo);

  const span = document.createElement("span");
  span.innerText = txt;

  const idx = toDos.length + 1;

  const li = document.createElement("li");
  li.id = idx;
  li.appendChild(delBtn);
  li.appendChild(span);

  todoList.appendChild(li);

  const todoObj = {
    txt: txt,
    id: idx
  };

  toDos.push( todoObj );
  saveTodos();
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
  const loadedTodos = localStorage.getItem(TODO_LS);
  if( loadedTodos  )
  {
    const parsedTodos = JSON.parse(loadedTodos);
    console.log(parsedTodos);
    parsedTodos.forEach( function(todo) {
      paintTodo( todo.txt );
    });
  }
}

function init()
{
  loadTodoList();
  todoForm.addEventListener("submit", handleSubmit );
}

init();
