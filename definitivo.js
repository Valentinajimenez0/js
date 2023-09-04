let comenzar;

function saludar (comenzar){
    comenzar = alert ("Bienvenido/a a la tienda " + usuario );
}

let usuario = prompt ("Ingrese su nombre de usuario");

saludar (comenzar)

const SI = "si";
const NO = "no";

let precio
let cantidad
let total = 0;
let continuar = SI;
let productos;


let comprar = prompt ("Si desea comenzar a comprar escriba si, por el contrario no")

if (comprar == SI){
    do {
        precio = +prompt ("Ingrese el precio del producto ");
        precio = valida (precio)
        cantidad = +prompt ("Ingrese la cantidad del producto ");
        
        continuar = prompt ("Desea ingresar otro item Porfavor ingrese si o no ");
        while (continuar != SI && continuar != NO){
            continuar = prompt ("Lo ingresado es incorrecto, porfavor ingrese si o no")
        } 
        total = total + precio * cantidad;
        
        }while (continuar == SI);
        alert ("El total de sus productos es $ " + total);
         despedida();
    }else{
    comprar = alert ("Nos vemos la proxima!"); 
}

function despedida(){
    despedida = alert ("Gracias por tu compra, nos vemos la proxima!")
}

function valida(precio){
    while (precio < 0 ){
        precio = prompt ("Debe ingresar un precio mayor a 0")
    }
    return precio;
    
}


