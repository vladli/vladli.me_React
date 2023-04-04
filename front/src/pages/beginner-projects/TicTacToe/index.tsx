import Box from "components/Box";
import { useEffect, useState } from "react";

import Board from "./Board";
import Button from "components/Button";
import { MdRestartAlt } from "react-icons/md";
import { useTranslation } from "react-i18next";

const TicTacToe = () => {
  const { t } = useTranslation("beginnerProjects");
  const [square, setsquare] = useState([Array(9).fill(null)]);
  const [currentMove, setCurrentMove] = useState(0);
  const xIsNext = currentMove % 2 === 0;
  const currentSquares = square[currentMove];

  function calculateWinner(squares: typeof square) {
    const lines = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];
    for (let i = 0; i < lines.length; i++) {
      const [a, b, c] = lines[i];
      if (
        squares[a] &&
        squares[a] === squares[b] &&
        squares[a] === squares[c]
      ) {
        return [squares[a], lines[i]];
      }
    }
    return null;
  }

  const winner = calculateWinner(currentSquares);

  let status;
  if (winner && winner[0]) {
    status = t("TicTacToe.Winner") + ": " + winner[0];
  } else {
    status = t("TicTacToe.NextPlayer") + ": " + (xIsNext ? "X" : "O");
  }

  function handlePlay(nextSquares: any) {
    const nextHistory = [...square.slice(0, currentMove + 1), nextSquares];
    setsquare(nextHistory);
    setCurrentMove(nextHistory.length - 1);
  }
  const jumpTo = (nextMove: number) => () => {
    setCurrentMove(nextMove);
  };

  return (
    <Box className="w-6/12 p-4">
      <div className="mb-2 text-center">{status}</div>
      <Board
        xIsNext={xIsNext}
        squares={currentSquares}
        onPlay={handlePlay}
        {...{ calculateWinner }}
      />
      <Button
        className="mt-2"
        color="ghost"
        fullWidth
        responsive
        onClick={jumpTo(0)}
      >
        <MdRestartAlt size={24} />
      </Button>
    </Box>
  );
};

export default TicTacToe;
