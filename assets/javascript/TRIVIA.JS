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
function fn1() {
    var rd1 = document.getElementById("rd1")
    var rd2 = document.getElementById("rd2")
    if (rd1.checked == true) {
        alert("boo" + rd1.value);
        //rd2++; returns NaN


        console.log(rd2);
    } else if (rd2.checked == true) {
        alert("hoo" + rd2.value);

    }
}



$(document).ready(function() {

    $("#test").click(function() {
        alert("Hello! I am an alert box!!");
        console.log("I got clicked");
    });

    $("#timer2").click(function() {

        secs = setInterval(timer, 1000);
        console.log(" timer function called from click");
        secs = 120;
        timer();

    });

    //var wrong = $("#wrong").checked;
    //var right = $("#right").checked;




    var right = document.getElementById("#right");
    var wrong = document.getElementById("#wrong");
    var secs = 0;
    var missing = 0;



    function checked() {
        if (right.checked == true) {
            alert("right");
            right++;
        }
        if (wrong.checked == true) {
            wrong++;
        } else {
            missing++;
        }

        console.log(wrong + "answers");
        console.log(right + "answers");
        $("#wrongAnswers").text(wrong);
        $("#rightAnswera").text(wrong);
        $("#missing").text(wrong);
    }

    function reset() {
        secs = 0;
    }

    function timer() {
        console.log(" timer function called")
            // var secs = setInterval(timer, 1000);
        if ((secs > 0) && (secs < 121)) {
            secs--;
            console.log(secs);
            $("#time-left").text(secs + " seconds left");

        } else if (secs == 0) {
            timeUp(0);
        }
    }
    // having trouble stopping the timer functionc continue to call itself 
    function timeUp() {
        secs = 0;
        //if (secs == 0) {
        //  clearInterval(secs);
        //}
        // in the element with an id of time-left add an h2 saying Time's Up!
        $("#time-left").text(" is Up");
        // alert("Time's Up!");
        console.log("done");
    };


    //calling the timer function on click




});
//Do code for showing the number of seconds here