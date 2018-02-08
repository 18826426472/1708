<?php
     require('connect.php');
     $id=isset($_GET['id']) ? $_GET['id']: '';
     $sql="select id,name ,bnum,title,price,oprice,com,manyi,qty,img1,img2 from goods where id=";
     $sql.="'".$id."'";
    
      $res = $conn->query($sql);
    $row = $res->fetch_all(MYSQLI_ASSOC);

    $sql1="select id,name,title,imgurl,price,qty,com,zen,jian from goods where cage='dog' limit 0,12";
    $res1=$conn->query($sql1);
    $row1=$res1->fetch_all(MYSQLI_ASSOC);
    $ress=array(
        'data'=>$row,
        'data1'=>$row1
        );



    echo json_encode($ress,JSON_UNESCAPED_UNICODE);
?>