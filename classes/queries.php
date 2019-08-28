<?php

class queries extends db {


    public $result;

    // Crud method accept all PDO queries like INSERT, SELECT, UPDATE & DELETE
    public function Crud($qry, $params = []){

        if(empty($params)){

            $this->result = $this->connection->prepare($qry);
            return $this->result->execute();

        } else {
            $this->result = $this->connection->prepare($qry);
            return $this->result->execute($params);
        }

    }

    // Count method will count the number of rows from a specific table
    public function Count(){
      
        return $this->result->rowCount();

    }

    // Get method responsible for to fetch a single row from specific table

    public function get(){

        return $this->result->fetch(PDO::FETCH_OBJ);

    }

    // GetAll method will responsible to fetch all records/rows from a specific table

    public function getAll(){

        return $this->result->fetchAll(PDO::FETCH_OBJ);

    }



}


?>