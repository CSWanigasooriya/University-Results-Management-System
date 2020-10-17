<?php
require '../database.php';

// Get the posted data.
$postdata = file_get_contents("php://input");

if(isset($postdata) && !empty($postdata))
{
  // Extract the data.
  $request = json_decode($postdata);

  // Validate.
 if (trim($request->dept_id) === '' ||  trim($request->dept_name) ==='' ||  trim($request->hod) ===''){
  return http_response_code(400);
  }

  // Sanitize.
  $dept_id = mysqli_real_escape_string($con, trim($request->dept_id));
  $dept_name = mysqli_real_escape_string($con, trim($request->dept_name));
  $hod = mysqli_real_escape_string($con, trim($request->hod));

  // Update.
  $sql = "UPDATE `department` SET `dept_id`=`$dept_id`,`dept_name`=`$dept_name`,`hod`=`$hod` LIMIT 1";

  if(mysqli_query($con, $sql))
  {
    http_response_code(204);
  }
  else
  {
    return http_response_code(422);
  }  
}
