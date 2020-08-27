<?php
/**
 * Returns the list of policies.
 */
require '../database.php';

$users = [];
$sql = "SELECT `res_id`, `st_id`, `mod_id`, `cas`,`end_sem`, 'final' FROM `result`";

if($result = mysqli_query($con,$sql))
{
  $i = 0;
  while($row = mysqli_fetch_assoc($result))
  {
    $users[$i]['res_id']    = $row['res_id'];
    $users[$i]['st_id'] = $row['st_id'];
    $users[$i]['mod_id'] = $row['mod_id'];
    $users[$i]['cas'] = $row['cas'];
    $users[$i]['end_sem'] = $row['end_sem'];
    $users[$i]['final'] = $row['final'];
    $i++;
  }

  echo json_encode($users);
}
else
{
  http_response_code(404);
}

?>

