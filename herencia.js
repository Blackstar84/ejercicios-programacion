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


class Autobus extends Coche{
    constructor(modelo, velocidad, antiguedad){
        super(modelo, velocidad, antiguedad);
        this.altura = 5;
    }

    mostrarAltura(){
        return `La altura es: ${this.altura}`;
    }
}

let autoBus1 = new Autobus('Pegasus', 200, 2017);

console.log(autoBus1);
console.log(autoBus1.mostrarAltura());



let coche1 = new Coche('BMW', 190, 2017);
let coche2 = new Coche('Audi', 150, 2022);
let coche3 = new Coche('Mercedes', 180, 2021);
let coche4 = new Coche('Renault', 220, 2016);

