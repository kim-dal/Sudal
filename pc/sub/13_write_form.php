<? 
	session_start(); 
    @extract($_POST);
    @extract($_GET);
    @extract($_SESSION);
    //새글쓰기 =>  $table


	include "../../lib/dbconn.php";

	if ($mode=="modify") //수정 글쓰기면
	{
		$sql = "select * from $table where num=$num";
		$result = mysql_query($sql, $connect);

		$row = mysql_fetch_array($result);       
	
		$item_subject     = $row[subject];
		$item_content     = $row[content];

		$item_file_0 = $row[file_name_0];
		$item_file_1 = $row[file_name_1];
		$item_file_2 = $row[file_name_2];

		$copied_file_0 = $row[file_copied_0];
		$copied_file_1 = $row[file_copied_1];
		$copied_file_2 = $row[file_copied_2];
	}
?>
<!DOCTYPE html>
<html>
<head>
    <meta charset="utf-8">
    <title>list</title>
    <link rel="stylesheet" type="text/css" href="common/css/common.css">
    <link rel="stylesheet" type="text/css" href="css/write.css">
    <script src="../../js/jquery-1.12.4.min.js"></script>
    <script src="../../js/jquery-migrate-1.4.1.min.js"></script>
    <script src="../../js/prefixfree.min.js"></script>
    <script>
        function check_input() {
            if (!document.board_form.subject.value) {
                alert("제목을 입력하세요!");
                document.board_form.subject.focus();
                return;
            }

            if (!document.board_form.content.value) {
                alert("내용을 입력하세요!");
                document.board_form.content.focus();
                return;
            }
            document.board_form.submit();
        }
    </script>
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
            
            <div id="col2">
                <?
                    if($mode=="modify")
                    {
                ?>
                <form name="board_form" method="post" action="php/board_insert.php?mode=modify&num=<?=$num?>&page=<?=$page?>&table=<?=$table?>" enctype="multipart/form-data">
                    <?
                        }else{
                    ?>
                    <form name="board_form" method="post" action="php/board_insert.php?table=<?=$table?>" enctype="multipart/form-data">
                        <? }?>
                        <div id="write_form">
                
                            <div id="write_row1">
                                <p class="col1"> 별명 </p>
                                <p class="col2"><?=$usernick?></p>
                                <?
                                    if( $userid && ($mode != "modify") )
                                    {   //새글쓰기 에서만 HTML 쓰기가 보인다
                                ?>
                            <!--<div class="col3"><input type="checkbox" name="html_ok" value="y"> HTML 쓰기</div>-->
                            <?}?>
                            </div>

                            <div id="write_row2">
                                <div class="col1"> 제목 </div>
                                <div class="col2"><input type="text" name="subject" value="<?=$item_subject?>"></div>
                            </div>

                            <div id="write_row3">
                                <div class="col1"> 내용 </div>
                                <div class="col2"><textarea rows="15" cols="79" name="content"><?=$item_content?></textarea></div>
                            </div>
                            
                            <div id="write_row4">
                                <div class="col1"> 이미지파일1 </div>
                                <div class="col2"><input type="file" name="upfile[]"></div>
                            </div>
                            
                            <? 	if ($mode=="modify" && $item_file_0)
                                {
                            ?>
                            <div class="delete_ok"><?=$item_file_0?> 파일이 등록되어 있습니다. <input type="checkbox" name="del_file[]" value="0"> 삭제</div>
                            
                            <?
                                }
                            ?>
                            
                            <div id="write_row5">
                                <div class="col1"> 이미지파일2 </div>
                                <div class="col2"><input type="file" name="upfile[]"></div>
                            </div>
                            <? 	if ($mode=="modify" && $item_file_1)
                                {
                            ?>
                            <div class="delete_ok"><?=$item_file_1?> 파일이 등록되어 있습니다. <input type="checkbox" name="del_file[]" value="1"> 삭제</div>
                            
                            <?
                                }
                            ?>
                            
                            
                            <div id="write_row6">
                                <div class="col1"> 이미지파일3 </div>
                                <div class="col2"><input type="file" name="upfile[]"></div>
                            </div>
                            <? 	if ($mode=="modify" && $item_file_2)
                                {
                            ?>
                            <div class="delete_ok"><?=$item_file_2?> 파일이 등록되어 있습니다. <input type="checkbox" name="del_file[]" value="2"> 삭제</div>
                            
                            <?
                                }
                            ?>
                            
                        </div>

                        <div id="write_button">
                            <a onclick="check_input()">글쓰기</a>&nbsp;
                            <a href="13_list.php?table=<?=$table?>&page=<?=$page?>">목록</a>
                        </div>

                    </form>

            </div> <!-- end of col2 -->
        </div> <!-- end of content -->
        <!-- 푸터 삽입 영역-->
        <? include "common/footer.html" ?>
    </div> <!-- end of wrap -->

</body>

</html>