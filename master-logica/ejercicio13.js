/**
Dado un array, dividirlo en tantos sub-arrays como se necesario basándonos en un númerp que indique
su tamaño

Dividirlo en arrays de X elementos

ejemplos:
divideArray([7,8,9,10,5], 2)

//Devuelve
[[7,8],[9,10],[5]]
*/


function divideArray(numero,cantidad){
    let nuevo = [];

    for(let elemento of numero){
        let ultimo = nuevo[nuevo.length-1];
        
        if(!ultimo || ultimo.length === cantidad){
            nuevo.push([elemento]);                        
        }else{            
            ultimo.push(elemento);            
        }
    }
    return nuevo;
} 


function dividirArreglo(arreglo, cantidad){
    nuevoArray = [];

    for (let i = 0; i < arreglo.length; i+=cantidad) {
        let parte = arreglo.slice(i, i+cantidad);
        console.log(parte);

        nuevoArray.push(parte);
        
    }
    console.log(nuevoArray);
}

dividirArreglo([1,2,3,4,5,6,5],2);

//console.log(divideArray([1,2,3,4,5],2));