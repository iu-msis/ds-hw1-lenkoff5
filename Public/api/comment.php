<?php

require '../../app/common.php';

if ($_SERVER['REQUEST_METHOD'] == 'POST') {
  $comment = new Comment($_POST);
  $comment->create();
  echo json_encode($comment);
  exit;
}

$comments = Comment::findAll();


$json = json_encode($comments, JSON_PRETTY_PRINT);

// 2. convert to Json
header('Content-type: application/json');
echo $json;
