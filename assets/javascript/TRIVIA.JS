/**[Click Here to Watch the Demo](https://youtu.be/fBIj8YsA9dk)**.

* You'll create a trivia form with multiple choice or true/false options (your choice).

* The player will have a limited amount of time to finish the quiz. 

  * The game ends when the time runs out. The page will reveal the number of questions that players answer correctly and incorrectly.

* Don't let the player pick more than one answer per question.

* Don't forget to include a countdown timer.
on click start button
set timer function for 120 Seconds
display timer in a div- create or alreay created
when timer stops shut down the game- 
  give results when timer stops
    display, # correct, incorrect and unanswered- dynamically create div
    var will be coorect, incorrect, unanswered
    function timeUp() {
  // in the element with an id of time-left add an h2 saying Time's Up!
  // console log done
  console.log("done");*/


//var secs = 0;


/*
$("#timer").on("click", timeUp());


function timeUp() {
    setTimeout(timeUp, 1000 * 15);
    console.log("done");
    $("#timer").append("<h2>Time's Up!</h2>");
    console.log("time is up");
}*/


var secs = setInterval(timer, 1000);

secs = 10;

function timer() {

    if (secs > 0) {
        secs--;
        $("#seconds").text(secs + " seconds left");
    }
    if (secs < 0) {
        alert("time up");
    };

}

$("#timer").on("click", timer());



/*var secs = 0;

//countdown function is evoked when page is loaded 
f$("#timer").on("click", countdown() {
    setTimeout('Decrement()', 60);
});

//Decrement function decrement the value. 
function Decrement() {

    seconds = document.getElementById("seconds");

    //Display only seconds value. 
    if (seconds < 120) {
        seconds.value = secs;
    } else {
        seconds.value = getseconds();
    }
    //when less than a minute remaining 
    //changes to red 
    if (secondss < 60) {

        seconds.style.color = "red";
    }
    //if seconds becomes zero, 
    //then page alert time up 
    if (secondss < 0) {
        alert('time up');

        seconds.value = 0;
    }
    if seconds > 0 then seconds is decremented
    else {
        //  secs--;
        setTimeout('Decrement()', 1000);
    }
}

function getseconds() {
    //take minutes remaining (as seconds) away  
    //from total seconds remaining 
    return secs - Math.round(mins * 60);*/