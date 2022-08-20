let OpenBurgeur = document.querySelector(".OpenMenu")
let cancelBurgeur = document.querySelector(".CancelMenu")
let navbar = document.querySelector(".navbar")
OpenBurgeur.addEventListener("click",()=>{

    OpenBurgeur.classList.remove("show")
    OpenBurgeur.classList.add("hide")


    cancelBurgeur.classList.add("show")
    cancelBurgeur.classList.remove("hide")


    navbar.classList.toggle("ShowNavigation")


})

cancelBurgeur.addEventListener("click", ()=>{

    cancelBurgeur.classList.add("hide")
    cancelBurgeur.classList.remove("show")

    OpenBurgeur.classList.remove("hide")
    OpenBurgeur.classList.add("show")
    navbar.classList.toggle("ShowNavigation")



})



$('button').click(function(){
  $('button').toggleClass('active');
  $('.title').toggleClass('active');
  $('nav').toggleClass('active');
});