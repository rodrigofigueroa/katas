
window.addEventListener( 'load', () => {

    // console.log( interToString('seven hundred thousand') )
    // console.log( stringThree('one hundred twenty one') )
    console.log( stringFour( 'seven hundred thousand' ) )
    console.log( stringFour( 'seven hundred thousand' ) )
 
})

const intergerTostring = stringNumber => {
    let numbers = [       
        {
            number: 0,
            name: 'zero'
        },       
        {
            number: 1,
            name: 'one'
        },       
        {
            number: 2,
            name: 'two'
        },        
        {
            number: 3,
            name: 'three'
        },      
        {
            number: 4,
            name: 'four'
        },       
        {
            number: 5,
            name: 'five'
        },       
        {
            number: 6,
            name: 'six'
        },        
        {
            number: 7,
            name: 'seven'
        },       
        {
            number: 8,
            name: 'eight'
        },       
        {
            number: 9,
            name: 'nine'
        },        
        {
            number: 10,
            name: 'ten'
        },        
        {
            number: 11,
            name: 'eleven'
        },
        {
            number: 12,
            name: 'twelve'
        },
        {
            number: 13,
            name: 'thirteen'
        },
        {
            number: 14,
            name: 'fourteen'
        },
        {
            number: 15,
            name: 'fifteen'
        },
        {
            number: 16,
            name: 'sixteen'
        },
        {
            number: 17,
            name: 'seventeen'
        },
        {
            number: 18,
            name: 'eighteen'
        },
        {
            number: 19,
            name: 'nineteen'
        },    
        {
            number: 20,
            name: 'twenty'
        },
        {
            number: 30,
            name: 'thirty'
        },
        {
            number: 40,
            name: 'forty'
        },
        {
            number: 50,
            name: 'fifty'
        },
        {
            number: 60,
            name: 'sixty'
        },
        {
            number: 70,
            name: 'seventy'
        },
        {
            number: 80,
            name: 'eighty'
        },
        {
            number: 90,
            name: 'ninety'
        },
        {
            number: '00',
            name: 'hundred'
        },
        {
            number: '000',
            name: 'thousand'
        },
        {
            number: '00000',
            name: 'hundred_thousand'
        },
        {
            number: '000000',
            name: 'million'
        }
    ], newNumber = [], compare = []
    //two million two thousand three hundred seventy five

  stringNumber  = stringNumber.includes( 'hundred' ) ||
                  stringNumber.includes( 'thousand' ) ||
                  stringNumber.includes( 'million' ) ||
                  stringNumber.includes( 'and' ) 
                    ? 
                      stringNumber.replace( / hundred/g , '_hundred' )
                        .replace( / thousand/g, '_thousand')
                            .replace( / million/g, '_million' )
                            .replace( / and /g, ' ' )
                            .split( ' ' )
                      :
                          stringNumber.split(' ')
    newNumber = stringNumber.map( itemOne => {

        compare = itemOne.includes('_') 
            ? itemOne.replace( /_/g,' ' ).split(' ') : 
            itemOne.split(' ')
        return compare instanceof Array ? 
            compare.map( 
                itemTwo => {
                    return itemTwo.includes( '-' ) 

                    ? 
                        itemTwo.replace( /-/g,' ')
                        .split(' ')
                            .map( itemThree => {
                                return numbers
                                    .filter( 
                                        itemFour => 
                                        itemFour.name === itemThree 
                                            ? itemFour : ''  )[0].number
                        }).reduce( ( accOne, itemFive) => {
                            return ( accOne + itemFive ).toString()
                        })
                    : itemTwo.split(' ').map( mapOne => {
                        return numbers.filter( filt => filt.name === mapOne 
                            ? filt : '' )[0].number
                    })
            }).join('')
            : 
            compare.includes('-') 
            ? compare.replace( /-/g , ' ' )
                .split(' ')
                    .map( itemThree => {
                        return numbers
                            .filter( 
                                itemFour => 
                                itemFour.name === itemThree 
                                    ? itemFour : ''  )[0].number
                }).reduce( ( accOne, itemFive) => {
                    return ( accOne + itemFive ).toString()
            }) : compare
    }).reduce( ( acc, item ) => ( Math.floor( acc ) ) + ( Math.floor( item ) ) )

    return Math.floor( newNumber )
}

