document.addEventListener("DOMContentLoaded", function() {
    // Example: Load reviews dynamically
    const reviewsContainer = document.getElementById("reviews-container");

    const reviews = [
        { name: "Snehal", text: "Amazing place! Had a great time." },
        { name: "Prachi", text: "Beautiful scenery and friendly locals." },
        { name: "Sam", text: "A must-visit destination!" }
    ];

    reviews.forEach(review => {
        const reviewElement = document.createElement("div");
        reviewElement.classList.add("review");
        reviewElement.innerHTML = `<h3>${review.name}</h3><p>${review.text}</p>`;
        reviewsContainer.appendChild(reviewElement);
    });

    // Example: Add smooth scrolling for navigation links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });
});
