var n = Number(prompt("Digita la cantidad de números a comparar"));
var mayor = 0;
for(var i = 0; i < n; i++){
    var number= Number(prompt("Digita el valor" + (i+1)));
    if(number>mayor){
        mayor = number;
    }
  
}
console.log("El número mayor es el", mayor);