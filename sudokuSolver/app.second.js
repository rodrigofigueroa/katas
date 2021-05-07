var puzzle = [
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

let fin = 0
const SUDOKU_SOLVER = {
  solver(array) {
    const arraClone   = [ ...array ],
          arrayEmpyt  = [ ...array ].map( i => i.map( i2 => [] ) )
      let stopRecurs  = 0;
  console.log(arrayEmpyt);          
    const checkColumn = (a, numCol, num) => a.reduce(
      (prv, cur) => prv.concat(cur[numCol]),
      [])

    const checkRows = (a, numRow) => {
      return a[numRow]
    }

    const checkSquare = (a, x, y) => {
      const d = ( a.length / 3 ) - 1, square = []

      if( y <= d ){
        a.forEach( ( i, ix ) => {
          i.forEach( ( num, idx ) => {
              
              if( x <= d && ix <= d && idx <= d){
                square.push( num )
                return
              }

              if( 
                  x > d 
                  && x <= ( ( d ** 2 ) + 1 )
                  && ix <= d 
                  && idx > d
                  && idx <= ( ( d ** 2 ) + 1 )
                ){
                square.push( num )
                return
              }
              
              if( 
                x > ( ( d ** 2 ) + 1 )
                && ix <= d 
                && idx > ( ( d ** 2 ) + 1 )
              ){
                square.push( num )
                return
              }

              return
            }) 
          })
      }
      if( y > d  && y <= ( ( d ** 2 ) + 1 ) ){
        a.forEach( ( i, iy ) => {
          i.forEach( ( num, idx ) => {
              if( 
                  x <= d &&
                  iy > d &&
                  iy <= ( ( d ** 2 ) + 1 ) &&
                  idx <= d
                ){
                square.push( num )
                return 
              }

              if( 
                x > d &&
                x <= ( ( d ** 2 ) + 1 ) &&
                iy > d &&
                iy <= ( ( d ** 2 ) + 1 ) &&
                idx > d &&
                idx <= ( ( d ** 2 ) + 1 )
               ){
                square.push( num )
                return
              }

              if( 
                x > ( ( d ** 2 ) + 1 ) &&
                iy > d &&
                iy <= ( ( d ** 2 ) + 1 ) &&
                idx > ( ( d ** 2 ) + 1 )
               ){
                square.push( num )
                return 
              }

              return 
            }) 
          })
      }
      if( y > ( ( d ** 2 ) + 1 ) ){
        a.forEach( ( i, iy ) => {
          i.forEach( ( num, idx ) => {

              if( 
                  x < d  &&
                  iy > ( ( d ** 2 ) + 1 ) &&
                  idx <= d
                ){
                  square.push( num )
                  return 
              }

              if(
                x > d &&
                x <= ( ( d **2 ) + 1 ) &&
                iy > ( ( d ** 2 ) + 1 ) &&
                idx > d   &&
                idx <= ( ( d ** 2 ) + 1 )

              ){
                square.push( num )
                return
              }

              if(
                x > ( ( d ** 2 ) + 1 ) &&
                iy > ( ( d ** 2 ) + 1 ) &&
                idx > ( ( d ** 2 ) + 1 )
              ){
                square.push( num )
                return
              }

              return 

            }) 
          })
      }
      return square
    }
      const recursiveFor = () => {
        if( stopRecurs === 5 ) return arraClone
        // debugger
        arraClone.forEach( ( i1, id1 )  => {

          return i1.forEach( ( i2, id2 ) => {

            if( i2 !== 0 ){
              return i2
            }

            for( let a = 1; a < i1.length; a++ ){
              if( 
                !checkColumn( arraClone, id2).includes( a ) &&
                !checkRows( arraClone, id1 ).includes( a ) &&
                !checkSquare(arraClone, id2, id1 ).includes( a ) &&
                !arrayEmpyt[ id1 ][ id2 ].includes( a )
               ){
                arrayEmpyt[ id1 ][ id2 ].push( a )
                arraClone[ id1 ][ id2 ] = a
                return
              }
            }
              
          })
        }) 
        ++stopRecurs
        if( 
          arraClone.reduce( 
            ( prv, crt ) => prv.concat( crt ) , []).includes( 0 )
          ){
            
          arraClone.forEach( ( i, id1 ) => {
            i.forEach( ( i2, id2 ) => {
              if(
                arrayEmpyt[ id1 ][ id2 ].length
              ){
                arraClone[ id1 ][ id2 ] = 0
                return 
              }
            })
          })
          recursiveFor()
        }
        return arraClone
      }

      console.log(
        recursiveFor()
      );
    
  }
}

console.log(  
  SUDOKU_SOLVER.solver(puzzle)
);