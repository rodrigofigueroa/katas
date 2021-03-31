
var puzzle = [
  [5,3,0,0,7,0,0,0,0],
  [6,0,0,1,9,5,0,0,0],
  [0,9,8,0,0,0,0,6,0],
  [8,0,0,0,6,0,0,0,3],
  [4,0,0,8,0,3,0,0,1],
  [7,0,0,0,2,0,0,0,6],
  [0,6,0,0,0,0,2,8,0],
  [0,0,0,4,1,9,0,0,5],
  [0,0,0,0,8,0,0,7,9]];

const sudokuSolver = array => {
  if( 
    typeof array === 'string' ||
    typeof array === 'number' ||
    !( array )                ||
    array.length === 0
  ) return 'Please Check your parameters'
  console.log( ...array );
  let arrayBack = [...array]
  array.forEach( ( arrays, idx ) => {
    arrays.forEach( ( itm, idx2 ) => {
      if( itm !== 0 ){
        return 
      }
      for( let num = 1; num <= arrayBack[ idx ].length; num++){
        if( !arrayBack[ idx ].includes( num ) ){
          arrayBack[ idx ][ idx2 ] = num
          return
        }
      }
    })
  })
  
  console.log( arrayBack )
}

window.addEventListener( 'load', () => {
  sudokuSolver( puzzle )
  return {
    sudokuSolver
  }
})