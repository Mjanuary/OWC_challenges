function solution(board) {
  let horizontalAxes = [];
  // let horizontalAxes = [];
  let tempAxix = [];
  for (let r = 0; r < board.length; r++) {
    let verticalAxes = [];
    for (let c = 0; c < board[r].length; c++) {
      //   if (board[r][c] !== board[r][board[r].length - 1]) {
      //     continue;
      //   }

      let constructedWordRight = "";
      let constructedWordBottomRight = "";
      let constructedWordBottom = "";
      let __constructedWordBottomLeft = "";

      //   verticalAxes.push(board[r][c]);
      //   verticalAxes.push(board[r][c]);
      for (let w = 0; w < board[r].length; w++) {
        if (board[r][c + w] !== undefined)
          constructedWordRight = constructedWordRight.concat(board[r][c + w]);

        // console.log(board[r + w]);
        if (board[r + w] !== undefined && board[r + w][c] !== undefined)
          constructedWordBottom = constructedWordBottom.concat(board[r + w][c]);

        if (board[r + w] !== undefined && board[r + w][c + w] !== undefined)
          constructedWordBottomRight = constructedWordBottomRight.concat(
            board[r + w][c + w]
          );

        if (
          board[board[w].length - 1 - (c + w)][
            board[c].length - 1 - (c + w)
          ] !== undefined
        )
          __constructedWordBottomLeft = __constructedWordBottomLeft.concat(
            board[board[w].length - 1 - (c + w)][board[c].length - 1 - (c + w)]
          );
        // break;
      }

      //   for (let w = board[r].length; w < 0; w--) {
      //     if (board[r - w][c - w])
      //       __constructedWordBottomLeft = __constructedWordBottomLeft.concat(
      //         board[r - w][c - w]
      //       );
      //   }

      console.log({
        constructedWordRight,
        constructedWordBottom,
        constructedWordBottomRight,
        __constructedWordBottomLeft,
      });

      break;
    }
    // console.log(verticalAxes);
    break;
  }
}

console.log(solution(["1234", "5678", "9qw.", "erty"]));
// console.log(solution([
//   "1234",
//   "5678",
//   "9qw.",
//   "erty"
//]));
// console.log(solution(["X..O", ".XO.", ".OX.", "OXXO"]));

/**
 * [
 *  "X..O",
 *  ".XO.",
 *  ".OX.",
 *  "OXXO"
 * ]
 *
 */
