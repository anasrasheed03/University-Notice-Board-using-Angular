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
  $event_code = mysqli_real_escape_string($con, trim($request->data->event_code));
  $entity_Type = mysqli_real_escape_string($con, trim($request->data->entity_Type));
  $event_amount = mysqli_real_escape_string($con, trim($request->data->event_amount));
  $event_date = mysqli_real_escape_string($con, trim($request->data->event_date));
  
    

  // Store.
  $sql = "INSERT INTO `Subevent`(`event_name`,`event_code`,`entity_Type`,`event_amount`,`event_date`) VALUES ('{$event_name}','{$event_code}','{$entity_Type}','{$event_amount}','{$event_date}')";

  if(mysqli_query($con,$sql))
  {
    http_response_code(201);
    $event = [      
      'event_name' => $event_name,
	  'event_code' => $event_code,
	  'entity_Type' => $entity_Type,
	  'event_amount' => $event_amount,
	  'event_date' => $event_date,
	  'status' => 201,
	  'message' => "Event successfully Added"
	 
    ];
    echo json_encode(['data'=>$event]);
  }
  else
  {
	$eventError = [
		'status'=> 406,
		'message' => "Erorr in adding Event"
	];
	echo json_encode(['data'=> $eventError]);
  }
}