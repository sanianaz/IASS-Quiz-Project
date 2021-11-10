let maxQuestions = sessionStorage.getItem("maxQuestions");

//Display the pictures
function printPictures() {

    var pictures = ["../Images/lose.gif", "../Images/meh.gif", "../Images/win.gif"];
    var messages = ["You really need to do better", "That's just okay", "Great job!"];
    var index = 0;

    if (user_points < (maxQuestions * 5))
        index = 0;
    else if (user_points < (maxQuestions * 10))
        index = 1;
    else if (user_points == (maxQuestions * 10))
        index = 2;

    document.getElementById("showPicture").style.visibility = "visible";
    document.getElementById("message").innerHTML = messages[index];
    // document.getElementById("number_correct").innerHTML = "You got " + user_points + " correct.";
    document.getElementById("picture").src = pictures[index];
}


//Display Points and Time
// let user_name = sessionStorage.getItem("name");
let user_points = sessionStorage.getItem("points");
let user_time = sessionStorage.getItem("time");

// document.querySelector("span.name").innerHTML = user_name;
document.querySelector("span.time_taken").innerHTML = user_time;
document.querySelector("span.points").innerHTML = user_points;

printPictures();
