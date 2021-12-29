function wordCount(board, word) {
  // USe a counter
  let counter = 0;

  // Iterate the 2D array
  for (let r = 0; r < board.length; r++) {
    for (let c = 0; c < board[r].length; c++) {
      if (board[r][c] !== word[0]) {
        continue;
      } // Validation

      let constructedWordRight = word[0];
      let constructedWordBottomRight = word[0];
      let constructedWordBottom = word[0];

      // Fan out Algo here
      for (let w = 1; w < word.length; w++) {
        // Fan out to the right
        if (board[r][c + (word.length - 1)]) {
          constructedWordRight = constructedWordRight.concat(board[r][c + w]);
        }

        // Fan out to the bottom
        if (board[r + (word.length - 1)]) {
          constructedWordBottom = constructedWordBottom.concat(board[r + w][c]);
        }

        // Fan out to the bottom right Diagonal
        if (board[r + (word.length - 1)] && board[r][c + (word.length - 1)]) {
          constructedWordBottomRight = constructedWordBottomRight.concat(
            board[r + w][c + w]
          );
        }
      }

      if (constructedWordRight == word) counter++;
      if (constructedWordBottomRight == word) counter++;
      if (constructedWordBottom == word) counter++;
    }
  }
  return counter;
}

// console.log(
//   wordCount(
//     [
//       ["s", "o", "s", "o"],
//       ["s", "o", "o", "s"],
//       ["s", "s", "s", "s"],
//     ],
//     "sos"
//   )
// );

console.log(
  wordCount(
    [
      ["a", "a"],
      ["a", "a"],
    ],
    "aa"
  )
);
