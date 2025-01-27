
// defining function
function sayMyname(){
    console.log("A");
    console.log("N");
    console.log("I");
    console.log("K");
    console.log("E");
    console.log("T");
}

 sayMyname() 

//  parameter
function addTwoNumbers(number1, number2){

    console.log(number1 + number2);
}

//  addTwoNumbers(3,4) //arguement



 function addTwoNumbers(number1, number2){

    let result = number1 + number2

    return result
}

const result = addTwoNumbers(7,8)

// console.log("result",result)


// function loginUserMessage(username){

//     return `${username} just logged in`
// }

// console.log(loginUserMessage("Aniket"))


function loginUserMessage(username){

    if(username === undefined){

        console.log("Please enter a username")

        return
    }

    return `${username} just logged in`
}

console.log(loginUserMessage())

// another type of parameter pass

function calculateCartPrice(...num1){//rest operator  more arguement lene ke liye use karte hai
    return num1
}

//console.log(calculateCartPrice(200,300,500))


//paassing object in function 

const user = {
    username:"Aniket",

    price:199

}

function handleObject(anyobject){
    console.log(`Username is ${anyobject.username} and price is ${anyobject.price}`);
}


// handleObject(user)

//object aese bhi pass kr sakte hai

handleObject({
    username:"sam",

    price:399
})


// array  passing in function

const myNewArray = [200, 400, 100, 600]

function returnSecondValue(getArray){

    return getArray[1]
}

// console.log(returnSecondValue(myNewArray));

console.log(returnSecondValue([300,400,500]));