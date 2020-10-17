<?php
require '../database.php';

// Get the posted data.
$postdata = file_get_contents("php://input");

if (isset($postdata) && !empty($postdata)) {
  // Extract the data.
  $request = json_decode($postdata);

  // Sanitize.
  $st_id = mysqli_real_escape_string($con, trim($request->st_id));
  $mod_id = mysqli_real_escape_string($con, trim($request->mod_id));
  $cas = mysqli_real_escape_string($con, trim($request->cas));
  $es_1 = mysqli_real_escape_string($con, trim($request->es_1));
  $es_2 = mysqli_real_escape_string($con, trim($request->es_2));
  $final = mysqli_real_escape_string($con, trim($request->final));
  $mark = mysqli_real_escape_string($con, trim($request->mark));


  // Create.

  $sql = "INSERT INTO `result`(`st_id`, `mod_id`, `cas`, `es_1`, `es_2`, `final`, `mark`, `lastUpdate`) VALUES ('{$st_id}','{$mod_id}','{$cas}','{$es_1}','{$es_2}','{$final}','{$mark}',null)";
  $query = "UPDATE `result` SET `st_id`='$st_id',`mod_id`='$mod_id',`cas`='$cas',`es_1`='$es_1',`es_2`='$es_2',`final`='$final',`mark`='$mark' WHERE `st_id` = '$st_id' AND `mod_id`='$mod_id' LIMIT 1";
  if (mysqli_query($con, $sql)) {
    $result = [
      'st_id' => $st_id,
      'mod_id' => $mod_id,
      'cas' => $cas,
      'es_1' => $es_1,
      'es_2' => $es_2,
      'final' => $final,
      'mark' => $mark
    ];
    echo json_encode($result);
  } else {
    mysqli_query($con, $query);
  }
}
?>
