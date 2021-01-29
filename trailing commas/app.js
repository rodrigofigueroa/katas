
const loadScript = (src, callback) => {
    let script = document.createElement('script');
        script.src = src;

        script.onload = () => callback(null,script) 
        script.onerror = () => callback(new Error('script'))
    document.head.append(script)
}

loadScript('https://odash.js', (error,script) => {
    if(error){
        console.log(error)
    }else{
        console.log(script)
    }
})