<?php 
include('index.html');

$pdo = new PDO('mysql:host=localhost;dbname=cadastro','root','');

if(isset($_POST['acao'])){
$name = @$_POST['username'];
$Sobrename = @$_POST['laft'];
$email = @$_POST['email'];
$password = @$_POST['pass'];
$ConfirmPass = @$_POST['confirm'];

$sql = $pdo->prepare("INSERT INTO `clientes` VAlUES (null,?,?,?,?,?)");

$sql->execute(array($name,$Sobrename,$email,$password,$ConfirmPass));
    header('Location:login/login.html');
}

?>
