<?php
//Modificadores

//Para las propiedades estáticas no es necesario instanciar una clase para acceder al mismo



class Cars {

    static $wheels_count = 4;
    static $door_count = 8;
    
   /*  function car_detail(){
        echo $this->wheels_count;
        echo $this->door_count;
        echo $this->seat_count;
    }  */  
    
    static function car_detail(){
        //Al ser estática la función ahora se debe acceder de la misma manera que cuando llamamos a la propiedad estática
        //Todas las propiedades deben estar como estáticas si se van a usar en una función estática
        echo Cars::$wheels_count;
        echo Cars::$door_count;
        
    } 

    static function hola(){
        echo "Hola Mundo";
    }

}

$bmw = new Cars();
//echo $bmw->wheels_count;
echo "<br>";

//Para poder acceder a una propiedad declarada como static no hace falta instanciar la clase
//Basta con poner el nombre de la misma nombreClase::$nombrePropiedad
//echo Cars::$door_count;

//Lo mismo aplica para los métodos de la clase nombreClase::$nombreMétodo
//Cars::hola();

Cars::car_detail();