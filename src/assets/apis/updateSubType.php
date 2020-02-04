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
  $sub_Name = mysqli_real_escape_string($con, trim($request->sub_Name));
  $sub_Code = mysqli_real_escape_string($con, trim($request->sub_Code));
 

  // Update.
  $sql = "UPDATE `sub_types` SET `sub_Name`='$sub_Name',`sub_Code` = '$sub_Code' where id={$id} limit 1";

  if(mysqli_query($con, $sql))
  {
    http_response_code(201);
	$client = [     
	  'status' => 201,
	  'message' => "Sub Type successfully update"
	 
    ];
    echo json_encode(['data'=>$client]);
  }
  else
  {
    $client = [     
	  'status' => 406,
	  'message' => "Sub Type Not Update"
	 
    ];
    echo json_encode(['data'=>$client]);
  }  
}
