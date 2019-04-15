<?php

 header("Access-Control-Allow-Origin: *");
include('./connection.php');
$user_id = $_GET['user_id'];
$query = "select m.id,u.name,u.email,e.company,e.hall,m.Date,m.Time from Meeting m 
left join User u 
on u.id=m.user_id
left join exhibitorinfo e
on e.id =m.company_id
where u.id='$user_id' and m.isActive=1 order by m.Date";

$result = mysqli_query($conn, $query);
$alldata=array();
$data = array();
if (mysqli_num_rows($result) > 0) {
	while($row = mysqli_fetch_assoc($result)) {
        $id = $row["id"];
		$name = $row["name"];
        $email = $row["email"];
        $hall = $row["hall"];
        $company  = $row["company"];
        $Date  = $row["Date"];
        $Time  = $row["Time"];
	
					
	   array_push($data, array("id"=>$id,"name" => $name, "email" => $email,"company" => $company ,"hall" => $hall ,"Date" => $Date ,"Time" => $Time));
}
array_push($alldata,array("data"=>$data ));
	

      echo json_encode($alldata);
      }
	else {
    echo "0 results";
}
	
?>