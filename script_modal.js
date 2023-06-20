
/*_______________________________________________________________________________*/
/*                                Modal Projects                                 */
/*_______________________________________________________________________________*/



/* JavaScript */
var modal = document.getElementById("modal"); // Get the modal

var span = document.getElementsByClassName("close-button")[0]; // Get the <span> element that closes the modal

function openModal(text) {  
    console.log('openModal is called');  // Add this line
    document.getElementById("modal-text").innerText = text;
    modal.style.display = "block";
}

span.onclick = function() { // When the user clicks on <span> (x), close the modal
  modal.style.display = "none"; // Set display to "none" to hide the modal
}

window.onclick = function(event) { // When the user clicks anywhere outside of the modal, close it
  if (event.target == modal) {
    modal.style.display = "none"; // Set display to "none" to hide the modal
  }
}



window.onload = () => navSlide();

