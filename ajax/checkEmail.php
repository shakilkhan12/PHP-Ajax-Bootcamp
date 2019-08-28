<?php

include "../init.php";
$form = new form;
$queries = new queries;
if(isset($_POST['email']) && isset($_POST['tableName']) && isset($_POST['column'])){

  $email   = $form->input('email');
  $table   = $form->input('tableName');
  $column  = $form->input('column');
  if($queries->Crud("SELECT " . $column . " FROM " . $table . " WHERE " . $column . " = ?", [$email])){
      if($queries->Count() > 0){
          echo json_encode(['status' => 'error', "msg" => 'Sorry this email is already exist']);
      } else {
          echo json_encode(['status' => 'ok']);
      }
  }


}

?>