<?php
/**
 * Returns the list of cars.
 */
require 'connect.php';
    
$clients = [];
$sql = "SELECT * from menu_list";

if($result = mysqli_query($con,$sql))
{
  $cr = 0;
  while($row = mysqli_fetch_assoc($result))
  {
    $clients[$cr]['id']    = $row['id'];
    $clients[$cr]['menu_Name'] = $row['menu_Name'];
	$clients[$cr]['menu_Code'] = $row['menu_Code'];
    $cr++;
  }
    
  echo json_encode(['data'=>$clients]);
}
else
{
  http_response_code(404);
}