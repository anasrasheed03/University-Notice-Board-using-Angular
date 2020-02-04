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
  $cust_name = mysqli_real_escape_string($con, trim($request->cust_name));
  $cust_email = mysqli_real_escape_string($con, trim($request->cust_email));
  $cust_website = mysqli_real_escape_string($con, trim($request->cust_website));
  $cust_subType = mysqli_real_escape_string($con, trim($request->cust_subType));
  $cust_contactPerson = mysqli_real_escape_string($con, trim($request->cust_contactPerson));
  $cust_phone = mysqli_real_escape_string($con, trim($request->cust_phone));
  $cust_description = mysqli_real_escape_string($con, trim($request->cust_description));
  $cust_address = mysqli_real_escape_string($con, trim($request->cust_address));
 

  // Update.
  $sql = "UPDATE `clients` SET `cust_name`='$cust_name',`cust_email` = '$cust_email',`cust_website` = '$cust_website',`cust_subType` = '$cust_subType',`cust_contactPerson` = '$cust_contactPerson',`cust_phone` = '$cust_phone',`cust_description` = '$cust_description' ,`cust_address` = '$cust_address' where id={$id} limit 1";

  if(mysqli_query($con, $sql))
  {
    http_response_code(201);
	$client = [     
	  'status' => 201,
	  'message' => "Client successfully update"
	 
    ];
    echo json_encode(['data'=>$client]);
  }
  else
  {
    $client = [     
	  'status' => 406,
	  'message' => "Client Not Update"
	 
    ];
    echo json_encode(['data'=>$client]);
  }  
}
