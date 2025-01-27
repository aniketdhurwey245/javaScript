// create element

document.querySelector('.language')

function addLanguage(langName){
    const li = document.createElement('li');
    li.innerHTML = `${langName}`
    document.querySelector('.language').appendChild(li);
}

addLanguage('Python')
addLanguage('Golang')

// optimise code

function addOptiLanguage(langName){
    const li = document.createElement('li');
    // const addText = document.createTextNode(langName)
    // li.appendChild(addText)
    li.appendChild(document.createTextNode(langName))
    document.querySelector('.language').appendChild(li)
}

addOptiLanguage('Typescript')

// edit

const secondLang = document.querySelector('li:nth-child(2)')
// secondLang.innerHTML = 'Mojo'
const newLi = document.createElement('li')
newLi.textContent = 'Mojo'
secondLang.replaceWith(newLi)

// edit

const firstLang = document.querySelector('li:first-child')
firstLang.outerHTML = '<li>Typescript</li>'

// remove

const lastLang =document.querySelector('li:last-child')
lastLang.remove()