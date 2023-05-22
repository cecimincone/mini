//'windows tiene scope (ámbito) global (está accesible de cualquier lado)
//ejemplo alert()
//window.console.log

//ambito global
//esta es la variable global
const x = 100;
console.log(x, "en global");

//function scope 
function run(){
    //tenemos acceso al ámbito global
    console.log(windows.innerHeigt);
    console.log(x, "en función");

}
run();

//ámbito=scope  de bloque if - for
if(true){
    console.log(x, 'en un bloque')
}

//busca 1ºen la funcion luego en globlal sobreescribir una variable global
function add(){
    const x = 1;
    const y = 50;
    console.log(x + y)
}

//console.log(y); //da error no har vay variable global solo en function
console.log(x);//vale 100 coge variable global
add();