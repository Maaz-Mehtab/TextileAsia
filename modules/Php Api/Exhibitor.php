<?php

 header("Access-Control-Allow-Origin: *");
include('./connection.php');

$query = "SELECT * FROM exhibitorinfo order by company";

$result = mysqli_query($conn, $query);
$alldata=array();
$data = array();
if (mysqli_num_rows($result) > 0) {
	while($row = mysqli_fetch_assoc($result)) {

		$id = $row["id"];
        $hall = $row["hall"];
        $stall = $row["stall"];
        $company  = $row["company"];
        $product  = $row["product"];
        $country  = $row["country"];
	
					
	   array_push($data, array("id"=>$id,"hall" => $hall, "stall" => $stall,"company" => $company ,"product" => $product ,"country" => $country));
}
array_push($alldata,array("data"=>$data ));
	

      echo json_encode($alldata);
      }
	else {
    echo "0 results";
}
	
?>