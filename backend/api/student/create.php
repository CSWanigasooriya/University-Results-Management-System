<?php
require '../database.php';

// Get the posted data.
$postdata = file_get_contents("php://input");

if (isset($postdata) && !empty($postdata)) {
  // Extract the data.
  $request = json_decode($postdata);


  // Validate.
  if (trim($request->std_id) === '' ||  trim($request->std_email) ==='') {
    return http_response_code(400);
  }

  // Sanitize.
  $std_id = mysqli_real_escape_string($con, trim($request->std_id));
  $std_name = mysqli_real_escape_string($con, trim($request->std_name));
  $std_email= mysqli_real_escape_string($con, $request->std_email);
  $std_phone = mysqli_real_escape_string($con, trim($request->std_phone));

  // Create.
  $sql = "INSERT INTO `student`(`std_id`, `std_name`, `std_email`, `std_phone`) VALUES ('{$std_id}','{$std_name}','{$std_email}','{$std_phone}')";

  if (mysqli_query($con, $sql)) {
    http_response_code(201);
    $student = [
      'std_phone' => $std_phone,
      'std_email' => $std_email,
      'std_name' => $std_name,
      'std_id'    => mysqli_insert_id($con)
    ];
    echo json_encode($student);
  } else {
    http_response_code(422);
  }
}
