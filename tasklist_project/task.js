// variables

const addTask = document.getElementById('add-task');
const taskContainer = document.getElementById('task-container');
const inputTask = document.getElementById('input-task');

// event listener for add button

addTask.addEventListener('click', function() {

// adding div to html when task is created

    let task = document.createElement('div');
    task.classList.add('task');

//adding list item when list item is created

    let li = document.createElement('li');
    li.innerText = `${inputTask.value}`;
    task.appendChild(li);

// adding check box and delete button functionality &#9744 45

    let checkButton = document.createElement('button');
    checkButton.innerHTML = '<p class="check">&#9744;</p>';
    checkButton.classList.add('checkTask');
    task.appendChild(checkButton);
   
    let deleteButton = document.createElement('button');
    deleteButton.innerHTML = '<p class="delete">&#10005;</p>';
    deleteButton.classList.add('deleteTask');
    task.appendChild(deleteButton);

    if(inputTask.value === ''){
        alert('please enter a task');
    } else {
        taskContainer.appendChild(task);
    }

    inputTask.value = '';

    checkButton.addEventListener('click', function(){

        checkButton.parentElement.style.textDecoration = "line-through";

    });

    deleteButton.addEventListener('click', function(e){

        let target = e.target;

        target.parentElement.parentElement.remove();
    });

});