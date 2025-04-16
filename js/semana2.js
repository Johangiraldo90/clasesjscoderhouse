let semana = "Semana 2 Coder House";
console.log(semana);

// condicionales 

// condicional con if 
let nombre = "Johan";
//nombre = "Juan";
nombre = "Pedro";

if (nombre == "Johan"){
    console.log("Bienvenido "+ nombre)
};

// condicional con if and else 

if (nombre == "Juan"){
    console.log("Bienvenido a " + nombre)
} else{
    console.log("No estas registrado con el nombre de " + nombre)
};

// condicional con if, else if and else 
let suma = 0;

if (suma == 90){
    console.log("La suma es " + suma)
}else if (suma < 90){
    console.log("La suma es menor a  90 y es " + suma)
}else{
    console.log("El numero es " + suma)
}

// ejemplo de coder 


let calificacion = 65;

if (calificacion >= 90) {
    console.log("Excelente");
} else if (calificacion >= 70) {
    console.log("Bueno");
} else {
    console.log("Necesitas estudiar más");
}