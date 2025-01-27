// singleton if we make constructor then single objectb form



//create object 

// object literals
 
const mySym = Symbol("key1");

const jsUser ={

    name: "Aniket",
    "full name": "aniket Dhurwey", //there is no chance to access the full name by dot method so use square bracket method//
    age: 20,
    [mySym]: "myKey1",
    location: "balaghat",
    email: "aniketdhurwey245@gmail.com",
    isLogIn: false,
    lastLoginDays: ["monday", "saturday"]
} //declaration of object
     
 console.log(jsUser.age) // in these accesing method there is problem

 console.log(jsUser["email"])

//  console.log(jsUser.full name) error in accesing

// console.log(jsUser["full name"])

// console.log(jsUser[mySym])

//now change the values in object

jsUser.location = "gwalior"
// console.log(jsUser["location"])

// Object.freeze(jsUser) 

// console.log(jsUser)

// jsUser.location = "devgaon" // freezing the object

// Add Functions

jsUser.greeting = function(){
    console.log("hello jsUser")
}

jsUser.greetingTwo = function(){
    console.log(`hello jsUser, ${this.name}`);
}

// console.log(jsUser.greeting());
 console.log(jsUser.greetingTwo());

//const tinderUser = new Object() //singleton object 
const tinderUser = {}
tinderUser.id = "123abc"
tinderUser.pass = "Dhurwey@123"
tinderUser.isLogIn = false
// console.log(tinderUser);


// object inside object declaration
const regularUser = {
email: "dhurwey@134gmail.com",
fullName: {
    userfullname:{
        firstname:"Anuj",
        lastname:"Dhurwey"
    }
}

} 
 
//console.log(regularUser.fullName.userfullname.lastname);

  
//concate the objects

const obj1 = { 1: "a",2:"b"}
const obj2 = { 3: "c",4:"d"}


// const obj3 = { obj1,obj2}

// const obj3 = Object.assign( {},obj1,obj2)
 const obj3 = {...obj1,...obj2};//spread opertor

 console.log(obj3) 

//+++++++++ these syntax used when values come from database +++++++++

const users =[ {
    id:1,
    email:'h@gmail.com'
},

{
    id:1,
    email:'h@gmail.com'
},

{
    id:1,
    email:'h@gmail.com'
},

{
    id:1,
    email:'h@gmail.com'
},

]

users[1].email

// console.log(tinderUser);

// console.log(Object.keys(tinderUser)); //data comes in form in array
// console.log(Object.values(tinderUser));
// console.log(Object.entries(tinderUser));


// console.log(tinderUser.hasOwnProperty('islogIn'))


//+++++++  destructuring of object that operation also operate on array  +++++++

const course = {
    coursename:"java script",
    courseId:123,
    courseInstructor:"Aniket Dhurwey "

}
//  course.courseInstructor
  
 const { courseInstructor:instructor} = course

 console.log(courseInstructor);
 console.log(instructor)

//  const navbar = (props.company) => {

//  } destructuring

const navbar = ({company}) => {

}

 navbar(company = 'google')

 //Api concept

//  {
//     "name": "ani",               //json
//     "coursename":"js hindi"
//  }
