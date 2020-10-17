<?php
/**
 * Returns the list of policies.
 */
require '../database.php';

$users = [];
$sql = "SELECT `st_id`, `mod_id`, `cas`,`es_1`, `es_2`, `final`, `lastUpdate` FROM `result`";

if($result = mysqli_query($con,$sql))
{
  $i = 0;
  while($row = mysqli_fetch_assoc($result))
  {
    $users[$i]['st_id'] = $row['st_id'];
    $users[$i]['mod_id'] = $row['mod_id'];
    $users[$i]['cas'] = $row['cas'];
    $users[$i]['es_1'] = $row['es_1'];
    $users[$i]['es_2'] = $row['es_2'];
    $users[$i]['final'] = $row['final'];
    $users[$i]['lastUpdate'] = $row['lastUpdate'];
    $i++;
  }

  echo json_encode($users);
}
else
{
  http_response_code(404);
}
