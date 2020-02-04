<?php
/**
 * Returns the list of cars.
 */
require 'connect.php';
$id=$_GET['id'];
$clients = [];
$sql = "SELECT * FROM `pages` WHERE `id` = $id";

if($result = mysqli_query($con,$sql))
{
  $cr = 0;
  while($row = mysqli_fetch_assoc($result))
  {
    
	$clients[$cr]['id']    = $row['id'];
    $clients[$cr]['page_name'] = $row['page_name'];
	$clients[$cr]['url'] = $row['url'];
	$clients[$cr]['entity_id'] = $row['entity_id'];
	$clients[$cr]['icon'] = $row['icon'];
    $cr++;
  }
    
  echo json_encode(['data'=>$clients]);
}
else
{
  http_response_code(404);
}