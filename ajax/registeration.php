<?php

include "../init.php";
$form  = new form;
$queries = new queries;
if(isset($_POST['fullName']) && isset($_POST['email']) && isset($_POST['password'])){

  $fullName = $form->input("fullName");
  $email    = $form->input("email");
  $password = $form->input("password");
  $hashPassword = password_hash($password, PASSWORD_DEFAULT);
  if($queries->Crud("INSERT INTO users (fullName, email, password) VALUES (?,?,?)", [$fullName, $email, $hashPassword])){

    echo json_encode(['status' => 'success', "msg" => 'Your form has been submitted successfully']);
    $_SESSION['accountCreated'] = "Your account has been created successfully"; 

  } else {
      echo json_encode(['status' => 'error', 'msg' => 'Sorry connection error']);
  }


}



?>