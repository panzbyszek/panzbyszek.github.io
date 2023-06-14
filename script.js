// header scrolling effect
$(window).on('scroll', function(){
	if($(window).scrollTop()){
      		$('header').addClass('nav-show');	  
	} 
	else{
		$('header').removeClass('nav-show');
	}
})
/*
//hamburger
const navSlide = () => {
	 const hamburger = document.querySelector(".hamburger");
	 const navbar = document.querySelector(".nav-bar");
	 const navLinks = document.querySelectorAll(".nav-bar li");

     	 hamburger.onclick = () => {
		
	 navbar.classList.toggle("nav-active");
		 
      //Animation links
	 navLinks.forEach((link, index) => {
		if (link.style.animation) {
			link.style.animation = "";
		} 
		else {
			link.style.animation = `navLinkFade 0.5s ease forwards ${index / 7+1}s`;
		}
	 });
       //hamburger animation
       hamburger.classList.toggle("toggle");
    }
	}
*/

//hamburger
const navSlide = () => {
    const hamburger = document.querySelector(".hamburger");
    const navbar = document.querySelector(".nav-bar");
    const navLinks = document.querySelectorAll(".nav-bar li");
    const speed = window.innerWidth <= 768 ? 0.3 : 0.5; // faster animation for mobile

    hamburger.onclick = () => {
        navbar.classList.toggle("nav-active");
        
        //Animation links
        navLinks.forEach((link, index) => {
            if (link.style.animation) {
                link.style.animation = "";
            } 
            else {
                link.style.animation = `navLinkFade ${speed}s ease forwards ${index / 7+1}s`;
            }
        });
        
        //hamburger animation
        hamburger.classList.toggle("toggle");
    }

    // hide navbar when click outside
    document.onclick = (e) => {
        if(e.target !== hamburger && e.target !== navbar && !navbar.contains(e.target)){
            if(navbar.classList.contains("nav-active")){
                navbar.classList.remove("nav-active");
                hamburger.classList.toggle("toggle");

                navLinks.forEach((link, index) => {
                    if (link.style.animation) {
                        link.style.animation = "";
                    } 
                });
            }
        }
    }
}

window.onload = () => navSlide();





















/*//JS do przewijania projektow
const container = document.querySelector('.card-container');
const leftArrow = document.querySelector('.arrow-left');
const rightArrow = document.querySelector('.arrow-right');

leftArrow.addEventListener('click', () => {
  container.scrollLeft -= container.offsetWidth;
});

rightArrow.addEventListener('click', () => {
  container.scrollLeft += container.offsetWidth;
});
*/
