var nombre = prompt("Digite su nombre");
var edad = Number(prompt("Digite su edad"));
if(edad>=18){
    if(nombre.toLowerCase()=="carlos" || nombre.toLowerCase()=="mario"){
        console.log("Puede ingresar al VIP");
    }
    else{
        console.log("Puede ingresar a la discoteca");
    }
}
else{
    console.log("No puede ingresar a la discoteca");
}