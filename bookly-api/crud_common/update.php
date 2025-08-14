<?php
include '../connection.php';
include '../auth_check.php';

if($_POST){
	$sql = "update `{$_POST['table_name']}` set name='{$_POST['name']}' where id='{$_POST['id']}'";
	
	$result=$db->query($sql);
	if($result)
		echo json_encode(array("message" => "Successful updated."));
	else
		echo json_encode(array("message" => "Failed."));
	
}

