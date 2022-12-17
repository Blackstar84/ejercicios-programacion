/**
Dados dos números, devolver cuántos números IMPARES hay entre ellos.
*/

function impares(n1, n2){
    let cantImpar = 0;
    for (let i = n1; i < n2; i++) {
        if(i%2!==0){
            cantImpar++;
        }
    }
    return cantImpar;
}


console.log(impares(1,100));