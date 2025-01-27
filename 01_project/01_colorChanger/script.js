const buttons = document.querySelectorAll('.button')
const body = document.querySelector('body');
// console.log(buttons)


buttons.forEach( (button) =>{

    console.log(button);
    button.addEventListener('click', (event) => {

        console.log(event)
        console.log(event.target)

        if(event.target.id === 'gray'){
            body.style.backgroundColor = event.target.id;
        }
        if(event.target.id ==='red'){
            body.style.backgroundColor = event.target.id;
        }
        if(event.target.id === 'brown'){
            body.style.backgroundColor = event.target.id;
        }
        if(event.target.id === 'yellow'){
            body.style.backgroundColor = event.target.id;
        }

    })

    

})