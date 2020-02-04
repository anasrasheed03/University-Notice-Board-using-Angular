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
  $page_Name = mysqli_real_escape_string($con, trim($request->data->page_Name));
  $icon = mysqli_real_escape_string($con, trim($request->data->icon));
  $url = mysqli_real_escape_string($con, trim($request->data->url));
  $entity_id = mysqli_real_escape_string($con, trim($request->data->entity_id));
 

  // Update.
  $sql = "UPDATE `pages` SET `page_name`='$page_Name',`icon` = '$icon',`url` = '$url',`entity_id` = '$entity_id', where id={$id} limit 1";

  if(mysqli_query($con, $sql))
  {
    http_response_code(201);
	$client = [     
	  'status' => 201,
	  'message' => "Page List successfully update"
	 
    ];
    echo json_encode(['data'=>$client]);
  }
  else
  {
    $client = [     
	  'status' => 406,
	  'message' => "Page List Not Update"
	 
    ];
    echo json_encode(['data'=>$client]);
  }  
}
