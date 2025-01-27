const num = [1,2,3,4,5,6,7,8,9,10]

// const newNums=num.filter((num) => num>4)//ek line me callback arrow function defination

const newNums=num.filter((num) => {
    return num>4})// scope ke andar return keyword use karna hi padega
// console.log(newNums);


// for this how can we use forEach loop

// const myNums = []

// num.forEach((number) => {
//     if(number>4){
//         myNums.push(number)
//     }
// } )

// console.log(myNums)


