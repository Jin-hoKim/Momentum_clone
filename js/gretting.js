const form = document.querySelector(".js-form");
const input = form.querySelector("input");
const greeting = document.querySelector(".js-greetings");
const greetingMessage = {"morning":"Good morning",
                         "afternnon":"Good afternoon",
                         "evening":"Good evening",
                         "night":"Good night"};

const USER_NAME = "currentUser";
const SHOWING_ON = "showing";

function paintGreeting(txt)
{
  form.classList.remove(SHOWING_ON);

  greeting.innerText = `Hello, ${txt}!`;
  greeting.classList.add(SHOWING_ON);
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
    greeting.classList.remove(SHOWING_ON);
    form.classList.add(SHOWING_ON);
  }
}

function init()
{
  loadName();
}

init();
