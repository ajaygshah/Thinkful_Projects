$(document).ready(function() {

$("#btn").hide();
$("#corr, #incorr").hide();
 
function questions(question, choices, answer) {
 
this.question = question;
this.choices = choices;
this.answer = answer;
 
}
 
var question1 = new questions("Where is the Louvre Pyramid located?", ['United States of America','Scotland','Paris','New Zealand'],2);
var question2 = new questions("Where is the Icehotel located?", ['Dubai','Russia','London','Sweden'],3);
var question3 = new questions("If you're eating 'Pav Bhaji', which country are you in?", ['South Africa','India','Thailand','Germany'],1);
var question4 = new questions("If you're shopping internationally, which website should you use?",['Amazon.com','InternationalCheckout.com','TrueCurrency.com','Macys.com'],2) 
var listOfQuestions = [question1, question2, question3, question4];

var bgimages = ['background.jpg','icehotel.jpg','pavbhaji.jpg','mall.jpg'];
var fontcolor = ['#EED2EE','black','white','#FFE1FF'];
               
var i = 0;
var j;
var score = 0;
var num = 1;

$("#head").text("Question " + num + " of " + listOfQuestions.length);

$("#result").text("Score: " + score + " / " + listOfQuestions.length);
 
function que(i){
     
        $("#que").append(listOfQuestions[i].question);
        for(j=0; j <=listOfQuestions[i].choices.length-1; j++) {
                $("#ans").append("<li>" + listOfQuestions[i].choices[j] + "</li>");
        }
      
}
 
que(i);

behave(i);
 
function behave(i) {
                $("li").click(function() {
                                if($(this).index() == listOfQuestions[i].answer) {
                                       $("#corr").fadeIn();
                                        score++;
                                        $("#result").text("Score: " + score + " / " + listOfQuestions.length);
                                        i++;
                                        $("#que").empty();
                                        $("#ans").empty();
                                        if(num == listOfQuestions.length) {
                                                $("#result").text("Total Score: " + score + " out of " + listOfQuestions.length);
                                                comments();
                                                $("#btn").show();
                                                $("#btn").click(function() {
                                                    newgame();
                                                })
                                                
                                        }
                                        else {
                                               
                                                num++;
                                                $("#head").text("Question " +num + " of " + listOfQuestions.length);

                                                que(i);
                                                 $("#corr").fadeOut(2000);
                                                  
                                                behave(i);
                                                
                                        }
                                }
                                else {
                                         $("#incorr").fadeIn();
                                         $("#result").text("Score: " + score + " / " + listOfQuestions.length);
                                        i++;
                                        $("#que").empty();
                                        $("#ans").empty();
                                       if(num == listOfQuestions.length) {
                                                $("#result").text("Total Score: " + score + " out of " + listOfQuestions.length);
                                                comments();
                                                $("#btn").show();
                                                $("#btn").click(function() {
                                                    newgame();
                                                })
                                                
                                        }
                                        else {
                                               
                                                num++;
                                                $("#head").text("Question " +num + " of " + listOfQuestions.length);

                                                que(i);
                                                 $("#incorr").fadeOut(2000);
                                                behave(i);
                                                
                                        }
                                }
               
                })
 
}

function comments() {
	if(score == 4) {
		$("#feedback").append("<p>" + "Perfect Score!" + "</p>");
	}
	else if(score >=2 && score < 4) {
		$("#feedback").append("<p>" + "Good job! It is time to explore the world!" + "</p>");
	}
	else {
		$("#feedback").append("<p>" + "You need to go out of your home more often. " + "</p>");
	}
}

function newgame() {
    $("#feedback, #result, #head, #que, #ans").empty();
    $("#btn, #corr, #incorr").hide();
    i = 0;
    j;
    score = 0;
    num = 1;
    $("#head").text("Question " + num + " of " + listOfQuestions.length);

    $("#result").text("Score: " + score + " / " + listOfQuestions.length);
    que(i);
    behave(i);

}

});


