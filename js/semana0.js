//- **let**: para datos que pueden cambiar.
//- **const**: para datos que no deben modificarse después de su inicialización.

//Ejemplo: 

//let nombre;(se declara)
let nombre = "Pedro"; //(Se declara primero y se inicializa alojando un valor)

console.log("Hola  mundo")

let suma = 21 + 1; // 15
let producto = 20 * 2; // 40

//si o no... 

if (suma < 20) {
    console.log("La suma es menor que 20");
} else {
    console.log("La suma es mayor o igual a 20");
}


//ciclos 


for (let i = 0; i < 5; i++) {
    console.log(i);
}


let i = 0;
while (i < 5) {
    console.log(i);
    i++;
}

// semana 0 


// varibale 

let cliente; 

//asignacion de variables
cliente = "carlos";
cliente = "Juan"
console.log(cliente);

// inicializacion de varibles

let edad = 30;

console.log(edad);

// constantes. // las constantes no se pueden cambiar ya asignadas. 
 let deuda;
deuda = "635.400" 
deuda = 60102627
const nacimiento = 1990;
console.log(nacimiento);