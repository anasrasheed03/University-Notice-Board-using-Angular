<?php
require 'connect.php';

// Get the posted data.
$postdata = file_get_contents("php://input");

if(isset($postdata) && !empty($postdata))
{
  // Extract the data.
  $request = json_decode($postdata);

	
  // Sanitize.
  $page_Name = mysqli_real_escape_string($con, trim($request->data->page_Name));
  $icon = mysqli_real_escape_string($con, trim($request->data->icon));
  $url = mysqli_real_escape_string($con, trim($request->data->url));
  $entity_id = mysqli_real_escape_string($con, trim($request->data->entity_id));
    

  // Store.
  $sql = "INSERT INTO `pages`(`page_name`,`icon`,`url`,`entity_id`) VALUES ('{$page_Name}','{$icon}','{$url}','{$entity_id}')";

  if(mysqli_query($con,$sql))
  {
    http_response_code(201);
    $event = [      
      'page_Name' => $page_Name,
	  'icon' => $icon,
	  'url' => $url,
	  'entity_id' => $entity_id,
	  'status' => 201,
	  'message' => "Page successfully Added"
	 
    ];
    echo json_encode(['data'=>$event]);
  }
  else
  {
	$eventError = [
		'status'=> 406,
		'message' => "Erorr in adding Page"
	];
	echo json_encode(['data'=> $eventError]);
  }
}