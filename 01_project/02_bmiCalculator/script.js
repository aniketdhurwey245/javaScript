const form = document.querySelector('form')

// /this usecase will give empty
// const height = parseInt(document.querySelector('height').value)

form.addEventListener('submit', (e) => {
    e.preventDefault()
    const height = parseInt(document.querySelector('height').value)
    const weight = parseInt(document.querySelector('weight').value)
    const result = document.querySelector('results')

    if(height === '' || height <0 || isNaN(height)){
        result.innerHTML = 'Please give a valid height' 
    }
})

