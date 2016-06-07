
$(function(){
var age = parseInt(prompt("How old are you?"));

if (age <= 18) {
  $('#under_18').show();
} else {
  $('#over_18').show();
}
});
