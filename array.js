// array declaration in js
 const myArr = [1,2,4,6,7,9,]

 const myHeroes = ["shaktiman","nagraj"]

 const myArr2 = new Array(1,2,34,4) //here square bracket already taken

//console.log(myArr[2]); // array accesing


//array should be resizable in js

 // in the array we have taken number string anything which we want kept in the array


// Array Methods
// myArr.push(8)
// myArr.push(10)

// array ke last me add hoga

// myArr.pop() // there is not given any arguement it remove last element of the array

//  myArr.unshift(3)
//  myArr.shift()

//  console.log(myArr.includes(9));        // finding values
//  console.log(myArr.indexOf(3));

//  const newArr = myArr.join()

//  console.log(myArr);

//  console.log(newArr);

// all values are converted in string comma seprated


//slice, splice

// console.log( "A"  ,myArr);

const myn1 = myArr.slice(1,3)

//  console.log(myn1);

//  console.log("B", myArr)

 const myn2 = myArr.splice(1,3) // splice is change the array and slice portion remove


//  console.log("C", myArr)

//  console.log(myn2);

 
//+++++++++++++++++++++++++++++++++++++++++++++++++//

// Array functions

const marvel_heros = ["thor","ironman","spiderman"]
const dc_heros = ["batman" ,"flash" ,"superman"]

//  marvel_heros.push(dc_heros);

//  console.log(marvel_heros); 

//  here whole array is in single Element

//  const allHeros = marvel_heros.concat(dc_heros);

//  console.log(allHeros[3]);  

//concat return new array
 
//here mainly used spread operator in case of concat//

// const allHeros = [...marvel_heros, ...dc_heros]

// console.log(allHeros);

const another_arr = [1, 2, 3, [4, 5, 6], 7, [6, 7, [4, 5]]]

const real_another_arr = another_arr.flat(Infinity); // here we use 1,2,.. infinity depth for solving 

// console.log(real_another_arr)

console.log(Array.isArray("aniket"))
//above condition used in data scraping and convert array nichey

//  console.log(Array.from("aniket"))
//  console.log(Array.from({name: "Aniket"})) // intresting

 let score1 = 100;
 let score2 = 200;
 let score3 = 300;

 console.log(Array.of(score1,score2,score3))

