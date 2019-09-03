<?php
include "../init.php";
$queries = new queries;
$userId = $_SESSION['userId'];
if($queries->Crud("SELECT * FROM books WHERE userId = ? ", [$userId])){

   if($queries->Count() > 0 ){

    $rows = $queries->getAll();
    echo json_encode(["status" => "success", "data" => $rows]);

   } else {
       echo json_encode(["status" => "noRecords"]);
   }

}


?>