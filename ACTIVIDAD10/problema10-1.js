/**
 * Escriba una función de JavaScript que tomará una serie de números almacenados
 * y encontrará el segundo número más bajo y segundo más alto, respectivamente
 * del siguiente arreglo:  const arr = [3,4,6,1,5,2,9,10,23,12]
 */
 const arr = [3,4,6,1,5,2,9,10,23,12];
function ordenamiento(arr){
    var orden = arr.sort(function(a, b) {return a - b;});
    var elementos = [orden[1], orden[orden.length-2]];
    return elementos;
}console.log("El segundo valor menor es "+ ordenamiento(arr)[0] + "\nEl segundo valor mayor es "+ ordenamiento(arr)[1]);