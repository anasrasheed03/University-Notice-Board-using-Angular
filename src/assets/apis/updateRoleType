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
  $role_Name = mysqli_real_escape_string($con, trim($request->role_Name));
  $role_Code = mysqli_real_escape_string($con, trim($request->role_Code));
 

  // Update.
  $sql = "UPDATE `role_types` SET `role_Name`='$role_Name',`role_Code` = '$role_Code' where id={$id} limit 1";

  if(mysqli_query($con, $sql))
  {
    http_response_code(201);
	$client = [     
	  'status' => 201,
	  'message' => "Role Type successfully update"
	 
    ];
    echo json_encode(['data'=>$client]);
  }
  else
  {
    $client = [     
	  'status' => 406,
	  'message' => "Role Type Not Update"
	 
    ];
    echo json_encode(['data'=>$client]);
  }  
}
