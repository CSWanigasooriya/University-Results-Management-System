<?php
require '../database.php';

// Get the posted data.
$postdata = file_get_contents("php://input");

if (isset($postdata) && !empty($postdata)) {
  // Extract the data.
  $request = json_decode($postdata);


  // // Validate.
  //  if (trim($request->res_id) === '' ||  trim($request->std_id) ==='' ||  trim($request->mod_id) ==='' ||  trim($request->cas) ==='' ||  trim($request->end_sem) ==='' ||  trim($request->final) ===''){
  //   return http_response_code(400);
  //  }
  

  // Sanitize.
  $lec_id = mysqli_real_escape_string($con, trim($request->lec_id));
  $mod_id = mysqli_real_escape_string($con, trim($request->mod_id));
  
  // Create.
  $sql = "REPLACE INTO `lecturer_result`(`lec_id`, `mod_id`) VALUES ('{$lec_id}','{$mod_id}')";

  if (mysqli_query($con, $sql)) {
    http_response_code(201);
    $result = [
      'lec_id' => $lec_id,
      'mod_id' => $mod_id
    ];
    echo json_encode($result);
  } else {
    http_response_code(422);
  }
}
?>