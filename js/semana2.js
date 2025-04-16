let semana = "Semana 2 Coder House";
console.log(semana);

// condicionales 

// condicional con if 
let nombre = "Johan";
//nombre = "Juan";
nombre = "Pedro";

if (nombre == "Johan"){
    console.log("Bienvenido "+ nombre);
};

// condicional con if and else 

if (nombre == "Juan"){
    console.log("Bienvenido a " + nombre);
} else{
    console.log("No estas registrado con el nombre de " + nombre);
};

// condicional con if, else if and else 
let suma = 0;

if (suma == 90){
    console.log("La suma es " + suma);
}else if (suma < 90){
    console.log("La suma es menor a  90 y es " + suma);
}else{
    console.log("El numero es " + suma);
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

// operadores logicos 


let edad = 20;
let acceso = (edad >= 18) && (edad <= 30);
console.log(acceso); // true si la edad está entre 18 y 30


let temperatura = 35;
let advertencia = (temperatura < 0) || (temperatura > 32);
console.log(advertencia); // true si la temperatura es menor que 0 o mayor que 32


// ejemplos 

let age = 28;
let dinero = true;

if (age>=18 && dinero==true){
    console.log("Puedes ingresar y tienes dinero");
} else{
    console.log ("Sos menor, no puedes ingresar");
}
 // and se cumplen ambas para que sea verdadero (&&)
 // or se puede cumplir solo una (||)

 // ciclo for 

for (let i = 0; i < 5; i++) {
    console.log('Número: ' + i);
}

// ejemplo de multiplicacion
for (let a = 1; a < 11; a++ ){
    console.log("La multiplicación es " + 5*a);
}

// while, la diferencia es que el contador y iniciador se hacen por fuera del ciclo 


let i = 0;// fuera
while (i < 5) {
    console.log('Número: ' + i);
    i++;//fuera 
}

let b = 0; 
while(b<2){
    console.log("Johan " + b);
    b++;
}


//ciclo do while : A diferencia del ciclo while, el ciclo do...while garantiza que el cuerpo del bucle se ejecute al menos una vez, ya que la condición se evalúa después de la ejecución del código dentro del bucle.


let c = 5;
do {
    console.log('Número: ' + c);
    c++;
} while (c < 5); // se ejecuta minimamente una vez. 

// ejemplos de la clase 

for (let k = 0; k < 5; k++){
    console.log("Hola Mundo")
}


// ejemplo de la clase 

let m = 0;

while (m<5){
    console.log("Hola Johan");
    m++;

}

const pass = 1234;
let passwordIngresado = parseInt(prompt("Ingrese contraseña"))

while(passwordIngresado!=pass){
    const pass = 1234;
    let passwordIngresado = parseInt(prompt("Ingrese contraseña ciclo"));
}
// break and continue 


for (let i = 0; i < 10; i++) {
    if (i === 5) {
        break; // Sale del ciclo cuando i es igual a 5
    }
    console.log(i); // Imprime los números de 0 a 4
}


for (let i = 0; i < 10; i++) {
    if (i % 2 === 0) {
        continue; // Omite los números pares
    }
    console.log(i); // Imprime los números impares entre 0 y 9
}