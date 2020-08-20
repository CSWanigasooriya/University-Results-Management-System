<?php
/**
 * Returns the list of policies.
 */
require 'database.php';

$users = [];
$sql = "SELECT uid, displayName, email, photoURL FROM user";

if($result = mysqli_query($con,$sql))
{
  $i = 0;
  while($row = mysqli_fetch_assoc($result))
  {
    $users[$i]['uid']    = $row['uid'];
    $users[$i]['displayName'] = $row['displayName'];
    $users[$i]['email'] = $row['email'];
    $users[$i]['photoURL'] = $row['photoURL'];
    $i++;
  }

  echo json_encode($users);
}
else
{
  http_response_code(404);
}

?>