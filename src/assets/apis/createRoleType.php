<?php
require 'connect.php';

// Get the posted data.
$postdata = file_get_contents("php://input");

if(isset($postdata) && !empty($postdata))
{
  // Extract the data.
  $request = json_decode($postdata);

	
  // Sanitize.
  $role_Name = mysqli_real_escape_string($con, trim($request->data->role_Name));
  $role_Code = mysqli_real_escape_string($con, trim($request->data->role_Code));
  $entity_Type = mysqli_real_escape_string($con, trim($request->data->entity_Type));
  $writeRole = mysqli_real_escape_string($con, trim($request->data->writeRole));
  $read = mysqli_real_escape_string($con, trim($request->data->read));
    

  // Store.
  $sql = "INSERT INTO `role_types`(`role_Name`,`role_Code`,`entity_Type`,`writeRole`,`read`) VALUES ('{$role_Name}','{$role_Code}','{$entity_Type}','{$writeRole}','{$read}')";

  if(mysqli_query($con,$sql))
  {
    http_response_code(201);
    $event = [      
      'role_Name' => $role_Name,
	  'role_Code' => $role_Code,
	  'entity_Type' => $entity_Type,
	  'writeRole' => $writeRole,
	  'read' => $read,
	  'status' => 201,
	  'message' => "Role successfully Added"
	 
    ];
    echo json_encode(['data'=>$event]);
  }
  else
  {
	$eventError = [
		'status'=> 406,
		'message' => "Erorr in adding Role"
	];
	echo json_encode(['data'=> $eventError]);
  }
}