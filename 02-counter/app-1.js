


//referenciar elementos html
//const value = document.querySelector("value")

const value = document.getElementById("value");
const btns = document.querySelectorAll(".btn")

for(let i=0;i < btns.length;i++){
    btns [i].addEventListener("click", function(e){
const styles = e.currentTarget.classlist;
console.log(style.contains("decrease"))

})
}//Double Corkscrew Version
let counter = 0;

const txtValue = document.getElementById("value");
const btns = document.querySelectorAll(".btn")

for(let i = 0; i < btns.length;i++){
    btns[i].addEventListener("click", function(e){
        const styles = e.currentTarget.classList;
        if(styles.contains("decrease")){
            counter--;
        }else if(styles.contains("increase")){
            counter++;
        }else{
            counter = 0;
        }

        if(counter > 0){
            value.style.color = "green"
        }
        else if(counter < 0){
            value.style.color = "red"
        }
        else{
            value.style.color = "black"
        }
        //Update the txtValue
        value.textContent = counter;

    })
}

