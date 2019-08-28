<?php

class db  {

    public $connection;
    public function __construct(){
    
    try {
    $this->connection = new PDO("mysql:host=" . HOST . ";dbname=" . DBNAME, USER , PASSWORD);
    

    } catch(PDOException $e){

        echo "Connection error: " . $e->getMessage();

    }

    }

}



?>