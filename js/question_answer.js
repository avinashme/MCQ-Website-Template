console.log('jS ready2');

// For work-space
// var space = document.getElementById("work-space");
// var shareBtn = document.getElementById("work-space-btn");


// shareBtn.addEventListener('click', 
//     function() {
//     if(space.classList.contains('show-work-space')){
//         space.classList.remove('show-work-space');
//         space.classList.add('hide-work-space');   
//     }
//     else{
//         space.classList.remove('hide-work-space');
//         space.classList.add('show-work-space');   
//     } 
// })

var ansData = document.getElementById("view-answer-data");
var viewAns = document.getElementById("view-answer");
console.log(ansData.classList)
// console.log(ans.classList.contains('show-answer'))
// // console.log(ans.classList.remove('show-answer'))
// console.log(ans.classList.add('hide-answer'))
// console.log(ans.classList)
 
function showHideAnswer(e) {
    if(ansData.classList.contains('show-answer')){
        console.log("hi inside if")
        ansData.classList.remove('show-answer');
        ansData.classList.add('hide-answer');   
    }
    else{
        console.log("hi inside if")
        ansData.classList.remove('hide-answer');
        ansData.classList.add('show-answer');   
    }
    
    
};
viewAns.onclick =  showHideAnswer;

// viewAns.addEventListener('click', 
//     function() {
//     if(ansData.classList.contains('show-answer')){
//         console.log("hi inside if")
//         ansData.classList.remove('show-answer');
//         ansData.classList.add('hide-answer');   
//     }
//     else{
//         console.log("hi inside if")
//         ansData.classList.remove('hide-answer');
//         ansData.classList.add('show-answer');   
//     }
    
// })




// For view-answer
// var ans = document.getElementById("answer");
// var viewAns = document.getElementById("view-answer");

// viewAns.addEventListener('click', 
//     function() {
//     if(ans.classList.contains('show-ans')){
//         ans.classList.remove('show-ans');
//         ans.classList.add('hide-work-space');   
//     }
//     else{
//         ans.classList.remove('hide-work-space');
//         ans.classList.add('show-ans');   
//     }
    
// })





// For work space
// var space = document.getElementById("work-space");
// var shareBtn = document.getElementById("work-space-btn");





// var a = setTimeout(
//     function(){
//         console.log(space.classList)
//         // space.classList.add('show-work-space');

//     }
//     ,5000);


//  Right-Wrong image show + Option disable (On Qestion MCQ)
console.log("Ready with question")
var rightWrong = $('.show-hide-right-wrong')


rightWrong.bind('click', function(e){
    var optionValue = e.target.value;
    if((optionValue == 'q1') || (optionValue == 'q2') || (optionValue == 'q3')){
        $(this).parent('p').fadeTo('fast',0.2);
        $(this).prop( "disabled", true );
        $(this).parent('p').append('<img class="right-wrong" src="./image/wrong.webp" alt="incorrect-image"/>');
       
    }
    else{
        $(this).parent('p').append('<img class="right-wrong" src="./image/Correct.webp" alt="correct-image"/>');
        $(this).parent('p').fadeTo('fast',1);
        $('input[name="option"]').not(':checked').prop( "disabled", true).parent('p').prop( "disabled", true).fadeTo('fast',0.2);
        showHideAnswer();
        $(this).unbind('click');
    }

});


//Show-Hide social button

$('.share-btn-social').click(function(){
    $('.container').toggleClass('hide')
    $.get("set_interesantes.php?n=Frank Melo&u=f6e79cfe9c0ecc4c08dac4c860c4802b&back=http://localhost:8085/Something/success/profile.php?search_user=f6e79cfe9c0ecc4c08dac4c860c4802b&p=12&sa=f6e79cfe9c0ecc4c08dac4c860c4802b&i=2345123&dl=&iv=1" );
    return false;
});
