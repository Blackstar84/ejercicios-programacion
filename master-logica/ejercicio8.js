/**
Dado un número entero, inviertelo y devuelve de nuevo el entero.

Ejemplo:
invertirNumero(67) //Devuelve 76
*/


function invertirNumero(numero) {
    return parseInt(numero.toString().split("").reverse().join(""))* Math.sign(numero); 
}

console.log(invertirNumero(-6787))
console.log(invertirNumero(105))