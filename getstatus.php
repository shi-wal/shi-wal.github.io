<?php
$con=mysqli_connect('localhost','root');



mysqli_select_db($con, 'from portfolio');
$name= $_POST['name'];
$mail= $_POST['mail'];
$subject= $_POST['subject'];
$msg= $_POST['msg'];

$query="insert into contactme(Name,Email,Subject,Message) values('$name','$mail','$subject','$msg')";
echo $query;
mysqli_query($con,$query);
header('location:contact.html');
?>
?>