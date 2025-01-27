// const parent=document.querySelector('.parent') 
// console.log(parent)  

document.getElementById('gray').onclick = function(){
    //alert('gray click !') 
    //for this something problem it do not give ability to propogate or feature kam deta hai
}


// another approch , attachEvent(), jQuery- on 

document.querySelector('#gray').addEventListener('click',function (e){
    console.log(e)
    alert('gray clicked again')
},false)

// 