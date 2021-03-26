function virichess_click() {
    var e = document.getElementsByClassName("virichess");
    e[0].style.color = "cyan";
    e[1].style.color = "cyan";
    var riders = document.getElementsByClassName("toggle_rider");
    for (let index = 0; index < riders.length; index++) {
        if (riders[index] != e[0]) {
            riders[index].style.color = "black";
        }
    }

    var buttons = document.getElementsByClassName("toggle_clicker");
    for (let index = 0; index < buttons.length; index++) {
        if (buttons[index] != e[1]) {
            buttons[index].style.color = "black";
        }
    }
    var games = document.getElementsByClassName("game")
    for (let index = 0; index < games.length; index++) {
        games[index].style.display = "none";
    }
    document.getElementById("game_virichess").style.display = "block";

    start_virichess();
}

function vorpchess_click() {
    var e = document.getElementsByClassName("vorpchess");
    e[0].style.color = "cyan";
    e[1].style.color = "cyan";
    var riders = document.getElementsByClassName("toggle_rider");
    for (let index = 0; index < riders.length; index++) {
        if (riders[index] != e[0]) {
            riders[index].style.color = "black";
        }
    }
    var buttons = document.getElementsByClassName("toggle_clicker");
    for (let index = 0; index < buttons.length; index++) {
        if (buttons[index] != e[1]) {
            buttons[index].style.color = "black";
        }
    }
    var games = document.getElementsByClassName("game")
    for (let index = 0; index < games.length; index++) {
        games[index].style.display = "none";
    }
    document.getElementById("game_vorpchess").style.display = "block";
}

function uttt_click() {
    var e = document.getElementsByClassName("uttt");
    e[0].style.color = "cyan";
    e[1].style.color = "cyan";
    var riders = document.getElementsByClassName("toggle_rider");
    for (let index = 0; index < riders.length; index++) {
        if (riders[index] != e[0]) {
            riders[index].style.color = "black";
        }
    }
    var buttons = document.getElementsByClassName("toggle_clicker");
    for (let index = 0; index < buttons.length; index++) {
        if (buttons[index] != e[1]) {
            buttons[index].style.color = "black";
        }
    }
    var games = document.getElementsByClassName("game")
    for (let index = 0; index < games.length; index++) {
        games[index].style.display = "none";
    }
    document.getElementById("game_uttt").style.display = "block";
}

function ttt_click() {
    var e = document.getElementsByClassName("ttt");
    e[0].style.color = "cyan";
    e[1].style.color = "cyan";
    var riders = document.getElementsByClassName("toggle_rider");
    for (let index = 0; index < riders.length; index++) {
        if (riders[index] != e[0]) {
            riders[index].style.color = "black";
        }
    }
    var buttons = document.getElementsByClassName("toggle_clicker");
    for (let index = 0; index < buttons.length; index++) {
        if (buttons[index] != e[1]) {
            buttons[index].style.color = "black";
        }
    }
    var games = document.getElementsByClassName("game")
    for (let index = 0; index < games.length; index++) {
        games[index].style.display = "none";
    }
    document.getElementById("game_ttt").style.display = "block";
}

function connect4_click() {
    var e = document.getElementsByClassName("connect4");
    e[0].style.color = "cyan";
    e[1].style.color = "cyan";
    var riders = document.getElementsByClassName("toggle_rider");
    for (let index = 0; index < riders.length; index++) {
        if (riders[index] != e[0]) {
            riders[index].style.color = "black";
        }
    }
    var buttons = document.getElementsByClassName("toggle_clicker");
    for (let index = 0; index < buttons.length; index++) {
        if (buttons[index] != e[1]) {
            buttons[index].style.color = "black";
        }
    }
    var games = document.getElementsByClassName("game")
    for (let index = 0; index < games.length; index++) {
        games[index].style.display = "none";
    }
    document.getElementById("game_connect4").style.display = "block";
}

function gomoku_click() {
    var e = document.getElementsByClassName("gomoku");
    e[0].style.color = "cyan";
    e[1].style.color = "cyan";
    var riders = document.getElementsByClassName("toggle_rider");
    for (let index = 0; index < riders.length; index++) {
        if (riders[index] != e[0]) {
            riders[index].style.color = "black";
        }
    }
    var buttons = document.getElementsByClassName("toggle_clicker");
    for (let index = 0; index < buttons.length; index++) {
        if (buttons[index] != e[1]) {
            buttons[index].style.color = "black";
        }
    }
    var games = document.getElementsByClassName("game")
    for (let index = 0; index < games.length; index++) {
        games[index].style.display = "none";
    }
    document.getElementById("game_gomoku").style.display = "block";
}