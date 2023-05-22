


//referenciar elementos html
//const value = document.querySelector("value")

const value = document.getElementById("value");

//Variable to feed the counter value
let counter = 0;
//Reference the HTML elements
//const value = document.querySelector("#value")
//Get the text from the container
const value = document.getElementById("value")
//Get the buttons
const btnSub = document.getElementById("btnSub")
const btnReset = document.getElementById("btnReset")
const btnAdd = document.getElementById("btnAdd")

//Add the Event Listeners
btnSub.addEventListener("click", function (){
    counter--;
    value.textContent = counter
    //If the counter is below zero, the value becomes red
    if (counter < 0) {
        value.style.color = 'red';
    } 
    //If the counter is at zero, the value becomes black
    else if (counter === 0) {
        value.style.color = 'black';
    }
});
/*
btnReset.addEventListener("click", function (){
    counter = 0
    value.textContent = counter
    value.style.color = 'black';
});

btnAdd.addEventListener("click", function (){
    counter++;
    value.textContent = counter
    if (counter > 0) {
        value.style.color = 'green';
    } else if (counter === 0) {
        value.style.color = 'black';
    }
})*/
