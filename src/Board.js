import React, {useState} from "react";

export default function Board() {
    const [squares, setSquares] = useState(Array(9).fill(null));
    const [xIsNext, setXIsNext] = useState(true);


    const winner = calculateWinner(squares);
    let status;
    if (winner) {
        status = "Winner:" + winner;
    } else {
        status = "Next Player:" + (xIsNext ? "X" : "0");
    }

    function handleClick(i) {
        console.log("clicked:" + i);
        if (squares[i] || calculateWinner(squares)) {
            return;
        }


        const nextSquare = squares.slice();
        if (xIsNext) {
            nextSquare[i] = "X";
        } else {
            nextSquare[i] = "0";
        }

        setSquares(nextSquare);
        setXIsNext(!xIsNext);
    }

    return (
        <>
            <div className=".status">{status}</div>

            <div className="board-row">
                <Square value={squares[0]} onSquareClick={() => handleClick(0)} />
                <Square value={squares[1]} onSquareClick={() => handleClick(1)} />
                <Square value={squares[2]} onSquareClick={() => handleClick(2)} />
            </div>
            <div className="board-row">
                <Square value={squares[3]} onSquareClick={() => handleClick(3)}/>
                <Square value={squares[4]} onSquareClick={() => handleClick(4)} />
                <Square value={squares[5]} onSquareClick={() => handleClick(5)} />
            </div>
            <div className="board-row">
                <Square value={squares[6]} onSquareClick={() => handleClick(6)}/>
                <Square value={squares[7]} onSquareClick={() => handleClick(7)} />
                <Square value={squares[8]} onSquareClick={() => handleClick(8)} />
            </div>
        </>
    )
}


function Square({value, onSquareClick}) {

    return <button className="square"
                   onClick={onSquareClick}
    >
        {value}
    </button>
}


function calculateWinner(squares) {
    const lines = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6]
    ];

    for (let i = 1; i < lines.length; i++) {
        const [a, b, c] = lines[i];
        if (squares[a] && squares[a]===squares[b] && squares[a]===squares[c]) {
            return squares[a];
        }
    }

    return null;
}