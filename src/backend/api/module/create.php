<?php
require '../database.php';

// Get the posted data.
$postdata = file_get_contents("php://input");

if (isset($postdata) && !empty($postdata)) {
  // Extract the data.
  $request = json_decode($postdata);


  // Validate.
  if (trim($request->mod_id) === '' ||  trim($request->mod_name) ===''  ||  trim($request->dep_id) ===''||  trim($request->mod_credit) ==='' ||  trim($request->semester) ==='') {
    return http_response_code(400);
  }

  // Sanitize.
  $mod_id = mysqli_real_escape_string($con, trim($request->mod_id));
  $dep_id = mysqli_real_escape_string($con, trim($request->dep_id));
  $mod_name= mysqli_real_escape_string($con, trim($request->mod_name));
  $mod_credit = mysqli_real_escape_string($con, trim($request->mod_credit));
$semester = mysqli_real_escape_string($con, trim($request->semester));

  // Create.

  $sql = "INSERT INTO `module`(`mod_id`, `dep_id`, `mod_name`, `mod_credit`, `semester`) VALUES ('{$mod_id}','{$dep_id}','{$mod_name}','{$mod_credit}','{$semester}')";
  if (mysqli_query($con, $sql)) {
    http_response_code(201);
    $module = [
      'semester' => $semester,
      'mod_credit' => $mod_credit,
      'mod_name' => $mod_name,
       'dep_id' => $dep_id,
      'mod_id'    => mysqli_insert_id($con)
    ];
    echo json_encode($module);
  } else {
    http_response_code(422);
  }
}