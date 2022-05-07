//variables globales
var resultado = document.getElementById("pantalla");
var valorA = 0;
var valorB = 0;
 var operacion;
 var total = 0;
 //limpiadores y reseteos
function clean(){ //para limpiar la pantalla cada vez que uso los operadores
    resultado.textContent = "";
}
function ac(){
    valorA= 0;
    valorB= 0;
    resultado.textContent = "";
}
function del(){
   resultado.textContent = resultado.textContent.slice(0, resultado.textContent.length-1)
}
//primera función
function agregaValor(num){
    resultado.textContent = resultado.textContent + num;
}
//operadores
function suma(){
    valorA = Number(resultado.textContent);
    clean();
    operacion = "suma"
}
function resta(){
    valorA = Number(resultado.textContent);
    clean();
    operacion = "resta"
}
function producto(){
    valorA = Number(resultado.textContent);
    clean();
    operacion = "producto"
}
function division(){
    valorA = Number(resultado.textContent);
    clean();
    operacion = "division"
}
//resultado final
function igual(){
    valorB = Number(resultado.textContent);
    if(operacion == "suma"){
       total =  valorA + valorB;
       resultado.textContent = total;
    }
    else if(operacion == "resta"){
        total = valorA - valorB;
        resultado.textContent = total;
    }
    else if(operacion == "producto"){
        total = valorA * valorB;
        resultado.textContent = total;
    }
    else if(operacion == "division"){
        total = valorA / valorB;
        resultado.textContent = total;
    }
}

