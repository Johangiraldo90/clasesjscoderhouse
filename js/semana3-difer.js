console.log("Semana 3 funciones y parametros")

// // ejemplo de función, (function)

// function saludar(){
//     let nombre = prompt("Ingresa tu nombre");
//     console.log(`Hola, bienvenido, ${nombre}`);
// }

// // para imprimir una funcion se usa asi
// saludar();


// las funciones pueden recibir parametros, ejemplo 



// function suma(numeroA, numeroB)
// {
//     return(numeroA+numeroB);
// }

// let resultado = suma(3,4)
// console.log(resultado);


// multiplicacion 

// function multiplicacion(numeroA,numeroB)
// {
//     return (numeroA*numeroB);

// }

// let resultadomul = multiplicacion(2, 4);

// console.log(resultadomul)


// function division (numeroA, numeroB)
// {
//     return(numeroA/numeroB);
// }

// let resultadodiv = division(7,8);
// console.log(resultadodiv);


// function resta (numeroA, numeroB)
// {
//     return numeroA - numeroB
// }

// let resultadores = resta(8, 9);
// console.log(resultadores);

// codigo para saludar 

// function saludar(nombre){
//     console.log(`Hola, bienvenido ${nombre}`)
// }

// saludar("Juan");
// saludar("Luis");
// saludar("pepe")

// function areaTriangulo( base, altura){
//     let areaT = (base*altura)/2;
//     console.log(`El area del triangulo es ${areaT}`)
// }
// let base = parseInt(prompt("Ingresa la base"))
// let altura = parseInt(prompt("Ingresa la altura"))

// let restultado1=areaTriangulo(base,altura);


// function descuentoProductos (price, descuento ){
//     let priceDescuento= price*(descuento-1);
//     console.log(priceDescuento)
    
// }

// let price = parseInt(prompt("Ingresa el valor del producto"));
// let descuento = parseInt(prompt("Ingrese el descuento "));

// let priceDescuento = descuentoProductos(price, descuento);

//una funcion es un bloque de codigo que hace una tarea. 

// declaracion 

// function saludo (nombre){
//     //cuerpo de la funcion 
//     console.log(`te saludo desde mi funcion ${nombre}`);
// }

// // invocar a la funcion
// let nombre = prompt("Ingresa tu nombre")
// saludo(nombre);

// function agregarLibro(titulo, autor){
//     return {titulo, autor};
// }

// function mostrarLibro(libro){
//     console.log(`El titulo es ${libro.titulo}, y el autor es ${libro.autor}`)
// }

// let libro1 = agregarLibro("1984", "george Orwell");


// mostrarLibro(libro1);


// parametros 


// function saludar (nombre, edad )
// {
//     console.log(`hola ${nombre}`);
//     console.log(`tu edad es ${edad}`);
// }

// saludar("Juan", 29);

// otra forma

// function saludar (nombre, edad )
// {
//     console.log(`hola ${nombre} tu edad es de ${edad}`);
// }

// saludar("Juan", 29);

//scope: global y el local 

// let color = "rojo"; // variable global

// function cambiarColor(){
//     color = "azul"
//     let local = "Esto es una variable local"

// }


// cambiarColor();
// console.log(color);


// funciones anonimas y funciones flecha 

// funcion anonima 

// const suma = function(a,b){
//     return a +b;
// };

// console.log(suma(5,2)); 

//manejo de eventos o logica asincronica 

// document.getElementById("MiBoton").addEventListener("click", function(){
//     alert("Boton pulsado");
// });

// document.getElementById("miBoton").addEventListener("click", function() {
//     alert("¡Botón pulsado!");
// }); // no funciono 


// (function(){
//     let mensaje = "Ejecuta de una ";
//     console.log(mensaje);
// })();

// (function() {
//     let mensaje = "Ejecutada al instante";
//     console.log(mensaje);
// })();// no funciona 


// let dobles = [1, 2, 3, 4].map(function(num)
// {
//     return num*2;
// });// metodos arrays

// funciones flecha 
// const suma = (a,b) => a +b;
// console.log(suma(5,3))


// callbacks 

// let couadrados = [1, 2, 3, 4].map(n => n *n );

//funciones flechas 

// funcion tradicional 

// function sumar(a, b){
//     return a+b;
// }

// console.log(sumar(10, 5)); // antes del 2015 y despues funcion flecha 

// funcion flecha 

// forma 1
// const sumarflecha = (a, b)=>{
//     return a+b
// }

// console.log(sumarflecha(10,21))

//forma 2

const sumarflecha = (a, b) => a+b; // si tengo un solo parametro, puedo quitar los parentesis

console.log(sumarflecha(10,21));