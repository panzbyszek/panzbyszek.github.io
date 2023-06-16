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







/*_______________________________________________________________________________*/
/*                                  CRYPTO ALL                                   */
/*_______________________________________________________________________________*/
async function getAccount() {
  if (window.ethereum) {
    window.web3 = new Web3(window.ethereum);
    try {
      // Request account access if needed
      await window.ethereum.enable();
      // Acccounts now exposed
      web3.eth.sendTransaction({/* ... */});
    } catch (error) {
      // User denied account access...
      console.error("User denied account access")
    }
  }
  // Legacy dapp browsers...
  else if (window.web3) {
    window.web3 = new Web3(web3.currentProvider);
    // Acccounts always exposed
    web3.eth.sendTransaction({/* ... */});
  }
  // Non-dapp browsers...
  else {
    console.log('Non-Ethereum browser detected. You should consider trying MetaMask!');
  }
}


  function disconnectWallet() {
    if (window.ethereum) {
      window.web3 = null;
      if (window.ethereum.isConnected()) {
        alert("Portfel został rozłączony.");
      } else {
        alert("Portfel nie był połączony.");
      }
    } else {
      alert("Metamask nie jest zainstalowany w tej przeglądarce.");
    }
  }





/*_______________________________________________________________________________*/
/*                                   NOT USED                                    */
/*_______________________________________________________________________________*/
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
