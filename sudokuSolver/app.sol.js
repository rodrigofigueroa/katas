const _board = [
  [0, 9, 0, 0, 4, 2, 1, 3, 6],
  [0, 0, 0, 9, 6, 0, 4, 8, 5],
  [0, 0, 0, 5, 8, 1, 0, 0, 0],
  [0, 0, 4, 0, 0, 0, 0, 0, 0],
  [5, 1, 7, 2, 0, 0, 9, 0, 0],
  [6, 0, 2, 0, 0, 0, 3, 7, 0],
  [1, 0, 0, 8, 0, 4, 0, 2, 0],
  [7, 0, 6, 0, 0, 0, 8, 1, 0],
  [3, 0, 0, 0, 9, 0, 0, 0, 0],
];
const data = [
  [5, 3, 0, 0, 7, 0, 0, 0, 0],
  [6, 0, 0, 1, 9, 5, 0, 0, 0],
  [0, 9, 8, 0, 0, 0, 0, 6, 0],
  [8, 0, 0, 0, 6, 0, 0, 0, 3],
  [4, 0, 0, 8, 0, 3, 0, 0, 1],
  [7, 0, 0, 0, 2, 0, 0, 0, 6],
  [0, 6, 0, 0, 0, 0, 2, 8, 0],
  [0, 0, 0, 4, 1, 9, 0, 0, 5],
  [0, 0, 0, 0, 8, 0, 0, 7, 9]
];
sodokoSolver(_board);
console.log(_board);

function isValid(board, row, col, k) {
  
  for (let i = 0; i < 9; i++) {
    
      const m = 3 * Math.floor(row / 3) + Math.floor(i / 3);
      const n = 3 * Math.floor(col / 3) + i % 3;
      if ( board[ row ][ i ] == k || board[ i ][ col ] == k || board[ m ][ n ] == k ) {
        return false;
      }
  }
  return true;
}


function sodokoSolver(data) {
  
for (let row = 0; row < 9; row++) {

  for (let col = 0; col < 9; col++) {

    if ( data[ row ][ col ] == 0) {

      for ( let n = 1; n <= 9; n++ ) {

        if ( isValid( data, row, col, n ) ) {

          data[ row ][ col ] = `${ n }`;

        if ( sodokoSolver( data ) ) {
            return true;
          } else {
            data[ row ][ col ] = 0;
          }
       }
     }
     return false;
   }
 }
}
return true;
}
