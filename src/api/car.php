<?php
     require('connect.php');
     $username = isset($_GET['name']) ? $_GET['name'] : 'dy';
      $sql = "select goods,qty from orderss where user='$username'";
      $result = $conn->query($sql);
       $res= $result->fetch_all(MYSQLI_ASSOC);

        // echo json_encode($res[0]['count(*)'],JSON_UNESCAPED_UNICODE);
        // <?php
        $as=array();
        for($i=0;$i<count($res);$i++){
            $num=$res[$i]['goods'];

             $sql1 = "select id,name,imgurl,title,price from goods where id='$num'";
              $result1 = $conn->query($sql1);
               $res1= $result1->fetch_all(MYSQLI_ASSOC);
              array_push($res1,$res[$i]['qty']);
               array_push($as,$res1);
        };
                echo json_encode($as,JSON_UNESCAPED_UNICODE);
             
?>