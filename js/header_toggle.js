
const toggleBtn=document.querySelector('nav_toggle_button');
const menu=document.querySelector('gnb');

toggleBtn.addEventListener('click',()=>{
    menu.classList.toggle('active');
});