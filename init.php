<?php
include "startSession.php";
include "config.php";

spl_autoload_register(function($className){

    include "classes/$className.php";

});


?>