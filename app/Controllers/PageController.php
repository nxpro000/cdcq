<?php

namespace App\Controllers;

class PageController {
    public static function route($route) {

        $routes = include dirname(__DIR__) 
            . DIRECTORY_SEPARATOR . 'Routes'
            . DIRECTORY_SEPARATOR . 'web.php';

        include dirname(__DIR__) 
            . DIRECTORY_SEPARATOR . 'views'
            . DIRECTORY_SEPARATOR . 'layout-top.php';

        if (array_key_exists($route, $routes)) {
            include dirname(__DIR__) 
                . DIRECTORY_SEPARATOR . 'views'
                . DIRECTORY_SEPARATOR . $routes[$route];
        } else {
            include dirname(__DIR__) 
                . DIRECTORY_SEPARATOR . 'views'
                . DIRECTORY_SEPARATOR . '404.php';
        }

        include dirname(__DIR__) 
            . DIRECTORY_SEPARATOR . 'views'
            . DIRECTORY_SEPARATOR . 'layout-bottom.php';
    }
}