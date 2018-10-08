<?php
var_dump($_POST);
$comments = new Comment($_POST);
$comments->create();
echo json_encode($comments);
