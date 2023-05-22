
//declaracion de function existe por si misma, no se puede modificar
function addEuroSign(value){
    return value + "€"
}

//cuando se usan declaraciones se pueden lllamas a la funciones antes de declararlas



//funcion como expresión
//se asigna a una variable no se puede modificar
const addDolarSign = function (value){
    return value + $;

}

console.log(addEuroSign(300))

let addDolarSign = function (value){
    return  "precio" + value + $;
}

console.log(addDolarSign(300));
console.log(addDolarSign);


//ARROWS FUNCTIONS es una funcion anonima que se guarda en una variable se guarda en una flecha 
function(){
  console.log("hola ")
}//no funciona


const add = (a,b) => {
    return a+b;

};
//el return de las arrows el return es implícito 
const substract = (a,b) => a - b;//sintaxis abreviada de la de arriba

console.log (add(8,9));

// en cado de tener solo un parametro se pmitir el()
const doble = a => a * 2;
console.log(double(2));

//return de un objeto implicito
/*crear funcion*/const creaObject = () => ({
    returnname: "Jhon Doe"})

console.log(creaObject);

const numeros =[1,2,3,4,5]
//recorre el array y muestra el elemento cada operacion de la funcion
numeros.forEach(function (n){
    console.log(n);
})
//es igual arriba que abajo
numeros.forEach(n => console.log(n));
