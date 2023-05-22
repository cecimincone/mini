const hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];

//traernos el boton y el elemento texto del color

const btn = document.getElementById("btn");

const textcolor = document.querySelector(".color");

btn.addEventListener("click", function () {

    let hexcolor = "#"
//relllenamos la cadena de texto convalores aleatrorios del array hex

/*bucle*/ for (let i = 0; i < 6; i++) {

        const randomIndex = genererNumeroAleatorio(hex.length)
        //sale almohadilla + numeros
        hexColor = hexColor + hex[randomIndex]

        hexColor = [randomIndex]
    }

    console.log(heColor);

    //cambiamos el color de fondo
    document.body.style.backgroundColor = hexColor
    //cambiamos el texto con el nombre del color seleccionado
    textcolor.textContent = randomColor

}






)
//creamos un funcion que devuelva un color aleatorio de la lista de colores

function genererNumeroAleatorio(rango) {
    return Math.floor(Math.random() * rango)
}
//CREAR BUCLE COLORES

//for (let i = 0; i < 6; i++)