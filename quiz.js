
const startButton = document.getElementById('start-btn')
let nextButton = document.getElementById('next-btn1')
startButton.addEventListener('click', startQuiz)

function startQuiz() {
    document.getElementById("intro").style.display = "none";
    document.getElementById("question-1").style.display = "inline-block";
    //Reassign nextButton for the current question
    nextButton = document.getElementById('next-btn1');
    //Add event listener for next question
    nextButton.addEventListener('click', question2)
}

function question2() {
    //Reassign nextButton for the current question
    nextButton = document.getElementById('next-btn2');
    document.getElementById("question-1").style.display = "none";
    document.getElementById("question-2").style.display = "inline-block";
    //Remove event listener
    nextButton.removeEventListener('click', question2);
    //Add event listener for next question
    nextButton.addEventListener('click', question3)
}

function question3() {
    nextButton = document.getElementById('next-btn3');
    document.getElementById("question-2").style.display = "none";
    document.getElementById("question-3").style.display = "inline-block";
    nextButton.removeEventListener('click', question3);
    nextButton.addEventListener('click', question4)
}

function question4() {
    nextButton = document.getElementById('next-btn4');
    document.getElementById("question-3").style.display = "none";
    document.getElementById("question-4").style.display = "inline-block";
    nextButton.removeEventListener('click', question4);
    nextButton.addEventListener('click', question5)
}

function question5() {
    nextButton = document.getElementById('next-btn5');
    document.getElementById("question-4").style.display = "none";
    document.getElementById("question-5").style.display = "inline-block";
    nextButton.removeEventListener('click', question5);
    nextButton.addEventListener('click', question6)
}

function question6() {
    nextButton = document.getElementById('next-btn6');
    document.getElementById("question-5").style.display = "none";
    document.getElementById("question-6").style.display = "inline-block";
    nextButton.removeEventListener('click', question6);
    nextButton.addEventListener('click', results)
}

function results() { 
calculateResults()
document.getElementById("question-6").style.display = "none";
}

function calculateResults() {
    const radios1 = document.querySelectorAll('input[name="answer1"]');
    let q1Value;
    for (const rb of radios1) {
        if (rb.checked) {
            q1Value = rb.value;
            break;
        }
    }
    const radios2 = document.querySelectorAll('input[name="answer2"]');
    let q2Value;
    for (const rb of radios2) {
        if (rb.checked) {
            q2Value = rb.value;
            break;
        }
    }
    const radios3 = document.querySelectorAll('input[name="answer3"');
    let q3Value;
    for (const rb of radios3) {
        if (rb.checked) {
            q3Value = rb.value;
            break;
        }
    }
    const radios4 = document.querySelectorAll('input[name="answer4"');
    let q4Value;
    for (const rb of radios4) {
        if (rb.checked) {
            q4Value = rb.value;
            break;
        }
    }
    const radios5 = document.querySelectorAll('input[name="answer5"');
    let q5Value;
    for (const rb of radios5) {
        if (rb.checked) {
            q5Value = rb.value;
            break;
        }
    }
    const radios6 = document.querySelectorAll('input[name="answer6"');
    let q6Value;
    for (const rb of radios6) {
        if (rb.checked) {
            q6Value = rb.value;
            break;
        }
    }

    let total = (q1Value) + (q2Value) + (q3Value) + (q4Value) + (q5Value) + (q6Value);
    results = total;
    if (results >= 30) {
        document.getElementById('results-grass').style.display = 'inline-block';
    } else if (result >= 24) {
        document.getElementById('results-fire').style.display = 'inline-block';
    } else if (result >= 18) {
        document.getElementById('results-water').style.display = 'inline-block';
    } else if (result >= 12) {
        document.getElementById('results-ghost').style.display = 'inline-block';
    } else {
        document.getElementById('results-normal').style.display = 'inline-block';
    }
}

