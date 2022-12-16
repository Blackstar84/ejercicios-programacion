<?php
//Modificadores

//Para las propiedades estáticas no es necesario instanciar una clase para acceder al mismo

use Trucks as GlobalTrucks;

class Cars {

    static $wheels_count = 4;
  

    static function car_detail(){
        //Para referirnos al mismo elemento de la misma clase podemos utilizar la palabra self
        return self::$wheels_count;        
        
    } 
  

}


class Trucks extends Cars{

    static function display(){
        /**
         * Al utilizar Parent le estamos diciendo que busque esa función desde la clase de la que está heredando.
         */
        echo parent::car_detail();
    }
}

$bmw = new Cars();

Trucks::display();
