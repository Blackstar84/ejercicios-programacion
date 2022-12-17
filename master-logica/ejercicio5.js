/**
 * Cuánto es el x porciento de x número
 * 
 * Cómo Hacerlo:
 * - Funcion con parámetros porcentaje y numero
 * - Crear una variable para la operación del porcentaje
 * - Devolver String que responda a la pregunta del enunciado
 */

function porcentaje(porcentaje, numero){
    //return (numero*porcentaje)/100
    let operacion = (numero * (porcentaje/100));
    let resultado = `El ${porcentaje}% de ${numero} es ${operacion}`;
    return resultado;
}

console.log(porcentaje(10,100));