document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('payment-form');
    const messageDiv = document.getElementById('message');

    form.addEventListener('submit', (event) => {
        event.preventDefault(); // Prevents the form from submitting the traditional way

        const name = document.getElementById('name').value;
        const cardNumber = document.getElementById('card-number').value;
        const expiry = document.getElementById('expiry').value;
        const cvv = document.getElementById('cvv').value;

        // Simple validation (real validation should be more robust)
        if (name && cardNumber && expiry && cvv) {
            // Simulate a successful payment
            messageDiv.innerHTML = '<p style="color: green;">Payment processed successfully!</p>';
        } else {
            // Show error message
            messageDiv.innerHTML = '<p style="color: red;">Please fill in all fields correctly.</p>';
        }

        // Here you would typically send the payment data to a server
        // For demonstration purposes, this example just displays a success message
    });
});
