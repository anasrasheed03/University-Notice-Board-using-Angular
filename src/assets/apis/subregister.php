<?php
require 'connect.php';

// Get the posted data.
$postdata = file_get_contents("php://input");

if(isset($postdata) && !empty($postdata))
{
  // Extract the data.
  $request = json_decode($postdata);

  // Validate.
if(trim($request->data->fname) === '' || trim($request->data->lname) === '' || 
trim($request->data->email) === ''  || 
trim($request->data->password) === '')
  {
    return http_response_code(400);
  }
	
  // Sanitize.
  $fname = mysqli_real_escape_string($con, trim($request->data->fname));
  $lname = mysqli_real_escape_string($con, trim($request->data->lname));
  $email = mysqli_real_escape_string($con, trim($request->data->email));
  $password = mysqli_real_escape_string($con, trim($request->data->password));
  $status = 1;
  $role = 1;
  $ran=rand(10,1000);
  $username=$fname.$lname.$ran;
 
    

  // Store.
  $sql = "INSERT INTO `tbl_login`(`id`,username,`fname`,`lname`,`email`,`password`,`status`.`role`) VALUES (null,'{$username}','{$fname}','{$lname}','{$email}','{$password}','{$status}','{$role}')";

  if(mysqli_query($con,$sql))
  {
    http_response_code(201);
    $register = [      
      'fname' => $fname,
	  'lname' => $lname,
	  'email' => $email,
	  'password' => $password,
	  'status' => 201,
	  'message' => "You have successfully register"
	 
    ];
    echo json_encode(['data'=>$register]);
  }
  else
  {
    http_response_code(422);
  }
}