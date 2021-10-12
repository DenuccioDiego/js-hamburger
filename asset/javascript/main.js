
document.querySelector(".fa-bars").addEventListener("click", mostra );

document.querySelector(".close").addEventListener("click", nascondi );

function mostra() {
     document.querySelector(".hamburger-menu").style.display = "block" ;
     
}  

function nascondi() {
     document.querySelector(".hamburger-menu").style.display = "none" ;
     
} 