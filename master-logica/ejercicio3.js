/**
 * Dada una palabra, buscarla en una frase y devolver cuantas veces aparece en ella
 * la frase y la palabra deber ser parámetros de una función
 * 
 * Ejemplo: 
 * findWord("soy la frase", "victor") // devuelve: 0
 * 
 * Cómo hacerlo:
 * - Función con dos parámetros frase y busqueda
 * - poner string en minúsculas y limpiarlo
 * - Comprobar si la búsqueda esta incluida en la frase
 * - Crear un array de palabras de la frase
 * - Mapear esas palabras y hacer un contador de cada una
 * - Devolver el contador de la búsqueda
 */

function findWord(frase,busqueda){
    //Primero limpiamos la frase, primero convertimos todo a minúsculas y luego con replace filtramos todo lo que sean
    //estos caracteres (!¡.,-) y lo reemplazamos con vacío, esto para eliminar comas y demás
    let text_clean = frase.toLowerCase().replace(/[!¡.,-]/gi,"");
    let resultado = 0;
    //Vemos si existe la palabra buscada dentro de la frase
    if(text_clean.includes(busqueda)){
        //En caso de existir guardamos en palabras un array separado por espacios, para ello utilizamos split para crear un
        //array que en este caso lo hacemos por espacios para que nos cree un array con palabras 
        let palabras = text_clean.split(" ");
        //Creamos una variable de tipo objeto vacía
        let mapa = {};
        //con for recorremos el array de frases
        for(let palabra of palabras){
            //si existe el objeto mapa[palabra] sumamos 1 a su contador
            if(mapa[palabra]){
                mapa[palabra]++;
                //Caso contrario creará ese elemento
            }else{
                mapa[palabra]=1;
            }
        }
        //Una vez terminado guardamos en resultado la cantidad de veces que aparece la búsqueda dentro de la frase
        
        resultado = mapa[busqueda];
        
    }else{
        resultado = 0;
    }

    return resultado;
    

}

console.log(findWord("Hola, que tal, soy Victor Róbles, victor", "victor"));