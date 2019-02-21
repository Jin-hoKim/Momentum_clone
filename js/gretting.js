const form = document.querySelector(".js-form");
const input = form.querySelector("input");
const greeting = document.querySelector(".js-greetings");
const greetingMessage = {"morning":"Good morning",
                         "afternnon":"Good afternoon",
                         "evening":"Good evening",
                         "night":"Good night"};

const USER_NAME = "currentUser";
const SHOWING_ON = "showing";

function saveName(txt)
{
  localStorage.setItem(USER_NAME, txt);
}

function handlerSubmit(event)
{
  event.preventDefault();

  const currentValue = input.value;
  paintGreeting(currentValue);
  saveName(currentValue);
}

function askForName()
{
  form.classList.add(SHOWING_ON);
  form.addEventListener("submit", handlerSubmit);
}

function paintGreeting(txt)
{
  form.classList.remove(SHOWING_ON);
  greeting.classList.add(SHOWING_ON);

  currentUser = txt;
  greeting.innerText = `Hello, ${currentUser}!`;
}

function loadName()
{
  const currentUser = localStorage.getItem(USER_NAME);
  if( currentUser )
  {
    paintGreeting(currentUser);
  }
  else
  {
    askForName();
  }
}

function init()
{
  loadName();
}

init();
