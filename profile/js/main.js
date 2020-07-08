$(document).ready(function () {
    var el = document.querySelector('.main-text')
    var options = {
        text: ' 세 상 어 디 에 도 없 는 \n 준 비 된 ─ \n 주 도 적 인 ─ 퍼 블 리 셔 \n 김 수 연 입 니 다',
        textSpeed: 95,
        blinkSpeed: 0.06
    }
    var instance = new tinytyper(el, options);
    var myFullpage = new fullpage('#fullpage', {
        anchors: ['firstPage', 'secondPage', '3rdPage', '4rdPage', '5rdPage', '6rdPage', '7rdPage'],
        menu: '#menu',
        loopTop: true,
        loopBottom: true
    });
})
