<?php
//Modificadores

/**
 * public puede ser usado por todo el programa dentro de este script
 * private puede ser usado sólo dentro de la clase
 * protected puede ser usado dentro de la clase y de cualquier subclase (herencia)
 */
class Cars {

    public $wheels_count = 4;
    static $door_count = 4;

    function __construct(){
        //echo $this->wheels_count;
        echo self::$door_count++;
    }

    function __destruct()
    {
        echo self::$door_count--;
    }
    
         

}

$bmw = new Cars();
$mercedes = new Cars();
//echo $bmw->wheels_count . "<br>";

//$bmw->car_detail();