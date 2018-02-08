<?php
   require('connect.php');
   $username = isset($_GET['name']) ? $_GET['name'] : 'dy';
   $id = isset($_GET['id']) ? $_GET['id'] : '0';
   if($id!=0){
        $sql = "select * from orderss where user='$username' and goods='$id'";
        $result = $conn->query($sql);
        if($result->num_rows>0){ 

             $sql2= "select qty from orderss where user='$username' and goods='$id'";
                 $res2 = $conn->query($sql2);
                 $row = $res2->fetch_all(MYSQLI_ASSOC);
                 $qtys=$row[0]['qty']*1+1;
                 $sql3="update orderss set qty=";
                 $sql3.="'".$qtys."'". "where user='$username' and goods='$id'";
                 $res3 = $conn->query($sql3);
                 if($res3){
                    echo 'suc';
                 }else{

                        echo 'fail';
                 }
                    




        }else{
             $sql1 = "insert into orderss(goods,user,qty) values('$id','$username',1)";
            $res2 = $conn->query($sql1);
            if($res2){
              echo 'suc';  
            }
        }; 
   }else{
    echo 'fail';
   }
  
?>