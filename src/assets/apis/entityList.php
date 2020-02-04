<?php
/**
 * Returns the list of cars.
 */
require 'connect.php';
    
$clients = [];
$sql = "SELECT * from entity_types";

if($result = mysqli_query($con,$sql))
{
  $cr = 0;
  while($row = mysqli_fetch_assoc($result))
  {
    $clients[$cr]['id']    = $row['id'];
    $clients[$cr]['entity_Name'] = $row['entity_Name'];
	$clients[$cr]['entity_Code'] = $row['entity_Code'];
    $cr++;
  }
    
  echo json_encode(['data'=>$clients]);
}
else
{
  http_response_code(404);
}