const interToString = stringNumber => {
    console.log( stringNumber )
    stringNumber = stringNumber.includes('-') 
        ? 
            stringNumber.replace( /-/g,'_')
        :   
            stringNumber
    stringNumber = stringNumber
        .replace( /twenty_/g, 2 )
        .replace( /twenty/g, 20 )
        .replace( /thirty_/g, 3 )
        .replace( /thirty/g, 30 )
        .replace( /forty_/g, 4 )
        .replace( /forty/g, 40 )
        .replace( /fifty_/g, 5 )
        .replace( /fifty/g, 50 )
        .replace( /sixty_/g, 6 )
        .replace( /sixty/g, 60 )
        .replace( /seventy_/g, 7 )
        .replace( /seventy/g, 70 )
        .replace( /eighty_/g, 8 )
        .replace( /eighty/g, 80 )
        .replace( /ninety_/g, 9 )
        .replace( /ninety/g, 90 )
        .replace( /eleven/g, 11 )
        .replace( /twelve/g, 12 )
        .replace( /thirteen/g, 13 )
        .replace( /fourteen/g, 14 )
        .replace( /fifteen/g, 15 )
        .replace( /sixteen/g, 16 )
        .replace( /seventeen/g, 17 )
        .replace( /eighteen/g, 18 )
        .replace( /nineteen/g, 19 )
        .replace( /zero/g, 0)
        .replace( /one/g, 1 )
        .replace( /two/g, 2 )
        .replace( /three/g, 3 )
        .replace( /four/g, 4 )
        .replace( /five/g, 5 )
        .replace( /six/g, 6 )
        .replace( /seven/g, 7 )
        .replace( /eight/g, 8 )
        .replace( /nine/g, 9 )
        .replace( /ten/g, 10 )
        .replace( / and /g, '')
        .replace( /\s/g, '')
        .replace( /one million/g, 1000000 )
        stringNumber = stringNumber.includes( 'thousand' ) 
        ? 
          stringNumber
          .replace( /thousand/g, '000_' )
          .split( '_' )
          .map( ( i, ind ) => {
            console.log( stringNumber )
            let s = i.replace( /hundred/, '')
            return ind === 0
            ?
            interToString( s )
            : interToString( i )
          })
        : stringNumber
        
        stringNumber = stringNumber.includes( 'hundred' ) 
        ?
          stringNumber
          .replace( /hundred/g, '00_' )
          .split( '_' )
          .reduce( ( acc, i ) => Math.floor( acc ) + Math.floor( i ) )
        : stringNumber 
        return stringNumber instanceof Array 
            ? 
            stringNumber.reduce( ( acc, i ) =>  Math.floor( acc ) + Math.floor( i ) ) 
            : Math.floor( stringNumber )           
}

