<?php

 header("Access-Control-Allow-Origin: *");
include('./connection.php');
  $offset = $_GET['offset'];
 	$page=$offset;
    $setLimit = 10;
    $pageLimit = ($page * $setLimit) - $setLimit;

$query = "SELECT * FROM visitior  order by name limit $pageLimit  ";

$result = mysqli_query($conn, $query);

$alldata=array();
$data = array();
if (mysqli_num_rows($result) > 0) {
	while($row = mysqli_fetch_assoc($result)) {

		$id = $row["id"];
		$organization= $row["organization"];
      	$name= $row["name"];
       	$designation  = $row["designation"];
        $address  = $row["address"];
        $city  = $row["city"];
        $country  = $row["country"];
        $number  = $row["number"];
        $email  = $row["email"];
        $web  = $row["web"];
        // $mainline  = $row["mainline"];
        // $purpose  = $row["purpose"];
        // $interested  = $row["interested"];
        // $subscribe  = $row["subscribe"];
        // echo $organization;

	   array_push($data, array("id"=>$id ,"name" => $name, "designation"=>$designation, "city"=>$city,"country" => $country ,"number" => $number,"email" => $email ,"web" => $web,"organization"=>$organization,"address"=>$address ));
}
array_push($alldata,array("data"=>$data ));
	// echo json_encode($data);

      echo json_encode($alldata);
      }
	else {
    echo "0 results";
}
	
?>