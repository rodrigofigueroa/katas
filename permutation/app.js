window.addEventListener( 'load', () => {
  console.log( permutations( 'aabc' ) ) 
  // if( !localStorage.nombre ){
  //   localStorage.nombre = 'Rodrigo'
  // }
  // console.log(localStorage.nombre)
  // localStorage.removeItem( 'nombre' )

  // if( !sessionStorage.nombre ){
  //     sessionStorage.nombre = 'IVan'
  // }
  // console.log(sessionStorage.nombre)
  // sessionStorage.removeItem('nombre')
} )
// abc, acb, bac, bca, cab, cbc

const permutations = str => {

  if( !str || typeof str !== 'string' ){
    return 'Insert a valid string!'
  }
  if( str.length < 2 ){
    return str
  }
  let finalChar = []
  
  for( let i = 0 ; i < str.length; i++){
    
    let ch = str[i]
    if( str.indexOf( ch ) !== i ){
      continue
    }
    let restOfCharacter =  `${ str.slice( 0, i ) }${ str.slice( i + 1, str.length ) }`
    
    for( let perm of permutations( restOfCharacter ) ){
      
      finalChar.push( ch + perm )
    }
  }

  return finalChar

}
