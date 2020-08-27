<?php
require '../database.php';

// Get the posted data.
$postdata = file_get_contents("php://input");

if(isset($postdata) && !empty($postdata))
{
  // Extract the data.
  $request = json_decode($postdata);

  // Validate.
  if (trim($request->mod_id) == '' || trim($request->dep_id) == '' ||  trim($request->mod_name) == ''  ||  trim($request->mod_credit) === '' ||  trim($request->period) == '') {
    return http_response_code(400);
  }

  // Sanitize.
  $mod_id = mysqli_real_escape_string($con, trim($request->mod_id));
  $dep_id = mysqli_real_escape_string($con, trim($request->dep_id));
  $mod_name = mysqli_real_escape_string($con, trim($request->mod_name));
  $mod_credit = mysqli_real_escape_string($con, trim($request->mod_credit));
 $period = mysqli_real_escape_string($con, trim($request->period));

  // Update.
  $sql = "UPDATE `module` SET `mod_id`=`$mod_id`,`dep_id`=`$dep_id`,`mod_name`=`$mod_name`,`mod_credit`=`$mod_credit`,`period`=`$period` WHERE `mod_id`= '{$mod_id}' LIMIT 1";
  if(mysqli_query($con, $sql))
  {
    http_response_code(204);
  }
  else
  {
    return http_response_code(422);
  }  
}