const interToStringTwo = stringNumber => {
    stringNumber = stringNumber.includes('-') 
        ? 
            stringNumber.replace( /-/g,'.')
        :   
            stringNumber
  stringNumber = stringNumber
        .replace( /one million/g, '1000000' )
        .replace( /hundred/g, '_00_' )
        .replace( /thousand/g, '_000_' )
        .replace( /twenty./g, 2 )
        .replace( /twenty/g, 20 )
        .replace( /thirty./g, 3 )
        .replace( /thirty/g, 30 )
        .replace( /forty./g, 4 )
        .replace( /forty/g, 40 )
        .replace( /fifty./g, 5 )
        .replace( /fifty/g, 50 )
        .replace( /sixty./g, 6 )
        .replace( /sixty/g, 60 )
        .replace( /seventy./g, 7 )
        .replace( /seventy/g, 70 )
        .replace( /eighty./g, 8 )
        .replace( /eighty/g, 80 )
        .replace( /ninety./g, 9 )
        .replace( /ninety/g, 90 )
        .replace( /eleven/g, 11 )
        .replace( /twelve/g, 12 )
        .replace( /thirteen/g, 13 )
        .replace( /fourteen/g, 14 )
        .replace( /fifteen/g, 15 )
        .replace( /sixteen/g, 16 )
        .replace( /seventeen/g, 17 )
        .replace( /eighteen/g, 18 )
        .replace( /nineteen/g, 19 )
        .replace( /zero/g, 0)
        .replace( /one/g, 1 )
        .replace( /two/g, 2 )
        .replace( /three/g, 3 )
        .replace( /four/g, 4 )
        .replace( /five/g, 5 )
        .replace( /six/g, 6 )
        .replace( /seven/g, 7 )
        .replace( /eight/g, 8 )
        .replace( /nine/g, 9 )
        .replace( /ten/g, 10 )
        .replace( / and /g, '')
        .replace( /\s/g, '')
        
        if( stringNumber.includes('__') ) {
            stringNumber = stringNumber.split('__').map( i => {
                return interToStringTwo( i )
            })
        }

        if( stringNumber.includes( '_' ) ){
            stringNumber = stringNumber
            .split( '_' ).reduce( ( acc, i ) => {
                return acc.length === i.length && 
                !acc.includes( '00' ) &&
                !i.includes( '00' ) 
            ? Math.floor( acc ) + Math.floor( i )
            : acc.length < i.length 
            ? Math.floor( acc ) + Math.floor( i )
            : acc + i
            })
        }
        if( !stringNumber.includes( '_' ) && !stringNumber.includes( '__' ) &&
            stringNumber instanceof Array
        ){
            stringNumber = stringNumber.reduce( ( acc, i  ) => {
                return acc.length === i.length &&
                !acc.includes( '000' ) &&
                !i.includes( '000' ) 
                ? Math.floor( acc ) + Math.floor( i )
                : acc.length > i.length 
                ? Math.floor( acc ) + Math.floor( i )
                : acc + i
            } )
        }
        return Math.floor( stringNumber ) 
}

