// var add = function(number1, number2) {
//   return number1 + number2;
// };

function add(number1, number2) {
  return number1 + number2;
};

var sub = function(number1, number2){
  return number1 - number2;
};

var prod = function(number1, number2){
  return number1 * number2;
};

var quot = function(number1, number2){
  return number1 / number2;
};

$(document).ready(function(){
  $("form#add").submit(function(event) {
    event.preventDefault();
    var number1 = parseInt($("#add1").val());
    var number2 = parseInt($("#add2").val());
    var result = add(number1,number2);

    $("#output").text(result);

  });

});
