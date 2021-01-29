
window.addEventListener( 'load', () => {
    console.log( stringFour( 'two hundred three thousand' ) )
})

const stringFour = str => {
    if( str === undefined || str === '' ){
        return 'none'
    }
    str = str.includes( 'and' )
        ? str.replace( / and /g, ' ' )
        : str
    let result, s = str.split(' ')   

    if( s.length === 4 ){
        if(!s[ 0 ].includes( '-' ) && s[ 1 ] === 'hundred' &&
        !s[ 2 ].includes( '-' ) && s[ 3 ] === 'thousand'){
            let a = s.join( ' ' ), getSameFunction = ''
            a = a.replace( /one/g, 1 )
            .replace( /two/g, 2 )
            .replace( /three/g, 3 )
            .replace( /four/g, 4 )
            .replace( /five/g, 5 )
            .replace( /six/g, 6 )
            .replace( /seven/g, 7 )
            .replace( /eight/g, 8 )
            .replace( /nine/g, 9 )
            .replace( /thousand/g, '000' )
            .replace( /\s/g, '' )
            a = 
              getSameFunction === 'none'
            ? `${a.replace( /hundred/g, '0')}`
            : `${a.replace( /hundred/g, '0')}`
            return Math.floor( a )
        }
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