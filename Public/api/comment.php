<?php

require '../../app/common.php';


$comments = Comment::findAll();


$json = json_encode($comments, JSON_PRETTY_PRINT);

// 2. convert to Json
header('Content-type: application/json');
echo $json;
