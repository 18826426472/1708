<?php
   
    // include 'connect.php';
    require('connect.php');
    
    // 获取前端数据
    $username = isset($_POST['name']) ? $_POST['name'] : '';
    $password = isset($_POST['psw']) ? $_POST['psw'] : '';
    $auto = isset($_POST['auto']) ? $_POST['auto'] : '';
    // 密码md5加密
    $password = md5($password);
     $sql = "select * from users where tel='$username'";
    // $sql = "select * from users where tel='$username' and password='$password'";


    // 获取查询结果
    $result = $conn->query($sql);
        if($result->num_rows>0){
            $sql1 = "select * from users where tel='$username' and password='$password'";
             $result1 = $conn->query($sql1);
                if($result1->num_rows>0){
                    
                    echo 'suc';
                }else{
                    echo "fail";
                }
        }else{
           $sql2 = "insert into users(tel,password) values('$username','$password')";
           $res2 = $conn->query($sql2);
           if($res2){
                 


                echo 'suc';

           }else{
                echo "fail";
           }
        }


    //print_r($row[0]);


    // if($result->num_rows > 0){
    //     echo 'success';
    // }else{
    //     echo 'fail';
    // }
    

    // 释放查询内存(销毁)
    $result->free();

    //关闭连接
    $conn->close();

    // echo json_encode($auto,JSON_UNESCAPED_UNICODE);
    // echo 11111;
?>