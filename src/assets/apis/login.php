<?php
//Access-Control-Allow-Origin header with wildcard.

require 'connect.php';

// Get the posted data.
$postdata = file_get_contents("php://input");

if(isset($postdata) && !empty($postdata))
{
  // Extract the data.
  $request = json_decode($postdata);
                

  // Validate.

                
  // Sanitize.
  $email = mysqli_real_escape_string($con, trim($request->data->email));
  $password = mysqli_real_escape_string($con, trim($request->data->password));
  

  // Store.
   $sql = "SELECT * FROM tbl_login WHERE email='$email'";

    $response = mysqli_query($con, $sql);
	
    $login = array();
	$id;
    $login['login'] = array();
    
    if ( mysqli_num_rows($response) == 1 ) {
                                                
        
        $row = mysqli_fetch_assoc($response);
                                                                
        if ( $password === $row['password'] ) {
            http_response_code(201);
			$response = mysqli_query($con, $sql);
			  if($row = mysqli_fetch_assoc($response))
			  {
				$id=$row['id'];
			  }
			
           $login = [      
                                                                'email' => $email,
																'id' => $id,
																'status' => 201
                                                ];
                                                                echo json_encode(['data'=>$login]);

            mysqli_close($con);

        } else {
                                               
            $result = [
				'email' => $email,
				'message' => "Incorrect username or password",
				'status' => '406'
			];
            echo json_encode(['data'=>$result]);

            mysqli_close($con);

        }

    }else {
                                               
            $result = [
				'message' => "Incorrect username or password",
				'status' => '406'
			];
            echo json_encode(['data'=>$result]);

            mysqli_close($con);

        }
}
