function openMenu() {
    document.body.classList.add("menu--open");
    document.querySelector('.modal').classList.add('show');
    // Prevent body scroll when menu is open
    document.body.style.overflow = 'hidden';
}

function closeMenu() {
    document.body.classList.remove("menu--open");
    document.querySelector('.modal').classList.remove('show');
    // Restore body scroll
    document.body.style.overflow = 'auto';
}

// Close menu when clicking outside of it
document.addEventListener('click', function(event) {
    const modal = document.querySelector('.modal');
    const menuButton = document.querySelector('.btn__menu');
    
    if (modal.classList.contains('show') && 
        !modal.contains(event.target) && 
        !menuButton.contains(event.target)) {
        closeMenu();
    }
});

// Close menu when pressing Escape key
document.addEventListener('keydown', function(event) {
    if (event.key === 'Escape') {
        closeMenu();
    }
});

// Buy Now button animations and functionality
document.addEventListener('DOMContentLoaded', function() {
    const buyNowButtons = document.querySelectorAll('.plan__button');
    
    buyNowButtons.forEach(button => {
        button.addEventListener('click', function(e) {
            e.preventDefault();
            
            // Add loading state
            this.classList.add('loading');
            this.textContent = 'Processing...';
            
            // Simulate processing time (you can replace this with actual functionality)
            setTimeout(() => {
                this.classList.remove('loading');
                this.textContent = 'Buy Now';
                
                // Add success animation
                this.classList.add('success');
                this.textContent = 'Added to Cart!';
                
                // Reset after a moment
                setTimeout(() => {
                    this.classList.remove('success');
                    this.textContent = 'Buy Now';
                }, 2000);
                
            }, 2000);
        });
        
        // Add focus styles for accessibility
        button.addEventListener('focus', function() {
            this.style.outline = '2px solid #6415ff';
            this.style.outlineOffset = '2px';
        });
        
        button.addEventListener('blur', function() {
            this.style.outline = 'none';
        });
    });
});