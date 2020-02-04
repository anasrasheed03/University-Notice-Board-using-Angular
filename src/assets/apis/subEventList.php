<?php
/**
 * Returns the list of cars.
 */
require 'connect.php';
    
$clients = [];
$sql = "SELECT * from subevent";

if($result = mysqli_query($con,$sql))
{
  $cr = 0;
  while($row = mysqli_fetch_assoc($result))
  {
    $clients[$cr]['id']    = $row['id'];
    $clients[$cr]['event_name'] = $row['event_name'];
	$clients[$cr]['event_code'] = $row['event_code'];
	$clients[$cr]['entity_Type'] = $row['entity_Type'];
	$clients[$cr]['event_amount'] = $row['event_amount'];
	$clients[$cr]['event_date'] = $row['event_date'];
	
    $cr++;
  }
    
  echo json_encode(['data'=>$clients]);
}
else
{
  http_response_code(404);
}