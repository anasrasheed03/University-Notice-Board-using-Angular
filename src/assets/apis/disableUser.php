
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
}

$id = mysqli_real_escape_string($con, trim($request->id));
if(!$id)
{
  return http_response_code(400);
}
 

  // Update.
  $sql = "UPDATE  `tbl_login` SET status='0' WHERE `id`= '{$id}' LIMIT 1";

  if(mysqli_query($con, $sql))
  {
    http_response_code(204);
  }
  else
  {
    return http_response_code(422);
  }  

