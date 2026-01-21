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
    
    const answers = document.querySelectorAll('.answer');
    if (answers.length > 0) {
        const correctAnswers = {
            1: 0, // Первый вариант для первого вопроса
            2: 1, // Второй вариант для второго вопроса
            3: 1, // Второй вариант для третьего вопроса
            4: 1, // Второй вариант для четвертого вопроса
            5: 1  // Второй вариант для пятого вопроса
        };
        
        let selectedAnswers = {};
        let score = 0;
        
        answers.forEach(answer => {
            answer.addEventListener('click', function() {
                const questionNumber = parseInt(this.closest('.question').dataset.question);
                const answerIndex = Array.from(this.parentElement.children).indexOf(this);
                
                const questionAnswers = document.querySelectorAll(`[data-question="${questionNumber}"] .answer`);
                
                questionAnswers.forEach(ans => {
                    ans.classList.remove('selected', 'correct', 'wrong');
                });
                
                this.classList.add('selected');
                
                if (answerIndex === correctAnswers[questionNumber]) {
                    this.classList.add('correct');
                    selectedAnswers[questionNumber] = true;
                } else {
                    this.classList.add('wrong');
                    selectedAnswers[questionNumber] = false;
                    questionAnswers[correctAnswers[questionNumber]].classList.add('correct');
                }
                
                updateScore();
            });
        });
        
        function updateScore() {
            score = Object.values(selectedAnswers).filter(val => val === true).length;
            const totalQuestions = Object.keys(correctAnswers).length;
            
            const scoreElement = document.querySelector('.score');
            if (scoreElement) {
                scoreElement.textContent = `Твой результат: ${score} из ${totalQuestions}`;
                
                if (score === totalQuestions) {
                    scoreElement.innerHTML += '<br>🎉 Отлично! Ты настоящий знаток викингов!';
                } else if (score >= totalQuestions * 0.7) {
                    scoreElement.innerHTML += '<br>👍 Хорошо! Ты много знаешь о викингах!';
                } else if (score >= totalQuestions * 0.5) {
                    scoreElement.innerHTML += '<br>👌 Неплохо! Но можно узнать больше!';
                } else {
                    scoreElement.innerHTML += '<br>📚 Почитай еще материалы на сайте!';
                }
            }
        }
    }
    
    const smileys = ['😊', '😎', '🤓', '🧐', '🤔', '😄', '🤩', '🥳', '😋', '🤗'];
    const headers = document.querySelectorAll('h2, h3');
    
    headers.forEach(header => {
        const randomSmiley = smileys[Math.floor(Math.random() * smileys.length)];
        if (!header.innerHTML.includes('😊') && !header.innerHTML.includes('😎') && !header.innerHTML.includes('🤓')) {
            header.innerHTML += ` ${randomSmiley}`;
        }
    });
    
    const funMessages = [
        'Викинги крутые! ⚔️',
        'Учиться - это весело! 📚',
        'Знания - сила! 💪',
        'История - это интересно! 🏰',
        'Море зовет! ⛵',
        'Боги наблюдают! ⚡',
        'Открытия ждут! 🌟',
        'Ты молодец! 👍'
    ];
    
    const footer = document.querySelector('footer p');
    if (footer) {
        const randomMessage = funMessages[Math.floor(Math.random() * funMessages.length)];
        const messageElement = document.createElement('p');
        messageElement.style.color = '#888';
        messageElement.style.fontStyle = 'italic';
        messageElement.style.marginTop = '10px';
        messageElement.textContent = randomMessage;
        footer.parentElement.insertBefore(messageElement, footer.nextSibling);
    }
});