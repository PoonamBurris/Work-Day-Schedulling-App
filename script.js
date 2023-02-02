
var scNineam = $("#9am");
var scTenam = $("#10am");
var scElevenam = $("#11am");
var scTwelvepm = $("#12pm");
var scOnepm = $("#13pm");
var scTwopm = $("#14pm");
var scThreepm = $("#15pm");
var scFourpm = $("#16pm");
var scFivepm = $("#17pm");
var time = moment().hours();
var datainput;
var timeSpan;
var todaysDate = moment().format('dddd') + " " + moment().format("Do MMM YYYY");

//Displays todays day,date and time
var interval = setInterval(function() { 
  $('#currentDay').text(todaysDate + " " + moment().format('hh:mm:ss A'));
}, 100);


function checkMoment() {
  var chk9 = JSON.parse(localStorage.getItem("9AM"));
  scNineam.val(chk9);

  var chk10 = JSON.parse(localStorage.getItem("10AM"))
  scTenam.val(chk10);
  
  var chk11 = JSON.parse(localStorage.getItem("11AM"))
  scElevenam.val(chk11);
  
  var chk12 = JSON.parse(localStorage.getItem("12PM"))
  scTwelvepm.val(chk12);
  
  var chk1 = JSON.parse(localStorage.getItem("1PM"))
  scOnepm.val(chk1);
  
  var chk2 = JSON.parse(localStorage.getItem("2PM"))
  scTwopm.val(chk2);
  
  var chk3 = JSON.parse(localStorage.getItem("3PM"))
  scThreepm.val(chk3);
 
  var chk4 = JSON.parse(localStorage.getItem("4PM"))
  scFourpm.val(chk4);
  
  var chk5 = JSON.parse(localStorage.getItem("5PM")) 
  scFivepm.val(chk5); 
} 

function colorBlocks() { 
  //Checks if current time matches with the time block on schedule and colors it accordigly  
  $(".row").each(function () {
     var checkTime = parseInt($(this).attr("id"));
      time = parseInt(time);
     if (time > checkTime) {
         $(this).addClass("past");
     } else if (time < checkTime) {
        $(this).addClass("future");
     } else {
         $(this).addClass("present");
     }
});
}
//Calling out both the functions
$(document).ready(function(){
  checkMoment()
  colorBlocks()
});

 //When save button is clicked, input is saved on screen after refreshing the page
 $(".saveBtn").on("click", function(){ 
  timeSpan = $(this).siblings("div").text()
  datainput = $(this).siblings("textarea").val()
  localStorage.setItem(timeSpan, JSON.stringify(datainput));})