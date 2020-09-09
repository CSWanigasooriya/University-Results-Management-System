<?php
/**
 * Returns the list of policies.
 */
require '../database.php';

$users = [];
$sql = "SELECT `uid`, `displayName`, `email`, `photoURL`, `lastUpdate` FROM user";

if($result = mysqli_query($con,$sql))
{
  $i = 0;
  while($row = mysqli_fetch_assoc($result))
  {
    $users[$i]['uid']    = $row['uid'];
    $users[$i]['displayName'] = $row['displayName'];
    $users[$i]['email'] = $row['email'];
    $users[$i]['photoURL'] = $row['photoURL'];
    $users[$i]['lastUpdate'] = $row['lastUpdate'];
    $i++;
  }

  echo json_encode($users);
}
else
{
  http_response_code(404);
}

?>