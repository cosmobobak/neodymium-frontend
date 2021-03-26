const MATE_SCORE = 100000000;

function makeBahamutMove() {
    console.log(game.fen());
    candidateMoves = game.moves();
    console.log(candidateMoves);

    var depth = 1;
    var bestCase = -MATE_SCORE;
    var bestMove = candidateMoves[0];
    while (depth < 2) {
        console.log("Starting depth " + depth + "!");
        for (let index = 0; index < candidateMoves.length; index++) {

            game.move(candidateMoves[index]);

            value = negamax(depth, turnmod());

            game.undo();

            if (bestCase <= value) {
                bestCase = value;
                bestMove = candidateMoves[index];
            }
        }
        console.log("best move: " + bestMove);
        depth++;
    }
    console.log("best move: " + typeof bestMove);
    console.log(game.fen());
    console.log(game.move(bestMove));
    console.log(game.fen());
    board.position(game.fen());
}

function turnmod() {
    return game.turn() == 'b' ? -1 : 1;
}

function evaluate() {
    if (game.in_checkmate()) {
        return MATE_SCORE * turnmod();
    }

    return 0;
}

function negamax(depth, colour, a = -MATE_SCORE, b = MATE_SCORE) {
    if (depth <= 0 || game.game_over()) {
        return evaluate() * colour;
    }

    moves = game.moves();
    var bestMove = moves[0];

    for (let index = 0; index < moves.length; index++) {
        console.log("move inside inside negamax: " + game.move(moves[index]));
        console.log("move inside inside negamax: " + moves[index]);
        console.log(game.fen());
        value = negamax(depth - 1, -colour, -b, -a);
        console.log(game.undo());
        if (value >= b) {
            return value;
        }
        if (value > a) {
            a = value;
            bestMove = moves[index];
        }
    }

    return a;
}