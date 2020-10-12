const iqTest = props => {
    let a = props.split(' ').filter( it => it % 2 === 1 ? it : null).toString();
        if(a.length > 2 || a.length === 0 ){
            a = props.split(' ').filter( it => it % 2 !== 1 ? it : null).toString();
            return props.split(' ').indexOf(a) + 1
        }else{
            return props.split(' ').indexOf(a) + 1
        }
}

window.addEventListener( 'load', () => console.log( iqTest('20 94 56 50 10 98 52 32 14 22 24 60 4 8 98 46 34 68 82 82 98 90 50 20 78 49 52 94 64 36') ));