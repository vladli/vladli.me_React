import { useState } from "react";
import Button from "./Button";

type Props = {
  xIsNext: any;
  squares: any;
  onPlay: any;
  calculateWinner: any;
};

const Board = ({ xIsNext, squares, onPlay, calculateWinner }: Props) => {
  const winner = calculateWinner(squares);
  const handleClick = (i: number) => () => {
    if ((winner && winner[0]) || squares[i]) {
      return;
    }
    const nextSquares = squares.slice();
    if (xIsNext) {
      nextSquares[i] = "X";
    } else {
      nextSquares[i] = "O";
    }
    onPlay(nextSquares);
  };

  const buttonColor = (i: any) => {
    if (winner && winner[1]) {
      const iterator = winner[1].values();
      for (const value of iterator) {
        if (i === value) return true;
      }
    }
    return false;
  };
  return (
    <div className="grid grid-cols-3 gap-2">
      {Array.from(Array(9), (_, i) => (
        <Button
          key={i}
          color={buttonColor(i)}
          value={squares[i]}
          onClick={handleClick(i)}
        />
      ))}
    </div>
  );
};

export default Board;
