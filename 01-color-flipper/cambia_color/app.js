const colors = ["green", "red", "rgba(133,122,200)", "#f15025"];   //no es random

const btn = documento.getElementById("btn");

const textcolor = document.querySelector (".color");

//creamos un funcion que devuelva un color aleatorio de la lista de colores

function genererNumeroAleatorio(rango){
    return Math.floor(Math.random() * rango)

}
//solo devuelve color aleatorio math.raddom()
//Math.random() * colors.length

// 0.2 * 4 -> 0 

 // redondea Math.random)

 //Math.floor
// const nRandom = Math. random()
//mejor crear una variable
//variables intermedias
// const escalarandom = nRandom  * colors.length

 //const miNumeroAleatorio = Math.floor (escalaRandom);

btn.addEventListener("click", function (){
//  obterner numero aleatorio
const randomIndex = genererNumeroAleatorio(colors.length)
const randomColor = colors[randomIndex]
//cambiamos el color de fondo
document.body.style.backgroundColor = randomColor
//cambiamos el texto con el nombre del color seleccionado
textcolor.textContent = randomColor

}) 

