document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('optinForm');
    const submitBtn = form.querySelector('.cta-button');

    form.addEventListener('submit', (e) => {
        e.preventDefault(); // Previene que la página se recargue realmente
        
        const name = document.getElementById('name').value;
        const email = document.getElementById('email').value;

        if (name && email) {
            // Efecto visual de carga
            const originalText = submitBtn.innerHTML;
            submitBtn.innerHTML = 'Procesando...';
            submitBtn.style.opacity = '0.8';
            submitBtn.style.cursor = 'wait';

            // Aquí iría la integración real con Mailchimp / ActiveCampaign
            // Simulamos un delay de 1.5s
            setTimeout(() => {
                alert(`¡Éxito! En producción, el correo de ${name} (${email}) se guardaría en tu base de datos y la página redirigiría automáticamente a tu VSL / Página de Ventas.`);
                
                // Restaurar el botón
                submitBtn.innerHTML = originalText;
                submitBtn.style.opacity = '1';
                submitBtn.style.cursor = 'pointer';
                form.reset();
                
                // Redirección simulada a la página 2 (que crearemos luego):
                // window.location.href = 'pagina_ventas.html';
            }, 1500);
        }
    });

    // Micro-interacciones: Hacer que el borde del input brille en azul si tiene texto
    const inputs = form.querySelectorAll('input');
    inputs.forEach(input => {
        input.addEventListener('input', function() {
            if (this.value.length > 0) {
                this.style.borderColor = 'rgba(0, 229, 255, 0.5)';
            } else {
                this.style.borderColor = ''; 
            }
        });
    });
});
