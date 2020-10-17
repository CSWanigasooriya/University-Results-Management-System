<?php
require '../database.php';

// Get the posted data.
$postdata = file_get_contents("php://input");

if (isset($postdata) && !empty($postdata)) {
  // Extract the data.
  $request = json_decode($postdata);

  // Validate.
  // if (trim($request->res_id) === '' ||  trim($request->std_id) === '' ||  trim($request->mod_id) === '' ||  trim($request->cas) === '' ||  trim($request->end_sem) === '' ||  trim($request->final) === '') {
  //   return http_response_code(400);
  // }
}

// Sanitize.

$st_id = mysqli_real_escape_string($con, trim($request->st_id));
$mod_id = mysqli_real_escape_string($con, trim($request->mod_id));
$cas = mysqli_real_escape_string($con, trim($request->cas));
$es_1 = mysqli_real_escape_string($con, trim($request->es_1));
$es_2 = mysqli_real_escape_string($con, trim($request->es_2));
$final = mysqli_real_escape_string($con, trim($request->final));
$mark =  mysqli_real_escape_string($con, trim($request->mark));

// Update.
$sql = "UPDATE `result` SET `st_id`='$st_id',`mod_id`='$mod_id',`cas`='$cas',`es_1`='$es_1',`es_2`='$es_2',`final`='$final',`mark`='$mark' WHERE `st_id` = '{$st_id}' AND `mod_id`='{$mod_id}' LIMIT 1";

if (mysqli_query($con, $sql)) {
  http_response_code(204);
} else {
  return http_response_code(422);
}
?>