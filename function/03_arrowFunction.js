const user = {

    username: "Aniket",
    price:999,

    welcomeMessage: function (){
        console.log(`${this.username}, welcome to website`);
        console.log(this)
        // this keyword used for current context 
    }
}

// user.welcomeMessage()
// user.username = "sam"

// user.welcomeMessage()

// console.log(this)

// function chai(){
//     let username = "Aniket"
//     // console.log(this.username) this keyword not for function it is for object
// }

// chai()

// arrow function declaration

const chai = ()=>{

    let username = "Aniket"
    console.log(this)
}

// chai()

// const addTwo=(num1, num2 )=> {

//     return num1 + num2
// }

// const addTwo=(num1, num2) =>  (num1 + num2)//emplicit return


const addTwo=(num1, num2) =>  ({username:"Aniket"})//use of paranthesis in the case of object

console.log(addTwo(3,4))