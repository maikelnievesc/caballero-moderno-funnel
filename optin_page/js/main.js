document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('optinForm');
    const submitBtn = form.querySelector('.cta-button');

    form.addEventListener('submit', (e) => {
        e.preventDefault(); // Previene que la página se recargue realmente
        
        const name = document.getElementById('name').value;
        const email = document.getElementById('email').value;
        const honeypot = document.getElementById('b_b5b89e257bb34a02d3fc67226_f12a3ab60e').value;

        if (name && email) {
            // Efecto visual de carga
            submitBtn.innerHTML = 'Procesando...';
            submitBtn.style.opacity = '0.8';
            submitBtn.style.cursor = 'wait';

            // Integración con Mailchimp vía JSONP
            const url = 'https://gmail.us8.list-manage.com/subscribe/post-json?u=b5b89e257bb34a02d3fc67226&id=f12a3ab60e&f_id=00fbd1e1f0&c=jsonpCallback';
            const params = `&EMAIL=${encodeURIComponent(email)}&FNAME=${encodeURIComponent(name)}&b_b5b89e257bb34a02d3fc67226_f12a3ab60e=${encodeURIComponent(honeypot)}`;

            // Crear script de JSONP
            const script = document.createElement('script');
            script.src = url + params;
            document.body.appendChild(script);

            // Callback para cuando Mailchimp responda
            window.jsonpCallback = function(data) {
                // Redirigir a la Carta de Ventas sin importar la respuesta de Mailchimp (éxito o ya suscrito)
                window.location.href = '../sales_page/index.html';
            };

            // Fallback: Si Mailchimp falla o se tarda más de 3 segundos, redirigir igual
            setTimeout(() => {
                window.location.href = '../sales_page/index.html';
            }, 3000);
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
