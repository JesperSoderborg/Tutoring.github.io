var navLinks = document.getElementById("navLinks");
let width = window.innerWidth

function showMenu(){
    navLinks.style.right = "0";
}

function hideMenu(){
    navLinks.style.right = "-50vw";
}



function reveal() {
    var reveals = document.querySelectorAll(".reveal");
    
    for (var i = 0; i < reveals.length; i++) {
        var windowHeight = window.innerHeight;
        var elementTop = reveals[i].getBoundingClientRect().top;
        var elementVisible = 200;
    
        if (elementTop < windowHeight - elementVisible) {
        reveals[i].classList.add("active");
        }
    }
    }
    
    window.addEventListener("scroll", reveal);