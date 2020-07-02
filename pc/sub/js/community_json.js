

var xhr = new XMLHttpRequest();                 // XMLHttpRequest 객체를 생성한다.

xhr.onload = function() {                       // When readystate changes
 
  //if(xhr.status === 200) {                      // If server status was ok
    responseObject = JSON.parse(xhr.responseText);  //서버로 부터 전달된 json 데이터를 responseText 속성을 통해 가져올 수 있다.
	                                                 // parse() 메소드를 호출하여 자바스크립트 객체로 변환한다.

    var newContent = '';
    
    newContent += "<table><tr>"
    newContent += "<td>사번</td>"
    newContent += "<td>이름</td>"
    newContent += "<td>본봉</td>"
    newContent += "<td>수당</td>"
    newContent += "<td>보너스</td>"
    newContent += "<td>총급여</td>"
    newContent += "</tr>"

    for (var i = 0; i < responseObject.job.length; i++) { 
    newContent += "<tr>"
    newContent += "<td>"+responseObject.job[i].sabun+"</td>"
    newContent += "<td>"+responseObject.job[i].sname+"</td>"
    newContent += "<td>"+responseObject.job[i].pay1+"</td>"
    newContent += "<td>"+responseObject.job[i].pay2+"</td>"
    newContent += "<td>"+responseObject.job[i].pay3+"</td>"
    newContent += "<td>"+(responseObject.job[i].pay1+responseObject.job[i].pay2+responseObject.job[i].pay3)+"</td>"
    newContent += "</tr>"
    }
    newContent += "</table>"
 
    document.getElementById('content').innerHTML = newContent;

  //}
};

xhr.open('GET', 'data/data.json', true);        // 요청을 준비한다.
xhr.send(null);                                 // 요청을 전송한다