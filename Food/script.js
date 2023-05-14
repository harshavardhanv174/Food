const nav=document.querySelector('.menu');
const into=document.querySelector('.into')
nav.addEventListener('click',()=>{
    document.querySelector('.navigation').classList.add('scroll');
})
into.addEventListener('click',()=>{
    document.querySelector('.navigation').classList.remove('scroll');
})