<?php

include "../init.php";
$queries = new queries;
if(isset($_FILES['image']['name'])){

$imageName = $_FILES['image']['name'];
$imageTmp  = $_FILES['image']['tmp_name'];
$extensions = ["jpg", "jpeg", "png"];
$imageExt   = pathinfo($imageName, PATHINFO_EXTENSION);
$imageExt   = strtolower($imageExt);
$store      = "../assets/img/";
if(!in_array($imageExt, $extensions)){

 echo json_encode(["status" => "extension", "msg" => "Sorry " . $imageExt . " is not a valid extension"]);

} else {
    $uniquName = rand().$imageName;
    move_uploaded_file($imageTmp, $store.$uniquName);
    $userId = $_SESSION['userId'];
    if($queries->Crud("INSERT INTO gallery (imageName, userId) VALUES (?,?)", [$uniquName, $userId])){

        echo json_encode(["status" => "success", "msg" => "Your image has been uploaded successfully"]);

    }
}


}



?>