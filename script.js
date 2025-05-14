// Get the button and image elements
const animateButton = document.getElementById('animateButton');
const animatedImage = document.getElementById('animatedImage');

// Function to store and retrieve animation preferences
function storeAnimationPreference(isAnimated) {
  // Store animation state (true/false) in localStorage
  localStorage.setItem('animationTriggered', isAnimated);
}

function getAnimationPreference() {
  // Retrieve the animation state from localStorage
  return localStorage.getItem('animationTriggered') === 'true';
}

// Check if animation was triggered before (based on localStorage)
if (getAnimationPreference()) {
  animateButton.classList.add('animate');
  animatedImage.classList.add('animate');
}

// Add an event listener to the button to trigger animation on click
animateButton.addEventListener('click', () => {
  // Trigger animation on the button and image
  animateButton.classList.add('animate');
  animatedImage.classList.add('animate');
  
  // Store the animation state
  storeAnimationPreference(true);

  // Optional: Disable the button after first click
  animateButton.disabled = true;
});
