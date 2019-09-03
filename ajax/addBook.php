<?php

include "../init.php";
$form = new form;
$queries = new queries;
if(isset($_POST['bookName']) && isset($_POST['bookAuthor']) && isset($_POST['bookPrice'])){

    $bookName     = $form->input("bookName");
    $bookAuthor   = $form->input('bookAuthor');
    $bookPrice    = $form->input('bookPrice');
    $userId       = $_SESSION['userId'];
    if($queries->Crud("INSERT INTO books(bookName, authorName, price, userId) VALUES (?,?,?,?)", [$bookName, $bookAuthor, $bookPrice, $userId])){

        echo json_encode(['status' => 'success', 'msg' => 'Your book has been added successfully']);
 
    }

}


?>