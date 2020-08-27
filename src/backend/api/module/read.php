<?php
/**
 * Returns the list of policies.
 */
require '../database.php';

$users = [];
$sql = "SELECT `mod_id`, `dep_id`, `mod_name`, `mod_credit`, `period` FROM `module`";

if($result = mysqli_query($con,$sql))
{
  $i = 0;
  while($row = mysqli_fetch_assoc($result))
  {
    $users[$i]['mod_id']    = $row['mod_id'];
    $users[$i]['dep_id'] = $row['dep_id'];
    $users[$i]['mod_name'] = $row['mod_name'];
    $users[$i]['mod_credit'] = $row['mod_credit'];
    $users[$i]['period'] = $row['period'];
    $i++;
  }

  echo json_encode($users);
}
else
{
  http_response_code(404);
}

?>