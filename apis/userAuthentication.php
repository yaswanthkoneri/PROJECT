<?php


include 'connect.php'; //connecting to the database
$params = json_decode(file_get_contents('php://input'),true); //Collecting data from front-end and decoding json string
//assigning to variables 
$userEmail = $params["Email"];
$userPass = $params["password"];
$query = "SELECT * FROM register WHERE Email='$userEmail'";//My sql query for Retrieving the data  based on the given values from front-end
$getUser  = mysqli_query($con, $query);

while($row = mysqli_fetch_array($getUser)){ //Fetching from mysql database using givenemail
	if($row['password'] == $userPass){
		 $res = array("response"=>'Authentication Success',"user"=>$row);//forming object for sending the success response to frontend with userdetails
			 echo json_encode($res); // encoding response
	}else{
		 $res = array("response"=>'Authentication failed',"user"=>'');
			 echo json_encode($res); // decoding the response
	}

}
?>	