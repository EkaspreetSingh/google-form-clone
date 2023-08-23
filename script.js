const form = document.getElementById('custom-form');

form.addEventListener('submit', function (e) {
    const requiredFields = form.querySelectorAll('[required]');

    for (const field of requiredFields) {
        if (!field.value) {
            alert('This is a required question: ' + field.previousElementSibling.textContent);
            e.preventDefault(); // Prevent form submission
            return;
        }
    }
});


const clearFormButton = document.getElementById('clear-form-button');

// Add a click event listener to the Clear Form button
clearFormButton.addEventListener('click', function (e) {
    form.reset(); // Reset the form to its initial state
});