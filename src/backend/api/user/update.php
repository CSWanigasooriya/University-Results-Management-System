<?php
require '../database.php';

// Get the posted data.
$postdata = file_get_contents("php://input");

if(isset($postdata) && !empty($postdata))
{
  // Extract the data.
  $request = json_decode($postdata);

  // Validate.
  if (trim($request->uid) == '' || trim($request->displayName) == '' ||  trim($request->email) == '') {
    return http_response_code(400);
  }

  // Sanitize.
  $uid = mysqli_real_escape_string($con, trim($request->uid));
  $displayName = mysqli_real_escape_string($con, trim($request->displayName));
  $email = mysqli_real_escape_string($con, $request->email);
  $photoURL = mysqli_real_escape_string($con, trim($request->photoURL));

  // Update.
  $sql = "UPDATE `user` SET `displayName`='$displayName',`email`='$email',`photoURL`=`$photoURL` WHERE `uid` = '{$uid}' LIMIT 1";

  if(mysqli_query($con, $sql))
  {
    http_response_code(204);
  }
  else
  {
    return http_response_code(422);
  }  
}
