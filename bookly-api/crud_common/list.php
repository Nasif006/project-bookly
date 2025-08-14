<?php
include '../connection.php';
include '../auth_check.php';
$data = [];
$table=$_GET['table_name'];
$sql = "SELECT * FROM $table";
$result=$db->query($sql);
while($row = $result->fetch_object()){
	$data[]= $row;
}
echo json_encode($data); 