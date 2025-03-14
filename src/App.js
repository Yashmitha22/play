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
    
  }
}