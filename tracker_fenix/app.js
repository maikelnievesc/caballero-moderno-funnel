document.addEventListener('DOMContentLoaded', () => {

    // --- 0. Login Logic ---
    const loginOverlay = document.getElementById('login-overlay');
    if (localStorage.getItem('fenix-auth') === 'true') {
        loginOverlay.classList.add('hidden');
    }

    document.getElementById('login-btn').addEventListener('click', () => {
        const user = document.getElementById('login-user').value;
        const pass = document.getElementById('login-pass').value;
        
        if (user === 'admin' && pass === 'Maikelylazaro') {
            localStorage.setItem('fenix-auth', 'true');
            loginOverlay.classList.add('hidden');
        } else {
            document.getElementById('login-error').style.display = 'block';
        }
    });

    // --- 1. Daily Checklist Data (Agenda Dinámica) ---
    let offsetDays = 0;
    const today = new Date();
    
    const linkVentas = "https://maikelnievesc.github.io/caballero-moderno-funnel/ebook/";
    const weeklyAgenda = {
        0: [ // Domingo - Empty since cycle is Monday to Saturday
            { id: 't-sun-1', text: 'Descanso y planificación' }
        ],
        1: [ // Lunes
            { 
                id: 't-mon-1', 
                text: 'Publicar Video Largo en YT: "Dominio de la Inteligencia Social" (5:00 PM)',
                script: `[GUION PARA GRABAR YOUTUBE (3.5 mins)]
Título SEO: 3 Trucos psicológicos para que te respeten al instante (Lenguaje Corporal)

(0:00 - 0:30) Hook: "Si sientes que la gente no te toma en serio cuando hablas o que eres invisible en grupos sociales, este video es para ti. Hoy te voy a revelar 3 hacks de inteligencia social comprobados por la psicología. No tienes que fingir ser alguien más ni hablar más fuerte. Todo está en la sutileza. El 99% de los hombres ignora esto y por eso son ignorados. Aplica el número 2 hoy mismo y verás cómo cambia la forma en que te miran."

(0:30 - 1:30) Truco 1 - El Triángulo Visual: "Cuando hables con una mujer que te atrae, no mires fijamente a sus ojos como un psicópata. Usa el triángulo: ojo izquierdo, ojo derecho, y luego baja la mirada a sus labios por un segundo antes de volver a sus ojos. Esto subcomunica tensión sexual a su subconsciente. Si estás en una reunión de negocios, el triángulo cambia: ojo izquierdo, ojo derecho y su frente. Eso proyecta intimidación y autoridad."

(1:30 - 2:30) Truco 2 - La pausa del poder: "Los hombres inseguros odian el silencio, así que hablan rapidísimo. El truco es este: cuando alguien te haga una pregunta importante, no respondas de inmediato. Haz una pausa de 2 a 3 segundos, respira, sostén el contacto visual y luego habla más lento de lo normal. Al hacer esto, tu cerebro proyecta que tu tiempo y tus palabras son valiosas y que no tienes prisa por complacer a nadie."

(2:30 - 3:30) Truco 3 - El Espejo Retrasado: "La técnica del 'Mirroring' es vieja, pero la mayoría la hace mal. Si ella cruza los brazos y tú los cruzas inmediatamente, pareces un mimo. El truco es el espejo retrasado. Espera 10 segundos y luego adopta una postura similar a la de ella. Esto genera empatía y confort a nivel subconsciente sin que ella se dé cuenta. Suscríbete para dominar la psicología del alto estatus."`
            },
            { 
                id: 't-mon-2', 
                text: 'Publicar Reel: "El Triángulo Visual"',
                script: `[GUION PARA GRABAR - TIKTOK/IG/FB/YT SHORTS]
Título en pantalla: El truco para generar tensión con la mirada 👁️

"Guarda este video porque este es el truco psicológico más poderoso para generar tensión. Cuando estés hablando con ella, no la mires fijamente sin pestañear, eso asusta. Aplica el 'Triángulo Visual'. Mira su ojo izquierdo, luego su ojo derecho, y luego baja la mirada a sus labios durante un segundo antes de volver a sus ojos. Su cerebro subconsciente leerá esa mirada hacia los labios como deseo puro. Pruébalo hoy y mira cómo su lenguaje corporal cambia al instante. Sígueme para más hacks de alto valor."

[COPIAR Y PEGAR EN DESCRIPCIÓN]
El lenguaje no verbal dice lo que las palabras no se atreven. 🤫🔥
Usa este truco con responsabilidad. La tensión que genera es instantánea.
👉 Sígueme para aprender psicología social aplicada.
#PsicologiaOscura #LenguajeCorporal #Seduccion #CaballeroModerno #InteligenciaSocial`
            },
            {
                id: 't-mon-fb',
                text: 'Publicar Post en Facebook (Copiar y Pegar)',
                script: `El secreto de la tensión silenciosa: El Triángulo Visual. 👁️♟️

Muchos hombres creen que para mostrar confianza deben mantener un contacto visual inquebrantable y casi agresivo. Eso no es seducción, es intimidación, y apaga por completo el confort de la mujer.

La verdadera seducción es sutil. La próxima vez que estés en una conversación uno a uno, utiliza la técnica del Triángulo. Traza visualmente un triángulo entre sus ojos y su boca (ojo izquierdo, ojo derecho, labios). Cuando tu mirada se posa brevemente en sus labios, le envías un mensaje subconsciente a su cerebro primitivo que grita: "Atracción".

Esta es la diferencia entre hablar como su amigo y conversar como un hombre magnético. No necesitas decir frases de películas; tu mirada hace el trabajo pesado. 

👉 Síguenos y comparte este post si estás listo para dominar tu lenguaje corporal.

---\n🎨 PROMPT IMAGEN (Midjourney/DALL-E):\n"A cinematic, ultra-realistic close up of an elegant gentleman making intense but warm eye contact in a dimly lit, aesthetic environment, showcasing subtle confidence and magnetism, 8k --ar 4:5"`
            }
        ],
        2: [ // Martes
            { 
                id: 't-tue-1', 
                text: 'Publicar Reel: "El arte de moverse lento"',
                script: `[GUION PARA GRABAR - TIKTOK/IG/FB/YT SHORTS]
Título en pantalla: Cómo ganar respeto sin hablar 🛑

"¿Quieres saber si un hombre es inseguro con solo verlo? Mira la velocidad de sus movimientos. Los hombres nerviosos hacen movimientos rápidos y erráticos: revisan su teléfono compulsivamente, asienten rápido con la cabeza, hablan a mil por hora. El secreto del estatus es la lentitud. Imagina a un león en la selva, nunca tiene prisa. Camina un 20% más lento. Gira tu cabeza lentamente cuando te llamen. Haz pausas antes de hablar. La lentitud subcomunica que eres dueño de tu tiempo y de tu entorno. Sígueme y haz la prueba hoy."

[COPIAR Y PEGAR EN DESCRIPCIÓN]
La prisa es la firma de la inseguridad. ⏳❌
Quien domina su propio ritmo, domina la sala. 
👉 Sígueme para hackear tu lenguaje corporal y proyectar alto estatus.
#LenguajeCorporal #AltoValor #Confianza #CaballeroModerno #Psicologia`
            },
            {
                id: 't-tue-fb',
                text: 'Publicar Post en Facebook (Copiar y Pegar)',
                script: `La física del Alto Estatus: Por qué los reyes no corren. 👑🚶‍♂️

Observa a las personas con verdadero poder en cualquier habitación. Tienen algo en común: nunca parecen estar apurados. 

La biología humana asocia el movimiento rápido y errático con el miedo y la respuesta de huida. Si en una cita asientes rápido con la cabeza todo el tiempo, mueves las manos frenéticamente o hablas sin pausas, estás gritando: "Por favor, acéptame, estoy nervioso". 

Un Caballero Moderno ralentiza sus movimientos. Bebe su trago con calma, sostiene la mirada antes de responder y no se sobresalta fácilmente. Al moverte un 20% más lento de lo que tu cerebro ansioso te pide, no solo luces más confiado ante los demás, sino que engañas a tu propio sistema nervioso para que se relaje. 

👉 ¿Sueles moverte rápido cuando te pones nervioso? Síguenos para aprender a calibrar tu presencia.

---\n🎨 PROMPT IMAGEN (Midjourney/DALL-E):\n"A highly cinematic shot of a well-dressed modern man walking slowly and confidently through a blurred, fast-moving crowd in a busy city, illustrating the concept of inner calmness amidst chaos, photorealistic --ar 4:5"`
            }
        ],
        3: [ // Miércoles
            { 
                id: 't-wed-1', 
                text: 'Publicar Reel: "La Micro-Retirada"',
                script: `[GUION PARA GRABAR - TIKTOK/IG/FB/YT SHORTS]
Título en pantalla: El truco para que ella invierta más ♟️

"Si sientes que tú eres el único que pone esfuerzo en la conversación, usa la 'Micro-retirada'. En el punto más alto y divertido de la plática, echa tu cuerpo físicamente hacia atrás, recárgate en la silla y rompe el contacto visual un segundo. Este sutil cambio físico genera un vacío. Su cerebro detectará que te estás alejando y, por instinto, ella intentará llenar ese vacío inclinándose hacia adelante o haciendo una pregunta para recuperar tu atención. Deja de perseguir. Haz que ella invierta. Sígueme si quieres dominar la psicología de atracción."

[COPIAR Y PEGAR EN DESCRIPCIÓN]
La atracción es un baile de empujar y jalar. 💃🕺
Si siempre estás inclinado hacia ella como un perrito emocionado, eliminas el misterio.
👉 Sígueme para equilibrar la balanza de la inversión.
#PsicologiaSocial #Seduccion #CaballeroModerno #Atraccion #LenguajeCorporal`
            },
            {
                id: 't-wed-fb',
                text: 'Publicar Post en Facebook (Copiar y Pegar)',
                script: `El poder de la "Micro-Retirada": Cómo hacer que ella persiga. 🎣♟️

Uno de los errores más letales en las citas es la "sobre-inversión física". Esto sucede cuando el hombre se inclina sobre la mesa durante toda la cena, invadiendo el espacio de ella y mostrándose 100% disponible. 

Si siempre estás hacia adelante, no le dejas espacio a ella para acercarse.

Aplica la Micro-Retirada: Cuando la interacción llegue a un pico de emoción o risa, recuéstate suavemente en el respaldo de tu silla, toma una actitud más relajada y baja la intensidad. Ese pequeño "vacío" que creas obligará a su subconsciente a inclinarse hacia adelante para mantener la conexión. El que menos espacio persigue, más poder proyecta.

👉 Guarda este post y practica sentarte hacia atrás en tu próxima interacción.

---\n🎨 PROMPT IMAGEN (Midjourney/DALL-E):\n"A cinematic, aesthetic shot of a couple at a dinner table. The modern gentleman is leaning back comfortably and confidently, while the woman is leaning forward with extreme interest, capturing the push-pull dynamic, photorealistic --ar 4:5"`
            }
        ],
        4: [ // Jueves
            { 
                id: 't-thu-1', 
                text: 'Publicar Reel: "Cómo salir de una charla aburrida"',
                script: `[GUION PARA GRABAR - TIKTOK/IG/FB/YT SHORTS]
Título en pantalla: Cómo escapar de alguien sin ofender 🚪

"¿Te ha atrapado alguien que no para de hablar y no sabes cómo irte sin ser grosero? No digas 'Me tengo que ir'. Usa el truco de la validación más cierre. Cuando tome aire, interrúmpelo positivamente: 'Juan, me encanta lo apasionado que eres con este tema, de verdad es genial hablar contigo... por cierto, no te quito más tiempo, voy por una bebida'. Validas su ego primero y usas el 'no te quito más tiempo' haciéndole creer que le haces un favor. Te irás como un caballero y él se quedará feliz. Guárdalo, lo vas a necesitar."

[COPIAR Y PEGAR EN DESCRIPCIÓN]
Inteligencia social es saber salir de situaciones incómodas dejando a todos con una sonrisa. 🧠🔥
👉 Sígueme para más trucos de comunicación de alto nivel.
#HabilidadesSociales #Comunicacion #CaballeroModerno #Psicologia #Networking`
            },
            {
                id: 't-thu-fb',
                text: 'Publicar Post en Facebook (Copiar y Pegar)',
                script: `La salida elegante: Cómo escapar de conversaciones atrapantes. 🚪🍷

Ser un Caballero Moderno no significa tener que soportar 45 minutos de un monólogo aburrido en un evento social. Tu tiempo es valioso, pero tu reputación también lo es. 

La manera novata de irse es decir "Bueno, me voy" y dejar un silencio incómodo. La manera avanzada es la 'Validación + Cierre'. 

La próxima vez que estés atrapado, aprovecha la mínima pausa y di: "Carlos, me parece fascinante tu perspectiva sobre esto, me ha encantado escucharte... No quiero retenerte más tiempo de tu grupo, voy a saludar a unas personas." 

Al validar su ego primero ("me parece fascinante") y enmarcar tu salida como un favor hacia él ("no quiero retenerte"), sales de la trampa viéndote como un absoluto profesional de la inteligencia social.

👉 Comparte esto con ese amigo que siempre se queda atrapado en las fiestas.

---\n🎨 PROMPT IMAGEN (Midjourney/DALL-E):\n"A cinematic shot of a sharply dressed modern man smoothly walking away from a crowded networking event with a polite smile, holding a glass, representing social grace and tact, high end photography, 8k --ar 4:5"`
            }
        ],
        5: [ // Viernes
            { 
                id: 't-fri-1', 
                text: 'Publicar Reel: "El efecto Benjamin Franklin"',
                script: `[GUION PARA GRABAR - TIKTOK/IG/FB/YT SHORTS]
Título en pantalla: Haz que le gustes con este truco psicológico 🧠

"Si quieres agradarle a alguien de inmediato, no le hagas un favor. Haz que ellos te hagan un favor a ti. Se llama el Efecto Benjamin Franklin. Nuestro cerebro odia la disonancia cognitiva. Si ella te presta un bolígrafo, te sostiene el vaso un segundo o te da una pequeña recomendación, su subconsciente dirá: 'Si le estoy haciendo un favor, debe ser porque me cae bien'. Pídele un favor ridículamente pequeño en los primeros 10 minutos de conocerla y observa cómo su actitud se vuelve súper cálida. Sígueme para más hacks mentales."

[COPIAR Y PEGAR EN DESCRIPCIÓN]
Deja de ser el "chico de los favores" intentando comprar aprobación. ❌
Deja que las personas inviertan en ti. Mientras más invierten, más te valoran.
👉 Sígueme para dominar el juego social.
#EfectoFranklin #Psicologia #Seduccion #CaballeroModerno #InteligenciaSocial`
            },
            {
                id: 't-fri-fb',
                text: 'Publicar Post en Facebook (Copiar y Pegar)',
                script: `El Efecto Benjamin Franklin: Haz que inviertan en ti. 🧠♟️

Desde pequeños nos condicionaron a creer que para agradarle a una mujer (o a un jefe, o a un amigo) debíamos colmarlos de favores. ¿El problema? Eso comunica bajo estatus y te convierte en un sirviente, no en un reto. 

La psicología humana es fascinante. El Efecto Benjamin Franklin demuestra que es más probable que le agrades a alguien si ESE ALGUIEN te hace un favor a ti.

Cuando le pides a la chica que acabas de conocer que te cuide la chaqueta un segundo, o que te alcance una servilleta, su cerebro justifica esa acción diciendo: "Si le estoy haciendo este pequeño favor, es porque es alguien valioso que me agrada". La clave está en pedir micro-favores que requieran cero esfuerzo, pero que obliguen a la otra persona a invertir en la interacción.

👉 ¿Conocías este truco de persuasión? Únete a nosotros para más.

---\n🎨 PROMPT IMAGEN (Midjourney/DALL-E):\n"A confident modern gentleman in a cafe subtly gesturing to a beautiful woman sitting next to him to pass him a napkin, both are smiling warmly, illustrating a micro-favor, cinematic, photorealistic --ar 4:5"`
            }
        ],
        6: [ // Sábado
            { 
                id: 't-sat-1', 
                text: 'Publicar Reel: "Elogios de alto nivel"',
                script: `[GUION PARA GRABAR - TIKTOK/IG/FB/YT SHORTS]
Título en pantalla: Deja de decirle que es bonita 🚫

"Si quieres destacar instantáneamente del 99% de los hombres, elimina la frase 'Qué guapa eres' de tu vocabulario. Las mujeres atractivas escuchan eso 20 veces al día, ya no tiene ningún efecto. Si quieres hackear su atención, elogia sus elecciones, no su genética. Dile: 'Tienes un gusto increíble para combinar colores' o 'Esa forma en la que te ríes es súper contagiosa, tienes una energía brutal'. Estás elogiando su carácter y su esfuerzo, no la lotería genética. Te prometo que nunca lo olvidará. Sígueme y mejora tus interacciones hoy."

[COPIAR Y PEGAR EN DESCRIPCIÓN]
Un elogio común te convierte en uno más de sus fans. ❌
Un elogio de alto valor te convierte en alguien cuyo criterio ella respeta.
👉 Sígueme para aprender a comunicarte como un 1%.
#Elogios #Comunicacion #CaballeroModerno #Seduccion #AltoValor`
            },
            {
                id: 't-sat-fb',
                text: 'Publicar Post en Facebook (Copiar y Pegar)',
                script: `Cómo diferenciarte del 99% de los hombres con un solo elogio. 💎🗣️

Abre la bandeja de mensajes de cualquier mujer atractiva y verás lo mismo repetido mil veces: "Qué hermosa", "Qué bellos ojos", "Eres preciosa". 

Cuando elogias algo que ella no eligió (su genética), caes en el saco de los admiradores sin rostro. Además, al hacerlo, pones su belleza física en un pedestal, disminuyendo tu propio estatus. 

El Caballero Moderno elogia la "Inversión y el Carácter". En lugar de alabar sus ojos, elogia su energía: "Me encanta la vibra que transmites, es raro encontrar a alguien tan genuino hoy en día". En lugar de alabar su cuerpo, elogia su estilo: "Tienes un gusto impecable, esos anillos te quedan brutales". 

Alabando sus elecciones demuestras que tienes estándares y que te fijas en cosas mucho más profundas que lo evidente. 

👉 Síguenos si quieres aprender el arte de la comunicación magnética.

---\n🎨 PROMPT IMAGEN (Midjourney/DALL-E):\n"A high-quality, cinematic portrait of a charismatic modern man offering a genuine, deeply engaging compliment to a beautiful woman, focusing on eye contact and connection rather than physical admiration, photorealistic, 8k --ar 4:5"`
            }
        ]
    };

    const tasksContainer = document.getElementById('daily-tasks');

    // Calculate Week Range dynamically
    function getWeekRange(d) {
        const date = new Date(d);
        const day = date.getDay();
        const diff = date.getDate() - day + (day === 0 ? -6 : 1); // adjust when day is sunday
        const monday = new Date(date.setDate(diff));
        const sunday = new Date(monday.getTime());
        sunday.setDate(monday.getDate() + 6);
        
        const opts = { month: 'short', day: 'numeric' };
        return `${monday.toLocaleDateString('es-ES', opts)} - ${sunday.toLocaleDateString('es-ES', opts)}`;
    }
    const currentWeekRange = getWeekRange(today);
    document.getElementById('week-dates-label').textContent = `Semana: ${currentWeekRange}`;

    // Modal Elements
    const modal = document.getElementById('script-modal');
    const modalTitle = document.getElementById('modal-title');
    const modalBody = document.getElementById('modal-body');
    const closeModalBtn = document.getElementById('close-modal-btn');
    const copyScriptBtn = document.getElementById('copy-script-btn');

    // Function to get the tasks for the currently displayed day
    function getCurrentTasks() {
        const displayDate = new Date();
        displayDate.setDate(displayDate.getDate() + offsetDays);
        return weeklyAgenda[displayDate.getDay()];
    }

    // Function to render the top view (title and checklist)
    function updateDayView() {
        const displayDate = new Date();
        displayDate.setDate(displayDate.getDate() + offsetDays);
        
        // Update title date
        const optionsDate = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
        let formattedDate = displayDate.toLocaleDateString('es-ES', optionsDate);
        formattedDate = formattedDate.charAt(0).toUpperCase() + formattedDate.slice(1);
        
        const prefix = offsetDays === 0 ? "Tareas de Hoy" : (offsetDays === 1 ? "Tareas de Mañana" : `Tareas del día (+${offsetDays})`);
        document.getElementById('day-title').innerHTML = `✅ ${prefix} (<span id="current-day-label">${formattedDate}</span>)`;

        // Render checklist
        const tasks = getCurrentTasks();
        tasksContainer.innerHTML = '';
        
        tasks.forEach(task => {
            const taskKey = `${currentWeekRange}_${task.id}`;
            const isChecked = localStorage.getItem(taskKey) === 'true';
            
            const div = document.createElement('div');
            div.className = 'task-item';
            
            const input = document.createElement('input');
            input.type = 'checkbox';
            input.id = task.id;
            input.checked = isChecked;
            
            input.addEventListener('change', (e) => {
                localStorage.setItem(taskKey, e.target.checked);
            });

            const label = document.createElement('label');
            label.htmlFor = task.id;
            label.textContent = task.text;

            div.appendChild(input);
            div.appendChild(label);

            // Add "Ver Guion" button if task has a script
            if (task.script) {
                const viewBtn = document.createElement('button');
                viewBtn.className = 'btn-view';
                viewBtn.textContent = 'Ver Guion 👀';
                viewBtn.onclick = () => openModal(task.text, task.script);
                div.appendChild(viewBtn);
            }

            tasksContainer.appendChild(div);
        });
    }

    // Initial render
    updateDayView();

    // Next Day Button
    const closeDayBtn = document.getElementById('close-day-btn');
    closeDayBtn.addEventListener('click', () => {
        if (offsetDays < 1) {
            offsetDays += 1;
            updateDayView();
            closeDayBtn.textContent = 'Viendo Tareas de Mañana';
            closeDayBtn.disabled = true;
            closeDayBtn.style.opacity = '0.5';
            closeDayBtn.style.cursor = 'not-allowed';
            showToast('Mostrando las tareas del siguiente día.');
        }
    });

    // Modal Logic
    function openModal(title, content) {
        let cleanTitle = title.replace(/Publicar Reel: /g, '').replace(/Publicar Video Largo en YT: /g, '').replace(/Publicar Post en Facebook \(Copiar y Pegar\)/g, 'Post para Facebook');
        modalTitle.textContent = cleanTitle;
        modalBody.textContent = content;
        modal.classList.remove('hidden');
    }

    closeModalBtn.addEventListener('click', () => {
        modal.classList.add('hidden');
    });

    window.addEventListener('click', (e) => {
        if (e.target === modal) {
            modal.classList.add('hidden');
        }
    });

    copyScriptBtn.addEventListener('click', () => {
        navigator.clipboard.writeText(modalBody.textContent).then(() => {
            copyScriptBtn.textContent = '¡Copiado!';
            setTimeout(() => { copyScriptBtn.textContent = 'Copiar Guion'; }, 2000);
        });
    });

    // Reset daily tasks for the displayed day
    document.getElementById('reset-daily-btn').addEventListener('click', () => {
        const tasks = getCurrentTasks();
        tasks.forEach(task => {
            const taskKey = `${currentWeekRange}_${task.id}`;
            localStorage.setItem(taskKey, 'false');
        });
        updateDayView();
        showToast('Tareas del día reiniciadas.');
    });

    // --- 2. Weekly Metrics Data ---
    const metricsIds = ['tk-start', 'tk-end', 'ig-start', 'ig-end', 'sales-ebook', 'sales-course'];
    
    // Load saved metrics
    metricsIds.forEach(id => {
        const val = localStorage.getItem(id);
        if (val) {
            document.getElementById(id).value = val;
        }
    });

    // Save current metrics button
    document.getElementById('save-metrics-btn').addEventListener('click', () => {
        metricsIds.forEach(id => {
            const val = document.getElementById(id).value;
            localStorage.setItem(id, val);
        });
        showToast('Métricas guardadas localmente.');
    });

    // --- 3. History Table Logic ---
    const historyTableBody = document.getElementById('metrics-table-body');
    
    // One-time reset for Week 3
    if (!localStorage.getItem('fenix-w3-reset')) {
        localStorage.removeItem('fenix-history');
        metricsIds.forEach(id => localStorage.removeItem(id));
        localStorage.setItem('fenix-w3-reset', 'true');
    }

    let metricsHistory = JSON.parse(localStorage.getItem('fenix-history')) || [];

    function renderHistoryTable() {
        historyTableBody.innerHTML = '';
        if (metricsHistory.length === 0) {
            historyTableBody.innerHTML = '<tr><td colspan="4" style="text-align: center;">Aún no hay semanas archivadas.</td></tr>';
            return;
        }
        metricsHistory.forEach(record => {
            const tr = document.createElement('tr');
            tr.innerHTML = `
                <td>${record.week}</td>
                <td>TK: +${record.tkGrowth} | IG: +${record.igGrowth}</td>
                <td>Ebk: ${record.sEbook} | Cur: ${record.sCourse}</td>
            `;
            historyTableBody.appendChild(tr);
        });
    }

    renderHistoryTable();

    // Archive Week button
    document.getElementById('archive-week-btn').addEventListener('click', () => {
        if (!confirm('¿Estás seguro de que deseas cerrar esta semana y archivar los datos en la tabla? Los campos se limpiarán para la siguiente semana.')) return;

        const tkStart = parseInt(document.getElementById('tk-start').value || 0);
        const tkEnd = parseInt(document.getElementById('tk-end').value || 0);
        const tkGrowth = tkEnd - tkStart;

        const igStart = parseInt(document.getElementById('ig-start').value || 0);
        const igEnd = parseInt(document.getElementById('ig-end').value || 0);
        const igGrowth = igEnd - igStart;

        const sEbook = parseInt(document.getElementById('sales-ebook').value || 0);
        const sCourse = parseInt(document.getElementById('sales-course').value || 0);

        const record = {
            week: currentWeekRange,
            tkGrowth,
            igGrowth,
            sEbook,
            sCourse
        };

        metricsHistory.push(record);
        localStorage.setItem('fenix-history', JSON.stringify(metricsHistory));
        
        renderHistoryTable();
        
        // Clear inputs for next week
        metricsIds.forEach(id => {
            document.getElementById(id).value = '';
            localStorage.setItem(id, '');
        });
        
        showToast('Semana archivada exitosamente.');
    });

    // --- 4. Notes ---
    const notesArea = document.getElementById('notes-area');
    notesArea.value = localStorage.getItem('fenix-notes') || '';

    document.getElementById('save-notes-btn').addEventListener('click', () => {
        localStorage.setItem('fenix-notes', notesArea.value);
        showToast('Notas guardadas.');
    });

    // --- 5. Export to AI (Sync) ---
    document.getElementById('export-btn').addEventListener('click', () => {
        
        // Contamos basándonos en el día de "Hoy" real
        let completed = 0;
        const todaysTasks = weeklyAgenda[new Date().getDay()];
        todaysTasks.forEach(t => {
            const taskKey = `${currentWeekRange}_${t.id}`;
            if(localStorage.getItem(taskKey) === 'true') completed++;
        });

        // Formatear fecha para el reporte
        const optsDate = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
        let fDate = new Date().toLocaleDateString('es-ES', optsDate);
        fDate = fDate.charAt(0).toUpperCase() + fDate.slice(1);

        const tkStart = document.getElementById('tk-start').value || 0;
        const tkEnd = document.getElementById('tk-end').value || 0;
        const tkGrowth = tkEnd - tkStart;

        const igStart = document.getElementById('ig-start').value || 0;
        const igEnd = document.getElementById('ig-end').value || 0;
        const igGrowth = igEnd - igStart;

        const sEbook = document.getElementById('sales-ebook').value || 0;
        const sCourse = document.getElementById('sales-course').value || 0;
        
        const notes = localStorage.getItem('fenix-notes') || 'Ninguna';
        
        let currentExp = JSON.parse(localStorage.getItem('fenix-expenses-current')) || [];
        let expTotal = currentExp.reduce((acc, curr) => acc + curr.amount, 0);

        const exportText = `--- REPORTE DE FÉNIX COMMAND CENTER ---
✅ Tareas Diarias Completadas (${fDate}): ${completed}/${todaysTasks.length}

📊 Métricas Actuales (Semana ${currentWeekRange}):
- Crecimiento TikTok: +${tkGrowth} (De ${tkStart} a ${tkEnd})
- Crecimiento Instagram: +${igGrowth} (De ${igStart} a ${igEnd})
- Ventas Tripwire (Ebook): ${sEbook}
- Ventas Core (Curso): ${sCourse}

💸 Gastos del Mes Corriente (Hasta ahora): $${expTotal.toFixed(2)}

📝 Notas/Ideas:
${notes}
---------------------------------------`;

        navigator.clipboard.writeText(exportText).then(() => {
            showToast('¡Datos copiados! Pégalos en el chat con Antigravity.');
        }).catch(err => {
            console.error('Error copying text: ', err);
            alert('Error al copiar. Tu navegador podría no soportar el portapapeles. Aquí tienes el texto:\n\n' + exportText);
        });
    });

    // --- Helper: Toast ---
    function showToast(msg) {
        const toast = document.getElementById('toast');
        toast.textContent = msg;
        toast.classList.remove('hidden');
        setTimeout(() => {
            toast.classList.add('hidden');
        }, 3000);
    }

    // --- 7. Gastos Operativos ---
    const expDateInput = document.getElementById('exp-date');
    if (expDateInput) expDateInput.valueAsDate = new Date(); // Default today

    let currentExpenses = JSON.parse(localStorage.getItem('fenix-expenses-current')) || [];
    let historyExpenses = JSON.parse(localStorage.getItem('fenix-expenses-history')) || [];

    const currentExpensesBody = document.getElementById('current-expenses-body');
    const historicExpensesBody = document.getElementById('historic-expenses-body');
    const expCurrentTotal = document.getElementById('exp-current-total');
    const expHistoricTotal = document.getElementById('exp-historic-total');

    function renderExpenses() {
        if (!currentExpensesBody) return;
        currentExpensesBody.innerHTML = '';
        let currentTotal = 0;

        currentExpenses.forEach((exp, index) => {
            currentTotal += exp.amount;
            const tr = document.createElement('tr');
            tr.innerHTML = `
                <td>${exp.date}</td>
                <td>${exp.category}</td>
                <td>${exp.concept}</td>
                <td>$${exp.amount.toFixed(2)}</td>
                <td><button class="btn" style="background:transparent; color:#ef4444; border:1px solid #ef4444; padding:2px 8px; font-size:0.8rem; cursor:pointer;" onclick="deleteExpense(${index})">X</button></td>
            `;
            currentExpensesBody.appendChild(tr);
        });

        expCurrentTotal.textContent = `$${currentTotal.toFixed(2)}`;

        historicExpensesBody.innerHTML = '';
        let historicTotal = currentTotal;

        historyExpenses.forEach(record => {
            historicTotal += record.total;
            const tr = document.createElement('tr');
            tr.innerHTML = `
                <td>${record.monthYear}</td>
                <td>$${record.total.toFixed(2)}</td>
            `;
            historicExpensesBody.appendChild(tr);
        });

        expHistoricTotal.textContent = `$${historicTotal.toFixed(2)}`;
    }

    window.deleteExpense = function(index) {
        if(confirm('¿Seguro que deseas borrar este gasto?')) {
            currentExpenses.splice(index, 1);
            localStorage.setItem('fenix-expenses-current', JSON.stringify(currentExpenses));
            renderExpenses();
        }
    };

    const addExpenseBtn = document.getElementById('add-expense-btn');
    if(addExpenseBtn) {
        addExpenseBtn.addEventListener('click', () => {
            const date = document.getElementById('exp-date').value;
            const category = document.getElementById('exp-category').value;
            const concept = document.getElementById('exp-concept').value;
            const amountStr = document.getElementById('exp-amount').value;
            const amount = parseFloat(amountStr);

            if (!date || !concept || isNaN(amount)) {
                alert('Por favor completa todos los campos (Fecha, Concepto, Monto numérico).');
                return;
            }

            currentExpenses.push({ date, category, concept, amount });
            localStorage.setItem('fenix-expenses-current', JSON.stringify(currentExpenses));
            
            document.getElementById('exp-concept').value = '';
            document.getElementById('exp-amount').value = '';
            
            renderExpenses();
            showToast('Gasto añadido correctamente.');
        });
    }

    const closeMonthBtn = document.getElementById('close-month-btn');
    if(closeMonthBtn) {
        closeMonthBtn.addEventListener('click', () => {
            if (currentExpenses.length === 0) {
                alert('No hay gastos en el mes corriente para archivar.');
                return;
            }
            const monthName = prompt('Introduce el nombre del mes que estás cerrando (Ej: Junio 2026):', '');
            if(!monthName) return;

            if (!confirm(`¿Estás seguro de cerrar ${monthName}? Los datos pasarán al historial.`)) return;

            const total = currentExpenses.reduce((acc, exp) => acc + exp.amount, 0);
            
            historyExpenses.push({
                monthYear: monthName,
                total: total
            });

            localStorage.setItem('fenix-expenses-history', JSON.stringify(historyExpenses));
            
            currentExpenses = [];
            localStorage.setItem('fenix-expenses-current', JSON.stringify(currentExpenses));
            
            renderExpenses();
            showToast(`Mes de ${monthName} cerrado y archivado.`);
        });
    }

    const exportCsvBtn = document.getElementById('export-csv-btn');
    if(exportCsvBtn) {
        exportCsvBtn.addEventListener('click', () => {
            let csvContent = "data:text/csv;charset=utf-8,";
            csvContent += "Tipo,Fecha/Mes,Categoria,Concepto,Monto\n";
            
            historyExpenses.forEach(record => {
                csvContent += `Historico,${record.monthYear},-,-,$${record.total.toFixed(2)}\n`;
            });
            
            currentExpenses.forEach(exp => {
                csvContent += `Corriente,${exp.date},${exp.category},${exp.concept},$${exp.amount.toFixed(2)}\n`;
            });

            const encodedUri = encodeURI(csvContent);
            const link = document.createElement("a");
            link.setAttribute("href", encodedUri);
            link.setAttribute("download", "fenix_gastos_operativos.csv");
            document.body.appendChild(link);
            link.click();
            document.body.removeChild(link);
        });
    }

    renderExpenses();

    // --- 6. Hard Reset ---
    const hardResetBtn = document.getElementById('hard-reset-btn');
    if(hardResetBtn) {
        hardResetBtn.addEventListener('click', () => {
            if (confirm('⚠️ ATENCIÓN: Esto borrará TODO el historial, las métricas y las tareas marcadas. La plataforma quedará como nueva. ¿Estás absolutamente seguro de querer resetear todo?')) {
                localStorage.clear();
                location.reload();
            }
        });
    }

});
