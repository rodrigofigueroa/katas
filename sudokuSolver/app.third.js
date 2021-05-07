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
  solver( array ) {
    const arraClone   = [ ...array ],
          arrayEmpty  = [ ...array ].map( i => i.map( () => [] ) )
      
      // console.log( arrayEmpty )

      const checkColumn = (a, numCol) => a.reduce(
        (prv, cur) => prv.concat(cur[numCol]),
        [])

      const checkRows = (a, numRow) => {
        return a[numRow]
      }

      const checkSquare = ( a, row, col) => {
        const square = []
        
        if( row < 3){
          
          if( col < 3 ){
            a.forEach( 
              ( i, idx1 ) => {
                if( idx1 > 2 ){
                  return
                }
                i.forEach( 
                  ( i2, idx ) => {
                    idx < 3 ? square.push( i2 ) : ''
                    return   
                }) 
              }
            )
            return square
          }

          if( col > 2 && col < 6 ){

            a.forEach( 
              ( i, idx1 ) => {

                if( idx1 > 2){
                  return
                }

                i.forEach( ( i2, id2 ) => {
                  
                  id2 > 2 && id2 < 6 ? square.push( i2 ) : ''
                  return 

                })

              }
            )
            return square
          }

          if( col > 5 ){

            a.forEach( 
              ( i, idx1 ) => {

                if( idx1 > 2 ){
                  return
                }

                i.forEach( ( i2, id2 ) => {
                  id2 > 5 ? square.push( i2 ) : ''
                  return 
                })

              }
            )

            return square

          }
        }
        if( row > 2 && row < 6){

          if( col < 3 ){
            
            a.forEach( 

              ( i, idx1 ) => {
                if( idx1 < 3 || idx1 > 5 ){
                  return
                }

                i.forEach( 
                  ( i2, idx ) => {
                    idx < 3 ? square.push( i2 ) : ''
                    return   
                }) 

              }
            )
            return square
          }

          if( col > 2 && col < 6 ){

            a.forEach( 
              ( i, idx1 ) => {

                if( idx1 < 3 || idx1 > 5 ){
                  return
                }

                i.forEach( ( i2, id2 ) => {
                  
                  id2 > 2 && id2 < 6 ? square.push( i2 ) : ''
                  return 

                })

              }
            )
            return square
          }

          if( col > 5 ){

            a.forEach( 
              ( i, idx1 ) => {

                if( idx1 < 3 || idx1 > 5 ){
                  return
                }

                i.forEach( ( i2, id2 ) => {
                  id2 > 5 ? square.push( i2 ) : ''
                  return 
                })

              }
            )

            return square

          }
        }
        if( row > 5){
          if( col < 3 ){
            
            a.forEach( 

              ( i, idx1 ) => {
                if( idx1 < 6 ){
                  return
                }

                i.forEach( 
                  ( i2, idx ) => {
                    idx < 3 ? square.push( i2 ) : ''
                    return   
                }) 

              }
            )
            return square
          }

          if( col > 2 && col < 6 ){

            a.forEach( 
              ( i, idx1 ) => {

                if( idx1 < 6 ){
                  return
                }

                i.forEach( ( i2, id2 ) => {
                  
                  id2 > 2 && id2 < 6 ? square.push( i2 ) : ''
                  return 

                })

              }
            )
            return square
          }

          if( col > 5 ){

            a.forEach( 
              ( i, idx1 ) => {

                if( idx1 < 6 ){
                  return
                }

                i.forEach( ( i2, id2 ) => {
                  id2 > 5 ? square.push( i2 ) : ''
                  return 
                })

              }
            )

            return square

          }
        }

      }

      const rc = ( a, row, col ) => {
        
        if( col > ( a.length - 1 ) ){
          return rc( a, ++row, 0 )
        }

        if( row > ( a.length - 1 ) ){
          return 
        }        

        if( a[ row ][ col ] !== 0 ){
          return rc( a, row, ++col )
        }
        
        for( let n = 1; n < 10; n++ ){

          if( 
            !checkRows( a, row ).includes( n ) &&
            !checkColumn( a, col ).includes( n ) &&
            !checkSquare( a, row, col ).includes( n ) &&
            !arrayEmpty[ row ][ col ].includes( n )
          ){
            arrayEmpty[ row ][ col ].push( n )
          }

        }

        return rc( a, row, ++col )
      }

      const checkIfIsOk = ( a, row, col, n ) => {
          if(
            checkRows( a, row ).includes( n ) ||
            checkColumn( a, col ).includes( n ) ||
            checkSquare( a, row, col ).includes( n ) 
          ){
            return false
          }
        return true
      }

      rc( arraClone, 0, 2 )

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

      const sodoko = a => {
        for( let row = 0; row < 9; row++ ){
  
          for(let col = 0; col < 9; col++ ){
  
            if( a[ row ][ col ] === 0 ){
  
              for( let c = 1; c <= 9; c++ ){  
                
                if( isValid( a, row, col, c ) ){
                  a[ row ][ col ] = c

                  if( sodoko( a ) ){
                    return true
                  }else{
                    a[ row ][ col ] = 0
                  }
                }  
              }
              return false
            }
          }
        }     
        return false 
      }

      
      
      console.log(
        sodoko( arraClone )
      );
      
      console.log(
        arraClone
      );

  }
}


SUDOKU_SOLVER.solver( puzzle )