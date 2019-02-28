const game = require('./game');

function gameResult(scorePlayer1, scorePlayer2) {
    if (scorePlayer1 > scorePlayer2) {
        var one_alert_1 = document.createElement("span");
        one_alert_1.innerHTML = "Player 1 Win"
        var br_win = document.createElement("br");
        document.getElementsByClassName("player1")[0].appendChild(one_alert_1);
        document.getElementsByClassName("player1")[0].appendChild(br_win);

        var one_alert_2 = document.createElement("span");
        one_alert_2.innerHTML = "Player 2 Lose"
        var br_win_2 = document.createElement("br");
        document.getElementsByClassName("player2")[0].appendChild(one_alert_2);
        document.getElementsByClassName("player2")[0].appendChild(br_win_2);
    } else if (scorePlayer1 < scorePlayer2) {
        var two_alert_1 = document.createElement("span");
        two_alert_1.innerHTML = "Player 1 Lose"
        var br_win_3 = document.createElement("br");
        document.getElementsByClassName("player1")[0].appendChild(two_alert_1);
        document.getElementsByClassName("player1")[0].appendChild(br_win_3);

        var two_alert_2 = document.createElement("span");
        two_alert_2.innerHTML = "Player 2 Win"
        var br_win_4 = document.createElement("br");
        document.getElementsByClassName("player2")[0].appendChild(two_alert_2);
        document.getElementsByClassName("player2")[0].appendChild(br_win_4);
    } else if ((scorePlayer1 === scorePlayer2)){
        var draw_alert_1 = document.createElement("span");
        draw_alert_1.innerHTML = "DRAW"
        var br_win_5 = document.createElement("br");
        document.getElementsByClassName("player1")[0].appendChild(draw_alert_1);
        document.getElementsByClassName("player1")[0].appendChild(br_win_5);

        var draw_alert_2 = document.createElement("span");
        draw_alert_2.innerHTML = "DRAW"
        var br_win_6 = document.createElement("br");
        document.getElementsByClassName("player2")[0].appendChild(draw_alert_2);
        document.getElementsByClassName("player2")[0].appendChild(br_win_6);
    }

}