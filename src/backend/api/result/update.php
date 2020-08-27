<?php
require '../database.php';

// Get the posted data.
$postdata = file_get_contents("php://input");

if (isset($postdata) && !empty($postdata)) {
  // Extract the data.
  $request = json_decode($postdata);

  // Validate.
  if (trim($request->res_id) === '' ||  trim($request->std_id) === '' ||  trim($request->mod_id) === '' ||  trim($request->cas) === '' ||  trim($request->end_sem) === '' ||  trim($request->final) === '') {
    return http_response_code(400);
  }
}

// Sanitize.
$res_id = mysqli_real_escape_string($con, trim($request->res_id));
$st_id = mysqli_real_escape_string($con, trim($request->st_id));
$mod_id = mysqli_real_escape_string($con, trim($request->mod_id));
$cas = mysqli_real_escape_string($con, $request->cas);
$end_sem = mysqli_real_escape_string($con, $request->end_sem);
$final = mysqli_real_escape_string($con, trim($request->final));

// Update.
$sql = "UPDATE `result` SET `res_id`=`$res_id`,`st_id`=`$st_id`,`mod_id`=`$mod_id`,`cas`=`$cas`,`end_sem`=`$end_sem`,`final`=`$subscriber` WHERE `res_id` = '{$res_id}' LIMIT 1";

if (mysqli_query($con, $sql)) {
  http_response_code(204);
} else {
  return http_response_code(422);
}
