

/**
 * Crea un código para llenar un objecto vacio:
 * 
  const objeto = {}
 * 
 * Con las siguiente propiedades:
    * color
    * tamaño
    * peso
    * cantidad
    * 
*/
const Objeto = {}
Object.defineProperties(Objeto, {
    "color": {
        value: "green",
        enumerable: true
    },
    "tamaño": {
        value: "small",
        enumerable: true
    },
    "peso":{
        value: "20kg",
        enumerable:true
    },
    "cantidad":{
        value:"10",
        enumerable: true
    }
});
console.log(Objeto);