// DOM Manipulation




// Styling elements

/* const title = document.querySelector('#main-heading');

title.style.color = 'red';
 */
/* const listItems = document.querySelectorAll('.list-items');

for( i = 0; i < listItems.length; i++) {

    listItems[i].style.fontSize = '3rem';
} */


// Create Elements

const ul = document.querySelector('ul');
const li = document.createElement('li');


// Adding Elements
ul.append(li);

// Modifying the text 

li.innerText = 'Gollum';

// Modify Attributes and Classes

li.classList.add('list-items');

console.log(li.classList.contains('list-items'));

// Remove Elements

li.remove();