/**
Dado un número, mostrar todos los números desde ese al 0 de 8 en 8 en una lista con guiones y cada número
debe empezar por nº

Ejemplo:

hastaCero(100) // Devuelve:
nº100
nº92
nº84
nº76
nº68
----FIN----
*/

function hastaCero(numero) {
    let resultado = `--- Del ${numero} al 0 --- \n`;
    for (let i = numero; i > 0; i-=8) {
        resultado += `- nº${i} \n`;        
    }
    resultado += "--- FIN ---";
    return resultado;
}


console.log(hastaCero(100));

