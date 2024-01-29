## Notes from DOM Tutorial

---

Accessing Elements

        primary selectors will be querySeletor and querySelectorAll due to versatility in selecting ids, classes, tags, etc.

    getElementById()
        const title = document.getElementById('main-heading');
        console.log(title);
        getElementByClassName()
        const listItem = document.getElementsByClassName('list-item');
        console.log(listItem);

    getElementByTagName()
        const listItem = document.getElementsByTagName('li');
        console.log(listItem);

    querySelector() match first option of the options
        const container = document.querySelector('div');
        console.log(container);

    querySelectorAll()
        const container = document.querySelectorAll('div');
        console.log(container);
    ---

        innerHTML, innerText, textContent

        const firstListItem = document.querySelector('.list-items');

        console.log(firstListItem.innerText); //most cases use this
        console.log(firstListItem.textContent);s
        console.log(firstListItem.innerHTML);

Modify Attributes and Classes

    li.setAttribute('id', 'main-heading');
    li.removeAttribute('id');

    const title = document.querySelector('#main-heading');
    console.log(title.getAttribute('id'));

Event Listener
add script directly into the html

<!-- <button onclick="alert('I love JavaScript')">ENTER</button> -->

Event Probagation

    event capturing (down the DOM)
    target
    event bubbling (back up the DOM)

    stop probagation method = e.stopProbagation() in the function
    preventDefault() keeps clicked anchor tag from refreshing immediately

Event Delegation

    allows users to append a SINGLE event listener to a parent element that adds it to all of its presnt AND future descendents that match that selector.

Projects

    - Quote Scroller
    - Model
    - FAQ Accordion
    - Stop Watch
    - To Do App
