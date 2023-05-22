function suma(a,b ){
     return a+b 
}
function suma(a,b ){
    return a-b 
}
                                Number, num, funcion
function ejecutarOperacion(n1, n2, operacion){
    const resultado = operacion(n1, n2);
    return resultado;
}
console.log(ejecutarOperacion(3, 4, suma));
console.log(ejecutarOperacion(3, 4, resta));

console.log(
    ejecutarOperacion(3, 4, function (p1,p2))
     { return p1*p2;

})
console.log(
    ejecutarOperacion(3, 4, function (p1,p2)) {
   return p1/p2;

})