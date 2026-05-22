const pascal = function (row) {
  if (row === 1) {
    return [1];
  }

  // We can use the previous rows entries, to get the current rows entries.
  let prevRow = pascal(row - 1);

  // Rows always start with 1.
  let currRow = [1];

  // Calulates what numbers are between the 1's in the row.
  for (let k = 1; k < row - 1; k++) {
    currRow.push(prevRow[k - 1] + prevRow[k]);
  }

  // Rows always end with 1.
  currRow.push(1);

  return currRow;
};

// Do not edit below this line
module.exports = pascal;
