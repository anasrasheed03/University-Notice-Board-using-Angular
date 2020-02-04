<?php
/**
 * Returns the list of cars.
 */
require 'connect.php';
    
$clients = [];
$sql = "SELECT * from role_types where status = 1";

if($result = mysqli_query($con,$sql))
{
  $cr = 0;
  while($row = mysqli_fetch_assoc($result))
  {
    $clients[$cr]['id']    = $row['id'];
    $clients[$cr]['role_Name'] = $row['role_Name'];
	$clients[$cr]['role_Code'] = $row['role_Code'];
    $cr++;
  }
    
  echo json_encode(['data'=>$clients]);
}
else
{
  http_response_code(404);
}