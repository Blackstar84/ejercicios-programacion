<?php
//Modificadores

/**
 * public puede ser usado por todo el programa dentro de este script
 * private puede ser usado sólo dentro de la clase
 * protected puede ser usado dentro de la clase y de cualquier subclase (herencia)
 */
class Cars {

    private $door_count = 4;
    
    function get_values(){
        echo $this->door_count;
    }       
    
    function set_values(){
        echo $this->door_count = 10;
    }

}

$bmw = new Cars();

//Si llamamos al método get antes de llamar al set values el mismo trae 4 que es el valor declarado como private al inicio de la clase

$bmw->get_values();
echo "<br>";
//Al llamar al método set_values asignamos 10 al valor de la propiedad door_count y es lo que mostrará si se llama de vuelta al método
//get_values

$bmw->set_values();

echo "<br>";
$bmw->get_values();
