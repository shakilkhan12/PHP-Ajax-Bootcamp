<?php

include "../init.php";
$form = new form;
$queries = new queries;
if(isset($_POST['imgId']) && isset($_POST['imgName'])){

    $imageId = $form->input('imgId');
    $imageName = $form->input('imgName');
    $userId = $_SESSION['userId'];
    unlink("../assets/img/" . $imageName);
    if($queries->Crud("DELETE FROM gallery WHERE imageId = ? && userId = ? ", [$imageId, $userId])){


        echo json_encode(["status" => "success", "msg" => "Your image has been deleted successfully"]);

    }

}


?>