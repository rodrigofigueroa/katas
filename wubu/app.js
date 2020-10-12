const startWuubu = props => props.split('WUB').filter( item => item !== '' ).toString().replace(/,/g,' ')
window.addEventListener( 'load', () => console.log(startWuubu('WUBAWUBBWUBCWUB')))