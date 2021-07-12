player_1 = localStorage.getItem("player_1");

player_2 = localStorage.getItem("player_2");

var player1_score = 0;  
var player2_score = 0;

document.getElementById("player1_name").innerHTML = player_1 + ":";

document.getElementById("player2_name").innerHTML = player_2 + ":";

document.getElementById("player1_score").innerHTML = player1_score;

document.getElementById("player2_score").innerHTML = player2_score;

document.getElementById("player_q").innerHTML = "Question Turn -" + player_1;

document.getElementById("player_a").innerHTML = "Answer Turn -" + player_2;

function send() {

    get_word = document.getElementById("word").value;

    word = get_word.toLowerCase();

    console.log(word);

    charat1 = word.charAt(1);

    console.log(charat1);

    length_by_2 = Math.floor(word.length/2);

    charat2 = word.charAt(length_by_2);

    console.log(charat2);

    length_min_1 = word.length - 1;

    charat3 = word.charAt(length_min_1);

    console.log(charat3);

    remove_1 = word.replace(charat1, "_");

    remove_2 = remove_1.replace(charat2, "_");

    remove_3 = remove_2.replace(charat3, "_");

    question_word = "<h4 id = 'word_display'> Q = "+remove_3+"</h4>";

    input_box = "<br> Answer: <input id='input_checkbox' type='text'>";

    check_button = "<br><br> <button class='btn btn-info' onclick = 'check()'>Check</button>";

    row = question_word+input_box+check_button;

    document.getElementById("output").innerHTML = row;

    document.getElementById("word").innerHTML = ""; 

}

var question_turn = "player_1";

var answer_turn = "player_2";

function check() {
    
    get_answer = document.getElementById("input_checkbox").value;

    answer = get_answer.toLowerCase();

    console.log(answer);

    if (answer == word) {
        if (answer_turn == "player_1") {
            player1_score++;
            document.getElementById("player1_score").innerHTML = player1_score;
        } 
        else if (answer_turn == "player_2") {
            player2_score++;
            document.getElementById("player2_score").innerHTML = player2_score;
            
        }

    }
    if (question_turn == "player_1") {

        question_turn = "player_2";

        answer_turn = "player_1";

        document.getElementById("player_q").innerHTML = "question_turn"+ player_2;

        document.getElementById("player_a").innerHTML = "answer_turn"+ player_1;

    }

    else if (question_turn == "player_2") {
        question_turn = "player_1";

        answer_turn = "player_2";

        document.getElementById("player_q").innerHTML = "question_turn"+ player_1;

        document.getElementById("player_a").innerHTML = "answer_turn"+ player_2;
    }

    document.getElementById("output").innerHTML = "";

}

