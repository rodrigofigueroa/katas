
const snail = arrays => {
  if( !arrays.length || arrays.length === 1 ){
    return arrays[0]
  }
  let fnl = [], lng = arrays.length, nwa = [], counter = lng,
      cra = [], cud = []
  nwa = arrays.reduce( ( acc, itm, idx ) => acc.concat( itm ) )
  nwa.unshift(0)
  for( let a = 0; a < nwa.length; a++ ){
    if( a >= 1 && a < lng){
      fnl.push( nwa[ a ] )
    }
    if( a === counter ){      
      fnl.push( nwa[ counter ] )
      counter += lng
    }
  }
  counter -= lng
  for(let b = nwa.length - 1; b > 0; b--){
      if( b < counter && ( counter - lng ) < b ){
        fnl.push( nwa[ b ])
      }
  }
  arrays.map( itm => itm[0])
    .reverse()
      .forEach( 
        ( itm2, idx ) => idx !== 0 && idx !== ( lng - 1 ) 
          ? fnl.push(itm2) 
          : '' ) 
  cra = arrays.map( 
    ( itm, idx ) => idx !== 0 && idx !== lng - 1 
    ? itm.map( ( it, ix ) => ix !== 0 && ix !== ( itm.length - 1 ) ? it : '' )
      .filter( itm3 => itm3 !== '' )
    : '' 
    ).filter( itm => itm !== '' )
  cud = snail( cra ) ?? []
  fnl = fnl.concat( cud ).map( itm => itm instanceof Array ? itm[0] : itm )
  return fnl
}
window.addEventListener( 'load', 
() =>{ 
  // console.log( snail ( 
  //   [ 
  //     [ 1, 2, 3, 4], 
  //     [ 5, 6, 7, 8 ], 
  //     [ 9, 10, 11, 12 ], 
  //     [ 13, 14, 15, 16 ] 
  //   ] 
  //   ) )
    // console.log( snail( [[1, 2, 3], [4, 5, 6], [7, 8, 9]] ))
    console.log( snail( [[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36]] ) )
    // console.log( snail( [1] ) )
    // console.log( snail( [[]] ) )
    // console.log( snail( [[1]] ) )
  }
)