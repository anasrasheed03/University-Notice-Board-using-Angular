<?php
require 'connect.php';

// Get the posted data.
$postdata = file_get_contents("php://input");

if(isset($postdata) && !empty($postdata))
{
  // Extract the data.
  $request = json_decode($postdata);

	
  // Sanitize.
  $event_name = mysqli_real_escape_string($con, trim($request->data->event_name));
  $minimum_limit = mysqli_real_escape_string($con, trim($request->data->minimum_limit));
  $sub_Type = mysqli_real_escape_string($con, trim($request->data->sub_Type));
    

  // Store.
  $sql = "INSERT INTO `events`(`event_name`,`minimum_limit`,`sub_Type`) VALUES ('{$event_name}','{$minimum_limit}','{$sub_Type}')";

  if(mysqli_query($con,$sql))
  {
    http_response_code(201);
    $event = [      
      'event_name' => $event_name,
	  'minimum_limit' => $minimum_limit,
	  'sub_Type' => $sub_Type,
	  'status' => 201,
	  'message' => "Event successfully registered"
	 
    ];
    echo json_encode(['data'=>$event]);
  }
  else
  {
	$eventError = [
		'status'=> 406,
		'message' => "Erorr in adding event"
	];
	echo json_encode(['data'=> $eventError]);
  }
}