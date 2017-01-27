<?php 
include 'connect.php'; // connecting to the database

$params = json_decode(file_get_contents('php://input'),true); // //Collecting data from front-end and decoding json string
//Defining the parameters 
$userEmail = $params["Email"]; 
$oldPass = $params["old_password"];
$newPass = $params["new_password"];

$getUser  = mysqli_query($con, "SELECT * FROM register WHERE email='$userEmail'"); //connecting to database and select the email

while($row = mysqli_fetch_array($getUser)){ // fetching the array of email and returning to $row
	if($row['password'] == $oldPass){ //verifying given password with existing password
		$updUserPass = mysqli_query($con,"UPDATE register SET password='$newPass' WHERE email='$userEmail'");//update the new password 
		if ($updUserPass) {
				$res = array("status"=>'Success',"message"=>'User Password updated successfuly',"user"=>'');//success message
		} else {
				$res = array("status"=>'Failed',"message"=>'User Password updated Failed',"user"=>'');//Failure message
		}
	}else{
		$res = array("status"=>'Failed',"message"=>'Old Password wrong.Please ensure the right password.',"user"=>'');
	}
	echo json_encode($res); //encoding the response

}
 ?>