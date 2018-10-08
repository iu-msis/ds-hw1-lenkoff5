<?php

require '../../app/common.php';

if ($_SERVER['REQUEST_METHOD'] == 'POST') {
  require 'commentPost.php';
  exit;
}

$comments = Comment::findAll();


$json = json_encode($comments, JSON_PRETTY_PRINT);

// 2. convert to Json
header('Content-type: application/json');
echo $json;
