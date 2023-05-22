(function (){
    const user = "pepe";
    console.log(user);
    const saludar = () => console.log("hello desde una IIfe");
    saludar()
})();

(function nombre(){
    console.log("hola " + nombre);
})('mundo');


function saludarMucho(nombre){
    alert(nombre);
    saludarMucho(
        
    )
}