<?php
/**
 * Returns the list of policies.
 */
require '../database.php';

$users = [];
$sql = "SELECT `dept_id`, `dept_name`, `hod` FROM `department`";

if($result = mysqli_query($con,$sql))
{
  $i = 0;
  while($row = mysqli_fetch_assoc($result))
  {
    $users[$i]['dept_id']    = $row['dept_id'];
    $users[$i]['dept_name'] = $row['dept_name'];
    $users[$i]['hod'] = $row['hod'];
    $i++;
  }

  echo json_encode($users);
}
else
{
  http_response_code(404);
}

?>

