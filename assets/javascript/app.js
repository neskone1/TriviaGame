const questions = [{

    ques: "What nationality was Picasso?",
    ans: ["Spanish", "Chinese", "American", "Canadian"],
    name: "picasso",
    correct: "Spanish",
    divClass: ".picasso"
},
{
    ques: "English artist Andy Brown created a portrait of Queen Elizabeth II using what?",
    ans: ["Bubblegum", "Tea Bags", "Fish Bones", "Socks"],
    name: "andy",
    correct: "Tea Bags",
    divClass: ".andy"
},
{
    ques: "How many paintings did Vincent Van Gogh sell during his lifetime?",
    ans: ["842", "27", "1", "192"],
    name: "van",
    correct: "1",
    divClass: ".van"
},
{
    ques: "What painter was summoned to Rome in 1481 to decorate the walls of the Sistine Chapel?",
    ans: ["MICHELANGELO", "SANDRO BOTTICELLI", "RAPHAEL", "AMBROGIO LORENZETTI"],
    name: "sandro",
    correct: "SANDRO BOTTICELLI",
    divClass: ".sandro"
},
{
    ques: "Andy Warhol was a Pop Artist. wich of this works is not one of his?",
    ans: ["Coca-Cola", "Marilyn Monroe", "Elizabeth Taylor", "Rainbow"],
    name: "warhol",
    correct: "Rainbow",
    divClass: ".warhol"
},
{
    ques: "Where was Jean Michael Basquiat from?",
    ans: ["Haiti", "United States", "France", "Puerto Rico"],
    name: "basquiat",
    correct: "SANDRO BOTTICELLI",
    divClass: ".basquiat"
},
{
    ques: "The landscapes Ross painted were strongly influenced by the time he spent in wich state?",
    ans: ["Vermont", "Alaska", "Minesota", "Oregon"],
    name: "ross",
    correct: "Alaska",
    divClass: ".ross"
},
{
    ques: "Which of these most accurately describes Dali's style of art?",
    ans: ["Cubism", "Abstract", "Modernism", "Surrealism"],
    name: "dali",
    correct: "Surrealism",
    divClass: ".dali"
},
{
    ques: "Frida Kahlo began her career as an artist after what?",
    ans: ["8years old", "50yearsold", "being involved in an accident", "in college"],
    name: "frida",
    correct: "being involved in an accident",
    divClass: ".frida"
},
{
    ques: "Who painted The Mona Lisa?",
    ans: ["DaVinci", "Klimt", "Picasso", "Andy Warhol"],
    name: "davinci",
    correct: "DaVinci",
    divClass: ".davinci"
},

] // Finish Questions //

const labels = ["first", "second", "third", "fourth","fifth","sixth","seventh","eighth","ninth","tenth"];

// click to start then display quesions
const startGame = $("#start-btn").on('click', function () {
    $(this).parent().hide();
    $("#welcomeScreen").hide();
    $('.container').show();
    countdown(60);
    questionDisplay();
});

// function for displaying questions
let questionDisplay = function () {
    $(".questions :not('#sub-but')").empty();
    // loops through the 10 questions 
    for (var j = 0; j < 10; j++) {
        $('.questions').prepend('<div class="' + questions[j].name + '"></div>');
        $(questions[j].divClass).append('<div class ="ques-title">' + questions[j].ques + '</div>');
        // loops through answers for each radio button
        for (var i = 0; i <= 3; i++) {
            $(questions[j].divClass).append('<input type="radio"  name="' + questions[j].name + '" value="' + questions[j].ans[i] + '"/><label for="' + labels[i] + '">' + questions[j].ans[i] + '</label>');
        }
        $('.questions').prepend('<hr />');
    }
}


// function for countdown timer
let countdown = function (seconds) {

    let timer = setInterval(function () {
        seconds = seconds - 1;
        $("#time-remain").html(seconds);

        if (seconds <= 0) {
            $('.container').fadeOut(500);
            let correctAnswers = 0;
            let wrongAnswers = 0;
            

            // loop through correctArray & radioName to match html elements & answers
            for (var i = 0; i < 10; i++) {

                if ($('input:radio[name="' + questions[i].name + '"]:checked').val() === questions[i].correct) {

                    correctAnswers++;
                    console.log("this is correct! number:" + i)
                } else  {
                    wrongAnswers++;
                console.log("this is wrong! number:" + i)
            }
         
    };
    $('#correctTimesUp').append(correctAnswers);
    // display wrongAnswers
    $('#wrongTimesUp').append(wrongAnswers);
    $('#timesUp').fadeIn(1000).show();

    // alert("Times Up!");
    clearInterval(timer);
    return;

}
}, 1000);

// click event for submit button to stop timer
$('#sub-but').on('click', function () {
    clearInterval(timer);
})
}; // end countdown


// function to grade quiz once submit button is clicked
let gradeQuiz = $('#sub-but').on('click', function () {

    let correctAnswers = 0;
   let wrongAnswers = 0;
  

    // loop through correctArray & radioName to match html elements & answers
    for (var i = 0; i < 10; i++) {

        if ($('input:radio[name="' + questions[i].name + '"]:checked').val() === questions[i].correct) {

            correctAnswers++;
        } else   {
            wrongAnswers++;
    };
};

// once submit is clicked...
// tests
// stop timer
countdown();
// fade out questions
$('.container').fadeOut(500);
// show answerScreen
$('#answerScreen').show();
// display correctAnswers
$('#correctScreen').append(correctAnswers);
// display wrongAnswers
$('#wrongScreen').append(wrongAnswers);

}); // end gradeQuiz
