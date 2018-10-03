<?php

require '../../app/common.php';


$comments = Comment::findAll();

// 2. convert to Json
header('Content-type: application/json');
echo json_encode($comments);
