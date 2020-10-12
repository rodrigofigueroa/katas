const titleCase = ( titles, lowerCase ) => { 
    let completeTitle = [], one = '' , two = ''
    if(titles === '' || titles === undefined || titles === '' && lowerCase === ''){ 
        return '' 
    }    
    if( lowerCase !== undefined ){
        two =  lowerCase.toLowerCase().split(' ')
    }
    if( titles !== undefined ){
        one =  titles.toLowerCase().split(' ')
    }
    completeTitle = titles.toLowerCase().split(' ') .map( title => title.charAt().toUpperCase() + title.slice(1))
        for(let d = 0; d < one.length; d++){
            let a = one[d]
            for(let e = 0; e < two.length; e++){
                let b = two[e]
                if(a === b && d !== 0){
                    completeTitle[d] = two[e]}}}    
    return completeTitle.join(' ')
}

window.addEventListener( 'load', () => {
    console.log(titleCase('the quick brown fox'))
})