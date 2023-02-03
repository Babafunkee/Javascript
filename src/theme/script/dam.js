//Data types in javascript


  const thebutton = document.getElementById("selectButton");
  let btn = document.querySelector("[name='buttonname']");
  let atrbtn = document.querySelector("[data-ctrl-btn]");
  const div = document.getElementById("TxtM");
 function mike(){
  var dami = "dami best friend";
 }

 //global variable
var sms = "dami e sms"; //global variable

//  thebutton.addEventListener("click", function(){
//    //contronButton(); //this can also be discribed as method
      //mike();
//  });


function contronButton(){
  let num = "hello! damilola, how are you?";
  div.innerText = num;
 }

 $(thebutton).on("click", function(){
  contronButton();
 })




