<?php
require 'connect.php';

// Get the posted data.
$postdata = file_get_contents("php://input");

if(isset($postdata) && !empty($postdata))
{
  // Extract the data.
  $request = json_decode($postdata);

	
  // Sanitize.
  $entity_Name = mysqli_real_escape_string($con, trim($request->data->entity_Name));
  $entity_Code = mysqli_real_escape_string($con, trim($request->data->entity_Code));
    

  // Store.
  $sql = "INSERT INTO `entity_types`(`entity_Name`,`entity_Code`) VALUES ('{$entity_Name}','{$entity_Code}')";

  if(mysqli_query($con,$sql))
  {
    http_response_code(201);
    $event = [      
      'entity_Name' => $entity_Name,
	  'entity_Code' => $entity_Code,
	  'status' => 201,
	  'message' => "Entity successfully Added"
	 
    ];
    echo json_encode(['data'=>$event]);
  }
  else
  {
	$eventError = [
		'status'=> 406,
		'message' => "Erorr in adding Entity"
	];
	echo json_encode(['data'=> $eventError]);
  }
}