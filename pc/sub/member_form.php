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
    <link rel="stylesheet" href="common/css/common.css">
    <link rel="stylesheet" href="css/9.member_form.css">
    <script src="../../js/jquery-1.12.4.min.js"></script>
    <script src="../../js/jquery-migrate-1.4.1.min.js"></script>
    <script src="../../js/prefixfree.min.js"></script>
    <script src="js/member_check.js"></script>
    <script>
        $(document).ready(function() {
            //id 중복검사
            $("#id").keyup(function() { // id입력 상자에 id값 입력시
                var id = $('#id').val(); //a

                $.ajax({
                    type: "POST",
                    url: "php/check_id.php",
                    data: "id=" + id,
                    cache: false,
                    success: function(data) {
                        //data => echo "문자열" 이 저장된
                        $("#loadtext").html(data);
                    }
                });
            });

            //nick 중복검사		 
            $("#nick").keyup(function() { // id입력 상자에 id값 입력시
                var nick = $('#nick').val();

                $.ajax({
                    type: "POST",
                    url: "php/check_nick.php",
                    data: "nick=" + nick,
                    cache: false,
                    success: function(data) {
                        $("#loadtext2").html(data);
                    }
                });
            });


        });

    </script>
    <script>
        function check_input() {
            if (!document.member_form.id.value) {
                alert("아이디를 입력하세요");
                document.member_form.id.focus();
                return;
            }

            if (!document.member_form.pass.value) {
                alert("비밀번호를 입력하세요");
                document.member_form.pass.focus();
                return;
            }

            if (!document.member_form.pass_confirm.value) {
                alert("비밀번호확인을 입력하세요");
                document.member_form.pass_confirm.focus();
                return;
            }

            if (!document.member_form.name.value) {
                alert("이름을 입력하세요");
                document.member_form.name.focus();
                return;
            }

            if (!document.member_form.nick.value) {
                alert("닉네임을 입력하세요");
                document.member_form.nick.focus();
                return;
            }


            if (!document.member_form.hp2.value || !document.member_form.hp3.value) {
                alert("휴대폰 번호를 입력하세요");
                document.member_form.nick.focus();
                return;
            }

            if (document.member_form.pass.value !=
                document.member_form.pass_confirm.value) {
                alert("비밀번호가 일치하지 않습니다.\n다시 입력해주세요.");
                document.member_form.pass.focus();
                document.member_form.pass.select();
                return;
            }

            document.member_form.submit();
            // insert.php 로 변수 전송
        }

        function reset_form() {
            document.member_form.id.value = "";
            document.member_form.pass.value = "";
            document.member_form.pass_confirm.value = "";
            document.member_form.name.value = "";
            document.member_form.nick.value = "";
            document.member_form.hp1.value = "010";
            document.member_form.hp2.value = "";
            document.member_form.hp3.value = "";
            document.member_form.email1.value = "";
            document.member_form.email2.value = "";

            document.member_form.id.focus();

            return;
        }

    </script>
</head>

<body>
    <div id="skipNav">
        <a href="#content">본문바로가기</a>
        <a href="#gnb">글로벌네비게이션바로가기</a>
    </div>
    <div class="wrapper">
        <?include "common/sub_header.html"?>

        <div id="content">
            <h2 class="hidden">본문 영역</h2>
            <h3>JOIN US</h3>
            <span class="sub_title">가입을 환영합니다.</span>

            <form name="member_form" method="post" action="php/insert.php">
                <!--<caption class="hidden">회원가입</caption>-->

                <div>
                    <label for="id"><h4>아이디</h4></label>
                    <?if(!$userid){?>
                    <input type="text" name="id" id="id" required placeholder="3-13자의 영문/숫자 조합" maxlength="13">
                    <span id="loadtext"></span>
                    <?}else{?>
                    <?= $row[id] ?>
                    <?}?>
                </div>

                <div>
                    <label for="pass"><h4>비밀번호</h4></label>
                    <input type="password" name="pass" id="pass" required maxlength="16" placeholder="8~16자리 영문/숫자 조합">
                </div>
                <div>
                    <label for="pass_confirm"><h4>비밀번호확인</h4></label>
                    <input type="password" name="pass_confirm" id="pass_confirm" required>
                </div>
                <div>
                    <label for="name"><h4>이름</h4></label>
                    <input type="text" name="name" id="name" required>
                </div>
                <div class="tell">
                    <label for="hp1"><h4>휴대폰</h4></label>
                    <select class="hp" name="hp1" id="hp1">
                        <option value='010'>010</option>
                        <option value='011'>011</option>
                        <option value='016'>016</option>
                        <option value='017'>017</option>
                        <option value='018'>018</option>
                        <option value='019'>019</option>
                    </select> -
                    <input type="text" class="hp" name="hp2" id="hp2" required> -
                    <input type="text" class="hp" name="hp3" id="hp3" required>
                </div>
                <div class="mail">
                    <label for="email1"><h4>이메일</h4></label>
                    <input type="text" id="email1" name="email1" required> @
                    <input type="text" name="email2" id="email2" required>
                </div>
                <div class="btn">
                    <a onclick="check_input()">회원 가입</a>
                    <a onclick="reset_form()">가입 취소</a>
                </div>
            </form>

        </div>
        <?include "common/footer.html"?>
    </div>
</body>

</html>
