// Immediately Invoke Function Expressions (IIFE)

(function chai(){
    //named IIFE
    console.log(`DB CONNECTED`)
})();//code ko rokne ke liye semi colon

// global scope ke problems ko hatane ke liy IIFE use karte hai



// chai()


((name) => {
    console.log(`DB CONNECTED TWO ${name}`)
})("Aniket")