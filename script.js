// Script para interactividad futura
// Los botones están listos para agregar funcionalidad

document.addEventListener('DOMContentLoaded', function() {
    // Agregar listeners a los botones
    const phoneBtn = document.querySelector('.btn-phone');
    const emailBtn = document.querySelector('.btn-email');
    const whatsappBtn = document.querySelector('.btn-whatsapp');

    // Placeholder para funcionalidad futura
    phoneBtn.addEventListener('click', function() {
        console.log('Botón de llamada clickeado');
        // Aquí irá la funcionalidad de llamada
    });

    emailBtn.addEventListener('click', function() {
        console.log('Botón de email clickeado');
        // Aquí irá la funcionalidad de email
    });

    whatsappBtn.addEventListener('click', function() {
        console.log('Botón de WhatsApp clickeado');
        // Aquí irá la funcionalidad de WhatsApp
    });

    // Agregar efecto de ripple en botones
    const buttons = document.querySelectorAll('.btn');
    buttons.forEach(button => {
        button.addEventListener('mousedown', function(e) {
            const ripple = document.createElement('span');
            const rect = button.getBoundingClientRect();
            const size = Math.max(rect.width, rect.height);
            const x = e.clientX - rect.left - size / 2;
            const y = e.clientY - rect.top - size / 2;
            
            ripple.style.width = ripple.style.height = size + 'px';
            ripple.style.left = x + 'px';
            ripple.style.top = y + 'px';
            ripple.classList.add('ripple');
            
            button.appendChild(ripple);
            
            setTimeout(() => ripple.remove(), 600);
        });
    });
});