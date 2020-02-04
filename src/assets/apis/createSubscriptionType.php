<?php
require 'connect.php';

// Get the posted data.
$postdata = file_get_contents("php://input");

if(isset($postdata) && !empty($postdata))
{
  // Extract the data.
  $request = json_decode($postdata);

	
  // Sanitize.
  $sub_Name = mysqli_real_escape_string($con, trim($request->data->sub_Name));
  $sub_Code = mysqli_real_escape_string($con, trim($request->data->sub_Code));
    

  // Store.
  $sql = "INSERT INTO `sub_types`(`sub_Name`,`sub_Code`) VALUES ('{$sub_Name}','{$sub_Code}')";

  if(mysqli_query($con,$sql))
  {
    http_response_code(201);
    $event = [      
      'sub_Name' => $sub_Name,
	  'sub_Code' => $sub_Code,
	  'status' => 201,
	  'message' => "Subscription successfully Added"
	 
    ];
    echo json_encode(['data'=>$event]);
  }
  else
  {
	$eventError = [
		'status'=> 406,
		'message' => "Erorr in adding Subscription"
	];
	echo json_encode(['data'=> $eventError]);
  }
}