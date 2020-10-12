const splitTwo = props => {
    if( props === '' || props === undefined || props === null ){ return [] }
    let spl = [...props], lng = spl.length, fn = '', fnL = []
    fn = spl.map( ( item, id ) => id % 2 === 0 || id === 0 || id === ( spl.length - 1 ) ?  props.substring( id , id + 2) : null) .filter( s => s !== null)
    fnL = fn.length
    if( lng % 2 !== 0){fn[ fnL - 1 ] = `${spl[ lng - 1 ]}_`}else{fn.pop()}
    return fn    
}

console.log(splitTwo('abcdef'))