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
    
    // --- Agenda de la Semana 16 (Inteligencia Social de Alto Riesgo: FBI/CIA) ---
    const weeklyAgenda = {
        0: [ // Domingo
            { id: 't-sun-1', text: 'Descanso y planificación' }
        ],
        1: [ // Lunes (Cambio de frecuencia: Lunes de actualización)
            { id: 't-mon-1', text: 'Actualización y preparación de la semana' }
        ],
        2: [ // Martes
            { 
                id: 't-tue-1', 
                text: 'Publicar Video Largo en YT: "Secretos del FBI para leer su mente" (5:00 PM)',
                script: `[GUION PARA VIDEO FACELESS - YT (3.5 mins)]
Título SEO: Cómo leer a las mujeres usando tácticas del FBI (Inteligencia Social)

[Visual sugerido: B-roll cinemático. Cuartos de interrogatorio oscuros con humo, agentes en traje negro caminando en cámara lenta, monitores de cámaras de seguridad, estética de espionaje y operaciones tácticas.]

(0:00 - 0:30) Hook: "¿Qué pasaría si pudieras leer la mente de una mujer en los primeros 30 segundos de una cita usando las mismas tácticas que usan los negociadores de rehenes del FBI? La mayoría de los hombres son ciegos a las señales sociales. Hoy vamos a dejar los consejos románticos y vamos a entrar en el oscuro mundo de la Inteligencia Social y el Espionaje. Te voy a enseñar a leer microexpresiones y a extraer información sin que ella se dé cuenta."

(0:30 - 1:30) La Calibración y Microexpresiones: "En el FBI se le llama 'Calibración'. Cuando le haces un cumplido a una mujer, no escuches lo que te dice, observa su lenguaje corporal en el primer segundo. ¿Sus pupilas se dilatan? ¿Su sonrisa es simétrica e involucra los ojos (sonrisa de Duchenne), o es una sonrisa tensa solo con los labios? Si sus pies apuntan hacia la puerta, su cerebro primitivo quiere escapar. El hombre de alto estatus no asume, él calibra."

(1:30 - 2:30) El Silencio Táctico: "Durante un interrogatorio, el silencio es el arma más pesada. A los humanos les aterra el vacío conversacional. En una cita, el hombre promedio llena los silencios hablando sin parar y justificándose. El hombre superior lanza una pregunta calibrada y luego se calla, manteniendo contacto visual relajado. Esa presión psicológica hace que ella invierta más palabras, revele sus secretos y te perciba como una autoridad magnética."

(2:30 - 3:30) Conclusión: "La seducción no es un juego de palabras bonitas, es ingeniería social. El que recolecta más información, tiene el control del marco. Deja de intentar impresionar y empieza a observar. Suscríbete si estás listo para dominar la psicología del comportamiento humano y jugar con ventaja."`
            },
            { 
                id: 't-tue-2', 
                text: 'Publicar Reel: "Calibración (Lectura Fría)"',
                script: `[GUION PARA REEL FACELESS - TIKTOK/IG/FB]
Título en pantalla: Cómo leer su mente en 3 segundos 🕵️‍♂️

[Visual sugerido: B-roll de un ojo en macro enfocándose, o un hombre de traje negro revisando un expediente en las sombras.]

Voz en off: "Estás en una cita y crees que le gustas porque te sonríe y es amable. Error. Los agentes del FBI saben que las palabras pueden mentir, pero el cuerpo no. Fíjate en esto: Cuando ella se ríe de tu chiste, ¿sus pies apuntan hacia ti o hacia la puerta de salida? Si apuntan a la salida, su subconsciente quiere huir. Cuando le hablas, ¿parpadea rápido o mantiene un contacto visual relajado? El parpadeo rápido indica estrés táctico. El hombre promedio vive ciego, asumiendo cosas. El hombre superior 'calibra' la realidad. Observa las microexpresiones antes de actuar. La seducción es 90% lectura fría y 10% palabras. Aprende a observar. Sígueme."

[COPIAR Y PEGAR EN DESCRIPCIÓN]
El cuerpo nunca miente. Aprende a leer el subtexto. 🕵️‍♂️👁️
La seducción es inteligencia social pura.
👉 Sígueme para dominar la lectura fría y el lenguaje corporal.
#FBI #LenguajeCorporal #Psicologia #CaballeroModerno #Seduccion`
            },
            {
                id: 't-tue-fb',
                text: 'Publicar Post en Facebook (Copiar y Pegar)',
                script: `Lectura Fría: Cómo leer a una mujer usando tácticas del FBI. 🕵️‍♂️👁️

La mayoría de los hombres fracasan en el romance porque sufren de "ceguera situacional". Escuchan las palabras "la estoy pasando muy bien", y asumen que es verdad, ignorando que el lenguaje corporal de ella grita incomodidad.

Los analistas de comportamiento del FBI enseñan algo llamado "Calibración". Es el arte de observar la línea base de una persona y detectar anomalías.

En tu próxima interacción, olvida lo que ella está diciendo y observa:
1. Dirección de los pies: Si apuntan hacia ti, hay interés. Si apuntan a la puerta, quiere irse.
2. Tensión en el cuello: Si se toca el cuello constantemente, está buscando consuelo subconsciente ante el estrés.
3. Sonrisa de Duchenne: Una sonrisa real arruga los costados de los ojos. Si solo mueve los labios, es cortesía fingida.

El Caballero Moderno no se deja engañar por palabras bonitas. Él lee la matriz. Él calibra el nivel de atracción real antes de invertir su tiempo y su capital.

👉 Deja de adivinar. Empieza a observar el subtexto.

---\n🎨 PROMPT IMAGEN (Midjourney/DALL-E):\n"A cinematic, highly detailed close up of a modern gentleman's piercing eye in the shadows, reflecting a glowing security monitor or matrix data. Symbolizing cold reading and observation, spy aesthetic, 8k --ar 4:5"`
            }
        ],
        3: [ // Miércoles
            { 
                id: 't-wed-1', 
                text: 'Publicar Reel: "Espejeo (Empatía Táctica)"',
                script: `[GUION PARA REEL FACELESS - TIKTOK/IG/FB]
Título en pantalla: El truco del FBI para agradarle a todos 🤝

[Visual sugerido: Dos sombras sincronizando sus movimientos, o un espejo elegante reflejando a un hombre de traje.]

Voz en off: "Chris Voss, el mejor negociador de rehenes del FBI, descubrió un truco psicológico brutal llamado 'Espejeo'. Y funciona igual de bien en las citas. A los humanos les aterra lo diferente y confían ciegamente en lo que se parece a ellos. Si ella usa un tono de voz bajo y pausado, baja tu tono de voz. Si ella se inclina hacia adelante, tú te inclinas levemente unos segundos después. A nivel subconsciente, su cerebro primitivo dirá: 'Él es como yo. Es seguro'. Has hackeado su sistema de confianza en menos de 5 minutos sin tener que presumir tu dinero ni tu coche. Usa la empatía táctica y dominarás cualquier cuarto en el que entres. Sígueme."

[COPIAR Y PEGAR EN DESCRIPCIÓN]
El Espejeo es un arma psicológica de conexión instantánea. 🤝🎙️
A las personas les encanta la gente que se parece a ellas.
👉 Sígueme para aprender más ingeniería social táctica.
#ChrisVoss #InteligenciaSocial #CaballeroModerno #Persuasion #FBI`
            },
            {
                id: 't-wed-fb',
                text: 'Publicar Post en Facebook (Copiar y Pegar)',
                script: `Empatía Táctica: El hack de los negociadores de rehenes para enamorar. 🤝🎙️

En el mundo del espionaje y la negociación de alto riesgo, convencer a un criminal de que confíe en ti en 5 minutos es cuestión de vida o muerte. Usan una técnica infalible: El Espejeo (Mirroring).

Biológicamente, tememos a lo desconocido y confiamos en lo que es familiar. 

Si estás en una cita y ella es muy energética, habla rápido y mueve mucho las manos, pero tú le respondes de forma súper lenta y robótica, la conexión se rompe. Su cerebro dice "somos incompatibles".

El Espejeo consiste en imitar sutilmente (sin parecer un mimo psicópata):
- Su volumen de voz.
- Su velocidad al hablar.
- Sus micro-posturas (si se recarga en la mesa, tú lo haces después).
- Repetir las últimas 3 palabras que dijo en forma de pregunta.

En menos de 10 minutos, su sistema nervioso central baja las defensas. Siente que "te conoce de toda la vida". El Caballero Moderno es un camaleón social que sabe adaptar su frecuencia para hackear la confianza.

👉 No presumas. Empatiza de forma táctica.

---\n🎨 PROMPT IMAGEN (Midjourney/DALL-E):\n"A highly aesthetic, cinematic image of two people sitting across a dimly lit luxury table, their body language perfectly matching like a reflection in a mirror. Moody spy thriller lighting, photorealistic, 8k --ar 4:5"`
            }
        ],
        4: [ // Jueves
            { 
                id: 't-thu-1', 
                text: 'Publicar Reel: "Extracción de Información"',
                script: `[GUION PARA REEL FACELESS - TIKTOK/IG/FB]
Título en pantalla: Haz que ella te cuente todos sus secretos 🕵️‍♂️

[Visual sugerido: Un archivo confidencial top-secret abriéndose, o una grabadora antigua de cinta girando en la oscuridad.]

Voz en off: "El error número uno que cometen los hombres en una cita es convertirla en una entrevista de trabajo aburrida, o peor, hablar de sí mismos sin parar para impresionar. La CIA tiene un protocolo de 'Extracción de Información'. El agente nunca habla más del 20% del tiempo. El objetivo es lanzar una 'Pregunta Calibrada' que obligue a la otra persona a abrirse. En lugar de preguntar '¿Qué estudias?', pregunta 'Pareces alguien que siempre está analizando a los demás, ¿a qué te dedicas?'. Esa falsa suposición hará que ella quiera corregirte o darte la razón, invirtiendo muchísima energía emocional. Haz que ella hable el 80% del tiempo y creerá que eres el hombre más fascinante del mundo. Sígueme."

[COPIAR Y PEGAR EN DESCRIPCIÓN]
El que más habla, más control pierde. 🤐🕵️‍♂️
Haz preguntas calibradas y deja que ella invierta su energía en ti.
👉 Sígueme para dominar el control del marco conversacional.
#IngenieriaSocial #Psicologia #CIA #CaballeroModerno #Comunicacion`
            },
            {
                id: 't-thu-fb',
                text: 'Publicar Post en Facebook (Copiar y Pegar)',
                script: `Extracción de Información: El poder del 80/20 en una conversación. 🤐🕵️‍♂️

Hay una regla no escrita en los interrogatorios de inteligencia: El que hace las preguntas tiene el poder, pero el que más habla, es el que está subordinado.

Cuando un hombre intenta impresionar a una mujer, empieza a hablar como loco. Le cuenta sobre su coche, su dinero, sus amigos... todo para buscar su aprobación. Se está subcomunicando como una persona de bajo valor.

Los maestros de la ingeniería social hacen exactamente lo contrario. Usan preguntas calibradas para hacer que la otra persona hable el 80% del tiempo. 
Y no preguntas aburridas ("¿Cuántos hermanos tienes?"), sino Asunciones Frías:
"Tienes una vibra muy analítica, apuesto a que eres la amiga que da los consejos fríos en tu grupo, ¿verdad?".

Ella sentirá la necesidad urgente de explicarse, corregirte o darte la razón con una historia larguísima. Mientras ella invierte energía emocional, tú solo escuchas con una sonrisa de Mona Lisa. Al final de la noche, ella sentirá una química brutal contigo, simplemente porque la hiciste sentir interesante.

👉 Sé el director de la entrevista, no el entrevistado.

---\n🎨 PROMPT IMAGEN (Midjourney/DALL-E):\n"A cinematic, moody image of a modern gentleman sitting back in a leather armchair in the shadows, listening calmly, while an old-school vintage wiretap tape recorder slowly spins on the table. Symbolizing intelligence gathering, 8k --ar 4:5"`
            }
        ],
        5: [ // Viernes
            { 
                id: 't-fri-1', 
                text: 'Publicar Reel: "El Silencio Táctico"',
                script: `[GUION PARA REEL FACELESS - TIKTOK/IG/FB]
Título en pantalla: Tu arma más letal es callarte la boca 🤫

[Visual sugerido: Un reloj de arena cayendo en cámara lenta, o un hombre llevándose el dedo a los labios (Shhh) en la oscuridad.]

Voz en off: "A los seres humanos les aterra el silencio. Nos hace sentir incómodos y vulnerables. En los interrogatorios de alto riesgo, los investigadores usan el 'Silencio Táctico'. Le hacen una pregunta al sospechoso, y cuando este responde algo corto, el investigador no dice nada. Solo lo mira a los ojos, en silencio, durante 5 o 10 segundos. La presión psicológica es tan fuerte que la persona empieza a hablar más, revelando secretos solo para llenar ese vacío. En tus relaciones, si ella te dice una excusa o un comentario pasivo-agresivo, no te justifiques ni te enojes. Mírala a los ojos con una pequeña sonrisa y quédate callado. Ella solita se tropezará intentando explicarse. El silencio es poder. Sígueme."

[COPIAR Y PEGAR EN DESCRIPCIÓN]
Quien no soporta el silencio, termina revelando todas sus cartas. 🤫⏳
Usa el vacío conversacional a tu favor.
👉 Sígueme para construir una presencia inquebrantable.
#SilencioTactico #Poder #CaballeroModerno #LenguajeCorporal #Mentalidad`
            },
            {
                id: 't-fri-fb',
                text: 'Publicar Post en Facebook (Copiar y Pegar)',
                script: `El Silencio Táctico: Por qué callarte te da el control absoluto. 🤫⏳

Hay una diferencia brutal entre un silencio incómodo y un silencio de poder.

El hombre promedio odia el silencio. Si está con una mujer atractiva y la conversación se pausa, entra en pánico. Empieza a balbucear o hacer preguntas estúpidas para llenar el vacío, subcomunicando ansiedad y bajo estatus.

En el mundo de la investigación, el "Silencio Táctico" es un arma pesada. Haces una pregunta, te responden, y tú no dices absolutamente nada. Solo mantienes un contacto visual relajado y asientes lentamente.

La tensión social que se genera es inmensa. La naturaleza humana odia los vacíos de información, así que la otra persona sentirá la necesidad compulsiva de seguir hablando, revelando sus inseguridades o justificándose para aliviar esa tensión. 

El Caballero Moderno es el maestro de la pausa. Entiende que un silencio de 4 segundos después de que ella hace un comentario (como un Shit Test), desarma por completo su ataque sin mover un solo músculo. 

👉 Tu silencio pesa más que tus gritos. Aprende a sostenerlo.

---\n🎨 PROMPT IMAGEN (Midjourney/DALL-E):\n"A highly aesthetic, cinematic dark image of an hourglass standing on a mahogany desk. The sand falls slowly. In the blurred background, a man in a sharp suit sits silently, exuding immense power and calm. 8k --ar 4:5"`
            }
        ],
        6: [ // Sábado
            { 
                id: 't-sat-1', 
                text: 'Publicar Reel: "Ingeniería Social (Pretexto)"',
                script: `[GUION PARA REEL FACELESS - TIKTOK/IG/FB]
Título en pantalla: Cómo hackear la confianza de cualquier grupo 🎭

[Visual sugerido: Un hombre cruzando un detector de metales VIP, o alguien abriendo una cerradura de caja fuerte de manera experta.]

Voz en off: "Los espías no entran a un edificio rompiendo ventanas, entran por la puerta principal usando algo llamado 'Pretexto'. Es el arte de crear un escenario falso para integrarte a un entorno. Si ves a una mujer hermosa con sus amigas, el error es acercarte como un depredador desesperado enfocado solo en ella. Eso enciende sus alarmas de seguridad. El hombre de alto valor usa ingeniería social. Se acerca al grupo completo con un pretexto divertido: 'Necesito una opinión rápida para desempatar una apuesta, ¿quién de ustedes es la más mentirosa?'. En 10 segundos todo el grupo se está riendo, pasaste por debajo de su radar de defensas y lograste familiaridad instantánea. Eres un hacker social. Sígueme."

[COPIAR Y PEGAR EN DESCRIPCIÓN]
Nunca ataques el castillo de frente. Usa el Pretexto para abrir las puertas. 🎭🔓
La ingeniería social destruye cualquier barrera defensiva.
👉 Sígueme para dominar la dinámica de grupos.
#IngenieriaSocial #Espionaje #CaballeroModerno #Atraccion #Carisma`
            },
            {
                id: 't-sat-fb',
                text: 'Publicar Post en Facebook (Copiar y Pegar)',
                script: `El Pretexto: Hackeando el radar defensivo con Ingeniería Social. 🎭🔓

Las mujeres hermosas tienen un "Radar Anti-Perdedores" (Bitch Shield) activado las 24 horas del día. Si te acercas caminando directo hacia ella de forma lineal, sudando y viéndole el escote, su alarma se dispara y te destruye en 2 segundos.

Los profesionales de la Inteligencia Social nunca atacan la fortaleza de frente. Usan una técnica de infiltración llamada "El Pretexto".

El pretexto es una excusa válida, socialmente calibrada, que desactiva las defensas iniciales. No llegas buscando un número de teléfono, llegas buscando una opinión externa para un debate divertido. 

Llegas de lado, con lenguaje corporal que indica que te vas a ir rápido, y te diriges a todo su grupo de amigos, no solo a ella. 
"Oigan, rápida opinión: estoy debatiendo con un amigo... si tu novia se va a Las Vegas y no te avisa, ¿es infidelidad técnica o solo mala educación?".

Acabas de infiltrarte en el grupo sin disparar las alarmas de presión sexual. Generaste familiaridad. Ellas te validaron. 

El Caballero Moderno es un artista de la logística social. Entra al sistema y luego toma el control.

👉 Sé el Hacker, no el Invasor.

---\n🎨 PROMPT IMAGEN (Midjourney/DALL-E):\n"A cinematic shot of an elegant vault door or a VIP velvet rope being opened smoothly by a modern gentleman without any effort. Symbolizing social engineering and smooth infiltration, dark luxury aesthetic, 8k --ar 4:5"`
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
