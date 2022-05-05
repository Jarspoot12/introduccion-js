

const coleccion = [
    {a: 11, b:224, name: "M48 Bulldog"},
    {a:23, b:56, name: "Object 140"},
    {a: 32, b:75, name: "T57 Heavy"}
];
function concatenacion (coleccion){
    var array = []
    for (var element in coleccion){
        var suma = String(coleccion[element].a + coleccion[element].b +" " );
        var nombre = String(coleccion[element].name);
        var cadena = String(suma.concat(nombre) + "-=-");
        total = [array += cadena]
    }return [total.toString().slice(0, total.length-4)];
}
console.log(concatenacion(coleccion));

/*
Hacer una función para que reciba ese arreglo de objetos
y que retorne la suma de "a" y "b" de cada objeto y concatenarlo
al String "name" para que devuelva algo así: 

            ["235 M48 Bulldog-=-79 Object 140-=-107 T57 Heavy" ]
*/
