// DOM Manipulation

/* primary selectors will be querySeletor and querySelectorAll due to versatility in selecting ids, classes, tags, etc. */




// getElementById()

/* const title = document.getElementById('main-heading');
console.log(title); */




// getElementByClassName()

/* const listItem = document.getElementsByClassName('list-item');
console.log(listItem); */




// getElementByTagName()

/* const listItem = document.getElementsByTagName('li');
console.log(listItem); */




// querySelector() match first option of the options

/* const container = document.querySelector('div');
console.log(container); */




// querySelectorAll()

/* const container = document.querySelectorAll('div');
console.log(container); */


/* const title = document.querySelector('#main-heading');

title.style.color = 'red';
 */
const listItems = document.querySelectorAll('.list-items');

for( i = 0; i < listItems.length; i++) {

    listItems[i].style.fontSize = '3rem';
}

console.log(listItems);