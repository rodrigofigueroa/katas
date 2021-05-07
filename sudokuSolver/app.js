
var puzzle = [
  [5,3,0,0,7,0,0,0,0],
  [6,0,0,1,9,5,0,0,0],
  [0,9,8,0,0,0,0,6,0],
  [8,0,0,0,6,0,0,0,3],
  [4,0,0,8,0,3,0,0,1],
  [7,0,0,0,2,0,0,0,6],
  [0,6,0,0,0,0,2,8,0],
  [0,0,0,4,1,9,0,0,5],
  [0,0,0,0,8,0,0,7,9]];

const columns = ( array, nOfColumn, checkNum ) => {
  return array.map( arr1 => {
    return +arr1.map( ( nmb, idx ) => {
      return idx === nOfColumn ? nmb : ''
    }).join( '' )
  }).includes( checkNum )
}

const getfirstSlices = ( fArray, num, finalArray, { lng, lngTwo } ) => {
  let arraForNow = []
  fArray.forEach( (itm, idx ) => {
    if( idx >= num ) return  
    arraForNow.push( itm.slice( lng, lngTwo ) )
  })
  finalArray[0]= arraForNow.reduce( (prev, curr) => prev.concat( curr ) ) 
}

const getSecondSlices = ( fArray, { one, two }, finalArray, { lng, lngTwo } ) => {
  let timeArray = []
  fArray.forEach( (itm, idx ) => {
    if( idx < one ) return  
    if( idx > two ) return  
    timeArray.push( itm.slice( lng, lngTwo ) )
  })
  finalArray[0] = timeArray.reduce( (prv, crt ) => prv.concat( crt ) )
}

const getThirdSlices = ( fArray, number, finalArray, { lng, lngTwo } ) => {
  let timeArray = []
  fArray.forEach( (itm, idx ) => {
    if( idx < number ) return  
    timeArray.push( itm.slice( lng, lngTwo ) )
  })
  finalArray[0] = timeArray.reduce( ( prv, crt ) => prv.concat( crt ) )
}

const threBoxes = ( array, numBox, numToChk ) => {
  const box0 = [], box1 = [], box2 = [], box3 = [], 
        box4 = [], box5 = [], box6 = [], box7 = [],
        box8 = [], lng = ( array[0].length / 3 )
  
  getfirstSlices( array, 3, box0, { lng: 0, lngTwo: lng })
  getfirstSlices( array, 3, box1, { lng: lng, lngTwo: lng + lng })
  getfirstSlices( array, 3, box2, { lng: lng + lng, lngTwo: lng ** 2 })
  // 
  getSecondSlices( array, {one: 3, two: 5}, box3,{ lng: 0, lngTwo: lng })
  getSecondSlices( array, {one: 3, two: 5}, box4,{ lng: lng, lngTwo: lng + lng })
  getSecondSlices( array, {one: 3, two: 5}, box5,{ lng: lng + lng, lngTwo: lng ** 2 })

  getThirdSlices( array, 6, box6, { lng: 0, lngTwo: lng })
  getThirdSlices( array, 6, box7, { lng: lng, lngTwo: lng + lng })
  getThirdSlices( array, 6, box8, { lng: lng + lng , lngTwo: lng ** 2 })
  return {
    boxes:{
      box0, box1, box2, box3, box4, box5, box6, box7, box8
    }
  }
}

const sudokuSolver = array => {
  if( 
    typeof array === 'string' ||
    typeof array === 'number' ||
    !( array )                ||
    array.length === 0
  ) return 'Please Check your parameters'
  
  let arrayBack = [ ...array ],
      first     = [ ...array ]
    console.log(first);
  const { boxes } = threBoxes( arrayBack )
  
  array.forEach( ( arrays, idx ) => {
    arrays.forEach( ( itm, idx2 ) => {
      if( itm !== 0 ){
        return 
      }
      for( let num = 1; num <= arrayBack[ idx ].length; num++ ){
        
        if( 
          !arrayBack[ idx ].includes( num ) &&
          !columns( arrayBack, idx2, num ) &&
          !boxes[ 
            `box${ 
                idx < 3 && idx2 < 3 ? 0 : 
                idx < 3 && idx2 >= 3 && idx2 < 6 ? 1 :
                idx < 3 && idx2 >= 6 ? 2 : 
                
                idx >= 3 && idx < 6 && idx2 < 3 ? 3 : 
                idx >= 3 && idx < 6 && idx2 >= 3 && idx2 < 6 ? 4 :
                idx >= 3 && idx < 6 && idx2 >= 6 ? 5 : 

                idx > 5 && idx2 < 3 ? 6 : 
                idx > 5 && idx2 >= 3 && idx2 < 6 ? 7 :
                idx > 5 && idx2 >= 6 ? 8 : ''
              }` 
          ][0].includes( num )
        ){
          arrayBack[ idx ][ idx2 ] = num
          return
        }
      }
    })
  })
  
  console.log( arrayBack )
  console.log( array );
}

window.addEventListener( 'load', () => {
  sudokuSolver( puzzle )
  return {
    sudokuSolver
  }
})