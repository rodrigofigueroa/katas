window.addEventListener( 'load', () => {
    console.log( generateHashtag('Hello                                                        ') )
    console.log( generateHashtag("code" + " ".repeat(140) + "wars") ) // "#CodeWars"
})

const generateHashtag = string => {
    let a = string.trim().split( ' ' ).filter( it => it !== '')
    return a.join().length >= 140 || a.join() === ''
        ? 
            false
        :
            `#${a.map( it => `${it.charAt().toUpperCase()}${it.slice( 1 )}` ).join('')}`
}