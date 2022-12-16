/***
 * Dada una cadena de texto, comprobar si es un palíndromo o no.
 * Los palíndromos son palabras que se leen igual aún estando invertidas
 * por ejemplo: ana, bob, otto, allivessevilla
 * No tener en cuenta espacios o símbolos raros
 */

/**
 * Básicamente lo que hacemos primero es convertir la palabra en un array, para esto utilizamos split("") con esto separa cada una de las letras
 * si ponemos - o espacio va a dividir por esos identificadores, como devuelve cada letra que es lo que pedimos esto
 * devuelve un array con cada letra ejemplo si la palabra es ana devolverá ['a','n','a']
 * luego utilizamos la función de arrays que es el reverse que da la vuelta el orden del array, y luego utilizamos
 * join para unir nuevamente las palabras dadas vueltas
 */

function palindromo(palabra){
    let inverso = palabra.split("").reverse().join("")
    return (inverso === palabra)
}


console.log(palindromo('allivessevilla'));