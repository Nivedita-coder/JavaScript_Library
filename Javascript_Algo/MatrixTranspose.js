let mathData = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
];
function transMat(matrix) {
  let newMatx = [];
  for (let i = 0; i < matrix[0].length; i++) {
    let newMat = [];
    for (let j = 0; j < matrix[0].length; j++) {
      newMat.push(matrix[j][i]);
    }
    newMatx.push(newMat);
  }
  // console.log(newMat)
  return newMatx;
}
console.table(transMat(mathData));
