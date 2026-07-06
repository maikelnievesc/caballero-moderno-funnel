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
                text: 'Publicar Video Largo en YT: "Temas de conversación ganadores" (5:00 PM)',
                script: `[GUION PARA GRABAR YOUTUBE (3.5 mins)]
Título SEO: 3 Temas de conversación para nunca aburrir a una mujer (Atraer sin esfuerzo)

(0:00 - 0:30) Hook: "El error más común que cometen el 99% de los hombres en una cita es quedarse en la 'zona segura'. Hablan del clima, del tráfico o de temas aburridísimos. Resultado: Ella no siente absolutamente nada y te manda directo a la friendzone. Hoy te daré 3 temas de conversación psicológicamente probados que activan sus emociones, la mantienen enganchada y generan tensión sexual real."

(0:30 - 1:30) Tema 1: Preguntas de Pasión: "En lugar de hablar de rutina, apela a su imaginación. Pregúntale: 'Si el dinero no importara en absoluto, ¿qué estarías haciendo con tu vida en este exacto momento?'. Esto la saca de su día a día y la obliga a conectarse con sus verdaderos sueños. Cuando una mujer asocia la emoción de sus pasiones con tu presencia, la atracción sube automáticamente."

(1:30 - 2:30) Tema 2: Las Suposiciones (Lectura en frío): "Nunca le preguntes de dónde es o qué hace. Dile: 'Tienes una vibra súper relajada, seguro creciste cerca de la playa o haces yoga'. Si te equivocas, no importa. La harás reír y ella misma te corregirá con entusiasmo. Al hacer suposiciones, estás demostrando que tienes capacidad de leer a las personas, lo cual comunica alto valor e inteligencia social."

(2:30 - 3:30) Tema 3: Tensiones de Futuro: "Esta es mi técnica favorita. En medio de la charla, mírala a los ojos y dile: 'Siento que eres el tipo de persona que en 5 años terminará viviendo en otro continente, adoptando tres perros y olvidándose de todo el mundo'. Estás pintando un panorama divertido, misterioso y un poco desafiante. Evita la lógica, apela a las emociones. Si dominas esto, nunca más serás solo su amigo. Suscríbete para más."`
            },
            { 
                id: 't-mon-2', 
                text: 'Publicar Reel: "Por qué te ve como amigo"',
                script: `[GUION PARA GRABAR - TIKTOK/IG/FB/YT SHORTS]
Título en pantalla: Evita los temas "seguros" 🚫

"¿Sabes por qué siempre terminas en la friendzone? Porque tus conversaciones son demasiado seguras. Hablas de las noticias, de la escuela o del trabajo. Temas 100% lógicos que no generan ni una gota de tensión. Para que ella sienta atracción, tienes que tomar riesgos conversacionales. Rompe la burbuja platónica. Bromea con ella, hazla calificar, desafíala ligeramente. Si la tratas con extremo cuidado y respeto aburrido, te verá como su mejor amigo, no como un amante. Sígueme para cambiar tu mentalidad."

[COPIAR Y PEGAR EN DESCRIPCIÓN]
La atracción no prospera en la zona de confort. ❌
Si quieres generar interés genuino, tienes que dejar de buscar su aprobación y empezar a divertirte desafiándola.
👉 Sígueme para aprender a dominar la tensión emocional en tus citas.
#CaballeroModerno #Friendzone #Seduccion #AtraerMujeres #Psicologia #DesarrolloPersonal`
            },
            {
                id: 't-mon-fb',
                text: 'Publicar Post en Facebook (Copiar y Pegar)',
                script: `La trampa mortal de las conversaciones "Seguras". ❌🤐

Muchos hombres se preguntan por qué una cita que parecía ir perfectamente bien termina con un "Me la pasé increíble, pero no sentí el 'clic'". La respuesta es dolorosamente simple: jugaste a la defensiva. 

Te quedaste en temas neutros. Hablaron sobre el menú, la ciudad, las series de moda o el clima. Fuiste un perfecto caballero, pero un caballero extremadamente predecible. La atracción biológica requiere fricción, misterio y riesgo emocional. 

Si no te atreves a romper la burbuja platónica, a hacer una broma retadora, a mantener el contacto visual un segundo de más o a cambiar el tema hacia algo personal y apasionante, te estás autoproclamando como el "buen amigo". Un hombre magnético lidera la conversación hacia aguas profundas.

👉 Síguenos en la página para aprender a dejar la zona de amigos de una vez por todas.

---\n🎨 PROMPT IMAGEN (Midjourney/DALL-E):\n"A highly cinematic, photorealistic image of a frustrated gentleman sitting across from a woman in a cafe, visually representing the invisible barrier of the friendzone. Moody lighting, depth of field, 8k --ar 4:5"`
            }
        ],
        2: [ // Martes
            { 
                id: 't-tue-1', 
                text: 'Publicar Reel: "Silencios incómodos"',
                script: `[GUION PARA GRABAR - TIKTOK/IG/FB/YT SHORTS]
Título en pantalla: Cómo usar el silencio a tu favor 🤫

"El mayor miedo de un hombre en una cita es el 'silencio incómodo'. Así que empiezas a hablar sin parar, soltando datos irrelevantes por puro nerviosismo. Detente. Un hombre seguro de sí mismo disfruta el silencio. Cuando la charla se detenga, simplemente mírala a los ojos, relaja tus hombros y sonríe ligeramente sin decir nada. Ese silencio proyecta confianza absoluta. Ella sentirá la tensión y empezará a hablar para llenarlo. Sígueme para dominar la presión."

[COPIAR Y PEGAR EN DESCRIPCIÓN]
El que menos necesita hablar, es el que más poder tiene. 🤫🔥
No trates de llenar cada segundo con ruido. La verdadera atracción se construye en los silencios.
👉 Sígueme para aprender lenguaje no verbal de alto valor.
#Silencio #CaballeroModerno #Seduccion #ContactoVisual #AltoValor`
            },
            {
                id: 't-tue-fb',
                text: 'Publicar Post en Facebook (Copiar y Pegar)',
                script: `El Silencio: La herramienta más intimidante y atractiva del hombre moderno. 🤫♟️

Cuando la conversación hace una pausa, el hombre inseguro entra en pánico. Su cerebro percibe la falta de ruido como un rechazo inminente, por lo que comienza a hablar compulsivamente, bajando su estatus y mostrándose ansioso.

El Caballero Moderno entiende que el silencio no es su enemigo, es su lienzo. Cuando hay una pausa, él simplemente se reclina, mantiene el contacto visual y sonríe de forma relajada. Este pequeño gesto subcomunica algo muy poderoso: "Estoy totalmente cómodo en mi propia piel y no necesito entretenerte desesperadamente". 

Paradójicamente, esa calma hace que ella sienta la necesidad de llenar el vacío, invirtiendo más energía en la interacción. Quien domina el silencio, domina la conversación.

👉 Síguenos para dejar atrás la ansiedad social y proyectar poder real.

---\n🎨 PROMPT IMAGEN (Midjourney/DALL-E):\n"A highly cinematic shot of a confident gentleman sitting in a moody jazz lounge, leaning back relaxed, making strong but calm eye contact across the table, warm lighting, photorealistic --ar 4:5"`
            }
        ],
        3: [ // Miércoles
            { 
                id: 't-wed-1', 
                text: 'Publicar Reel: "Respondiendo Shit Tests"',
                script: `[GUION PARA GRABAR - TIKTOK/IG/FB/YT SHORTS]
Título en pantalla: Cuando ella te pone a prueba 🚫

"Están platicando increíble y de repente ella te dice: 'Seguro tú le dices eso a todas'. Acabas de recibir un Shit Test. Si te justificas diciendo '¡No, te lo juro que no!', perdiste. Estás demostrando inseguridad. Un verdadero Caballero Moderno usa el humor exagerado. Respóndele: 'Sí, de hecho tengo un Excel en mi casa para no confundirme de nombres'. Al no tomarte en serio su prueba, demuestras que tu confianza es inquebrantable. Sígueme para dominar el juego."

[COPIAR Y PEGAR EN DESCRIPCIÓN]
Nunca te justifiques ante una prueba. ❌🤐
Los "shit tests" son el mecanismo biológico de la mujer para comprobar si tu seguridad es real o fingida. 
👉 Sígueme y aprende a usar el humor como escudo.
#ShitTests #CaballeroModerno #Seduccion #AtraerMujeres #Psicologia`
            },
            {
                id: 't-wed-fb',
                text: 'Publicar Post en Facebook (Copiar y Pegar)',
                script: `Por qué ella busca contradicciones en lo que dices (y cómo responder). ❌🤐

Imagina que todo va perfecto y de repente ella suelta un comentario ligeramente sarcástico o retador sobre tu estilo, tu trabajo o tus intenciones. Muchos hombres se ofenden o, peor aún, intentan convencerla lógicamente de que están equivocadas. 

Es un error novato. Lo que estás experimentando es un test de aptitud biológico. Ella no busca una respuesta lógica; busca una reacción emocional. Quiere ver si su opinión tiene el poder de desestabilizarte. 

La única manera de pasar la prueba es mediante el "Amuse and Ignore" (Divertir e Ignorar). Acuerda con ella de forma absurdamente exagerada. Demuéstrale que su desafío te parece divertido, no amenazante. Un hombre que no se altera ante el juicio ajeno es biológicamente irresistible.

👉 Síguenos para aprender a mantener tu centro emocional bajo cualquier circunstancia.

---\n🎨 PROMPT IMAGEN (Midjourney/DALL-E):\n"A confident man smiling calmly and unbothered while a stylish woman playfully challenges him in an elegant urban setting, photorealistic, cinematic lighting --ar 4:5"`
            }
        ],
        4: [ // Jueves
            { 
                id: 't-thu-1', 
                text: 'Publicar Reel: "Tensión de futuro"',
                script: `[GUION PARA GRABAR - TIKTOK/IG/FB/YT SHORTS]
Título en pantalla: Hackea su imaginación (La técnica secreta) ♟️

"Si quieres que ella piense en ti todo el día, usa la 'Tensión de Futuro'. En medio de la cita dile: 'Eres un peligro. Siento que si nos vamos de viaje juntos terminaríamos robando un banco en Las Vegas y cambiando nuestras identidades'. Estás creando una película mental donde ustedes dos son los protagonistas en una situación divertida. El cerebro femenino ama las narrativas. Ponla en una y no podrá sacarte de su cabeza. Sígueme para más."

[COPIAR Y PEGAR EN DESCRIPCIÓN]
No seas un libro de historia, sé una novela de aventuras. 🤫🔥
Deja de hablar del pasado y empieza a construir narrativas divertidas en tiempo real.
👉 Sígueme para aprender a crear conexión instantánea.
#Conversacion #CaballeroModerno #Masculinidad #Seduccion #Psicologia`
            },
            {
                id: 't-thu-fb',
                text: 'Publicar Post en Facebook (Copiar y Pegar)',
                script: `El secreto para ocupar su mente: La Tensión de Futuro. 📱🎣

La mayoría de los hombres centran sus conversaciones en el intercambio aburrido de datos pasados ("¿Dónde estudiaste?", "¿Dónde trabajaste?"). Si bien la información es útil, no genera ni una gota de dopamina.

El cerebro humano está cableado para reaccionar a las historias y al futuro. La técnica de la 'Tensión de Futuro' consiste en inventar un escenario hipotético, ridículo o aventurero que los involucre a los dos. Decir cosas como "Claramente tú y yo no podemos ir nunca al supermercado juntos porque terminaríamos haciendo carreras con los carritos" crea una complicidad instantánea.

Te convierte en un co-creador de experiencias en lugar de un interrogador. La próxima vez, deja el pasado atrás y empieza a pintar escenarios.

👉 Síguenos para descubrir más sobre psicología aplicada a la atracción.

---\n🎨 PROMPT IMAGEN (Midjourney/DALL-E):\n"A vibrant, cinematic image of a modern couple laughing together in a neon-lit city street at night, looking like they share a secret. High quality, photorealistic --ar 4:5"`
            }
        ],
        5: [ // Viernes
            { 
                id: 't-fri-1', 
                text: 'Publicar Reel: "La regla del 80/20"',
                script: `[GUION PARA GRABAR - TIKTOK/IG/FB/YT SHORTS]
Título en pantalla: Hablar mucho te hace menos atractivo 🚫

"Tenemos dos oídos y una boca por una razón. En una cita, aplica la regla del 80/20. Deja que ella hable el 80% del tiempo y tú el 20%. Los hombres inseguros hablan sin parar de sus logros, sus autos y su dinero intentando impresionar. Un hombre de alto valor hace preguntas emocionales interesantes y simplemente escucha. Al final, ella dirá: 'Tuvimos la mejor charla del mundo', ¡incluso si apenas hablaste! Sígueme para dominar la persuasión."

[COPIAR Y PEGAR EN DESCRIPCIÓN]
El misterio es tu mayor aliado. 🛋️❌
Si le cuentas toda tu vida en la primera hora, ya no hay nada que descubrir. 
👉 Sígueme y aprende a retener información estratégicamente.
#CaballeroModerno #Misterio #ConsejosParaHombres #Regla8020 #AtraerMujeres`
            },
            {
                id: 't-fri-fb',
                text: 'Publicar Post en Facebook (Copiar y Pegar)',
                script: `La Regla de Oro del Misterio: Deja de tratar de impresionar. ♟️👑

Hay un fenómeno psicológico curioso en las citas modernas: el hombre siente la necesidad imperativa de leer su currículum. Habla de su auto, su salario, y sus logros, asumiendo que el valor lógico se traduce en deseo emocional. 

Falso. Cuando vomitas toda tu información en los primeros 45 minutos, aniquilas el misterio. Ya no eres un rompecabezas que ella quiera resolver, eres un libro abierto y leído. 

Implementa la regla del 80/20. Haz que ella hable el 80% del tiempo haciendo preguntas abiertas que apunten a sus pasiones, y tú habla solo el 20%. Escucha con atención real. No desveles todas tus cartas de inmediato. Un hombre que escucha activamente pero revela poco de sí mismo, proyecta un estatus masivo.

👉 Síguenos para aprender a construir el verdadero misterio masculino.

---\n🎨 PROMPT IMAGEN (Midjourney/DALL-E):\n"A sophisticated man listening intently with a slight, confident smile, holding a glass of whiskey, aesthetic dark background, conveying mystery and depth, photorealistic --ar 4:5"`
            }
        ],
        6: [ // Sábado
            { 
                id: 't-sat-1', 
                text: 'Publicar Reel: "No busques puntos en común"',
                script: `[GUION PARA GRABAR - TIKTOK/IG/FB/YT SHORTS]
Título en pantalla: Estar de acuerdo en todo es aburrido 👀

"Deja de buscar coincidir en todo con ella. '¡A mí también me gusta el sushi!', '¡Yo también amo esa película!'. Ser un clon de ella para agradarle te convierte en el amigo complaciente. Atrévete a discrepar. Si ella dice que odia el café, dile con una sonrisa: 'Acabas de romper mi corazón, creo que esto no va a funcionar'. El desacuerdo juguetón genera muchísima más tensión sexual que estar de acuerdo en todo. Sígueme para ser un reto."

[COPIAR Y PEGAR EN DESCRIPCIÓN]
El conflicto juguetón genera chispa. 👀🔥
Si siempre le dices que sí a todo, te conviertes en un fan, no en un amante. 
👉 Sígueme para dejar de ser el "chico bueno complaciente".
#CaballeroModerno #Flirteo #DesarrolloPersonal #Confianza`
            },
            {
                id: 't-sat-fb',
                text: 'Publicar Post en Facebook (Copiar y Pegar)',
                script: `Por qué ser el "Chico que está de acuerdo en todo" destruye tus posibilidades. 💎

Desde pequeños nos enseñaron que para caerle bien a alguien debíamos buscar cosas en común. En las ventas y en la amistad básica funciona. En la atracción, es un somnífero. 

Si te pasas la cita entera asintiendo con la cabeza y fingiendo que te gustan las mismas bandas que a ella solo para agradar, estás proyectando desesperación. La seducción prospera en la polaridad. 

Tener la confianza de decirle, con una sonrisa relajada: "Tus gustos musicales son horribles, pero te lo perdono", crea una fricción divertida. El desacuerdo sin agresividad demuestra que tienes identidad propia y que no vas a moldear tu personalidad para conseguir su aprobación. Sé un reto. 

👉 Únete a la comunidad y aprende a mantener tus propios estándares.

---\n🎨 PROMPT IMAGEN (Midjourney/DALL-E):\n"A charismatic man playfully disagreeing with a woman, both are laughing genuinely in a stylish outdoor cafe setting, natural light, highly photorealistic --ar 4:5"`
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
