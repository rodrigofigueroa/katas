const isogram = nameiso => {
    let namecomplete = nameiso.toLowerCase(),
        rg = /^[a-z]*$/,
        nmArray = [...namecomplete].sort(),
        counter = 0;
        console.log(nmArray)
        for( let a = 0; a < nmArray.length; a++){
            let firstName = nmArray[a] 
            let secName = nmArray[(a+1)]
                if(firstName === secName){
                    counter++
                }
        }
        if(counter > 0){
            return false
        }else{
            if(rg.test(namecomplete)){
                return true
            }else{
                return false
            }
        }
    
}

