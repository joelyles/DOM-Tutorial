// Variables

let btn = document.querySelector('#new-quote');
let quote = document.querySelector('.quote');
let person = document.querySelector('.person');

const quotes = [
{
    quote: `"This is quote number 1."`, 
    person: `Bilbo Baggins`
}, {
    quote: `"The second quote is here."`, 
    person: `Gandalf`
}, {
    quote: `"Number 3."`, 
    person: `Thorin`
}, {
    quote: `"My precious."`, 
    person: `Gollum`
}
];

btn.addEventListener('click', function(){
    let random = Math.floor(Math.random() * quotes.length);

    quote.innerText = quotes[random].quote;
    person.innerText = quotes[random].person;

})