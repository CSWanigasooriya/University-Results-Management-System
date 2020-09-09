<?php
require '../database.php';

// Get the posted data.
$postdata = file_get_contents("php://input");

if (isset($postdata) && !empty($postdata)) {
  // Extract the data.
  $request = json_decode($postdata);


  // Validate.
  if (trim($request->uid) === '' ||  trim($request->email) === '') {
    return http_response_code(400);
  }

  // Sanitize.
  $uid = mysqli_real_escape_string($con, trim($request->uid));
  $displayName = mysqli_real_escape_string($con, trim($request->displayName));
  $email = mysqli_real_escape_string($con, $request->email);
  $photoURL = mysqli_real_escape_string($con, trim($request->photoURL));

  // Create.
  $sql = "REPLACE INTO `user`(`uid`, `displayName`, `email`, `photoURL`) VALUES ('{$uid}','{$displayName}','{$email}','{$photoURL}')";

  if (mysqli_query($con, $sql)) {
    http_response_code(201);
    $user = [
      'photoURL' => $photoURL,
      'email' => $email,
      'displayName' => $displayName,
      'uid'    => mysqli_insert_id($con)
    ];
    echo json_encode($user);
  } else {
    http_response_code(402);
  }
}
