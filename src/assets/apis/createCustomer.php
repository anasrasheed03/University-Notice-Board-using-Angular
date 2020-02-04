<?php
require 'connect.php';

// Get the posted data.
$postdata = file_get_contents("php://input");

if(isset($postdata) && !empty($postdata))
{
  // Extract the data.
  $request = json_decode($postdata);

	
  // Sanitize.
  $cust_name = mysqli_real_escape_string($con, trim($request->data->cust_name));
  $cust_email = mysqli_real_escape_string($con, trim($request->data->cust_email));
  $cust_website = mysqli_real_escape_string($con, trim($request->data->cust_website));
  $cust_subType = mysqli_real_escape_string($con, trim($request->data->cust_subType));
  $cust_contactPerson = mysqli_real_escape_string($con, trim($request->data->cust_contactPerson));
  $cust_phone = mysqli_real_escape_string($con, trim($request->data->cust_phone));
  $cust_description = mysqli_real_escape_string($con, trim($request->data->cust_description));
  $cust_address = mysqli_real_escape_string($con, trim($request->data->cust_address));
  $status = 1;
    

  // Store.
  $sql = "INSERT INTO `clients`(`cust_name`,`cust_email`,`cust_website`,`cust_subType`,`cust_contactPerson`,`cust_phone`,`cust_description`,`cust_address`,`status`) VALUES ('{$cust_name}','{$cust_email}','{$cust_website}','{$cust_subType}','{$cust_contactPerson}','{$cust_phone}','{$cust_description}','{$cust_address}','{$status}')";

  if(mysqli_query($con,$sql))
  {
    http_response_code(201);
    $client = [      
      'cust_name' => $cust_name,
	  'cust_email' => $cust_email,
	  'cust_website' => $cust_website,
	  'cust_subType' => $cust_subType,
	  'cust_contactPerson' => $cust_contactPerson,
	  'cust_phone' => $cust_phone,
	  'cust_description' => $cust_description,
	  'cust_address' => $cust_address,
	  'status' => 201,
	  'message' => "Client successfully registered"
	 
    ];
    echo json_encode(['data'=>$client]);
  }
  else
  {
	$clientError = [
		'status'=> 406,
		'message' => "Erorr in Client Registeration"
	];
	echo json_encode(['data'=> $clientError]);
  }
}