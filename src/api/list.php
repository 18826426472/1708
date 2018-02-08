<?php
    require('connect.php');
     $qty=isset($_GET['qty']) ? $_GET['qty']: '12';
    $pagenum=isset($_GET['pagenum']) ? $_GET['pagenum']: '';
    $cage=isset($_GET['cage']) ? $_GET['cage']: 'dog';
    $action=($pagenum-1)*$qty;
     $sql="select id,name,title,imgurl,price,qty,com,zen,jian from goods where cage=";
     $sql.="'".$cage."'"." limit  ".$action.",12";
     // $sql.=;
    $sql1="select count(*) from goods where cage=";
    $sql1.="'".$cage."'";
    $res = $conn->query($sql);
    $res1 = $conn->query($sql1);
    $row = $res->fetch_all(MYSQLI_ASSOC);
    $row1 = $res1->fetch_all(MYSQLI_ASSOC);
    
     $ress=array(
        'qty'=>$qty,
        'pagenum'=>$pagenum,
        'cage'=>$cage,
        'data'=>$row,
        'count'=>$row1[0]['count(*)']
        );
    echo json_encode($ress,JSON_UNESCAPED_UNICODE);
    
 ?>