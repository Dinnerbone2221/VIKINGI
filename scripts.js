document.addEventListener('DOMContentLoaded', function() {
    const buttons = document.querySelectorAll('.button');
    const navLinks = document.querySelectorAll('nav a');
    
    buttons.forEach(button => {
        button.addEventListener('mouseenter', function(e) {
            const icon = this.querySelector('span');
            if (icon) {
                icon.style.transform = 'rotate(360deg) scale(1.3)';
                icon.style.transition = 'transform 0.5s ease';
            }
        });
        
        button.addEventListener('mouseleave', function(e) {
            const icon = this.querySelector('span');
            if (icon) {
                icon.style.transform = 'rotate(0deg) scale(1)';
            }
        });
    });
    
    navLinks.forEach(link => {
        link.addEventListener('mouseenter', function(e) {
            this.style.transform = 'translateY(-8px) rotate(2deg)';
        });
        
        link.addEventListener('mouseleave', function(e) {
            this.style.transform = 'translateY(0) rotate(0deg)';
        });
    });
    
    const photos = document.querySelectorAll('.photo');
    photos.forEach(photo => {
        photo.addEventListener('mouseenter', function() {
            this.style.zIndex = '10';
        });
        
        photo.addEventListener('mouseleave', function() {
            this.style.zIndex = '1';
        });
    });
    
    const factBoxes = document.querySelectorAll('.fact-box');
    factBoxes.forEach(box => {
        box.addEventListener('mouseenter', function() {
            this.style.boxShadow = '0 15px 35px rgba(0, 0, 0, 0.5)';
        });
        
        box.addEventListener('mouseleave', function() {
            this.style.boxShadow = 'none';
        });
    });
});