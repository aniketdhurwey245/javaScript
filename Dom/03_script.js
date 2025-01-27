//how to create element

const div = document.createElement('div')
console.log(div)
div.className = 'main'
div.id = Math.round(Math.random() * 10 + 1)

//for custom attributes like title and many more

div.setAttribute("title", "generated title")

//add styling

div.style.backgroundColor = 'green'
div.style.borderRadius = '10px'
//div.innerText = 'Chai aur code'//this over write 



//above all creation is on memory not on webpage

//how we can attached created element on webpage

const addText = document.createTextNode("Chai aur code")
div.appendChild(addText)

document.body.appendChild(div)
//pure above code ko functin me wrap kr sakte aur loop bhi chala sakte
