console.log("Clase grabada semana 3")

// function saludo(){
//     console.log("Hola coder House")
// }

// saludo()

// function sumar(){
//     let numeroA = 12;
//     let numeroB = 23;
//     let resultado = numeroA+numeroB;
//     console.log(resultado);
// }

// sumar()

// function sumar(){
//     let numeroA = 12;
//     let numeroB = 23;
//     let resultado = numeroA+numeroB;
//     return resultado;
// }

// console.log(sumar())

// function sumar(){
//     let numeroA = 12;
//     let numeroB = 23;
//     let resultado = numeroA+numeroB;
//     return resultado;
// }
// let calculo = sumar()
// let ConIva = calculo*1.19
// console.log(ConIva) /// funcion declarada 

// funcion expresada 

// const restar = function (){
//     let numeroA = 15;
//     let numeroB = 20;
//     let resultado = numeroB - numeroA;

//     console.log(resultado)
// }

// restar()// siempre se llama primero la funcion luego se llama 

// let primerNumero = parseInt(prompt("Ingrese primero Numero"))
// let segundoNumero = parseInt(prompt("Ingrese segundo Numero"))

// function sumar (numeroA, numeroB){
//     let resultado = numeroA + numeroB
//     console.log(resultado)
// }

// sumar(primerNumero,segundoNumero)

// const caluculadoradel10 = function(primerNumero){
//     let resultado = primerNumero*10
//     console.log(resultado)
// }

// caluculadoradel10(2)

// for( i = 0; i<=10; i++){
//     caluculadoradel10(i);
// }


//funcion flecha con un solo parametro 
// const caluculadoradel10 = primerNumero=> primerNumero*10
    
// console.log(caluculadoradel10(2))

// const multiplicacion = (numeroA, NumeroB)=>numeroA*NumeroB
// console.log(multiplicacion(2, 4))

// calculadoras 
function suma(){
    let numeroA = parseInt(prompt("Ingrese numero"))
    let numeroB = parseInt(prompt("Ingrese numero"))
    let resultado = numeroA + numeroB
    alert(`Numero A ${numeroA} sumado el numero B ${numeroB} es igual ${resultado}`)
}

function resta(){
    let numeroA = parseInt(prompt("Ingrese numero"))
    let numeroB = parseInt(prompt("Ingrese numero"))
    let resultado = numeroA - numeroB
    alert(`Numero A ${numeroA} restado el numero B ${numeroB} es igual ${resultado}`)
}

function multiplicacion(){
    let numeroA = parseInt(prompt("Ingrese numero"))
    let numeroB = parseInt(prompt("Ingrese numero"))
    let resultado = numeroA * numeroB
    alert(`Numero A ${numeroA} multiplicado el numero B ${numeroB} es igual ${resultado}`)
}


function dividir(){
    let numeroA = parseInt(prompt("Ingrese numero"))
    let numeroB = parseInt(prompt("Ingrese numero"))
    let resultado = numeroA / numeroB
    alert(`Numero A ${numeroA} dividido el numero B ${numeroB} es igual ${resultado}`)
}

let menu = parseInt(prompt("Eliga una opcion: \n 1 sumar \n 2 resta \n 3 multiplicacion \n 4 para dividir \n  5 menu principal \n 6 para salir "))

while (menu !=6){
    switch(menu){
        case 1:
            suma()
            break
        case 2:
            resta()
            break
        case 3:
            multiplicacion()
            break
        case 4:
            dividir()
        case 5:
            menu = parseInt(prompt("Eliga una opcion: \n 1 sumar \n 2 resta \n 3 multiplicacion \n 4 para dividir \n  5 menu principal \n 6 para salir "))
            break
        case 6:
            console.log("Saliendo")
            break
        default:
            alert("opcion incorrecta")
    }
}

menu = parseInt(prompt("Eliga una opcion: \n 1 sumar \n 2 resta \n 3 multiplicacion \n 4 para dividir \n  5 menu principal \n 6 para salir "))
