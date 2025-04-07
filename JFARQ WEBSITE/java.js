// Toggle the mobile navbar when the hamburger icon is clicked
document.querySelector('.hamburger').addEventListener('click', function() {
    document.querySelector('.navbar').classList.toggle('show');
});

// Dropdown menu toggle
document.querySelectorAll('.navbar .dropdown').forEach(function(dropdown) {
    dropdown.addEventListener('click', function(event) {
        event.stopPropagation(); // Prevents closing when clicking inside
        this.classList.toggle('active');
    });
});