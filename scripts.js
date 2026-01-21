document.addEventListener('DOMContentLoaded', function() {
    console.log('⚔️ Сайт о викингах загружен! 🛡️');
    
    const buttons = document.querySelectorAll('.button, .error-button');
    buttons.forEach(button => {
        button.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-5px) scale(1.05)';
        });
        
        button.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0) scale(1)';
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
        'Учиться интересно! 📚',
        'Вперёд, к новым открытиям! 🌟',
        'Викинги покоряли моря! 🌊',
        'Драккары ждут тебя! ⛵',
        'Сила викингов в знаниях! 🧠',
        'Смелость и честь! 🛡️'
    ];
    
    const footer = document.querySelector('footer');
    if (footer) {
        const randomMessage = funMessages[Math.floor(Math.random() * funMessages.length)];
        const messageElement = document.createElement('p');
        messageElement.style.color = '#666';
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
        
        const smileys = ['⚔️', '🛡️', '⛵', '⚓', '🏹', '🔱', '👑', '🏰', '🗡️', '🎯'];
        const smileyContainer = document.createElement('div');
        smileyContainer.style.margin = '15px 0';
        smileyContainer.style.fontSize = '24px';
        smileyContainer.style.letterSpacing = '15px';
        smileyContainer.style.opacity = '0.5';
        
        for (let i = 0; i < 6; i++) {
            const smiley = document.createElement('span');
            smiley.textContent = smileys[Math.floor(Math.random() * smileys.length)];
            smiley.style.animation = `float ${2 + Math.random() * 3}s ease-in-out infinite`;
            smiley.style.animationDelay = `${i * 0.5}s`;
            smileyContainer.appendChild(smiley);
        }
        
        footer.insertBefore(smileyContainer, messageElement);
    }
    
    const tableRows = document.querySelectorAll('tr');
    tableRows.forEach(row => {
        row.addEventListener('mouseenter', function() {
            this.style.backgroundColor = 'rgba(139, 0, 0, 0.1)';
        });
        
        row.addEventListener('mouseleave', function() {
            this.style.backgroundColor = '';
        });
    });
    
    const fadeElements = document.querySelectorAll('.fact-box, .photo, .discovery-box');
    fadeElements.forEach((element, index) => {
        element.style.opacity = '0';
        element.style.transform = 'translateY(20px)';
        
        setTimeout(() => {
            element.style.transition = 'opacity 0.5s, transform 0.5s';
            element.style.opacity = '1';
            element.style.transform = 'translateY(0)';
        }, index * 100);
    });
    
    console.log('%c⚔️ Добро пожаловать в мир викингов! 🛡️', 'color: #8B0000; font-size: 18px; font-weight: bold;');
    console.log('%cОткрой для себя историю великих воинов и мореплавателей!', 'color: #8B4513; font-size: 14px;');
    
    if (document.body.classList.contains('rockets-page')) {
        function createFlyingRocket() {
            const rocket = document.createElement('div');
            rocket.innerHTML = '🚀';
            rocket.style.position = 'fixed';
            rocket.style.left = '-100px';
            rocket.style.top = Math.random() * 80 + 10 + '%';
            rocket.style.fontSize = Math.random() * 30 + 20 + 'px';
            rocket.style.zIndex = '9999';
            rocket.style.opacity = '0.5';
            rocket.style.filter = 'brightness(0.8)';
            const randomY = Math.random() * 100 - 50;
            const randomRotate = Math.random() * 20 - 10;
            rocket.style.setProperty('--random-y', `${randomY}px`);
            rocket.style.setProperty('--random-rotate', `${randomRotate}deg`);
            rocket.style.animation = `flyRocket ${3 + Math.random() * 4}s linear forwards`;
            document.body.appendChild(rocket);
            
            setTimeout(() => {
                rocket.remove();
            }, 10000);
        }

        for (let i = 0; i < 3; i++) {
            setTimeout(() => createFlyingRocket(), i * 2000);
        }

        function createStar() {
            const star = document.createElement('div');
            star.innerHTML = '✨';
            star.className = 'star';
            star.style.left = Math.random() * 100 + '%';
            star.style.top = Math.random() * 100 + '%';
            star.style.fontSize = Math.random() * 15 + 8 + 'px';
            star.style.opacity = '0.2';
            star.style.animation = `twinkle ${2 + Math.random() * 3}s infinite alternate`;
            document.body.appendChild(star);
        }
        for (let i = 0; i < 15; i++) {
            createStar();
        }
const feedbackForm = document.getElementById('feedback-form');
if (feedbackForm) {
    feedbackForm.addEventListener('submit', function(e) {
        e.preventDefault();
        const name = document.getElementById('name').value;
        const message = document.getElementById('message').value;
        
        if (!name.trim() || !message.trim()) {
            alert('⚠️ Пожалуйста, заполните имя и сообщение!');
            return;
        }
        alert('🎉 Спасибо за ваш отзыв! Викинги одобряют! ⚔️');
        feedbackForm.reset();
    });
}
    }
});