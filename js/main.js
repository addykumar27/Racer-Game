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
   $('#tom').animate({'left':'+=10'},0)}
   if(event.keyCode == 76) {
   $('#jerry').animate({'left':'+=10'},0)}
//detect collision
   var tomPos = $('#tom').position();    
            console.log(tomPos);
            if(tomPos.left === 800) {
                alert("tom won");    
            }
   var jerryPos = $('#jerry').position();    
            console.log(tomPos);
            if(jerryPos.left === 800) {
                alert("jerry won");    
            }


 //when tom or jerry reaches end of track first wins!!!

});
 //for detecting collision


//for restarting the game
$('#reset').click(function(){
  $('#tom').animate({left:'0px'},0);
  $('#jerry').animate({left:'0px'},0);  
  gameEnds=false;
  trackLength();
});

});



