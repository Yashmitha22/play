import { useState } from 'react';

function Square({value, onSqureClick }) {
  return (
    <button className="square" onClick={onSquareClick}>
      {value}
    </button>
  );
}

function Board({xIsNext, squares,onPlay}) {
  function handleClick(i) {
    if (calculateWinner(sqaures) || sqaures[i]) {
      return;
      }
      const nextSquares = squares.slice();
      if(xIsNext) {
        nextSqaures[i] = 'X';
      } else {
        nextSquares[i] = 'O';
      }
      onPlay(nextSquares);
    }
    const winner = calculateWinner(squares);
    let status;
    if (winner) {
      status = 'Winner:' + winner;
    }else {
      status = 'Next player:' +(xIsNext ? 'X' : 'O');
    }
    return (
      <>
      <div className="status">{status}</div>
      <div className="board-row">
        <Square value={sqaures[0]} onSquaresClick={() => handleClick(0)}/>
        <Square value={sqaures[1]} onSquaresClick={() => handleClick(1)}/>
        <Square value={sqaures[2]} onSquaresClick={() => handleClick(2)}/>
      </div>
      <div className="board-row">
      <Square value={sqaures[3]} onSquaresClick={() => handleClick(3)}/>
        <Square value={sqaures[4]} onSquaresClick={() => handleClick(4)}/>
        <Square value={sqaures[5]} onSquaresClick={() => handleClick(5)}/>
      </div>
      <div className="board-row">
        <Square value={squares[6]} onSquareClick={() => handleClick(6)} />
        <Square value={squares[7]} onSquareClick={() => handleClick(7)} />
        <Square value={squares[8]} onSquareClick={() => handleClick(8)} />
      </div>
    </>
    );
  }
  export default function Game() {
    const [history,setHistory] = useState([Array(9).fill(null)]);
    const[currentMove, setCurrentMove] = useState(0);
    const xIsNext = currentMove % 2 == 0;
    const currentSquares = history[currentMove];

    function handlePlay(nextSquares) {
      const nextHistory = [...history.slice(0, currentMove + 1), nextSquares];
    setHistory(nextHistory);
    setCurrentMove(nextHistory.length - 1);
    }
    const moves = history.map((squares,move) => {
      let description;
      if (move > 0) {
        description = 'Go to move #' +move;
      } else {
        description = 'Go to game start';
      }
      return (
        <li key={move}>
          <button onClick={() => jumpTo(move)}>{description}</button>
        </li>
      );
    });

    return (
      <div className="game">
        <div className="game-board">
          <Board xIsNext={xIsNext} sqaures={currentSquares} onPlay={handlePlay} />
          </div>
        <div className="game-info">
          <ol>{moves}</ol>
          </div>
          </div>
    );
  }
  function calculateWinner(squares) {
    const lines = [
      [0,1,2],
      [3,4,5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];
    for(let i=0;i <lines.length; i++) {
      const [a,b,c] = lines[i];
      if(squares[a] && sqaures[a] === sqaures[b] && sqaures[a] === sqaures[c]) {
        return sqaures[a];
      }    
    }
    return null;
  }
