/***
Dado dos arrays, devolver array con sólo los elementos comunes entre ambos
 */

function comunes(arr1, arr2) {
    const filtrado = arr1.filter(elemento => arr2.includes(elemento));
    return filtrado;
}


console.log(comunes([4,5,6,7], [7,8,9,6,7,5]));
console.log(comunes(['Carlos', 'paco', 'pepe'], ['paco','victor','Carlos','hola']));