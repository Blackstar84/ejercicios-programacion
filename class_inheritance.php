<?php

class Cars {

    var $wheels = 4;
    
    function greeting(){
        return 'Hello';
    }          

}


$bmw = new Cars();

//Si sobreescribimos la variable wheels, tomará el valor de la clase Trucks y no de Cars que es de la que está heredando

class Trucks extends Cars{
    var $wheels = 10;
}


$tacoma  = new Trucks();
echo $tacoma->wheels;
echo '<br>';
echo $tacoma->greeting();
