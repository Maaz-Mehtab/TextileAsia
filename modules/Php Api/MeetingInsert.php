<?php

 header("Access-Control-Allow-Origin: *");
include('./connection.php');

$data = array();

$user_id = $_GET['user_id'];
$company_id = $_GET['company_id'];
$date = $_GET['date'];
$time = $_GET['time'];


  $dt = new DateTime();
     $currentDate= $dt->format('Y-m-d H:i:s');

     $query1 = "insert into Meeting (user_id, company_id, Date, Time, isActive, CreatedDate) 
VALUES ('$user_id','$company_id','$date','$time',1,'$currentDate')";
$result1 = mysqli_query($conn, $query1);
if ($result1 > 0) {
		  array_push($data, array("flag"=>1,"Result"=>"Your Meeting Schedule is Successful"  ));
		  echo json_encode($data);
		
		}
		  else {
     array_push($data, array("flag"=>2,"Result"=>"Try Again"  ));
     echo json_encode($data);
}
?>