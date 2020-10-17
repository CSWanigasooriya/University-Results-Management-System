<?php
require '../database.php';

// Get the posted data.
$postdata = file_get_contents("php://input");

if(isset($postdata) && !empty($postdata))
{
  // Extract the data.
  $request = json_decode($postdata);

  // // Validate.
  // if (trim($request->mod_id) == '' || trim($request->dep_id) == '' ||  trim($request->mod_name) == ''  ||  trim($request->mod_credit) === '' ||  trim($request->period) == '') {
  //   return http_response_code(400);
  // }

  // Sanitize.
  $lec_id = mysqli_real_escape_string($con, trim($request->lec_id));
  $dept_id = mysqli_real_escape_string($con, trim($request->dept_id));
  $lec_name = mysqli_real_escape_string($con, trim($request->lec_name));
  $lec_email = mysqli_real_escape_string($con, trim($request->lec_email));

  // Update.
  $sql = "UPDATE `lecturer` SET `lec_id`='$lec_id',`dept_id`='$dept_id',`lec_name`='$lec_name',`lec_email`='$lec_email' LIMIT 1";
  if(mysqli_query($con, $sql))
  {
    http_response_code(204);
  }
  else
  {
    return http_response_code(422);
  }  
}