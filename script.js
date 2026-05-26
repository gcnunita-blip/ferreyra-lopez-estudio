// Script optimizado para móviles (Android & iOS)

'use strict';

const MobileApp = {
    init: function() {
        this.preventPinchZoom();
        this.setupButtons();
        this.setupSocialIcons();
        this.handleOrientationChange();
        this.optimizeForTouchDevices();
        this.handleSafeAreaInsets();
    },

    // Prevenir zoom por pinch
    preventPinchZoom: function() {
        document.addEventListener('touchmove', function(e) {
            if (e.touches.length > 1) {
                e.preventDefault();
            }
        }, { passive: false });
    },

    // Configurar botones principales
    setupButtons: function() {
        const phoneBtn = document.querySelector('.btn-phone');
        const emailBtn = document.querySelector('.btn-email');
        const whatsappBtn = document.querySelector('.btn-whatsapp');

        if (phoneBtn) {
            phoneBtn.addEventListener('click', (e) => this.handlePhoneClick(e));
            phoneBtn.addEventListener('touchstart', () => this.addTouchFeedback(phoneBtn));
            phoneBtn.addEventListener('touchend', () => this.removeTouchFeedback(phoneBtn));
        }

        if (emailBtn) {
            emailBtn.addEventListener('click', (e) => this.handleEmailClick(e));
            emailBtn.addEventListener('touchstart', () => this.addTouchFeedback(emailBtn));
            emailBtn.addEventListener('touchend', () => this.removeTouchFeedback(emailBtn));
        }

        if (whatsappBtn) {
            whatsappBtn.addEventListener('click', (e) => this.handleWhatsappClick(e));
            whatsappBtn.addEventListener('touchstart', () => this.addTouchFeedback(whatsappBtn));
            whatsappBtn.addEventListener('touchend', () => this.removeTouchFeedback(whatsappBtn));
        }
    },

    // Manejar click en botón de llamada
    handlePhoneClick: function(e) {
        e.preventDefault();
        console.log('Botón de llamada clickeado');
        // Aquí irá la funcionalidad de llamada
        // window.location.href = 'tel:+XXXXXXXXXXXX';
    },

    // Manejar click en botón de email
    handleEmailClick: function(e) {
        e.preventDefault();
        console.log('Botón de email clickeado');
        // Aquí irá la funcionalidad de email
        // window.location.href = 'mailto:contacto@estudio.com';
    },

    // Manejar click en botón de WhatsApp
    handleWhatsappClick: function(e) {
        e.preventDefault();
        console.log('Botón de WhatsApp clickeado');
        // Aquí irá la funcionalidad de WhatsApp
        // const phoneNumber = '+XXXXXXXXXXXX';
        // const message = 'Hola, necesito asesoramiento jurídico';
        // const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
        // window.open(url, '_blank');
    },

    // Configurar iconos de redes sociales
    setupSocialIcons: function() {
        const socialIcons = document.querySelectorAll('.social-icon');
        socialIcons.forEach(icon => {
            icon.addEventListener('touchstart', () => this.addTouchFeedback(icon));
            icon.addEventListener('touchend', () => this.removeTouchFeedback(icon));
        });
    },

    // Agregar feedback visual al tocar
    addTouchFeedback: function(element) {
        element.style.opacity = '0.7';
    },

    // Remover feedback visual
    removeTouchFeedback: function(element) {
        element.style.opacity = '1';
    },

    // Manejar cambio de orientación
    handleOrientationChange: function() {
        window.addEventListener('orientationchange', () => {
            setTimeout(() => {
                // Reajustar altura después del cambio de orientación
                document.body.style.height = window.innerHeight + 'px';
            }, 100);
        });
    },

    // Optimizar para dispositivos táctiles
    optimizeForTouchDevices: function() {
        const isTouchDevice = () => {
            return (('ontouchstart' in window) ||
                    (navigator.maxTouchPoints > 0) ||
                    (navigator.msMaxTouchPoints > 0));
        };

        if (isTouchDevice()) {
            document.body.classList.add('touch-device');
            document.addEventListener('touchmove', function(e) {
                if (e.target.closest('button')) {
                    // Permitir movimiento dentro de botones
                    return;
                }
            }, { passive: true });
        }
    },

    // Manejar safe area insets (iPhone con notch)
    handleSafeAreaInsets: function() {
        if (CSS && CSS.supports && CSS.supports('padding: max(0px)')) {
            // El navegador soporta safe-area-inset
            document.documentElement.style.setProperty(
                '--safe-area-inset-top',
                'env(safe-area-inset-top)'
            );
            document.documentElement.style.setProperty(
                '--safe-area-inset-bottom',
                'env(safe-area-inset-bottom)'
            );
            document.documentElement.style.setProperty(
                '--safe-area-inset-left',
                'env(safe-area-inset-left)'
            );
            document.documentElement.style.setProperty(
                '--safe-area-inset-right',
                'env(safe-area-inset-right)'
            );
        }
    },

    // Prevenir scroll bounce en iOS
    preventScrollBounce: function() {
        let lastY = 0;
        document.body.addEventListener('touchstart', function(e) {
            lastY = e.touches[0].clientY;
        }, { passive: true });

        document.body.addEventListener('touchmove', function(e) {
            const currentY = e.touches[0].clientY;
            const isScrollingUp = currentY > lastY;
            const isAtTop = window.scrollY === 0;
            const isAtBottom = (window.scrollY + window.innerHeight) >= document.body.scrollHeight;

            if ((isScrollingUp && isAtTop) || (!isScrollingUp && isAtBottom)) {
                e.preventDefault();
            }
            lastY = currentY;
        }, { passive: false });
    }
};

// Inicializar cuando el DOM esté listo
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', () => MobileApp.init());
} else {
    MobileApp.init();
}

// Manejar visibilidad de la página
document.addEventListener('visibilitychange', () => {
    if (document.hidden) {
        console.log('App pasó a background');
    } else {
        console.log('App volvió al foreground');
    }
});

// Service Worker para soporte offline (opcional)
if ('serviceWorker' in navigator) {
    window.addEventListener('load', () => {
        // Descomentar para registrar service worker
        // navigator.serviceWorker.register('/sw.js').catch(() => {});
    });
}

// Detectar si es iOS
const isIOS = /iPad|iPhone|iPod/.test(navigator.userAgent) && !window.MSStream;
if (isIOS) {
    document.body.classList.add('is-ios');
}

// Detectar si es Android
const isAndroid = /Android/.test(navigator.userAgent);
if (isAndroid) {
    document.body.classList.add('is-android');
}