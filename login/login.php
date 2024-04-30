<?php
include('login.html');

    

    $pdo = new PDO('mysql:host=localhost;dbname=cadastro','root','');
    $email = @$_POST['email'];
    $pass = @$_POST['pass'];
   
    $sql = $pdo->prepare("SELECT * FROM `clientes` WHERE Email=? AND Password=? ");

    $sql->execute(array($email,$pass));    
    $info =  $sql->fetchAll();

    if($info){
        echo 'inserido';
        header('Location:home/home.html');
        
    }   
    

    
?>