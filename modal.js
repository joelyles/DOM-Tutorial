let openBtn = document.getElementById("open-btn");
let modalContainer = document.getElementById('modal-container');
let closeBtn = document.getElementById('close-btn');

// changes display for modal from "none" to "block"
openBtn.addEventListener('click', function(){
    modalContainer.style.display = 'block';
});

// changes display for modal from "block" to "none"
closeBtn.addEventListener('click', function(){
    modalContainer.style.display = 'none';
});

// click anywhere in window to close modal
window.addEventListener('click', function(e){
    if(e.target === modalContainer) {
        modalContainer.style.display = "none";
    }
});