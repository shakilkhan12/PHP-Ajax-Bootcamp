<?php
include "../init.php";
$form = new form;
$queries = new queries;
if(isset($_POST['bookName']) && isset($_POST['bookAuthor']) && isset($_POST['bookPrice']) && isset($_POST['hiddenId'])){

  
    $bookName   = $form->input('bookName');
    $bookAuthor = $form->input('bookAuthor');
    $bookPrice  = $form->input('bookPrice');
    $bookId     = $form->input('hiddenId');
    $userId     = $_SESSION['userId'];
    if($queries->Crud("UPDATE books SET bookName = ?, authorName =?, price = ? WHERE userId = ? && id = ?", [$bookName, $bookAuthor, $bookPrice, $userId, $bookId])){

        echo json_encode(['status' => 'success', 'msg' => 'Your book has been updated successfully']);


    }


}


?>