const stringThree = str => {
    
    let result = ''
    
    if( str === undefined || str === '' ){
        return 'none'
    }
    str = str.split( ' ' )

    if( str[ 0 ] !== 'hundred' ){
        // one
        let a = str[ 0 ].replace( /twenty/g, 20 )
        .replace( /thirty/g, 30 )
        .replace( /forty/g, 40 )
        .replace( /fifty/g, 50 )
        .replace( /sixty/g, 60 )
        .replace( /seventy/g, 70 )
        .replace( /eighty/g, 80 )
        .replace( /ninety/g, 90 )
        .replace( /eleven/g, 11 )
        .replace( /twelve/g, 12 )
        .replace( /thirteen/g, 13 )
        .replace( /fourteen/g, 14 )
        .replace( /fifteen/g, 15 )
        .replace( /sixteen/g, 16 )
        .replace( /seventeen/g, 17 )
        .replace( /eighteen/g, 18 )
        .replace( /nineteen/g, 19 )
        .replace( /zero/g, 0 )
        .replace( /one/g, 1 )
        .replace( /two/g, 2 )
        .replace( /three/g, 3 )
        .replace( /four/g, 4 )
        .replace( /five/g, 5 )
        .replace( /six/g, 6 )
        .replace( /seven/g, 7 )
        .replace( /eight/g, 8 )
        .replace( /nine/g, 9 )
        .replace( /ten/g, 10 )

        a = Math.floor( a )

        if( a <= 9 ){

            let hundred = stringThree( str[ 1 ] ), res = ''

            res = hundred === 'none' ? a : `${ a }${ hundred }`
            result = Math.floor( res ) 
        }
        
        if( a >= 10 && a <= 99 ){
            
            let getOther = stringThree( str[ 1 ] ) , res = ''

            res = getOther === 'none' ? a : `${ a }${ getOther }`

            result = Math.floor( res )

        }

    }

    if( str[ 0 ] === 'hundred' ){

        let hundredMore = stringThree( str[ 1 ] ), res = ''

            res = hundredMore === 'none' ? '00' : hundredMore

        result = str[ 0 ].replace( /hundred/, res )
    }

    if( str[ 0 ] === 'thousand' ){
        
        let thousand = stringThree( str[ 1 ] ), res = ''

            res = thousand === 'none' ? '000' : thousand

        result = str[ 0 ].replace( /thousand/, res )
    }
    
    return result

}
//100 //1000
const stringFour = str => {
    str = str.includes( 'and' )
        ? str.replace( / and /g, ' ' )
        : str
    let result, s = str.split(' ')


    if( s[ 0 ] === undefined || s[ 0 ] === '' ){
        return 'none'
    }
    if( s[ 0 ] === 'million' ){
        let a = s[ 0 ].replace( /million/g, '000000' )
        return a
    }

    if( s[ 0 ] !== 'hundred'  && s[ 0 ] !== 'thousand' ){

        let a = s[ 0 ].replace( /twenty/g, 20 )
            .replace( /thirty/g, 30 )
            .replace( /forty/g, 40 )
            .replace( /fifty/g, 50 )
            .replace( /sixty/g, 60 )
            .replace( /seventy/g, 70 )
            .replace( /eighty/g, 80 )
            .replace( /ninety/g, 90 )
            .replace( /eleven/g, 11 )
            .replace( /twelve/g, 12 )
            .replace( /thirteen/g, 13 )
            .replace( /fourteen/g, 14 )
            .replace( /fifteen/g, 15 )
            .replace( /sixteen/g, 16 )
            .replace( /seventeen/g, 17 )
            .replace( /eighteen/g, 18 )
            .replace( /nineteen/g, 19 )
            .replace( /zero/g, 0 )
            .replace( /one/g, 1 )
            .replace( /two/g, 2 )
            .replace( /three/g, 3 )
            .replace( /four/g, 4 )
            .replace( /five/g, 5 )
            .replace( /six/g, 6 )
            .replace( /seven/g, 7 )
            .replace( /eight/g, 8 )
            .replace( /nine/g, 9 )
            .replace( /ten/g, 10 )

            if( a.includes('-') ){
                a = a.split( '-' ).reduce( ( acc, i ) => Math.floor( acc ) + Math.floor( i ) )
            }
            // a = 60
            a = Math.floor( a )

            if( a <= 9 ){
                let getOther = '', newArray = ''

                newArray = s.slice( 1 ).join( ' ' )

                getOther = stringFour( newArray )

                a = getOther === 'none'
                ? a
                : getOther === '0'
                ? a.toStirng() + getOther
                : a + getOther
                return Math.floor( a )
            }

            if( a >= 10  && a <= 99 ){

                let getMinimum = '', newArray = ''

                newArray = s.slice( 1 ).join( ' ' )

                getMinimum = stringFour( newArray )

                a = getMinimum === 'none'
                ? a
                : a + getMinimum
                return Math.floor( a )
            }

    }

    if( s[ 0 ] === 'hundred' ){
        debugger
        let a = '' , getOther = '' , newArray = ''

        newArray = s.slice( 1 ).join( ' ' )

        getOther = stringFour( newArray )   

        a = getOther === 'none'

        ? s[ 0 ].replace( /hundred/g, '00' )

        : getOther.toString().length === 1
        
        ? s[ 0 ].replace( /hundred/g, `0${getOther}` )
        
        : getOther.toString().length === 3
        ? s[ 0 ].replace( /hundred/g, `00${getOther}` )
        : s[ 0 ].replace( /hundred/g, getOther )

        return a

    }

    if( s[ 0 ] === 'thousand' ) {
        let a = '', getOther = '' , newArray = ''

        newArray = s.slice( 1 ).join( ' ' )

        getOther = stringFour( newArray )

        a =  getOther === 'none'
        ? s[ 0 ].replace( /thousand/g, '000' )
        : getOther.toString().length === 3
        ? s[ 0 ].replace( /thousand/g, getOther )
        : getOther.toString().length === 2
        ? s[ 0 ].replace( /thousand/g, `0${getOther}` )
        : getOther.toString().length === 1
        ? s[ 0 ].replace( /thousand/g, `00${getOther}` )
        : s[ 0 ].replace( /thousand/g, `000` )
        return a
    }

    

    return result 
}