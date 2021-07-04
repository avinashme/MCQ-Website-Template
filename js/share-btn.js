
//Share button Facebook, Whatsapp, Telegram
var facebookBtn = document.getElementById('facebook-btn');
var whatsAppBtn = document.getElementById('WhatsApp-btn');
var telegramBtn = document.getElementById('Telegram-btn');


function init() {
    console.log("HI"+ facebookBtn)

    var postUrl = encodeURI(document.location.href);
    var postTitle = encodeURI("Hi everyone, Please check this link out:");

    facebookBtn.setAttribute("href", `https://www.facebook.com/sharer.php?u=${postUrl}`);
    whatsAppBtn.setAttribute("href", `https://api.whatsapp.com/send?text=${postTitle} ${postUrl}`);
    telegramBtn.setAttribute("href", `https://t.me/share/url?url=${postUrl}&text=${postTitle}`);
}

init();


//Copied Link Share Button Using JS

var temp = $("<input>");
var url = $(location).attr('href');

$('#ShareLink-btn').on('click', function() {
    $("body").append(temp);
    temp.val(url).select();
    document.execCommand("copy");
    temp.remove();
    alert('Url Copied')
})



