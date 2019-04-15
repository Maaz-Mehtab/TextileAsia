<?php

 header("Access-Control-Allow-Origin: *");
include('./connection.php');

$data = array();

$email = $_GET['email'];
$password = $_GET['password'];

    $query1="select * from User  where email='$email' and password='$password'";
    $result = mysqli_query($conn, $query1);
  
if (mysqli_num_rows($result) > 0) {
	while($row = mysqli_fetch_assoc($result)) {

		$id = $row["id"];
        $name = $row["name"];
        $email = $row["email"];
        $IsActive  = $row["IsActive"];
      
					
	   array_push($data, array("flag"=>"1","id"=>$id,"name" => $name, "email" => $email,"IsActive" => $IsActive ));
}

	

      echo json_encode($data);
      }
	else {
    array_push($data, array("flag"=>"2" ));
      echo json_encode($data);
}
?>