function startQuiz(id){
    let startQuizLayout = document.getElementById(id);
    startQuizLayout.style.display = "none";

    let storingQ1Element = document.getElementById("q1");
    storingQ1Element.style.display = "block";
}

var score = 0;
var timeSecond = 80;
var decreaseTime = 10;

var decTime = setInterval(
    function () {
        if (timeSecond <= 0){
            clearInterval(decTime);
            document.getElementById("time").innerHTML = "finished";
        }else{
            document.getElementById("time").innerHTML = timeSecond
        }   
        timeSecond -= 1;
    }, 
    1000
)


function looseTime(){
    timeSecond = timeSecond - decreaseTime;
}



function switchingDisplayQ1(){
    var storingQ1Element = document.getElementById("q1");
    storingQ1Element.style.display = "none";
            
    var storingQ2Element = document.getElementById("q2");
    storingQ2Element.style.display = "block"; 
}

function switchingDisplayQ2(){
    var storingQ2Element = document.getElementById("q2");
    storingQ2Element.style.display = "none";

    var storingQ3Element = document.getElementById("q3");
    storingQ3Element.style.display = "block";
}

function switchingDisplayQ3(){
    var storingQ3Element = document.getElementById("q3");
    storingQ3Element.style.display = "none";

    var storingQ4Element = document.getElementById("q4");
    storingQ4Element.style.display = "block";
}

function switchingDisplayQ4(){
    var storingQ4Element = document.getElementById("q4");
    storingQ4Element.style.display = "none";

    var storingQ5Element = document.getElementById("q5");
    storingQ5Element.style.display = "block";
}

function switchingDisplayQ5(){
    var storingQ5Element = document.getElementById("q5");
    storingQ5Element.style.display = "none";

    var storingQ6Element = document.getElementById("q6");
    storingQ6Element.style.display = "block";
}

function switchingDisplayQ6(){
    var storingQ6Element = document.getElementById("q6");
    storingQ6Element.style.display = "none";

    var storingQ7Element = document.getElementById("q7");
    storingQ7Element.style.display = "block";
}

function switchingDisplayQ7(){
    var storingQ7Element = document.getElementById("q7");
    storingQ7Element.style.display = "none";

    var storingQ8Element = document.getElementById("q8");
    storingQ8Element.style.display = "block";
}

function switchingDisplayQ8(){
    var storingQ8Element = document.getElementById("q8");
    storingQ8Element.style.display = "none";

    var storingQ9Element = document.getElementById("initialsiii");
    storingQ9Element.style.display = "block";
}

function switchingDisplayAllDone(){
    var storingQDDElement = document.getElementById("initialsiii");
    storingQDDElement.style.display = "none";
    console.log("It Worked");

    var storingQDDElement = document.getElementById("finalStage");
    storingQDDElement.style.display = "block";
}

function switchingDisplayBackBtn(){
    var storingQ1Element = document.getElementById("finalStage");
    storingQ1Element.style.display = "none";

    var storingQ2Element = document.getElementById("start");
    storingQ2Element.style.display = "block";
}


function correctAnswer(){
    score = score + 10;
    console.log("Total Score: ", score)
    // switchingDisplayQ1(id);
}

function wrongAnswer(){
    alert("-10 Seconds")
    looseTime();
    // switchingDisplayQ1(id);
}


