<?php

require '../database.php';

$users = [];
$sql = "SELECT `lec_id`, `dept_id`, `lec_name`, `lec_email` FROM `lecturer`";

if($result = mysqli_query($con,$sql))
{
  $i = 0;
  while($row = mysqli_fetch_assoc($result))
  {
    $users[$i]['lec_id'] = $row['lec_id'];
    $users[$i]['dept_id'] = $row['dept_id'];
    $users[$i]['lec_name'] = $row['lec_name'];
    $users[$i]['lec_email'] = $row['lec_email'];
    $i++;
  }

  echo json_encode($users);
}
else
{
  http_response_code(404);
}

?>