console.log("hello world");

console.log("hello coder welcome to world of code");

const userId=12344;

let userName="aniket Dhurwey"

var createTable="user profile"
// userId=12 not allowed because const cannot change
userName="yash"
//here we can change the value of variable let,var

console.log(userName);
console.log(userId);
console.log(createTable);

//we cannot do above part to print instead of this use table
/*
prefer not to var
because of issue in block scope and functional scope
*/
console.table([userId,userName,createTable]);