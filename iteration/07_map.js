myNums = [1,2,3,4,5,6,7,8,9,10]

const myNewNums = myNums.map((num) => num + 10 )
//  console.log(myNewNums) map is return if we keep scope then use return keyword


// chainig

const newNumbers = myNums
                  .map((num)=> num*10)
                  .map((num)=> num+1)
                  .filter((num)=>num>=40)



console.log(newNumbers);



