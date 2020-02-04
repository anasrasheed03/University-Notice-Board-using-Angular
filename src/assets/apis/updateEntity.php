<?php
require 'connect.php';

// Get the posted data.
$postdata = file_get_contents("php://input");

if(isset($postdata) && !empty($postdata))
{
  // Extract the data.
  $request = json_decode($postdata);
	
  // Validate.
  if (trim($request->id)=='') {
    return http_response_code(400);
  }
    
  // Sanitize.
  $id    = mysqli_real_escape_string($con, (int)$request->id);
  $entity_Name = mysqli_real_escape_string($con, trim($request->entity_Name));
  $entity_Code = mysqli_real_escape_string($con, trim($request->entity_Code));
 

  // Update.
  $sql = "UPDATE `entity_types` SET `entity_Name`='$entity_Name',`entity_Code` = '$entity_Code' where id={$id} limit 1";

  if(mysqli_query($con, $sql))
  {
    http_response_code(201);
	$client = [     
	  'status' => 201,
	  'message' => "Entity Type successfully update"
	 
    ];
    echo json_encode(['data'=>$client]);
  }
  else
  {
    $client = [     
	  'status' => 406,
	  'message' => "Entity Type Not Update"
	 
    ];
    echo json_encode(['data'=>$client]);
  }  
}
