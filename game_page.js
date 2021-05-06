var player1=localStorage.getItem("player1_name");  
var player2=localStorage.getItem("player2_name");
var player1_score=0
var player2_score=0
document.getElementById("player1_name").innerHTML=player1 + " :";
document.getElementById("player2_name").innerHTML=player2 + " :";
document.getElementById("player1_score").innerHTML=player1_score;
document.getElementById("player2_score").innerHTML=player2_score;
document.getElementById("player_question").innerHTML="questionturn " + player1;
document.getElementById("player_answer").innerHTML="answerturn " + player2;
function send()
{get_word=document.getElementById("word").value;
word=get_word.toLowerCase();
charAt1=word.charAt(1);
lengthdivide2=Math.floor(word.length/2);
charAt2=word.charAt(lengthdivide2);
var lengthminus1=word.length-1;
charAt3=word.charAt(lengthminus1);
removechar1=word.replace(charAt1, "_");
removechar2=word.replace(charAt2, "_");
removechar3=word.replace(charAt3, "_");
question_word = "<h4 id='word_display'> Q. "+removechar3+"</h4>";
 input_box = "<br>Answer : <input type='text' id='input_check_box'>"; 
 check_button = "<br><br><button class='btn btn-info' onclick='check()'>Check</button>";
  row = question_word + input_box + check_button ; document.getElementById("output").innerHTML = row;
   document.getElementById("word").value = "";

}
question_turn="player1";
answer_turn="player2";
function check() {var get_answer=document.getElementById("input_check_box").value;
var answer=get_answer.toLowerCase();
if(answer == word)
{
    if(answer_turn == "player1")
{
    player1_score = player1_score +1;
    document.getElementById("player1_score").innerHTML = player1_score;

}
else {player2_score = player2_score +1;
document.getElementById("player2_score".innerHTML = player2_score);
}
}
if(question_turn == "player1")
{
    question_turn = "player2";
    answer_turn="player1";
    document.getElementById("player_question").innerHTML = "question turn -" + player2;
    document.getElementById("player_answer").innerHTML = "answer turn -" + player1;
}
else
{
    question_turn = "player1";
    answer_turn="player2";
    document.getElementById("player_question").innerHTML = "question turn -" + player1;
    document.getElementById("player_answer").innerHTML = "answer turn -" + player2;
}
document.getElementById("output").innerHTML="";}