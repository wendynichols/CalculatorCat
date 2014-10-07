
  //  document.getElementById('')

  var input1 = document.getElementById('num_one'),
      input2 = document.getElementById('num_two'),
      button = document.getElementById('calculateBtn'),
      answer = document.getElementById('answer');




  //get the value of the name input

  button.onclick = function () {

    var value1 = input1.value;
    console.log(value1);
    var value2 = input2.value;
    console.log(value2);
    var solution = value1 * value2;
    console.log(solution);

    answer.innerHTML = value1 * value2;

//convert value to numbers parse int or Number

  console.log ('this is making my head hurt');

};
// document.getElementById('calculateBTN').onclick = function () {

  //value for input one

  //var value1 = document.getElementById('num_one').value;
  //var value1_num = Number(value1);
    //value for input two
      //var value2 = document.getElementById('num_two').value;
      //var value2_num = Number(value2);
      //add the two values together
      //var sum = value1_num + value2_num;
      //document.getElementById('answer'.innerHTML = sum;




  // //add the name value to some greeting
  // var greeting = "hello, " + name;
  //
  // //find the greetingArea element
  // var greeting_area = document.getElementById('greetingArea');
  //
  // //spit the content of my greeting into that area
  // greeting_area.innerHTML = greeting;
