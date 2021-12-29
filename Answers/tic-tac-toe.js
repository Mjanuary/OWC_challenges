function solution(board) {
  // Winning conditions on 3x3
  const winningConditions3x3 = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];

  // Wining condition on 2x2
  const winningConditions2x2 = [
    [0, 1],
    [2, 3],
    [0, 2],
    [1, 3],
    [0, 3],
    [1, 2],
  ];

  let converted_data = [];
  for (const x in board) {
    converted_data = [...converted_data, ...board[x]];
  }

  // check the type of the board
  let roundWon = false;
  let winner = "";
  if (board.length === 3) {
    for (let i = 0; i < winningConditions3x3.length; i++) {
      const winCondition = winningConditions3x3[i];
      let a = converted_data[winCondition[0]];
      let b = converted_data[winCondition[1]];
      let c = converted_data[winCondition[2]];
      if (a === "." || b === "." || c === ".") {
        continue;
      }
      if (a === b && b === c) {
        roundWon = true;
        winner = a;
        break;
      }
    }
  } else {
    for (let i = 0; i < winningConditions2x2.length; i++) {
      const winCondition = winningConditions2x2[i];
      let a = converted_data[winCondition[0]];
      let b = converted_data[winCondition[1]];
      if (a === "." || b === ".") {
        continue;
      }
      if (a === b) {
        roundWon = true;
        winner = a;
        break;
      }
    }
  }
  if (roundWon === true) {
    return `${winner} WIN`;
  }

  // check if the game ended in draw
  if (!converted_data.includes(".")) {
    return "TIE";
  } else {
    return "ONGOING";
  }
}

console.log(solution(["XOX", "XOX", "OXO"]));
console.log(solution(["XOX", "XOX", ".X."]));
console.log(solution(["XO", "X."]));
