<?php
include "../init.php";
$form = new form;
$queries = new queries;
if(isset($_POST['email']) && isset($_POST['password'])){

    $email    = $form->input("email");
    $password = $form->input('password');
    if($queries->Crud("SELECT * FROM users WHERE email = ? ", [$email])){
        if($queries->Count() > 0 ){

            $row = $queries->get();
            $id  = $row->id;
            $dbPassword = $row->password;
            if(password_verify($password, $dbPassword)){
              
                $_SESSION['userId'] = $id;
                $_SESSION['loader'] = true;
                echo json_encode(["status" => "ok"]);

            } else {
                echo json_encode(["status" => "PasswordError", "msg" => "Sorry invalid password"]);
            }

        } else {
            echo json_encode(["status" => "emailNotFound", "msg" => "Sorry invalid email"]);
        }

    }

}


?>