<? 
	session_start(); 
    @extract($_POST);
    @extract($_GET);
    @extract($_SESSION);

	$table = "board";
?>
<!DOCTYPE html>
<html>

<head>
    <meta charset="utf-8">
    <title>list</title>
    <link rel="stylesheet" type="text/css" href="common/css/common.css">
    <link rel="stylesheet" type="text/css" href="css/list.css">
    <script src="../../js/jquery-1.12.4.min.js"></script>
    <script src="../../js/jquery-migrate-1.4.1.min.js"></script>
    <script src="../../js/prefixfree.min.js"></script>
</head>
<?
    include "../../lib/dbconn.php";

    
    if (!$scale)
    $scale=10;			// 한 화면에 표시되는 글 수

    
    if ($mode=="search")
	{
		if(!$search)
		{
			echo("
				<script>
				 window.alert('검색할 단어를 입력해 주세요!');
			     history.go(-1);
				</script>
			");
			exit;
		}

		$sql = "select * from $table where $find like '%$search%' order by num desc";
	}
	else
	{
		$sql = "select * from $table order by num desc";
	}

	$result = mysql_query($sql, $connect);

	$total_record = mysql_num_rows($result); // 전체 글 수

	// 전체 페이지 수($total_page) 계산 
	if ($total_record % $scale == 0)     
		$total_page = floor($total_record/$scale);      
	else
		$total_page = floor($total_record/$scale) + 1; 
 
	if (!$page)                 // 페이지번호($page)가 0 일 때
		$page = 1;              // 페이지 번호를 1로 초기화
 
	// 표시할 페이지($page)에 따라 $start 계산  
	$start = ($page - 1) * $scale;      
	$number = $total_record - $start;
    ?>

<body>
    <div id="skipNav">
        <a href="#content">본문바로가기</a>
        <a href="#gnb">글로벌네비게이션바로가기</a>
    </div>

    <div id="wrapper">
        <!--헤더 삽입-->
        <? include "common/sub_header.html" ?>

        <div id="content">
            <div class="visual">
                <img src="image/1x/magazine.jpg" alt="">
            </div>

            <div class="sub_nav">
                <h2 class="hidden">본문내용</h2>
                <span>공지사항</span>
                <span>이 달의 새로운 소식</span>
                <ul>
                    <li><a href="#none" class="now"><h3>NOTICE</h3></a></li>
                </ul>
            </div>

            <div class="content">
                <h4 class="hidden">공지사항 본문</h4>
                <div id="col2">
                    <form name="board_form" method="post" action="13_list.php?table=<?=$table?>&mode=search">
                        <div class="list_search">
                            <div class="list_search1">총 <?= $total_record ?> 개의 게시물이 있습니다. </div>

                            <div class="search_wrap">
                                <div class="list_search3">
                                    <select name="find">
                                        <option value='subject'>제목</option>
                                        <option value='content'>내용</option>
                                        <option value='nick'>별명</option>
                                        <option value='name'>이름</option>
                                    </select>
                                </div>
                                <div class="list_search4"><input type="text" name="search"></div>
                                <div class="list_search5"><input type="submit" value="검색"></div>
                            </div>
                        </div>
                    </form>

                    <select name="scale" onchange="location.href='13_list.php?scale='+this.value">
                        <option value=''>보기</option>
                        <option value='10'>10</option>
                        <option value='15'>15</option>
                        <option value='20'>20</option>
                        <option value='30'>30</option>
                    </select>

                    <div class="clear"></div>

                    <div id="list_top_title">
                        <ul>
                            <li id="list_title1">번호</li>
                            <li id="list_title2">제목</li>
                            <li id="list_title3">작성자</li>
                            <li id="list_title4">등록일</li>
                            <li id="list_title5">조회</li>
                        </ul>
                    </div>

                    <div id="list_content">
                        <?		
                        for ($i=$start; $i<$start+$scale && $i < $total_record; $i++)                    
                        {
                            mysql_data_seek($result, $i);       
                            // 가져올 레코드로 위치(포인터) 이동  
                            $row = mysql_fetch_array($result);       
                            // 하나의 레코드 가져오기

                            $item_num     = $row[num];
                            $item_id      = $row[id];
                            $item_name    = $row[name];
                            $item_nick    = $row[nick];
                            $item_hit     = $row[hit];
                            $item_date    = $row[regist_day];
                            $item_date = substr($item_date, 0, 10);  
                            $item_subject = str_replace(" ", "&nbsp;", $row[subject]);

                            if($row[file_copied_0]){ 
                              $item_img = './data/'.$row[file_copied_0];  
                            }else{
                              $item_img = './data/default.jpg'  ;
                            }

                    ?>
                        <div id="list_item">
                            <div id="list_item1"><?= $number ?></div>
                            <div id="list_item2"><a href="13_view.php?table=<?=$table?>&num=<?=$item_num?>&page=<?=$page?>">
                                    <?= $item_subject ?></a></div>
                            <div id="list_item3"><?= $item_nick ?></div>
                            <div id="list_item4"><?= $item_date ?></div>
                            <div id="list_item5"><?= $item_hit ?></div>
                        </div>
                        <?
                        $number--;
                       }
                    ?>
                        <div id="page_button">

                            <div id="button">

                                <a href="13_list.php?table=<?=$table?>&page=<?=$page?>">목록</a>
                                <? 
                                if($userid)
                                {
                            ?>
                                <a href="13_write_form.php?table=<?=$table?>">글쓰기</a>
                                <?
                                }
                            ?>
                            </div>
                        </div> <!-- end of page_button -->
                        <div id="page_num"> ◀ 이전 &nbsp;&nbsp;&nbsp;&nbsp;
                            <?
                               // 게시판 목록 하단에 페이지 링크 번호 출력
                               for ($i=1; $i<=$total_page; $i++)
                               {
                                    if ($page == $i)     // 현재 페이지 번호 링크 안함
                                    {
                                        echo "<b> $i </b>";
                                    }
                                    else
                                    { 

                                      if($mode=="search"){
                                         echo "<a href='13_list.php?page=$i&scale=$scale&mode=search&find=$find&search=$search'> $i </a>"; 
                                      }else{    

                                          echo "<a href='13_list.php?page=$i&scale=$scale'> $i </a>";
                                       }


                                    }      
                               }
                            ?>
                            &nbsp;&nbsp;&nbsp;&nbsp;다음 ▶
                        </div>
                    </div> <!-- end of list content -->
                    <div class="clear"></div>

                </div> <!-- end of col2 -->
            </div>
        </div> <!-- end of content -->
        <!-- 푸터 삽입 영역-->
        <? include "common/footer.html" ?>
    </div> <!-- end of wrap -->
</body>

</html>
