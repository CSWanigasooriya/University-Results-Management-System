<?php
require '../database.php';

// Get the posted data.
$postdata = file_get_contents("php://input");

if (isset($postdata) && !empty($postdata)) {
  // Extract the data.
  $request = json_decode($postdata);


  // Validate.
   if (trim($request->dept_id) === '' ||  trim($request->dept_name) ===''){
    return http_response_code(400);
  }

  // Sanitize.
  $dept_id = mysqli_real_escape_string($con, trim($request->dept_id));
  $dept_name = mysqli_real_escape_string($con, trim($request->dept_name));
  $hod = mysqli_real_escape_string($con, trim($request->hod));
  
  
  // Create.
  $sql = "INSERT INTO `department`(`dept_id`, `dept_name`, `hod`) VALUES ('{$dept_id}','{$dept_name}','{$hod}')";

  if (mysqli_query($con, $sql)) {
    http_response_code(201);
    $department = [
      'dept_name' => $dept_name,
      'hod' => $hod,
      'dep_id'=> mysqli_insert_id($con)
    ];
    echo json_encode($department);
  } else {
    http_response_code(422);
  }
}
