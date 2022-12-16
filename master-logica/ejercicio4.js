/**
 * Dada una cadena de texto, darle la vueta e invertir el orden de sus caracteres, sin usar métodos propios del lenguaje,
 * sólo estructuras de control
 */

function invertir(cadena){    
    let cadenaNueva="";
    for (let i = cadena.length-1; i >= 0; i--) {
        
        cadenaNueva += cadena[i];        
    }

    //Otra forma de hacerlo es con un bucle for como este
    /*
    for(let letra of texto){
        cadenaNueva = letra + cadenaNueva;
    }*/

    return cadenaNueva;
}


/** OTra forma de hacerlo en una sola línea sería de esta manera */

function invertir2(texto){
    return texto.split("").reverse().join("");
}



console.log(invertir("polar"));

console.log(invertir2("polaroid"));