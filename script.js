'use strict';

const LegalApp = {
    // Contenido de las guías para cada categoría
    guides: {
        'accidente-transito': {
            title: 'Accidente de Tránsito',
            content: `
                <h3>¿Qué hacer después de un accidente de tránsito?</h3>
                <p>Si has sufrido un accidente vehicular, es importante actuar rápidamente. Aquí te brindamos una guía para proteger tus derechos:</p>
                
                <h3>Pasos inmediatos:</h3>
                <ul>
                    <li><strong>Seguridad primero:</strong> Verifica que todos estén seguros. Si hay lesionados, llama a emergencias.</li>
                    <li><strong>Llamar a la policía:</strong> Reporta el accidente y obtén el número de denuncia.</li>
                    <li><strong>Documentación:</strong> Recolecta nombres, teléfonos e información de seguros de todos los involucrados.</li>
                    <li><strong>Fotos:</strong> Documenta el estado de los vehículos y la escena del accidente.</li>
                    <li><strong>Testigos:</strong> Identifica y registra datos de personas que presenciaron el accidente.</li>
                </ul>
                
                <h3>Después del accidente:</h3>
                <ul>
                    <li>Notifica a tu aseguradora dentro de los plazos establecidos.</li>
                    <li>Solicita un informe médico si sufriste lesiones.</li>
                    <li>Conserva todos los documentos (recibos, facturas de reparaciones, etc.).</li>
                    <li>Consulta con un abogado para reclamar daños y perjuicios si corresponde.</li>
                </ul>
                
                <h3>Reclamaciones:</h3>
                <p>Tienes derecho a reclamar por:</p>
                <ul>
                    <li>Daños al vehículo</li>
                    <li>Lesiones personales</li>
                    <li>Pérdida de ingresos por incapacidad</li>
                    <li>Gastos médicos y de rehabilitación</li>
                </ul>
            `
        },
        'accidente-laboral': {
            title: 'Accidente Laboral',
            content: `
                <h3>¿Sufriste un accidente en el trabajo?</h3>
                <p>Los accidentes laborales están cubiertos por la legislación de riesgos del trabajo. Conoce tus derechos:</p>
                
                <h3>Debes hacer lo siguiente:</h3>
                <ul>
                    <li><strong>Informar inmediatamente:</strong> Comunica al empleador sobre el accidente.</li>
                    <li><strong>Registro:</strong> Solicita que se documenten los detalles del accidente.</li>
                    <li><strong>Atención médica:</strong> Acude a un médico y conserva los comprobantes.</li>
                    <li><strong>Documentación:</strong> Obtén una copia del acta del accidente.</li>
                    <li><strong>Testigos:</strong> Identifica compañeros que presenciaron el hecho.</li>
                </ul>
                
                <h3>Tus derechos:</h3>
                <ul>
                    <li>Cobertura médica completa</li>
                    <li>Rehabilitación y recuperación</li>
                    <li>Subsidio por incapacidad temporal</li>
                    <li>Indemnización si hay consecuencias permanentes</li>
                    <li>Protección contra despidos discriminatorios</li>
                </ul>
                
                <h3>Próximos pasos:</h3>
                <p>Contacta a nuestro estudio para tramitar tu reclamo ante la aseguradora y obtener la compensación que mereces.</p>
            `
        },
        'despido-laboral': {
            title: 'Despido Laboral',
            content: `
                <h3>¿Fuiste despedido?</h3>
                <p>Tienes derechos que protegen tu empleabilidad. Aquí te explicamos cómo proceder:</p>
                
                <h3>Primeros pasos:</h3>
                <ul>
                    <li><strong>Solicita por escrito:</strong> Pide al empleador que justifique el despido por escrito.</li>
                    <li><strong>Conserva documentos:</strong> Guarda todas las comunicaciones y comprobantes.</li>
                    <li><strong>Consulta inmediatamente:</strong> Contacta a un abogado laboralista para asesorarte.</li>
                </ul>
                
                <h3>Tipos de despido:</h3>
                <ul>
                    <li><strong>Justificado:</strong> Con causa demostrable (incumplimiento grave, conducta, etc.)</li>
                    <li><strong>Injustificado:</strong> Sin causa o sin cumplir procedimientos legales</li>
                    <li><strong>Nulidad:</strong> Por discriminación, represalias o causas vedadas</li>
                </ul>
                
                <h3>Compensaciones a las que tienes derecho:</h3>
                <ul>
                    <li>Preaviso (o pago del preaviso)</li>
                    <li>Indemnización por antigüedad</li>
                    <li>Indemnización por falta de justa causa</li>
                    <li>Recuperación del empleo (en casos de nulidad)</li>
                </ul>
            `
        },
        'cuota-alimentaria': {
            title: 'Cuota Alimentaria',
            content: `
                <h3>Consultas sobre Cuota Alimentaria</h3>
                <p>La cuota alimentaria garantiza el sustento de hijos menores de edad. Asesoría en todos los aspectos:</p>
                
                <h3>¿Quién tiene derecho?</h3>
                <ul>
                    <li>Hijos menores de edad</li>
                    <li>Hijos mayores de edad en ciertos casos (estudiantes, incapaces)</li>
                    <li>Cónyuge o ex cónyuge en situación de necesidad</li>
                </ul>
                
                <h3>¿Cómo se calcula?</h3>
                <ul>
                    <li>Porcentaje de los ingresos del obligado</li>
                    <li>Cantidad de hijos a cargo</li>
                    <li>Necesidades del hijo</li>
                    <li>Capacidad económica de ambos padres</li>
                </ul>
                
                <h3>Trámites:</h3>
                <ul>
                    <li><strong>Acuerdo voluntario:</strong> Ambos padres acuerdan la cuota</li>
                    <li><strong>Demanda judicial:</strong> Si no hay acuerdo, se inicia juicio</li>
                    <li><strong>Modificación:</strong> Cambios en la cuota por cambios económicos</li>
                    <li><strong>Cese o aumento:</strong> Según nuevas circunstancias</li>
                </ul>
                
                <h3>Obligaciones del deudor:</h3>
                <p>Pago puntual y completo de la cuota establecida. El incumplimiento puede resultar en sanciones legales.</p>
            `
        },
        'cumplimiento-contrato': {
            title: 'Cumplimiento de Contrato',
            content: `
                <h3>Incumplimiento de Contrato</h3>
                <p>¿Existe un incumplimiento contractual? Te asesoramos sobre tus opciones legales:</p>
                
                <h3>Antes de litigar:</h3>
                <ul>
                    <li>Verifica los términos exactos del contrato.</li>
                    <li>Documenta toda comunicación con la otra parte.</li>
                    <li>Notifica formalmente sobre el incumplimiento.</li>
                    <li>Intenta resolver mediante diálogo.</li>
                    <li>Considera mediación o arbitraje.</li>
                </ul>
                
                <h3>Opciones legales:</h3>
                <ul>
                    <li><strong>Cumplimiento forzado:</strong> Obligar el cumplimiento del contrato</li>
                    <li><strong>Resolución del contrato:</strong> Darlo por terminado</li>
                    <li><strong>Indemnización por daños:</strong> Reclamar compensación</li>
                    <li><strong>Cláusula penal:</strong> Si está estipulada en el contrato</li>
                </ul>
                
                <h3>Documentación necesaria:</h3>
                <ul>
                    <li>Copia del contrato firmado</li>
                    <li>Comunicaciones entre partes</li>
                    <li>Comprobantes de pago o cumplimiento</li>
                    <li>Evidencia del incumplimiento</li>
                </ul>
                
                <h3>Plazos de prescripción:</h3>
                <p>Consulta con nuestro equipo sobre los plazos aplicables a tu caso específico para evitar que prescriba tu derecho.</p>
            `
        },
        'sucesiones': {
            title: 'Sucesiones y Herencias',
            content: `
                <h3>Asesoría en Sucesiones</h3>
                <p>Gestión integral de procesos sucesorios y trámites de herencias:</p>
                
                <h3>¿Qué es una sucesión?</h3>
                <p>Es el proceso legal de distribución de los bienes de una persona fallecida entre sus herederos.</p>
                
                <h3>Tipos de sucesión:</h3>
                <ul>
                    <li><strong>Testamentaria:</strong> El fallecido dejó testamento</li>
                    <li><strong>Intestada:</strong> No hay testamento, sucede por ley</li>
                    <li><strong>Mixta:</strong> Combinación de ambas</li>
                </ul>
                
                <h3>Pasos en un proceso sucesorio:</h3>
                <ul>
                    <li>Presentación de la declaratoria de herederos (si corresponde)</li>
                    <li>Inventario y tasación de bienes</li>
                    <li>Pago de deudas y obligaciones</li>
                    <li>Distribución de la herencia</li>
                    <li>Transferencia de bienes inmuebles</li>
                </ul>
                
                <h3>Herederos con derecho:</h3>
                <ul>
                    <li>Cónyuge</li>
                    <li>Hijos (legítimos y adoptados)</li>
                    <li>Padres o ascendientes</li>
                    <li>Hermanos y colaterales (en ciertos órdenes)</li>
                </ul>
                
                <h3>Documentos necesarios:</h3>
                <ul>
                    <li>Certificado de defunción</li>
                    <li>Testamento (si existe)</li>
                    <li>Documentos de identificación de herederos</li>
                    <li>Documentos de los bienes (escrituras, certificados, etc.)</li>
                </ul>
            `
        }
    },

    init: function() {
        this.setupCategoryCards();
        this.setupModal();
        this.preventPinchZoom();
        this.optimizeForTouchDevices();
    },

    setupCategoryCards: function() {
        const cards = document.querySelectorAll('.category-card');
        cards.forEach(card => {
            card.addEventListener('click', (e) => this.handleCardClick(e));
            card.addEventListener('keypress', (e) => {
                if (e.key === 'Enter' || e.key === ' ') {
                    this.handleCardClick(e);
                }
            });
            card.setAttribute('tabindex', '0');
            card.setAttribute('role', 'button');
        });
    },

    handleCardClick: function(e) {
        const card = e.currentTarget;
        const category = card.getAttribute('data-category');
        this.openModal(category);
    },

    openModal: function(category) {
        const guide = this.guides[category];
        if (!guide) return;

        const modal = document.getElementById('modal');
        const modalOverlay = document.getElementById('modalOverlay');
        const modalTitle = document.getElementById('modalTitle');
        const modalContent = document.getElementById('modalContent');

        modalTitle.textContent = guide.title;
        modalContent.innerHTML = guide.content;

        modal.classList.add('active');
        modalOverlay.classList.add('active');

        // Prevenir scroll del body
        document.body.style.overflow = 'hidden';
    },

    closeModal: function() {
        const modal = document.getElementById('modal');
        const modalOverlay = document.getElementById('modalOverlay');

        modal.classList.remove('active');
        modalOverlay.classList.remove('active');

        // Restaurar scroll del body
        document.body.style.overflow = '';
    },

    setupModal: function() {
        const self = this;
        const modalClose = document.getElementById('modalClose');
        const modalOverlay = document.getElementById('modalOverlay');
        const contactBtn = document.querySelector('.btn-contact');
        const modal = document.getElementById('modal');

        // Click en el botón X
        if (modalClose) {
            modalClose.addEventListener('click', function(e) {
                e.preventDefault();
                e.stopPropagation();
                self.closeModal();
            });
        }

        // Click en el overlay (fondo oscuro)
        if (modalOverlay) {
            modalOverlay.addEventListener('click', function(e) {
                // Solo cerrar si clickeamos en el overlay mismo, no en el modal
                if (e.target === modalOverlay) {
                    self.closeModal();
                }
            });
        }

        // Click en el botón de contacto
        if (contactBtn) {
            contactBtn.addEventListener('click', function(e) {
                e.preventDefault();
                self.handleContact();
            });
        }

        // Prevenir que clicks en el modal lo cierren
        if (modal) {
            modal.addEventListener('click', function(e) {
                e.stopPropagation();
            });
        }

        // Tecla ESC para cerrar
        document.addEventListener('keydown', function(e) {
            if (e.key === 'Escape') {
                self.closeModal();
            }
        });
    },

    handleContact: function() {
        console.log('Contactar al estudio');
        // Aquí irá la funcionalidad de contacto
    },

    preventPinchZoom: function() {
        document.addEventListener('touchmove', function(e) {
            if (e.touches.length > 1) {
                e.preventDefault();
            }
        }, { passive: false });
    },

    optimizeForTouchDevices: function() {
        const isTouchDevice = () => {
            return (('ontouchstart' in window) ||
                    (navigator.maxTouchPoints > 0) ||
                    (navigator.msMaxTouchPoints > 0));
        };

        if (isTouchDevice()) {
            document.body.classList.add('touch-device');
        }
    }
};

// Inicializar cuando el DOM esté listo
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', () => LegalApp.init());
} else {
    LegalApp.init();
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
