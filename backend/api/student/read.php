<?php

require '../database.php';

$users = [];
$sql = "SELECT `std_id`, `std_name`, `std_email`, `std_phone` FROM `student`";

if($result = mysqli_query($con,$sql))
{
  $i = 0;
  while($row = mysqli_fetch_assoc($result))
  {
    $users[$i]['std_id']    = $row['std_id'];
    $users[$i]['std_name'] = $row['std_name'];
    $users[$i]['std_email'] = $row['std_email'];
    $users[$i]['std_phone'] = $row['std_phone'];
    $i++;
  }

  echo json_encode($users);
}
else
{
  http_response_code(404);
}

?>