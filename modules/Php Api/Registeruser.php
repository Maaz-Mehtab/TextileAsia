<?php

 header("Access-Control-Allow-Origin: *");
include('./connection.php');

$data = array();

$email = $_GET['email'];
$name = $_GET['name'];
$password = $_GET['password'];
$id=0;
$query="select * from User where email='$email'";
$result = mysqli_query($conn, $query);

if (mysqli_num_rows($result) > 0) {
	while($row = mysqli_fetch_assoc($result)) {

		$id = $row["id"];
	  array_push($data, array("flag"=> 1,"msg"=>"Email Already Exist"));
	}
    	 echo json_encode($data);


}
	else {
  $dt = new DateTime();
     $currentDate= $dt->format('Y-m-d H:i:s');
     $query1 = "insert into User (name, email, 	password, IsActive, 	CreatedDate) 
VALUES ('$name','$email','$password',1,'$currentDate')";
$result1 = mysqli_query($conn, $query1);
if ($result1 > 0) {
		  array_push($data, array("flag"=> 2,"Result"=>"Your Registration is Successful"  ));
		  echo json_encode($data);
		
		}
		  else {
     array_push($data, array("flag"=> 3,"Result"=>"Try Again"  ));
     echo json_encode($data);
}

	}
	


?>