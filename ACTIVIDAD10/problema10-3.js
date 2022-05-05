var matriz1 = [7,2,5,4,6,3,5,3];
var matriz2 = [7,2,5,3,5,3];
var numbers =[];

function findNumbers(matriz1, matriz2){
    for (let element of matriz1){
        if(!(matriz2.includes(element))){
            numbers.push(element);
        }
    }return numbers;
}
console.log(findNumbers(matriz1, matriz2));
    /*
  * Dadas dos matrices de enteros,
  * encuentra qué elementos faltan en la segunda matriz
  * de la primera matriz.

Ejemplo

La matriz es la lista original. Los números que faltan son
    

     Los números que faltan en arr son [4,6]

*/