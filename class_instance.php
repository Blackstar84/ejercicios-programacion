<?php

use Cars as GlobalCars;

    class Cars {

         function greeting($marca){
            echo "Hello " . $marca;
         }          

    }


    $bmw = new Cars();
    $bmw->greeting('BMW');
    echo "<br>";
    $mercedes = new Cars();
    $mercedes->greeting('Mercedes');