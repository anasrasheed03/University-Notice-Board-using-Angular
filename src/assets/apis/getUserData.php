<?php
/**
 * Returns the list of cars.
 */
require 'connect.php';
$id=$_GET['id'];
$details;
$sql = "SELECT * FROM `tbl_login` WHERE `id` = $id";

if($result = mysqli_query($con,$sql))
{
  while($row = mysqli_fetch_assoc($result))
  {
    
	$details['id']    = $row['id'];
    $details['username'] = $row['username'];
	$details['fname'] = $row['fname'];
	$details['lname'] = $row['lname'];
	$details['email'] = $row['email'];
	$details['role'] = $row['role'];
	$details['enitity_type'] = $row['enitity_type'];
  }
    
  echo json_encode(['data'=>$details]);
}
else
{
  http_response_code(404);
}