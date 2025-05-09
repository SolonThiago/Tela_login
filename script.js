// Criar partículas no fundo
        const particlesContainer = document.getElementById('particles');
        const particlesCount = 50;
        
        for (let i = 0; i < particlesCount; i++) {
            const particle = document.createElement('div');
            particle.classList.add('particle');
            
            // Posição aleatória
            const posX = Math.random() * 100;
            const posY = Math.random() * 100;
            const size = Math.random() * 5 + 2;
            const duration = Math.random() * 20 + 10;
            const delay = Math.random() * 10;
            
            particle.style.left = `${posX}%`;
            particle.style.top = `${posY}%`;
            particle.style.width = `${size}px`;
            particle.style.height = `${size}px`;
            particle.style.opacity = Math.random() * 0.6;
            particle.style.background = i % 3 === 0 ? 'rgba(252, 73, 246, 0.6)' : 'rgba(255, 255, 255, 0.6)';
            particle.style.animation = `float ${duration}s infinite linear`;
            particle.style.animationDelay = `${delay}s`;
            
            particlesContainer.appendChild(particle);
        }