<?php
session_start();
// echo "<pre>";
// var_dump($_SERVER);
// echo "</pre>";
// return;

require_once dirname(__DIR__) 
    . DIRECTORY_SEPARATOR . 'vendor' 
    . DIRECTORY_SEPARATOR . 'autoload.php';

use App\Controllers\PageController;

$route = $_GET['route'] ?? 'home';

PageController::route($route);
