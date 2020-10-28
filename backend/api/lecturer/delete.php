<?php

require '../database.php';

// Extract, validate and sanitize the id.
$id = ($_GET['id'] !== null && $_GET['id'] )? mysqli_real_escape_string($con, $_GET['id']) : false;

if(!$id)
{
  return http_response_code(400);
}

// Delete.
$sql = "DELETE FROM `lecturer` WHERE `lec_id` ='{$id}' LIMIT 1";

if(mysqli_query($con, $sql))
{
  http_response_code(204);
}
else
{
  return http_response_code(422);
}
?>