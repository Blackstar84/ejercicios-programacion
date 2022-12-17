/**
Dado un texto y una búsqueda, censurar todas las coincidencias de la búsqueda en el texto con
[-CENSURADO-]

Si el texto o búsqueda están vacíos, mostrar "No puedess leer el texto y la búsqueda" en el caso de que 
ambos parámetros no lleguen:

*/

function censurar(texto=false,buscar=false){
    let resultado = "";
    if(!texto && !buscar){
        resultado = "No puedes leer el texto y la búsqueda";
    }else if(!texto && buscar){
        resultado = "No puedes leer el texto";
    }else if(texto && !buscar){
        resultado = "No puedes leer la búsqueda"
    }else if(texto && buscar){
        resultado = texto.replace(new RegExp(buscar, 'gi'), "[-CENSURADO-]")
    }

    return resultado;
}


console.log(censurar("hola que tal Hola", "hola"));