class Coche{
    constructor(modelo, velocidad, antiguedad){
        this. modelo = modelo
        this.velocidad = velocidad;
        this.antiguedad = antiguedad;
        
    }

    aumentarVelocidad(){
        this.velocidad += 1;
    }

    reducirVelocidad(){
        this.velocidad -= 1;
    }
}

let coche1 = new Coche('BMW', 190, 2017);
let coche2 = new Coche('Audi', 150, 2022);
let coche3 = new Coche('Mercedes', 180, 2021);
let coche4 = new Coche('Renault', 220, 2016);


console.log(coche1);

coche1.aumentarVelocidad();

console.log(coche1);
console.log(coche2);