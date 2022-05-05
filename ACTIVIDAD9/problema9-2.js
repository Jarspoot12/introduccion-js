/**
 * Escriba un programa de JavaScript para enumerar las propiedades de un objeto de JavaScript.
    Objeto de muestra:
    */

    var student = {
        name: "David Rayy",
        sclass: "VI",
        rollno: 12
    };
    var array1 = Object.keys(student);
    var iterator = array1.entries();
    for (let i of iterator){
        console.log(i);
    }
    console.log("El segundo menor es" `${iterator[1]}`)