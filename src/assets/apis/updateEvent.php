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
  $event_name = mysqli_real_escape_string($con, trim($request->event_name));
  $minimum_limit = mysqli_real_escape_string($con, trim($request->minimum_limit));
  $sub_Type = mysqli_real_escape_string($con, trim($request->sub_Type));
 

  // Update.
  $sql = "UPDATE `events` SET `event_name`='$event_name',`minimum_limit` = '$minimum_limit',`sub_Type` = '$sub_Type'where id={$id} limit 1";

  if(mysqli_query($con, $sql))
  {
    http_response_code(201);
	$client = [     
	  'status' => 201,
	  'message' => "event successfully update"
	 
    ];
    echo json_encode(['data'=>$client]);
  }
  else
  {
    $client = [     
	  'status' => 406,
	  'message' => "event Not Update"
	 
    ];
    echo json_encode(['data'=>$client]);
  }  
}
