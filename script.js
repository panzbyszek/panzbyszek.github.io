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

let web3;
let currentAccount;

async function getAccount() {
    if (window.ethereum) {
        web3 = new Web3(window.ethereum);
        try {
            // Wywołanie Metamask do połączenia
            await window.ethereum.enable();
            // Pobranie konta
            const accounts = await web3.eth.getAccounts();
            currentAccount = accounts[0];
            // Aktualizacja statusu portfela
            document.getElementById("walletStatus").innerText = "Address: " + currentAccount;
        } catch (error) {
            console.error("User denied account access...");
        }
    }
    // Jeśli Metamask nie jest zainstalowany
    else {
        console.log('Non-Ethereum browser detected.</n>Consider trying MetaMask!');
    }
}

async function disconnectWallet() {
    if (window.ethereum) {
        try {
            // Rozłączenie Metamask (to może nie działać zgodnie z oczekiwaniami, ponieważ Metamask nie oferuje natywnej metody rozłączenia)
            currentAccount = null;
            document.getElementById("walletStatus").innerHTML = "Disconnect your wallet manually via Metamask!<br/>(otherwise your wallet will NOT be disconnected)";
        } catch (error) {
            console.error("Error disconnecting wallet...");
        }
    }
}

/*_______________________________________________________________________________*/
/*                                Modal Projects                                 */
/*_______________________________________________________________________________*/


var modal = document.getElementById("modal"); 			// Get the modal

var span = document.getElementsByClassName("close-button")[0]; 	// Get the <span> element that closes the modal

function openModal(text) {  					// Function to open the modal and set the text
  document.getElementById("modal-text").innerText = text;
  modal.style.display = "block";
}

span.onclick = function() {   					// When the user clicks on <span> (x), close the modal
  modal.style.display = "none";
}

window.onclick = function(event) {				// When the user clicks anywhere outside of the modal, close it
  if (event.target == modal) {
    modal.style.display = "none";
  }
}

/*_______________________________________________________________________________*/
/*                      Przewijanie niżej niż prowadzi kotwica                   */
/*_______________________________________________________________________________*/


/*if(window.innerWidth <= 500) {*/
    document.querySelectorAll('a').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();

            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });

            window.scrollBy(0, 0); // Odejmij wartość, na przykład 50 pikseli
        });
    });
/*}*/
