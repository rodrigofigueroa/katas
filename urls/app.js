const domainName = url => url.split('.')[0].includes('www') ? url.split('.')[1] : url.split('.')[0].includes('//') ? url.split('.')[0].split('//')[1] : url.split('.')[0]

window.addEventListener( 'load' , ()  => {
    console.log( domainName( 'google.co.jp' ) )
})