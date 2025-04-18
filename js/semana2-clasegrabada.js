console.log("Clase grabada2")
// clase grabada semana 2 

// let validar = true;

// if (validar){
//     console.log("Variable verdadera");
// }

let fruta = "pera";
let mes = "marzo";
let edad = 25;

// if (fruta == "mandarina"){
//     console.log("Es otoño");
// }else if(fruta=="mango"){
//     console.log("Es traida del extranjero");
// }else{
//     console.log("Son frutas de todo el año");
// }

//or ||

// if (fruta == "mandarina" || fruta == "pera"){
//     console.log(`Una de las  frutas es ${fruta}`)
// }

// AND(&&)
// if (fruta == "pera" && (mes =="marzo" || mes == "junio")){
//     console.log("Estamos en clima mas frio");
// }


// if (edad >=18){
//     console.log("Puedes ingresar");
// }else{
//     console.log("No tenes edad");
// }

// ciclo for 
// for (desde; hasta; actualizacion){codigo a ejecutar }
// for(let numero = 1; numero<=10; numero++){
//     console.log(`Este es el  numero ${numero}`);
// }
// for (let i = 1; i<=10; i++){
//     let resultado = 15*i
//     console.log("La multiplicacion de 15 X "+i +  " Es igual a " + resultado);
// }

// console.log("Cuenta Regresiva")

// for(let i = 10; i>=1; i-- ){
//     console.log(`Cuenta regresiva ${i}`)
//     // if (i==2){
//     //     console.log("Abortamos");
//     //     break;
//     // }
//     if(i==1){
//         console.log("Despegue")
//     }
// }


// ciclos while 
// 
// let continuar =(true)

// while(continuar){
//     let numero = parseInt(prompt("Ingrese el numero para la tabla de multiplicar "))
//     for (let a = 1; a<=10; a++ ){
//         let operacion = numero*a
//         console.log(operacion);
//     }
//     let confirmacion = prompt("Desea continuar(si/no)")
//     if (confirmacion == "no"){
//         continuar = false;
//         console.log("Gracias por usar el sistema")
//     }else{
//         console.log("puede seguir usando el sistema")
//     }
// }


// switch case 

let continuar = true;
while(continuar){

let menu = parseInt(prompt("1: Ingrese ver cuenta. 2: para extraccion, 3:para depositos, otro para salir "))

    switch(menu){
        case 1:
            console.log("Total de la cuenta $1000");
            break
        case 2:
            console.log("Limite de extraccion 20 mil");
            break
        case 3:
            console.log("limite de deposito $500");
            break
        default:
            console.log("Retire su tarjeta");
            break
}
let confirmacion= prompt("Desea continuar (si/no)").toLowerCase();
if (confirmacion == "no"){
    continuar = false;
}else if (confirmacion=="si"){
    console.log("continua en el sistema")
}else{
    console.log("No eligio una opcion correcta. saliro del sistema");
    continuar=false;
}
}

