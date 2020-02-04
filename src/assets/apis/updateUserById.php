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
   $fname = mysqli_real_escape_string($con, trim($request->data->fname));
  $lname = mysqli_real_escape_string($con, trim($request->data->lname));
  $email = mysqli_real_escape_string($con, trim($request->data->email));
  $password = mysqli_real_escape_string($con, trim($request->data->password));
  $enitity_type = mysqli_real_escape_string($con, trim($request->data->entity_Type));
  $role = mysqli_real_escape_string($con, trim($request->data->role_Type));
 

  // Update.
  $sql = "UPDATE `tbl_login` SET `fname`='$fname',`lname` = '$lname',`email` = '$email',`password` = '$password',`enitity_type` = '$enitity_type',`role` = '$role', where id={$id} limit 1";

  if(mysqli_query($con, $sql))
  {
    http_response_code(201);
	$client = [     
	  'status' => 201,
	  'message' => "User successfully update"
	 
    ];
    echo json_encode(['data'=>$client]);
  }
  else
  {
    $client = [     
	  'status' => 406,
	  'message' => "User Not Update"
	 
    ];
    echo json_encode(['data'=>$client]);
  }  
}
