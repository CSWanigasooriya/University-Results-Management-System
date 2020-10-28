<?php

require '../database.php';

// Extract, validate and sanitize the id.
$dep_id = ($_GET['id'] !== null && $_GET['dep_id'] )? mysqli_real_escape_string($con, $_GET['id']) : false;

if(!$dep_id)
{
  return http_response_code(400);
}

// Delete.
$sql = "DELETE FROM `department` WHERE `dep_id` ='{$dep_id}' LIMIT 1";

if(mysqli_query($con, $sql))
{
  http_response_code(204);
}
else
{
  return http_response_code(422);
}
?>
