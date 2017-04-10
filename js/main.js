$(document).ready(function(){

  var someoneWon = false;
$(document).keydown(function(event){
  var tom = $('#tom');
  var jerry = $('#jerry');  

  if(event.keyCode == 83 && someoneWon === false) {
    $('#tom').animate({'left':'+=10'},0);
    var tomPos = tom.offset().left; 
    if(tomPos === 980) { 
      $('#container').append('<img id="winningImage" src="https://media.giphy.com/media/vIAvrRsR9baEg/200w_d.gif"></img>');
      var audio = new Audio('media/tomslaugh.wav');
                audio.play();
        someoneWon = true;
      }
  }
  if(event.keyCode == 76 && someoneWon === false) {
   $('#jerry').animate({'left':'+=10'},0);
   var jerryPos = jerry.offset().left;    
    if(jerryPos === 980) {
        $('#container').append('<img id="winningImage" src="https://media.giphy.com/media/l1L2UkgpuiE4U/200w_d.gif"></img>');
        var audio = new Audio('media/jerrytheme.wav');
                audio.play();
        someoneWon = true;
    }
  }
  
});
//for restarting the game
$('#reset').click(function(){
  $('#tom').offset({top: 250, left: 0});
  $('#jerry').offset({top: 150, left: 0}); 
   $('#winningImage').remove();
   $("audio"). remove();
   someoneWon = false;
});

});

