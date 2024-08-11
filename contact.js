// script.js
 function whatsappurl(){
    var name = document.getElementById('name').value;
    var mobile = document.getElementById('mobile').value;
    var email = document.getElementById('email').value;
    var subject = document.getElementById('subject').value;
    var message = document.getElementById('message').value;

    var whatsappurl="https://wa.me/919765867320?text="
    + "Name of Customer:" + name +"%0a"
    + "Mobile  :"    + mobile +"%0a"
    + "Email :" + email +"%0a"
    + "Subject :" + subject +"%0a"
    + "Message :" + message;
 
    window.open(whatsappurl,"_blank").focus();
 }
 