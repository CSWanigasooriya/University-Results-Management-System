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
  $res_id = mysqli_real_escape_string($con, trim($request->res_id));
  $st_id = mysqli_real_escape_string($con, trim($request->st_id));
  $mod_id = mysqli_real_escape_string($con, trim($request->mod_id));
  $cas = mysqli_real_escape_string($con, trim($request->cas));
  $end_sem = mysqli_real_escape_string($con, trim($request->end_sem));
  $final = mysqli_real_escape_string($con, trim($request->final));
  
  // Create.
  $sql = "INSERT INTO `result`(`res_id`, `st_id`, `mod_id`, `cas`, `end_sem`, `final`) VALUES ('{$res_id}','{$st_id}','{$mod_id}','{$cas}','{$end_sem}','{$final}')";

  if (mysqli_query($con, $sql)) {
    http_response_code(201);
    $result = [
      'st_id' => $st_id,
      'mod_id' => $mod_id,
      'cas' => $cas,
      'end_sem' => $end_sem,
      'final' => $final,
      'res_id' => mysqli_insert_id($con)
    ];
    echo json_encode($result);
  } else {
    http_response_code(422);
  }
}
