<?php

 header("Access-Control-Allow-Origin: *");
include('./connection.php');


$query = "SELECT count(id) as id  FROM visitior";
$query1 = "SELECT count(id) as id  FROM exhibitorinfo";
$result = mysqli_query($conn, $query);
$result1 = mysqli_query($conn, $query1);
$alldata=array();
$data = array();
$data1 = array();

if (mysqli_num_rows($result) > 0) {
  while($row = mysqli_fetch_assoc($result)) {
    $id = $row["id"];
    array_push($data, array("id"=>$id  ));
  }

// array_push($alldata,array("data"=>$data ));
	// echo json_encode($data);

  
      }

      if (mysqli_num_rows($result1) > 0) {
  while($row = mysqli_fetch_assoc($result1)) {
    $id = $row["id"];
    array_push($data1, array("id"=>$id  ));
  }

array_push($alldata,array("data"=>$data ,"data1"=>$data1 ));
  // echo json_encode($data);

      echo json_encode($alldata);
      }
	else {
    echo "0 results";
}
	
?>