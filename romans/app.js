const romanNumbers = [
    [1000, 'M'],
    [900, 'CM'],
    [500, 'D'],
    [400, 'CD'],
    [100, 'C'],
    [90, 'XC'],
    [50, 'L'],
    [40, 'XL'],
    [10, 'X'],
    [9, 'IX'],
    [5, 'V'],
    [4, 'IV'],
    [1, 'I']
]

const romaNumber = num => {
    
    if( num === 0 ){
        return ''
    }
    for(let a = 0; a < romanNumbers.length; a++){

        if(num >= romanNumbers[a][0]){
            debugger
            console.log(num - romanNumbers[a][0])
            // 2 - 
            return romanNumbers[a][1] + romaNumber(num - romanNumbers[a][0]) 
        }

    }

}

console.log(romaNumber(6))