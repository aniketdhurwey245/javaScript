const title = document.getElementById('title')
title.style.backgroundColor = "green"
title.style.borderRadius = "10px"

// to see inner content use keyword

title.innerText//it give only content
title.textContent//it give all content which is written on the tag
// title.innerHTML//whole inner html

//now we can manupulate the value

// title.innerHTML = "hi this is Aniket Dhurwey"


//we having selectors

document.getElementsByClassName('heading')

// document.getElementsByTagName('h1').innerHTML = "Document object model"


document.querySelector('.heading')//class return html collection
document.querySelectorAll('.heading') //return nodelist