console.log('Running');
//starting out with the two characters

$(document).ready(function() {
    var $tom = $('#tom');
    var $jerry = $('#jerry');
    var gameEnds = false;
    var trackLength = true;
       
 //to move the image across the page
 // this function is not working
  

  // when start is pressed runners begin
  $('#start').click(function(){
  $('#start').toggle();
  trackLength();
});




 $(document).keydown(function(event){
 if(event.keyCode == 83) {
   $('#tom').animate({'left':'+=10'},20)}
   if(event.keyCode == 76) {
   $('#jerry').animate({'left':'+=10'},20)}

 //when tom or jerry reaches end of track first wins!!!
  if($('#tom').css('left')=='750px') {
    if(gameOver!==true) {
      alert('tom wins! Time to eat jerry')
      gameEnds=true;
    }
  }
  if($('#jerry').css('left')=='750px') {
    if(gameOver!==true) {
      alert('jerry wins! Time for some cheese')
      gameEnds=true;
    }
  }
});


//for restarting the game
$('#reset').click(function(){
  $('#tom').animate({left:'0px'},0);
  $('#jerry').animate({left:'0px'},0);  
  gameEnds=false;
  boardLength();
});

});



