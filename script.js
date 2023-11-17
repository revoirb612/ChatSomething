document.getElementById('send-button').addEventListener('click', function() {
    var userInput = document.getElementById('user-input').value;
    var chatBox = document.getElementById('chat-box');
    
    if(userInput.trim() !== '') {
        chatBox.innerHTML += '<p>사용자: ' + userInput + '</p>';
        // 여기에 챗봇 API 호출 및 응답 처리 로직 추가
        document.getElementById('user-input').value = ''; // 입력란 초기화
    }
});
