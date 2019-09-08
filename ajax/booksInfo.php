<?php

include "../init.php";
$queries = new queries;
$userId = $_SESSION['userId'];
if($queries->Crud("SELECT * FROM books WHERE userId = ?", [$userId])){

    $rowsCount = $queries->Count();
    if($rowsCount > 0 ){

        $rows = $queries->getAll();
          $sum = 0;
        foreach($rows as $amount):

         $sum = $sum + $amount->price;

        endforeach;
        echo json_encode(["status" => "success", "totalBooks" => $rowsCount, "totalAmount" => $sum]);

    } else {
        echo json_encode(["status" => "noBooks"]);
    }

}


?>