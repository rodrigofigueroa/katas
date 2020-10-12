const positiveSum = props => {
    let arrayNew = props, again = [], againTwo = []
        again = arrayNew.reduce( ( accu, item ) => accu < item ? accu : item)
            arrayNew.splice( arrayNew.indexOf( again ), 1 )
        againTwo = arrayNew.reduce( ( accu, item ) => accu < item ? accu : item)
        return againTwo + again
}
// console.log(positiveSum([5, 8, 12, 19, 22]))

const positiveSecond = numbers => {
    let [ a, b, c ] = numbers.sort( ( a, b , c)  => [a , b,  c])
    return b
}

console.log(positiveSecond([5,4,98,9,89]))
