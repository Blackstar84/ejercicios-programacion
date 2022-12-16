<?php

    /**
     * Para declarar una variable dentro de una clase es necesario agregar la palabra var
     * seguida del nombre de la variable con el símbolo de $
     * var $nombreVariable
     */

class Cars {

    var $wheel_count=4;
    var $door_count=4;
    function car_detail(){
        return "This car has ". $this->wheel_count . " wheels";
    }          

}


$bmw = new Cars();
$mercedes = new Cars();
//Para acceder a las variables declaradas en la clase car como var la llamamos igual que una función pero sin los paréntesis

echo  $bmw->wheel_count;
echo '<br>';
//Así mismo podemos cambiar su valor de la siguiente manera
echo  $bmw->door_count = 5;

echo '<br>';
echo  $bmw->wheel_count = 10 . "<br>";
echo  $mercedes->wheel_count . '<br>';;

echo $mercedes->car_detail();
