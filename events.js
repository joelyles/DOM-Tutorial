// DOM Manipulation

// Event Listeners

// element.addEventListener("click", function);

// Click

/* const buttonTwo = document.querySelector(".btn-2");

function alertBtn () {
    alert('I also love JS!');
}

buttonTwo.addEventListener("click", alertBtn);

console.log("Hello World"); */

// Mouse Over

/* const buttonThree = document.querySelector(".btn-3");
const boxThree = document.querySelector('.box-3');

function changeColor() {
    boxThree.style.backgroundColor = 'red';
    
};

boxThree.addEventListener('mouseover', changeColor); */

const revealBtn = document.querySelector('.reveal-btn');

const hiddenContent = document.querySelector('.hidden-content');

function revealContent() {
if(hiddenContent.classList.contains('reveal-btn'))
{
    hiddenContent.classList.remove('reveal-btn')
} else {
    hiddenContent.classList.add('reveal-btn')
}
}

revealBtn.addEventListener('click', revealContent);