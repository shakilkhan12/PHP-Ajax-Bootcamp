<?php

class form  {


    public function input($fieldName){


        // Check form method that method is GET or POST
        if($_SERVER['REQUEST_METHOD'] == 'POST' || $_SERVER['REQUEST_METHOD'] == 'post'){
            
            return strip_tags(trim($_POST[$fieldName]));

        } else if($_SERVER['REQUEST_METHOD'] == 'GET' || $_SERVER['REQUEST_METHOD'] == 'get'){
     
            return strip_tags(trim($_GET[$fieldName]));


        }


    }

}


?>