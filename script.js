// Get the button element
const button = document.getElementById('changeTextButton');

// Add an event listener to the button
button.addEventListener('click', function() {
    // Change the text inside the header
    document.querySelector('header p').innerText = 'The text has been changed!';
});
