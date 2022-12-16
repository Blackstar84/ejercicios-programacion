<?php 

/*
class Coche {
    public $color;
    public $potencia;
    public $marca;
    
    public function getColor()
    {
        return $this->color;
    }
}

$miCoche = new Coche();
$miCoche->color = 'rojo';
$miCoche->potencia = 120;
$miCoche->marca = 'audi';

echo 'Color del coche: ' . $miCoche->color; // Muestra Color del coche: rojo


echo 'Color del coche: ' . $miCoche->getColor();

*/


//Ahora vamos a definir un método que devuelve una propiedad:
/*
class Coche {
    //...

    public function getColor()
    {
        return $this->color;
    }
}
*/
//...
/*El método getColor() nos permite devolver el color del objeto instanciado. 
La variable $this se puede utilizar en cualquier método, y hace referencia al objeto que hemos instanciado,
 en este caso $miCoche. Podemos obtener el mismo resultado que antes para mostrar el color del coche pero 
 ahora utilizando un método para mostrar la propiedad color:
*/


//Las propiedades pueden tener valores por defecto:
/*
class Coche {
    public $color = 'rojo';
//...
}
*/
/*De esta forma siempre que se instancie un objeto de la clase Coche, 
éste será de color rojo a no ser que se modifique después. Ahora creamos también el objeto $otroCoche y le ponemos otras características: */
/*
class Coche {

    public $color = 'rojo';
    public $potencia;
    public $marca;

    public function getColor()
    {
        return $this->color;
    }
}

$miCoche = new Coche();
$miCoche->color = 'verde';
$miCoche->potencia = 120;
$miCoche->marca = 'audi';

echo 'Color del coche: ' . $miCoche->color;

$otroCoche = new Coche();
$otroCoche->color = 'azul';
$otroCoche->potencia = 100;
$otroCoche->marca = 'bmw';

*/

//Creamos ahora dos "getters" para la potencia y la marca:

class Coche {

    public $color = 'rojo';
    public $potencia;
    public $marca;

    public function getColor()
    {
        return $this->color;
    }
    public function getPotencia()
    {
        return $this->potencia;
    }
    public function getMarca()
    {
        return $this->marca;
    }
}

//Y creamos una función (fuera de la clase) que devuelve las caracteristicas totales de un objeto coche:

function printCaracteristicas($cocheConcreto)
    {
        echo 'Color: '. $cocheConcreto->getColor();
        echo "\n";
        echo 'Potencia: '. $cocheConcreto->getPotencia();
        echo "\n";
        echo 'Marca: '. $cocheConcreto->getMarca();
    }

$miCoche = new Coche();
$miCoche->color = 'verde';
$miCoche->potencia = 120;
$miCoche->marca = 'audi';

$otroCoche = new Coche();
$otroCoche->color = 'azul';
$otroCoche->potencia = 100;
$otroCoche->marca = 'bmw';

printCaracteristicas($miCoche);
echo "\n";
printCaracteristicas($otroCoche);