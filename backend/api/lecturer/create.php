<?php
require '../database.php';

// Get the posted data.
$postdata = file_get_contents("php://input");

if (isset($postdata) && !empty($postdata)) {
  // Extract the data.
  $request = json_decode($postdata);


  // Validate.
  // if (trim($request->lec_id) == '' ||  trim($request->lec_email) == '' || trim($request->lec_name) == '' || trim($request->lec_dep) == '') {
  //   return http_response_code(400);
  // }
  // Sanitize.
  $lec_id = mysqli_real_escape_string($con, trim($request->lec_id));
  $dept_id = mysqli_real_escape_string($con, trim($request->dept_id));
  $lec_name = mysqli_real_escape_string($con, trim($request->lec_name));
  $lec_email = mysqli_real_escape_string($con, trim($request->lec_email));


  // Create.
  $sql = "INSERT INTO `lecturer`(`lec_id`, `dept_id`, `lec_name`, `lec_email`) VALUES ('{$lec_id}','{$dept_id}','{$lec_name}','{$lec_email}')";
  if (mysqli_query($con, $sql)) {
    http_response_code(201);
    $lecturer = [
      'lec_email' => $lec_email,
      'lec_name' => $lec_name,
      'dept_id' => $dept_id,
      'lec_id'  => $lec_id
    ];
    echo json_encode($lecturer);
  } else {
    http_response_code(422);
  }
}
