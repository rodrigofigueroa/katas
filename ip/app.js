const isValidIP = props => {
    let ips = props.split('.'), flag = false
        if(ips.length !== 4){ return flag}
        flag = ips.map( ( ip, i ) => {
             if(ips[i].length > 1){
                let split = ips[i].split('')
                return !split.map( spl => parseInt( spl ) !== '' && !isNaN( parseInt(spl) ) &&   parseInt( ip ) <= 255 &&   parseInt( ip ) >= 0 && parseInt(split[0]) !== 0 ).includes(false)
            }else{ return  parseInt( ip ) !== ''  &&  !isNaN( parseInt( ip ) ) &&  parseInt( ip ) <= 255 &&  parseInt( ip ) >= 0 } } )

        if( flag.includes(false) ||  flag.includes(NaN) || flag.includes(undefined) ){
                flag = false}else{
            flag = true}
        return flag}


window.addEventListener( 'load', () => {
    console.log(isValidIP('012.255.56.1'))
} )