// Get references to the burger icon and navigation links container
const burger = document.querySelector('.burger'); // Hamburger menu icon for mobile
const navLinks = document.querySelector('.nav-links'); // Navigation links container

// If both elements exist, set up the mobile menu toggle
if (burger && navLinks) {
    // When the burger icon is clicked, toggle the navigation menu
    burger.addEventListener('click', () => {
        navLinks.classList.toggle('nav-active'); // Show/hide navigation links
        burger.classList.toggle('toggle'); // Animate burger icon (optional)
    });
}

// Enable smooth scrolling for anchor links (links that start with "#")
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    // Add a click event to each anchor link
    anchor.addEventListener('click', function(e) {
        // Find the target section by its ID
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            e.preventDefault(); // Prevent default jump to section
            target.scrollIntoView({ behavior: 'smooth' }); // Smoothly scroll to section
        }

        // If the mobile menu is open, close it after clicking a link
        if (navLinks && navLinks.classList.contains('nav-active')) {
            navLinks.classList.remove('nav-active'); // Hide navigation links
            if (burger) burger.classList.remove('toggle'); // Reset burger icon animation
        }
    });
});

// Form submission handling
const contactForm = document.getElementById('contactForm');
if (contactForm) {
    contactForm.addEventListener('submit', async (e) => {
        e.preventDefault();
        
        const submitButton = contactForm.querySelector('button[type="submit"]');
        const originalButtonText = submitButton.textContent;
        
        try {
            // Disable button and show loading state
            submitButton.disabled = true;
            submitButton.textContent = 'Sending...';
            
            // Get form data
            const formData = new FormData(contactForm);
            
            // Send to Formspree or your backend
            const response = await fetch(contactForm.action, {
                method: 'POST',
                body: formData,
                headers: {
                    'Accept': 'application/json'
                }
            });
            
            if (response.ok) {
                // Show success message
                contactForm.innerHTML = `
                    <div class="success-message" role="alert">
                        <p>Thank you! Your message has been sent successfully.</p>
                    </div>
                `;
            } else {
                throw new Error('Network response was not ok');
            }
        } catch (error) {
            // Show error message
            const errorElement = document.createElement('p');
            errorElement.className = 'error-message';
            errorElement.textContent = 'Oops! There was a problem sending your message. Please try again.';
            errorElement.setAttribute('role', 'alert');
            contactForm.appendChild(errorElement);
            
            // Reset button
            submitButton.disabled = false;
            submitButton.textContent = originalButtonText;
        }
    });
}