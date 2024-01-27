## Notes from DOM Tutorial

---

primary selectors will be querySeletor and querySelectorAll due to versatility in selecting ids, classes, tags, etc.

// getElementById()

/_ const title = document.getElementById('main-heading');
console.log(title); _/

// getElementByClassName()

/_ const listItem = document.getElementsByClassName('list-item');
console.log(listItem); _/

// getElementByTagName()

/_ const listItem = document.getElementsByTagName('li');
console.log(listItem); _/

// querySelector() match first option of the options

/_ const container = document.querySelector('div');
console.log(container); _/

// querySelectorAll()

/_ const container = document.querySelectorAll('div');
console.log(container); _/

---

innerHTML, innerText, textContent

const firstListItem = document.querySelector('.list-items');

console.log(firstListItem.innerText); //most cases use this
console.log(firstListItem.textContent);
console.log(firstListItem.innerHTML);

// Modify Attributes and Classes

li.setAttribute('id', 'main-heading');
li.removeAttribute('id');

const title = document.querySelector('#main-heading');
console.log(title.getAttribute('id'));
