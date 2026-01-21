document.addEventListener('DOMContentLoaded', function() {
    console.log('Сайт о викингах загружен!');
    
    const buttons = document.querySelectorAll('.button');
    buttons.forEach(button => {
        button.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-5px)';
        });
        
        button.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0)';
        });
    });
    
    const navLinks = document.querySelectorAll('nav a');
    navLinks.forEach(link => {
        link.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-3px)';
        });
        
        link.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0)';
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
    
    const funMessages = [
        'Викинги были крутыми! ⚔️',
        'Знания - сила! 💪',
        'История оживает! 🏰',
        'Ты молодец! 👍',
        'Учиться интересно! 📚'
    ];
    
    const footer = document.querySelector('footer');
    if (footer) {
        const randomMessage = funMessages[Math.floor(Math.random() * funMessages.length)];
        const messageElement = document.createElement('p');
        messageElement.style.color = '#888';
        messageElement.style.fontStyle = 'italic';
        messageElement.style.marginTop = '10px';
        messageElement.style.fontSize = '14px';
        messageElement.textContent = randomMessage;
        
        const footerNote = footer.querySelector('.footer-note');
        if (footerNote) {
            footer.insertBefore(messageElement, footerNote);
        } else {
            footer.appendChild(messageElement);
        }
    }
});