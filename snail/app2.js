const snailShellPattern = arrays => {
  if( !( arrays instanceof Array ) ){
    return `Insert a valid Array Please!`
  }
  if( arrays.length <= 1 ){
    return arrays[0]
  }
  console.log( arrays )
  let top     = [], 
      right   = [], 
      bottom  = [], 
      left    = [], 
      lng     = arrays.length - 1,
      inside  = [],
      rcv     = []

  top     = [ ...arrays[ 0 ] ]
  right   = arrays.map( 
    itm => itm.filter( 
      ( itm2, idx ) => idx === lng 
        ? itm2 
        : '' )[0] 
      )
  bottom  = [ ...arrays[ lng ] ]
  left    = arrays.map( itm => 
      itm.filter( 
        ( itf, ind ) => ind === 0
        ? itf
        : ''
        )[0] 
      )
  inside = arrays.map( 
    ( itm, ind ) => ind !== 0 && ind !== lng 
    ? itm.filter( 
      ( itm2, ind2 ) => 
        ind2 !== 0 && ind2 !== itm.length - 1
      ? itm2 
      : '' )
    : ''
    ).filter( it => it !== '' ? it : '' )
  right.shift()
  bottom.reverse()
  bottom.shift()
  left.reverse().pop()
  left.shift()
  rcv = snailShellPattern( inside ) ?? ''
  return [...top , ...right, ...bottom, ...left, ...rcv ]
  

}
window.addEventListener( 'load', () => {
  // console.log( snailShellPattern( [ [ 1, 2, 3 ], [ 4, 5, 6 ], [ 7, 8, 9 ] ] ) )
  console.log( snailShellPattern( [ [ 1, 2, 3, 4 ], [ 5, 6, 7, 8 ], [ 9, 10, 11, 12 ], [ 13, 14, 15, 16 ] ] ) )
  // console.log( snailShellPattern( [ [ 1 ] ] ) ) 
})