burger = document.querySelector('.burger');
navbar = document.querySelector('.navbar');
navList = document.querySelector('.navlist');

burger.addEventListener('click', ()=>{
    navList.classList.toggle('v-class');
    navbar.classList.toggle('h-nav');
});
    var burger = document.getElementById("burger");
    burger.onclick = function(){
    burger.classList.toggle("openburger");
}