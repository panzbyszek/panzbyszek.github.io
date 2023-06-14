// header scrolling effect
$(window).on('scroll', function () {
	if ($(window).scrollTop()) {
		$('header').addClass('nav-show');
	}
	else {
		$('header').removeClass('nav-show');
	}
})


const navSlide = () => {
    const hamburger = document.querySelector(".hamburger");
    const navbar = document.querySelector(".nav-bar");
    const navLinks = document.querySelectorAll(".nav-bar li");

    hamburger.onclick = () => {

        navbar.classList.toggle("nav-active");

        // Animation links
        navLinks.forEach((link, index) => {
            if (link.style.animation) {
                link.style.animation = "";
            } else {
                link.style.animation = `navLinkFade 0.3s ease forwards ${index / 7 + 0.6}s`;
            }
        });
        // Hamburger animation
        hamburger.classList.toggle("toggle");

        if (navbar.classList.contains("nav-active")) {
            // Add a click event to the document when the navbar is open
            document.onclick = (e) => {
                if (!navbar.contains(e.target) && !hamburger.contains(e.target)) {
                    // Close the navbar if clicked outside of the navbar or the hamburger
                    navbar.classList.remove("nav-active");
                    hamburger.classList.remove("toggle");
                    navLinks.forEach((link) => {
                        link.style.animation = "";
                    });
                    // Remove the click event from the document when the navbar is closed
                    document.onclick = null;
                }
            };
        } else {
            // Remove the click event from the document when the navbar is closed
            document.onclick = null;
        }
    }
}

window.onload = () => navSlide();












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
				link.style.animation = `navLinkFade 0.3s ease forwards ${index / 7 + 0.6}s`;
			}
		});
		//hamburger animation
		hamburger.classList.toggle("toggle");
	}
}

window.onload = () => navSlide();

*/
