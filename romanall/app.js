class Romans {
  constructor(){
    this.rom = {    
      'I': 1,
      'V': 5,
      'X': 10,
      'L': 50,
      'C': 100,
      'D': 500,
      'M': 1000
    }
    this.romN = {    
      '1' : 'I',
      '4' : 'IV',
      '5' : 'V',
      '6' : 'VI',
      '8' : 'VIII',
      '9' : 'IX',
      '10' : 'X',
      '40' : 'XL',
      '50' : 'L',
      '60' : 'LX',
      '80' : 'LXXX',
      '90' : 'XC',
      '100' : 'C',
      '400' : 'CD',
      '500' : 'D',
      '600' : 'DC',
      '800' : 'DCCC',
      '900' : 'CM',
      '1000' : 'M'
    }
  }
  
  toRoman( numbers ){
    let err       = 'Insert a Valid Number',
        total     = [],
        numStr    = numbers.toString(),
        firstChar = '',
        rest      = '',
        zeros     = 0,
        chExi     = 0

    if( isNaN( numbers ) || typeof numbers !== 'number' ){
      return err
    }
    if( numStr.length === 1 ){
      return this.romN[ numStr ]
    }
    for( let a = 0; a < numStr.length ; a++){
      firstChar = numStr[ a ]
      rest      = numStr.slice( a + 1, numStr.length )
      zeros     = [...rest].map( i => 0).join('')
      chExi     = this.romN[firstChar]
      if( !chExi && firstChar !== '0'){
          for(let b = 0; b < +firstChar; b++){
            total.push(`${1}${zeros}`)
          }
          continue
      }
      total.push( `${ firstChar }${ zeros }` )
    }
    total = total.map( itm => this.romN[itm] ).join('')
    return total
  }

  fromRoman( string ){
    let err         = 'insert a valid string',
        currentVal  = 0,
        beforeVal   = 0,
        nextValue   = 0
    
    if( typeof string !== 'string'  || !string || !isNaN( string ) ){
      return err
    }
    for( let i of [...string] ){
      if( !isNaN( i ) ){
        return err
      }
    }
    if( string.length === 1 ){
      return this.rom[ string ]
    }
    
    for( let a = 0; a < string.length ; a++){
      currentVal  = this.rom[ string[a] ] 
      nextValue   = this.rom[ string[a + 1] ] ?? 0
      
      if( currentVal < nextValue ){
        beforeVal -= currentVal
      }else{
        beforeVal += currentVal
      }
    }

    return beforeVal
  }
}

const r = new Romans
// console.log( r.fromRoman('III') )
// console.log( r.fromRoman('XXI') )
// console.log( r.fromRoman('MMVII') )
// console.log( r.fromRoman('MMXX') )
// console.log( r.fromRoman('MMVI') )

// console.log( r.toRoman( 9 ) )
// console.log( r.toRoman( 1000 ) )
// console.log( r.toRoman( 999 ) )
// console.log( r.toRoman( 4 ) )
// console.log( r.toRoman( 1 ) )
// console.log( r.toRoman( 1991 ) )
// console.log( r.toRoman( 2006 ) )
// console.log( r.toRoman( 2020 ) )