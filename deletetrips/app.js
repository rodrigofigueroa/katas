
window.addEventListener( 'load', () => {
  console.log( solution( "apples, plums % and bananas\npears\noranges !applesauce", ["%", "!"], "apples, plums\npears\noranges") )
})

const solution = ( input, markers ) => {
  let chk       = [],
      lal       = 0,
      sls       = ''
      return input.split( '\n' ).map( i => {
          for(let a of markers ){
            if( i.includes( a ) ){
              chk   = i.indexOf( a )
              sls   = i.substring( chk ).length
              lal   = i.length
              return i
                .substring( 0, Math.max( sls, lal ) - Math.min( sls, lal ) ).trim()
            }
          }
          return i
      }).join( '\n' )
};