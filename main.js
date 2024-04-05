// Defining text characters for the empty and full hearts for you to use later.
const EMPTY_HEART = '♡'
const FULL_HEART = '♥'

// Your JavaScript code goes here!
// const errorModal = document.getElementById('error-modal');
// errorModal.classList.add('hidden'); // Initially hide the error modal

// Function to handle heart click
function handleHeartClick(event) {
  const heart = event.target;
  
  // Simulate making a server request
  mimicServerCall()
    .then(() => {
      // Server request successful
      if (heart.innerText === EMPTY_HEART) {
        // Change heart to full
        heart.innerText = FULL_HEART;
        heart.classList.add('activated-heart');
      } else {
        // Change heart back to empty
        heart.innerText = EMPTY_HEART;
        heart.classList.remove('activated-heart');
      }
    })
    .catch((error) => {
      // Server request failed
      errorModal.classList.remove('hidden'); // Display the error modal
      const errorMessage = document.getElementById('error-message');
      errorMessage.innerText = error; // Display the server error message
      
      // Hide the error modal after 3 seconds
      setTimeout(() => {
        errorModal.classList.add('hidden');
      }, 3000);
    });
}

// Attach event listener to all heart icons
const hearts = document.querySelectorAll('.like-glyph');
hearts.forEach((heart) => {
  heart.addEventListener('click', handleHeartClick);
});

//------------------------------------------------------------------------------
// Don't change the code below: this function mocks the server response
//------------------------------------------------------------------------------

function mimicServerCall(url="http://mimicServer.example.com", config={}) {
  return new Promise(function(resolve, reject) {
    setTimeout(function() {
      let isRandomFailure = Math.random() < .2
      if (isRandomFailure) {
        reject("Random server error. Try again.");
      } else {
        resolve("Pretend remote server notified of action!");
      }
    }, 300);
  });
}