function selectOption(chooseOption){

    switch(chooseOption){

        case "btn0-1": 
            wrongAnswer();
            switchingDisplayQ1();
            
        break; 
        case "btn1-1": 
            wrongAnswer();
            switchingDisplayQ1();
            break;
        case "btn2-1": 
            correctAnswer();
            switchingDisplayQ1();
            break;  
        case "btn3-1": 
            wrongAnswer();
            switchingDisplayQ1();
            break; 

        // Question 2 Options

        case "btn0-2": 
            wrongAnswer();
            switchingDisplayQ2();
            break; 
        case "btn1-2": 
            wrongAnswer();
            switchingDisplayQ2();
            break;
        case "btn2-2": 
            wrongAnswer();
            switchingDisplayQ2();
            break;  
        case "btn3-2": 
            correctAnswer();
            switchingDisplayQ2();
            break; 

        // Question 3 Options

        case "btn0-3": 
            correctAnswer();
            switchingDisplayQ3();
            break; 
        case "btn1-3": 
            wrongAnswer();
            switchingDisplayQ3();
            break;
        case "btn2-3": 
            correctAnswer();
            switchingDisplayQ3();
            break;  
        case "btn3-3": 
            correctAnswer();
            switchingDisplayQ3();
            break; 

        // Question 4 Options

        case "btn0-4": 
            wrongAnswer();
            switchingDisplayQ4();
            break; 
        case "btn1-4": 
            correctAnswer();
            switchingDisplayQ4();
            
            break;
        case "btn2-4": 
            wrongAnswer();
            switchingDisplayQ4();
            break;  
        case "btn3-4": 
            wrongAnswer();
            switchingDisplayQ4();
            break; 

        // Question 5 Options

        case "btn0-5": 
            wrongAnswer();
            switchingDisplayQ5();
            break; 
        case "btn1-5": 
            wrongAnswer();
            switchingDisplayQ5();
            break;
        case "btn2-5": 
            correctAnswer();
            switchingDisplayQ5();
            break;  
        case "btn3-5": 
            wrongAnswer();
            switchingDisplayQ5();
            break; 

        // Question 6 Options

        case "btn0-6": 
            correctAnswer();
            switchingDisplayQ6();
            break; 
        case "btn1-6": 
            wrongAnswer();
            switchingDisplayQ6();
            break;
        case "btn2-6": 
            wrongAnswer();
            switchingDisplayQ6();
            break;  
        case "btn3-6": 
            wrongAnswer();
            switchingDisplayQ6();
            break; 

        // Question 7 Options

        case "btn0-7": 
            correctAnswer();
            switchingDisplayQ7();
            break; 
        case "btn1-7": 
            correctAnswer();
            switchingDisplayQ7();
            break;
        case "btn2-7": 
            wrongAnswer();
            switchingDisplayQ7();
            break;  
        case "btn3-7": 
            wrongAnswer();
            switchingDisplayQ7();
            break; 

        // Question 8 Options

        case "btn0-8": 
            correctAnswer();
            switchingDisplayQ8();
            finalScoresGainedd = score;
            document.getElementById("totalScorees").innerHTML = finalScoresGainedd;

        
            break; 
        case "btn1-8": 
            correctAnswer();
            switchingDisplayQ8();
            finalScoresGainedd = score;
            document.getElementById("totalScorees").innerHTML = finalScoresGainedd;

        
            break;
        case "btn2-8": 
            wrongAnswer();
            switchingDisplayQ8();
            finalScoresGainedd = score;
            document.getElementById("totalScorees").innerHTML = finalScoresGainedd;

        
            break;  
        case "btn3-8": 
            wrongAnswer();
            switchingDisplayQ2();
            finalScoresGainedd = score;
            document.getElementById("totalScorees").innerHTML = finalScoresGainedd;

        
            break; 

        case "view3_clearScore_btn":
            var view4= document.getElementById("pepsi");
            // q1.classList.toggle("block");
            view4.style.display = "none";

            const element = document.getElementById("pepsi");
            element.remove(); // Removes the div with the 'div-02' id

        
            
            break;
            
        case "backBtn":
            switchingDisplayBackBtn();
            location.reload();
            break;
        default:
    }
}

function lastQuestion(){

}

function allDoneFunction(){ 
    var view2= document.getElementById("initialsiii");
    // q1.classList.toggle("block");
    view2.style.display = "none";

    var view3 = document.getElementById("finalStage");
    if (view3.style.display === "block") {
        view3.style.display = "none";
    } else {
        view3.style.display = "block";
    }

    var inputName = document.getElementById("nameiii").value;
    document.getElementById("initials").innerHTML = inputName;
    finalScoresGained = score;
    console.log("final_scocored_gamoco", finalScoresGained)
    document.getElementById("totalScores").innerHTML = finalScoresGained;

    // var inputName = document.getElementById("corey").value
    // document.getElementById("passedName").innerHTML = inputName
    // document.getElementById("scoreAndName").innerHTML = score 
    console.log(inputName)   
}



function reloadBtn(){
    score = 0;

    var view3= document.getElementById("finalStage");
    // q1.classList.toggle("block");
    view3.style.display = "none";

    var view1 = document.getElementById("start");
    if (view1.style.display === "block") {
        view1.style.display = "none";
    } else {
        view1.style.display = "block";
    }

    location.reload();

}


function hideScores(){
    var view4 = document.getElementById("hideHighScore");
    view4.style.display = "none"
}

