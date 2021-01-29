function permutations2( string ) {
  if( !string || typeof string  !== 'string' ){
     return 'Insert a valid String'
  } 
 if( string.length < 2 ){
   return string
 }
   let finalAmount = []
 
   for( let a = 0; a < string.length; a++ ){
     debugger
     let ch = string[a]
     let otherText = `${ string.slice( 0, a ) }${ string.slice( a + 1, string.length ) }`
     if( string.indexOf( ch ) !==  a ){
      continue
     }
     for(let newArray of permutations2( otherText ) ){
        finalAmount.push( `${ ch }${ newArray }` )
     }
   }
 return finalAmount
}
console.log( permutations2( 'aabc' ) )