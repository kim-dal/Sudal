<?
	session_start();
    @extract($_GET); 
    @extract($_POST); 
    @extract($_SESSION);  
?>

<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <title>login</title>
    <link rel="stylesheet" href="common/css/common.css">
    <link rel="stylesheet" href="css/7_login.css">
    <script src="../../js/jquery-1.12.4.min.js"></script>
    <script src="../../js/jquery-migrate-1.4.1.min.js"></script>
    <script src="../../js/prefixfree.min.js"></script>
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
            <h3>LOGIN</h3>
            <span class="sub_title">여기온것을 환영해</span>

            <div class="login_form">
                <div class="login_left">
                    <dl>
                        <dt><h4>회원 로그인</h4></dt>
                        <dd>가입하신 아이디와 비밀번호를 입력해주세요.<br>
                            비밀번호는 대소문자를 구분합니다.</dd>
                    </dl>

                    <form name="member_form" method="post" action="php/login.php">
                        <label for="pid">
                            <input type="text" name="id" id="id" placeholder="로그인">
                        </label>

                        <label for="pw">
                            <input type="password" name="pass" id="pw" placeholder="비밀번호">
                        </label>

                        <input type="submit" value="로그인 " class="login_btn">

                    </form>
                </div>

                <dl class="login_right">
                    <dt>아직 회원이 아니세요?</dt>
                    <dd>
                        <a href="8.member_check.html"><h4>회원가입</h4></a>
                    </dd>
                </dl>
            </div>
        </div>
        <!--푸터 삽입-->
        <? include "common/footer.html" ?>
    </div>
</body>


</html>
