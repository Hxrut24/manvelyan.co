document.addEventListener('DOMContentLoaded', () => {
    console.log("Manvelyan site loaded.");
    
    // Add a simple fade-in effect for sections
    const sections = document.querySelectorAll('.mastery-section, .service-like-section');
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = 1;
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, { threshold: 0.1 });

    sections.forEach(section => {
        section.style.opacity = 0;
        section.style.transform = 'translateY(20px)';
        section.style.transition = 'opacity 0.6s ease-out, transform 0.6s ease-out';
        observer.observe(section);
    });

    // Search Functionality
    const searchLink = document.querySelector('.search-link');
    const searchOverlay = document.getElementById('search-overlay');
    const searchCloseBtn = document.getElementById('search-close-btn');
    const searchInput = document.getElementById('search-input');

    if (searchLink && searchOverlay && searchCloseBtn) {
        searchLink.addEventListener('click', (e) => {
            e.preventDefault();
            searchOverlay.classList.add('active');
            // Focus on input after transition
            setTimeout(() => searchInput.focus(), 300);
        });

        searchCloseBtn.addEventListener('click', () => {
            searchOverlay.classList.remove('active');
        });

        // Close on Escape key
        document.addEventListener('keydown', (e) => {
            if (e.key === 'Escape' && searchOverlay.classList.contains('active')) {
                searchOverlay.classList.remove('active');
            }
        });

        // Search Enter Key
        searchInput.addEventListener('keydown', (e) => {
            if (e.key === 'Enter') {
                // For now, just close and alert or log. 
                // In a real static site, this could redirect to a Google site search or filter content.
                console.log(`Searching for: ${searchInput.value}`);
                searchOverlay.classList.remove('active');
            }
        });
    }
});
