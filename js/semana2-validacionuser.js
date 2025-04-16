console.log("Validación de Usuarios")

// validación de usuarios 

// array 
const usuarios =[
{nombre:"juan", edad: 20, aceptoTerminos:true},
{nombre:"luis", edad: 10, aceptoTerminos:true},
{nombre:"pedro", edad: 30, aceptoTerminos:false},
{nombre:"luis", edad: 40, aceptoTerminos:true},
{nombre:"antonio", edad: 20, aceptoTerminos:false},
{nombre:"gabriel", edad: 10, aceptoTerminos:true},
{nombre:"pacho", edad: 15, aceptoTerminos:true},
{nombre:"luisillo", edad: 10, aceptoTerminos:true},
]


for (let i = 0; i<usuarios.length; i++){
    if (usuarios[i].edad >= 18 && usuarios[i].aceptoTerminos){
        console.log("Mayores de edad " + usuarios[i].nombre)
    }
}
