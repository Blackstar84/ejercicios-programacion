/*
Dibujar un cuadrado hueco con asteriscos

ejemplos
cuadrado(4)
****
*  *
*  *
****

Cómo hacerlo:

- Función para crear el lado de arriba y abajo del cuadrado
- Función que haga los lados y el hueco del cuadrado
- Bucle de 0 al tamaño del lado menos 2 para equilibrar con el lado de arriba y abajo
- Bucle para pintar los espacios, menos 2 para equilibrar con el asterico de izq y der
- Ir concatenando en una variable cada linea del cuadrado
- Mostrar el cuadrado en la fucnción principal

 */

//Aquí creamos la función que crea el lado superior e inferior de nuestro cuadrado
function lado(numero){
    let lado = "";
    for (let i = 0; i < numero; i++) {        
        lado += "*";
    }
    return lado;
}
/**
 * Primero creamos el lado superior del dibujo
luego creamos seteamos el valor inicial del contenido a vacío
luego con un for recorremos el tamaño del número menos 2 que es lo que va a corresponder al hueco
primero creamos un asterisco e ingresamo a otro bucle for donde iremos guardando un espacio dos veces concatenado al *
del bucle for anterior esto crearía *  y al final del for de los espacios imprime otro asterisco, quedando esto como sigue:
*  *
*  *
esto para el caso de un cuadrado de 4 lados, esto va a ir variando dependiendo del número que pasemos como parámetro a la 
función
 */
function cuadrado(numero) {
    let dibujo = lado(numero)+ "\n";
    let contenido = "";
    for (let i = 0; i < numero-2; i++) {
        contenido = "*";

        for (let x = 0; x < numero-2; x++) {
            contenido +=" ";             
        }
        contenido += "*";

        dibujo += contenido + "\n";
    }

    dibujo += lado(numero);

    return dibujo;
}

console.log(cuadrado(10));