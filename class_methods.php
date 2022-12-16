<?php



    class Cars {
        /**
         * Un método es una función, function methods cuando están dentro de la clase
         * y funciones cuando se encuentran fuera de la clase
         */

         function greeting(){

         }

        function greeting2(){

        }
         

    }


$the_methods = get_class_methods('Cars');

foreach ($the_methods as $methods) {
    echo $methods . '<br>';
}












?>    