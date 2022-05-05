var number1 = Number(prompt("Digita el valor 1"));
var number2 = Number(prompt("Digita el valor 2"));
var number3 = Number(prompt("Digita el valor 3"));
if(number1==number2||number1==number3||number2==number3){
    console.log("Hay al menos dos números repetidos")
}

if(number1<number2 && number1<number3){
    console.log("El número menor es", number1);
}
else if(number2<number1 && number2<number3){
    console.log("El número menor es", number2);
}else if(number3<number1 && number3<number2){
    console.log("El número menor es", number3);
}
