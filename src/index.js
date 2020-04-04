module.exports = function solveSudoku(matrix) {
  fillMatrix(matrix);

  //Get row from matrix
  function getRowFromMatrix(matrix, rowNumber) {
    return matrix[rowNumber];
  }

  //Get column from matrix
  function getColFromMatrix(matrix, colNumber) {
    let array = [];
    for (let i = 0; i < matrix.length; i++) {
      array.push(matrix[i][colNumber]);
    }
    return array;
  }

  //Get box from matrix
  function getBoxFromMatrix(matrix, p, q) {
    let box = [];
    for (let i = p * 3; i < p * 3 + 3; i++) {
      for (let j = q * 3; j < q * 3 + 3; j++) {
        box.push(matrix[i][j]);
      }
    }
    return box;
  }

  //Validate number
  function validateNumber(matrix, number, i, j) {
    if (
      getRowFromMatrix(matrix, i).includes(number) === false &&
      getColFromMatrix(matrix, j).includes(number) === false &&
      getBoxFromMatrix(matrix, Math.floor(i / 3), Math.floor(j / 3)).includes(
        number
      ) === false
    ) {
      return true;
    }
  }

  //Find 0 in matrix and fill the number
  function fillMatrix(matrix) {
    for (let i = 0; i < matrix.length; i++) {
      for (let j = 0; j < matrix.length; j++) {
        if (matrix[i][j] === 0) {
          for (let number = 1; number < 10; number++) {
            if (validateNumber(matrix, number, i, j)) {
              matrix[i][j] = number;
              if (fillMatrix(matrix)) {
                return true;
              }
              matrix[i][j] = 0;
            }
          }
          return false;
        }
      }
    }
    return true;
  }
  return matrix;
};
