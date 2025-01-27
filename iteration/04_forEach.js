const coding = ['js','rb','python','java','cpp']

// coding.forEach( (item) => {

//     console.log(item)

// })

coding.forEach(function (item)  {
   //callback function ka nam nhi hota

    // console.log(item)

})


function printMe(item){
    // console.log(item)
}

coding.forEach(printMe)//referance dena hai execute nhi karna 


coding.forEach( (item,index,arr) => { //we can give more parameter

    // console.log(item,index,arr);
    
})


// [{},{},{}] for this synario

const myCoding = [
    {
    languageName:'Javascript',
    languageFileName:'js'
    },

    {
    languageName:'Python',
    languageFileName:'py'
    },

    {
    languageName:'C++',
    languageFileName:'cpp'
    },

]

myCoding.forEach((item) => {
    // console.log(item.languageName)

})



const value = coding.forEach( (item)=> {
    // console.log(item);

    // return item//forEach loop value return nhi karta

})

// console.log(value)