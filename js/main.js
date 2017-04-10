console.log('Running');
//starting out with the two characters
// var for the timer 



var totalGameTime;
var startTime;
var endTime;
var intervalId;

  // when start is pressed runners begin
  $('#start').click(function(){
  $('#start').toggle();
  trackLength();
});

$(document).ready(function() {
    var $tom = $('#tom');
    var $jerry = $('#jerry');
    var gameEnds = false;
    var trackLength = true;
    var finishlinewidth =$('finishline').width();
    var trackwidth = $document.width() - finishlinewidth;

      $('#go').removeClass('infinite');
      $('img').removeClass('rollIn');
      $('#tom').addClass('infinite bounce');

   
    $(document).keydown(function(event) 
    //check for winner
    var PositionOne = $($tom).position();
    var positionTwo = $($jerry).position();
     if (positionOne.left + $($tom).width() >= trackWidth) {
        $(document).off('keydown');
        $('#container').append('<tomeatingjerry></img>');
                $('h1').text('Tom Wins!!!!');
                var audio = new Audio('media/burp.wav');
                audio.play();
                $('#reset').addClass('animated infinite pulse');
                return;
            }
            if (positionTwo.left + $($jerry).width() >= trackWidth) {
                $(document).off('keydown');
                $('#container').append('<img id="dinner" src="imgs/winnerwinnerchickendinner.png"></img>');
                $('h1').text('Jerry Wins!!!!');
                var audio = new Audio('media/laugh.mp3');
                audio.play();
                $('#reset').addClass('animated infinite pulse');
                return;
            }
 //for detecting collision
 $(document).keydown(function(event){
 if(event.keyCode == 83) {
   $('#tom').animate({'left':'+=10'},0)}
   if(event.keyCode == 76) {
   $('#jerry').animate({'left':'+=10'},0)}
//detect collision
   var tomPos = $('#tom').position();    
            console.log(tomPos);
            if(tomPos.left === 900) { 
            }
   var jerryPos = $('#jerry').position();    
            console.log(tomPos);
            if(jerryPos.left === 900) {
            }

 //when tom or jerry reaches end of track first wins!!!

});



//for restarting the game
$('#reset').click(function(){
  $('#tom').animate({left:'0px'},0);
  $('#jerry').animate({left:'0px'},0);  
  gameEnds=false;
  trackLength();
});

});
//setting timer to the game.
function (){
	if(gameboard.childNodes.length === 0){
		clearInterval(intervalId);
		endTime = Date.now();
		totalGameTime = Math.round((endTime - startTime)/10)/100;
		currentScore.innerHTML = totalGameTime;
		//if this score is better than the last high score, replace that one then resort high score list
		if (totalGameTime < highScore[4]){
			highScore[4] = totalGameTime;
			highScore.sort(sortNumber);
			highScoreTemplate();
		}
	}
}


