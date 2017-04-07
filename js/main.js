console.log('Running');
//starting out with the two characters
$(document).ready(function() {
    var $tom = $('#tom');
    var $jerry = $('#jerry');
       
 //to move the image across the page
 // this function is not working
 $(document).keydown(function(key) {
 $(document).on('keydown', function(element){
 if(element.keyCode == 83) {
   $('#tom').animate({
    right: '-=10'
    }, 0);
   }
 })
 $(document).keydown(function(key) {
   $(document).on('keydown', function(element){
   if(element.keyCode == 76) {
   $('#jerry').animate({
   right: '-=10'
   }, 0);
  }
})


         

