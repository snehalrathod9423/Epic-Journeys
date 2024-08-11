// script.js
document.getElementById('booking-form').addEventListener('submit', function(event) {
    event.preventDefault();

    const tourPackage = document.getElementById('tour-package').value;
    const startDate = document.getElementById('start-date').value;
    const endDate = document.getElementById('end-date').value;
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const phone = document.getElementById('phone').value;
    const guests = document.getElementById('guests').value;

    if (tourPackage && startDate && endDate && name && email && phone && guests) {
        document.getElementById('confirmation-message').innerHTML = 
            `Thank you, ${name}! Your booking for the ${tourPackage} has been received.<br>
            We will contact you shortly at ${email} or ${phone} to confirm your booking.<br>
            Start Date: ${startDate}<br>End Date: ${endDate}<br>Number of Guests: ${guests}`;
        document.getElementById('confirmation-message').style.display = 'block';
        document.getElementById('booking-form').reset();
    } else {
        alert("Please fill out all fields.");
    }
});
