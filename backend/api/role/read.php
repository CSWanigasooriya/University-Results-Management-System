<?php

require '../database.php';

$users = [];
$sql = "SELECT `uid`, `mod_id`, `email`, `role` FROM `role`";

if($result = mysqli_query($con,$sql))
{
  $i = 0;
  while($row = mysqli_fetch_assoc($result))
  {
    $users[$i]['uid'] = $row['uid'];
    $users[$i]['mod_id'] = $row['mod_id'];
    $users[$i]['email'] = $row['email'];
    $users[$i]['role'] = $row['role'];
    $i++;
  }

  echo json_encode($users);
}
else
{
  http_response_code(404);
}

?>