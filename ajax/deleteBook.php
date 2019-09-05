<?php

include "../init.php";
$form = new form;
$queries = new queries;
if(isset($_POST['id'])){

    $bookId = $form->input("id");
    $userId = $_SESSION['userId'];
    if($queries->Crud("DELETE FROM books WHERE id = ? && userId = ?", [$bookId, $userId])){

        echo json_encode(["status" => "success", "msg" => "Your book has been deleted successfully"]);

    }

}


?>