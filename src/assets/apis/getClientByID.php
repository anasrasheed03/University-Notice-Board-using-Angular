<?php
/**
 * Returns the list of cars.
 */
require 'connect.php';
$id=$_GET['id'];
$clients = [];
$sql = "SELECT * FROM `clients` WHERE `id` = $id";

if($result = mysqli_query($con,$sql))
{
  $cr = 0;
  while($row = mysqli_fetch_assoc($result))
  {
    
	$clients[$cr]['id']    = $row['id'];
    $clients[$cr]['cust_name'] = $row['cust_name'];
	$clients[$cr]['cust_email'] = $row['cust_email'];
	$clients[$cr]['cust_website'] = $row['cust_website'];
	$clients[$cr]['cust_contactPerson'] = $row['cust_contactPerson'];
	$clients[$cr]['cust_subType'] = $row['cust_subType'];
	$clients[$cr]['cust_phone'] = $row['cust_phone'];
	$clients[$cr]['cust_description'] = $row['cust_description'];
	$clients[$cr]['cust_address'] = $row['cust_address'];
    $cr++;
  }
    
  echo json_encode(['data'=>$clients]);
}
else
{
  http_response_code(404);
}