
const themeButton=document.querySelector('.theme-button');
const menuButton=document.querySelector('.menu-button');
const nav=document.querySelector('.nav-links');
document.getElementById('year').textContent=new Date().getFullYear();
if(localStorage.getItem('portfolio-theme')==='light') document.body.classList.add('light');
themeButton.addEventListener('click',()=>{document.body.classList.toggle('light');localStorage.setItem('portfolio-theme',document.body.classList.contains('light')?'light':'dark')});
menuButton.addEventListener('click',()=>{nav.classList.toggle('open');menuButton.setAttribute('aria-expanded',nav.classList.contains('open'))});
nav.querySelectorAll('a').forEach(a=>a.addEventListener('click',()=>nav.classList.remove('open')));
