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

$(document).ready(function() {

    $("#test").click(function() {
        alert("Hello! I am an alert box!!");
        console.log("I got clicked");
    });
    var wrong;
    var right;

    /* function ScoreRight() {
         if right == true;
         right == 1;
         right++;

     }*/


    // var secs = setInterval(timer, 1000);
    var secs = 0;
    //secs = setInterval(timer, 1000);

    function timer() {
        console.log(" timer function called")
            // var secs = setInterval(timer, 1000);
        if ((secs > 0) && (secs < 121)) {
            secs--;
            console.log(secs);
            $("#seconds").text(secs + " seconds left");
        } else {
            function timeUp() {
                // in the element with an id of time-left add an h2 saying Time's Up!
                $("#time-left").text(" Time's Up");
                // alert("Time's Up!");
                console.log("done");
            }
        }
    }
    //var secs = setInterval(timer, 1000);

    // function timeUp() {
    // in the element with an id of time-left add an h2 saying Time's Up!
    // $("#time-left").text(" Time's Up");
    // alert("Time's Up!");
    // console.log("done");
    // }


    // document.getElementById("timer2").innerHTML = timer();
    $("#timer2").click(function() {
        secs = setInterval(timer, 1000);
        console.log(" timer function called from click");
        secs = 120;

        timer();

    });



}); //Do code for showing the number of seconds here