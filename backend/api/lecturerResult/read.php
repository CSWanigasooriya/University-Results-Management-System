<?php

require '../database.php';

$users = [];
$sql = "SELECT `lec_id`, `mod_id`, `submit_date` FROM `lecturer_result`";

if($result = mysqli_query($con,$sql))
{
  $i = 0;
  while($row = mysqli_fetch_assoc($result))
  {
    $users[$i]['lec_id'] = $row['lec_id'];
    $users[$i]['mod_id'] = $row['mod_id'];
    $users[$i]['submit_date'] = $row['submit_date'];
    $i++;
  }

  echo json_encode($users);
}
else
{
  http_response_code(404);
}

?>

