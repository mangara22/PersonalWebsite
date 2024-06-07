function countdown() {
    let countDownDate = new Date(2025, 4, 1, 17).getTime();

    let countdown = setInterval(() => {
        // https://www.w3schools.com/howto/howto_js_countdown.asp
        let currentDate = new Date().getTime();
        let diff = countDownDate - currentDate;
        let days = Math.floor(diff / (1000 * 60 * 60 * 24));
        let hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        let minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
        let seconds = Math.floor((diff % (1000 * 60)) / 1000);

        let result = "Countdown to May 1st, 2025: " + days + " day(s) " + hours + " hour(s) " + minutes + " minute(s) " + seconds + " second(s)";
        document.getElementById("cd").innerHTML = result;

        if (diff < 0) {
            clearInterval(countdown);
            document.getElementById("cd").innerHTML = "Countdown to May 1st, 2025 is Expired!";
        }
    }, 1000)
}

document.addEventListener("load", countdown());

var correct = "";

function getTrivia() {
    fetch('https://opentdb.com/api.php?amount=1&difficulty=medium&type=multiple')
        .then(response => response.json())
        .then(data => {
            if (data.response_code == 0) {
                let result = data.results[0];
                document.getElementById("question").innerHTML = result.question;
                
                let answers = [];
                answers.push(result.correct_answer);
                let incorrect = result.incorrect_answers;
                for(let i = 0; i < incorrect.length; i++) {
                    answers.push(incorrect[i]);
                }
                answers.sort();

                for(let j = 1; j <= 4; j++) {
                    let id = "option" + j;
                    document.getElementById(id).innerHTML = answers[j-1];
                }

                correct = result.correct_answer;
            }
            else if (data.response_code == 5) {
                alert("Don't click the buttons too fast!");
            }
        })
        .catch(error => {
            console.log("Error: " + error);
        })
}

function correctAnswer() {
    if (correct === "") {
        alert("No question has been loaded in yet!");
    }
    else {
        alert(correct);
    }
    getTrivia();
}