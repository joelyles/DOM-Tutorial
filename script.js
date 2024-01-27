// DOM Manipulation

/* Elements */
    // Styling Elements
        // const title = document.querySelector('#main-heading');

        // title.style.color = 'red';
        // const listItems = document.querySelectorAll('.list-items');

        // for( i = 0; i < listItems.length; i++) {
        // listItems[i].style.fontSize = '3rem';
        // } 

    // Create Elements
        // const ul = document.querySelector('ul');
        // const li = document.createElement('li');

        // Adding Elements
        // ul.append(li);

    // Modifying the text 

        // li.innerText = 'Gollum';

    // Modify Attributes and Classes

        // li.classList.add('list-items');

        // console.log(li.classList.contains('list-items'));

        // Remove Elements

        // li.remove();


/* Traverse the DOM */

// Parent Node Traversal

    // let ul = document.querySelector('ul');

    // console.log(ul.parentNode.parentNode);
    // console.log(ul.parentElement.parentElement);
    // const html = document.documentElement;

// Child Node Traversal

    // let ul = document.querySelector('ul');
    // console.log(ul.childNodes);
    // console.log(ul.firstChild);
    // console.log(ul.lastChild);

    // ul.firstChild.style.backgroundColor = 'blue';
    // ^ this is access the "text" not the li - see below

    // ul.childNodes[1].style.backgroundColor = 'blue';

    // console.log(ul.children);
    // console.log(ul.firstElementChild);
    // console.log(ul.lastElementChild);

// Sibling Node Traversal

let ul = document.querySelector('ul');
const div = document.querySelector('div');

console.log(div.childNodes);

console.log(ul.previousSibling);
console.log(ul.nextSibling);