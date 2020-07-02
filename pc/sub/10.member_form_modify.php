<? 
	session_start();
    
      @extract($_POST);
      @extract($_GET);
      @extract($_SESSION);
?>

<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <title>회원가입</title>
    <link rel="stylesheet" href="../common/css/common.css">
    <link rel="stylesheet" href="css/modify.css">
    <script src="../../js/jquery-1.12.4.min.js"></script>
    <script src="../../js/jquery-migrate-1.4.1.min.js"></script>
    <script src="../../js/prefixfree.min.js"></script>
    <script src="js/member_check.js"></script>
    <script src="js/modify.js"></script>

</head>
<?
        //$userid='aaa';

        include "../../lib/dbconn.php";

        $sql = "select * from member where id='$userid'";
        $result = mysql_query($sql, $connect);

        $row = mysql_fetch_array($result);
        //$row[id]....$row[level]

        $hp = explode("-", $row[hp]);  //000-0000-0000
        $hp1 = $hp[0];
        $hp2 = $hp[1];
        $hp3 = $hp[2];

        $email = explode("@", $row[email]);
        $email1 = $email[0];
        $email2 = $email[1];

        mysql_close();
?>

<body>
    <div id="skipNav">
        <a href="#content">본문바로가기</a>
        <a href="#gnb">글로벌네비게이션바로가기</a>
    </div>
    <div id="wrapper">
        <? include "common/sub_header.html" ?>

        <article id="content">
            <h2 class="hidden">본문 영역</h2>
            <h3>정보수정</h3>
            <form name="member_form" method="post" action="php/modify.php">

                <table>
                    <caption class="hidden">회원가입</caption>
                    <tr class="id_">
                        <th scope="col"><label for="id">아이디</label></th>
                        <td>
                            <?= $row[id] ?>
                        </td>
                    </tr>
                    <tr>
                        <th scope="col"><label for="pass">비밀번호</label></th>
                        <td>
                            <input type="password" name="pass" id="pass" required value="">
                        </td>
                    </tr>
                    <tr>
                        <th scope="col"><label for="pass_confirm">비밀번호확인</label></th>
                        <td>
                            <input type="password" name="pass_confirm" id="pass_confirm" required value="">
                        </td>
                    </tr>
                    <tr>
                        <th scope="col"><label for="name">이름</label></th>
                        <td>
                            <input type="text" name="name" id="name" required value="<?= $row[name] ?>">
                        </td>
                    </tr>
                    <tr>
                        <th scope="col"><label for="nick">닉네임</label></th>
                        <td>
                            <input type="text" name="nick" id="nick" required value="<?= $row[nick] ?>">
                            <span id="loadtext2"></span>
                        </td>
                    </tr>
                    <tr  class="phone_">
                        <th scope="col">휴대폰</th>
                        <td>
                            <label class="hidden" for="hp1">전화번호앞3자리</label>
                            <input type="text" class="hp" name="hp1" value="<?= $hp1 ?>"> -
                            <label class="hidden" for="hp2">전화번호중간4자리</label><input type="text" class="hp" name="hp2" id="hp2" required value="<?= $hp2 ?>"> - <label class="hidden" for="hp3">전화번호끝4자리</label><input type="text" class="hp" name="hp3" id="hp3" required value="<?= $hp3 ?>">
                        </td>
                    </tr>
                    <tr>
                        <th scope="col">이메일</th>
                        <td>
                            <label class="hidden" for="email1">이메일아이디</label>
                            <input type="text" id="email1" name="email1" required value="<?= $email1 ?>"> @
                            <label class="hidden" for="email2">이메일주소</label>
                            <input type="text" name="email2" id="email2" required value="<?= $email2 ?>">
                        </td>
                    </tr>

                </table>
            </form>
            <div class="btn">
                <a href="#"><img src="image/button_save.gif" onclick="check_input()"></a>&nbsp;&nbsp;
                <a href="#"><img src="image/button_reset.gif" onclick="reset_form()"></a>
            </div>
        </article>
        <? include "common/footer.html" ?>
    </div>
</body>

</html>
