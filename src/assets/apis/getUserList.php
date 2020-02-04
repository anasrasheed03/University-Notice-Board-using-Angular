<?php
/**
 * Returns the list of cars.
 */
require 'connect.php';
    
$clients = [];
$sql = "SELECT * from tbl_login where status = 1";

if($result = mysqli_query($con,$sql))
{
  $cr = 0;
  while($row = mysqli_fetch_assoc($result))
  {
    $clients[$cr]['id']    = $row['id'];
    $clients[$cr]['username'] = $row['username'];
	$clients[$cr]['fname'] = $row['fname'];
	$clients[$cr]['password'] = $row['password'];
	$clients[$cr]['lname'] = $row['lname'];
	$clients[$cr]['email'] = $row['email'];
	$clients[$cr]['role'] = $row['role'];
	$clients[$cr]['enitity_type'] = $row['enitity_type'];
    $cr++;
  }
    
  echo json_encode(['data'=>$clients]);
}
else
{
  http_response_code(404);
}