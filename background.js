const body = document.querySelector('body');

const IMG_NUMBER = 6;

function handleImgLoad(){
    console.log("finished loaded");
}

function printImage(imgNumber){
    const image = new Image();
    image.src=`images/${imgNumber+1}.jpg`;
    image.classList.add("bgImage");
    body.appendChild(image);
    image.addEventListener("loaded", handleImgLoad)
}

function getRandom(){
    return Math.floor(Math.random() * IMG_NUMBER);
}

function init(){
    const randomNumber = getRandom();
    printImage(randomNumber);
}

init();