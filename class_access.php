<?php
//Modificadores

/**
 * public puede ser usado por todo el programa dentro de este script
 * private puede ser usado sólo dentro de la clase
 * protected puede ser usado dentro de la clase y de cualquier subclase (herencia)
 */
class Cars {

    public $wheels_count = 4;
    private $door_count = 4;
    protected $seat_count = 2;
    
    function car_detail(){
        echo $this->wheels_count;
        echo $this->door_count;
        echo $this->seat_count;
    }          

}

$bmw = new Cars();
echo $bmw->wheels_count . "<br>";

//Esto dará un error de que no se puede acceder a una propiedad privada
//echo $bmw->door_count . "<br>"; 

//Esto dará un error de que no se puede acceder a una propiedad protegida
//echo $bmw->seat_count . "<br>";


$bmw->car_detail();