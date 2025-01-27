

if(true){

    let a = 10
    const b = 20 //var block se bahar bhi access ho jata hai

    var c = 30


}


// console.log(a);

// console.log(b);
// console.log(c);

// nested scope

function one(){
    const username = "Aniket"

    function two(){
        const website = "youtube"

        console.log(username);

    }

    // console.log(website);

    // two()
}

// one()


// +++++++++++intresting+++++++++ writting a function
addOne(5);
function addOne(num){

    return num + 1
}

//function ko call uske declaration se pehle kr sakte hai agar vo variable me hold na ho to


const addTwo = function(num){
    return num + 2
}

addTwo(10)