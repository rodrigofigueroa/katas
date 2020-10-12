
const reorder = name => {
    let nameArray = [...name]
    let a = 0;
    let another = [];
    do{
        if(nameArray[a] !== nameArray[(a + 1)]){   
            another.push(nameArray[a])
        }
        a++
    }while(a < nameArray.length)
    return another
}


window.addEventListener('load', () => {
    reorder('AAAABBBCCDAABBB')
})