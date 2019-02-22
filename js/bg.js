const body = document.querySelector("body");

const IMG_NUMBER = 7;

function paintImage(imgNumber)
{
  const img = new Image();
  img.src = `images/${imgNumber}.jpg`;
  img.classList.add("bgImage");
  body.prepend( img );
}

function getRandomNum()
{
  const randomNum = Math.ceil( Math.random() * IMG_NUMBER );
  return randomNum;
}

function init()
{
  const randomNumber = getRandomNum();
  paintImage(randomNumber);
}

init();
