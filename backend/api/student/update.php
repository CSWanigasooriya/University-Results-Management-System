<?php
require '../database.php';

// Get the posted data.
$postdata = file_get_contents("php://input");

if(isset($postdata) && !empty($postdata))
{
  // Extract the data.
  $request = json_decode($postdata);

  // Validate.
  if (trim($request->std_id) == '' || trim($request->std_name) == '' ||  trim($request->std_email) == ''  ||  trim($request->std_phone) == '') {
    return http_response_code(400);
  }

  // Sanitize.
  $std_id = mysqli_real_escape_string($con, trim($request->std_id));
  $std_name = mysqli_real_escape_string($con, trim($request->std_name));
  $std_email = mysqli_real_escape_string($con, $request->std_email);
  $std_phone = mysqli_real_escape_string($con, trim($request->std_phone));

  // Update.
  $sql = "UPDATE `student` SET `std_id`=`$std_id`,`std_name`=`$std_name`,`std_email`=`$std_email`,`std_phone`=`$std_phone` WHERE `std_id` = '{$std_id}' LIMIT 1";

  if(mysqli_query($con, $sql))
  {
    http_response_code(204);
  }
  else
  {
    return http_response_code(422);
  }  
}
