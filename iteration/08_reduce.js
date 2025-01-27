//reduce

const array = [1,2,3,4,5]
// const myTotal = array.reduce(function (acc,currentValue){
//     console.log(`acc: ${acc} and current value: ${currentValue}`)
//     return acc + currentValue
// },3)

const myTotal = array.reduce( (acc,currentValue) => acc+currentValue,0)

// console.log(myTotal);

const shoppingCart = [
    {
        itemName:'js course',
        price:2999
    },
    {
        itemName:'python course',
        price:3999
    },
    {
        itemName:'java course',
        price:2999
    },
    {
        itemName:'ruby course',
        price:1999
    },
    {
        itemName:'c++ course',
        price:4999
    }

]

const cart =shoppingCart.reduce((accumulator,item)=>{
    return accumulator + item.price
},0)

// console.log(cart)