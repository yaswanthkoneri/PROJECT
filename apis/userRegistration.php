<?php

include 'connect.php'; // connecting to  the database

$params = json_decode(file_get_contents('php://input'),true); //Decoding the json string
// Defining parameters
$Fname = $params["FirstName"];
$userPass = $params["password"];
$userMail = $params["Email"];
$userContactNumber = $params["MobileNumber"];
$userDob = $params["DOB"];
$userFbLink = $params["FBLink"];

  $insertQuery = mysqli_query($con, "INSERT INTO register (FirstName,Email,password,MobileNumber,DOB,FBLink) VALUES ('$Fname','$userMail','$userPass','$userContactNumber','$userDob','$userFbLink')");//Inserting parameters into register

  if($insertQuery){
  	$res = array("response"=>'User created successfully',"user"=>$params);//Returning Response 
  }else{
  	$res = array("response"=>'Sorry something went wrong',"user"=>'');
  }
  	echo json_encode($res); //Encoding the response 


?>