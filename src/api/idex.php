<?php
    require('connect.php');
    $sql="select id,name ,title,cages,price,qty,imgurl from goods where cage='dog'";
    $res = $conn->query($sql);
    $row = $res->fetch_all(MYSQLI_ASSOC);
    // var_dump($row);
    echo json_encode($row,JSON_UNESCAPED_UNICODE);
?>