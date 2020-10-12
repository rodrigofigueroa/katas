window.addEventListener( 'load', 
() => {
    console.log( 
        [1,[1,1]].sameStructureAs( [[2,2],2] ) )

})

Array.prototype.sameStructureAs = function ( other ){

    if( !( Array.isArray( other ) ) ){
        return false
    }

    if( this.length !== other.length ){
        return false
    }

    for( let numArr = 0; numArr < this.length ; numArr++ ){

        if( this[numArr] instanceof Array && other[ numArr ] instanceof Array ){
            return this[ numArr ].sameStructureAs( other[ numArr] )
        }

        if( this[numArr] instanceof Array !== other[ numArr ] instanceof Array  ){
            return false
        }
    }   

    return true
}

// const sumSameNumber =  num =>  num === 0 ? 0 :num + sumSameNumber( --num )
// console.log( sumSameNumber(4) )
