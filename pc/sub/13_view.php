<? 
	session_start(); 
    @extract($_POST);
    @extract($_GET);
    @extract($_SESSION);

	include "../../lib/dbconn.php";

	$sql = "select * from $table where num=$num";
	$result = mysql_query($sql, $connect);

    $row = mysql_fetch_array($result);       
      // 하나의 레코드 가져오기
	
	$item_num     = $row[num];
	$item_id      = $row[id];
	$item_name    = $row[name];
  	$item_nick    = $row[nick];
	$item_hit     = $row[hit];

	$image_name[0]   = $row[file_name_0];
	$image_name[1]   = $row[file_name_1];
	$image_name[2]   = $row[file_name_2];


	$image_copied[0] = $row[file_copied_0];
	$image_copied[1] = $row[file_copied_1];
	$image_copied[2] = $row[file_copied_2];

    $item_date    = $row[regist_day];
	$item_subject = str_replace(" ", "&nbsp;", $row[subject]);

	$item_content = $row[content];
	$is_html      = $row[is_html];

	if ($is_html!="y")
	{
		$item_content = str_replace(" ", "&nbsp;", $item_content);
		$item_content = str_replace("\n", "<br>", $item_content);
	}
	
	for ($i=0; $i<3; $i++)
	{
		if ($image_copied[$i]) //업로드한 파일이 존재하면 0 1 2
		{
			$imageinfo = GetImageSize("./data/".$image_copied[$i]);
            //GetImageSize(서버에 업로드된 파일 경로 파일명)
              // => 파일의 너비와 높이값, 종류
			$image_width[$i] = $imageinfo[0];  //파일너비
			$image_height[$i] = $imageinfo[1]; //파일높이
			$image_type[$i]  = $imageinfo[2];  //파일종류

        if ($image_width[$i] > 785)
				$image_width[$i] = 785;
		}
		else
		{
			$image_width[$i] = "";
			$image_height[$i] = "";
			$image_type[$i]  = "";
		}
	}

	$new_hit = $item_hit + 1;

	$sql = "update $table set hit=$new_hit where num=$num";   // 글 조회수 증가시킴
	mysql_query($sql, $connect);
?>
<!DOCTYPE html>
<html>

<head>
    <meta charset="utf-8">
    <title>list</title>
    <link rel="stylesheet" href="common/css/common.css">
    <link rel="stylesheet" href="css/view.css">
    <script src="../../js/jquery-1.12.4.min.js"></script>
    <script src="../../js/jquery-migrate-1.4.1.min.js"></script>
    <script src="../../js/prefixfree.min.js"></script>
    <script>
        function del(href) {
            if (confirm("한번 삭제한 자료는 복구할 방법이 없습니다.\n\n정말 삭제하시겠습니까?")) {
                document.location.href = href;
            }
        }
    </script>
    <style>
        
    </style>
</head>

<body>
    <div id="skipNav">
        <a href="#content">본문바로가기</a>
        <a href="#gnb">글로벌네비게이션바로가기</a>
    </div>

    <div id="wrapper">
        <!--헤더 삽입-->
        <? include "common/sub_header.html" ?>

        <div id="content">
            <h2 class="hidden">본문 영역</h2>
            <div class="visual">
                <img src="image/1x/magazine.jpg" alt="">
            </div>

            <section class="sub_nav">
                <span><h3>공지사항</h3></span>
                <span>이 달의 새로운 소식</span>
                <ul>
                    <li><a href="#" class="btnLoad1 now">NOTICE</a></li>
                </ul>
            </section>


            <section class="content">
                <div id="col2">
                    <div id="view_title">
                        <div id="view_title1"><?= $item_subject ?></div>
                        <div id="view_title2"><?= $item_nick ?> | 조회 : <?= $item_hit ?>
                            | <?= $item_date ?> </div>
                    </div>

                    <div id="view_content">
                        <?
                        for ($i=0; $i<3; $i++)  //업로드된 이미지를 출력한다
                        {
                            if ($image_copied[$i])
                            {
                                $img_name = $image_copied[$i];
                                $img_name = "php/data/".$img_name; 
                                 // ./data/2019_03_22_10_07_15_0.jpg
                                $img_width = $image_width[$i];

                                echo "<img src='$img_name' width='$img_width'>"."<br><br>";
                            }
                        }
                    ?>
                        <?= $item_content ?>
                    </div>

                    <div id="view_button">
                        <a href="13_list.php?table=<?=$table?>&page=<?=$page?>">목록</a>&nbsp;
                        <? 
                        if($userid==$item_id || $userid="admin" || $userlevel==1 )
                        {
                    ?>
                        <a href="13_write_form.php?table=<?=$table?>&mode=modify&num=<?=$num?>&page=<?=$page?>">수정</a>&nbsp;
                        <a href="javascript:del('php/board_delete.php?table=<?=$table?>&num=<?=$num?>')">삭제</a>&nbsp;
                        <?
                        }
                    ?>
                        <? 
                        if($userid)
                        {
                    ?>
                        <a href="13_write_form.php?table=<?=$table?>">글쓰기</a>
                        <?
                        }
                    ?>
                    </div>

                    <div class="clear"></div>

                </div> <!-- end of col2 -->
            </section>
        </div> <!-- end of content -->

        <!-- 푸터 삽입 영역-->
        <? include "common/footer.html" ?>
    </div> <!-- end of wrap -->

</body>

</html>