<?php
include '../connection.php';
include '../auth_check.php';


if($_POST){
	$sql = "update `users` set name='{$_POST['name']}', email='{$_POST['email']}',contact_no='{$_POST['contact_no']}',password='{$_POST['password']}' where id='{$_POST['id']}'";
	
	$result=$db->query($sql);
	if($result)
		echo json_encode(array("message" => "Successful updated."));
	else
		echo json_encode(array("message" => "Failed."));
	
}

