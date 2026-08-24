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
    
    // --- Agenda de la Semana 11 (Magnetismo Primitivo y Arquetipos) ---
    const weeklyAgenda = {
        0: [ // Domingo - Empty
            { id: 't-sun-1', text: 'Descanso y planificación' }
        ],
        1: [ // Lunes
            { 
                id: 't-mon-1', 
                text: 'Publicar Video Largo en YT: "El Arquetipo del Rey" (5:00 PM)',
                script: `[GUION PARA VIDEO FACELESS - YT (3.5 mins)]
Título SEO: Por qué nadie te respeta: El Arquetipo del Rey

[Visual sugerido: B-roll cinemático. Un león descansando pero alerta. Un rey en un tablero de ajedrez. Un hombre de negocios entrando a una sala, todos voltean a verlo. Estética oscura, dorada y majestuosa.]

(0:00 - 0:30) Hook: "¿Te has dado cuenta de que hay hombres que no necesitan gritar para que los escuchen? Entran a una habitación y el ambiente cambia. Las mujeres los miran, los hombres se apartan. No es suerte, no es dinero, es psicología evolutiva. Están proyectando lo que Carl Jung llamó: El Arquetipo del Rey. Y hoy te voy a enseñar cómo hackear tu lenguaje corporal para despertar esa energía."

(0:30 - 1:30) El error del bufón: "El 90% de los hombres actúan como el 'Bufón'. Se ríen de más, intentan complacer a todos, se mueven rápido, y piden disculpas por existir. El Bufón busca validación. El Rey no busca validación de nadie, porque él es quien la otorga. La regla número uno del Rey es la lentitud deliberada. Muévete un 20% más lento de lo que tu ansiedad te pide. Gira la cabeza lentamente, camina sin prisa."

(1:30 - 2:30) Ocupar el espacio: "El Rey no se hace pequeño. Cuando te sientes, relaja los hombros, ocupa tu espacio. No cruces los brazos protegiendo tus órganos vitales como una presa. El Rey es el dueño del territorio, por lo que su lenguaje corporal es abierto y relajado. Cuando hablas desde la relajación absoluta en situaciones de alta presión, subcomunicas que eres intocable."

(2:30 - 3:30) Conclusión: "Deja de intentar impresionar a la corte. Deja de sobre-explicarte. Un Rey da directrices claras, escucha con atención, y no se altera por el caos a su alrededor. Cultiva tu presencia física y el respeto te seguirá automáticamente. Suscríbete si estás listo para dejar de ser el bufón."`
            },
            { 
                id: 't-mon-2', 
                text: 'Publicar Reel: "Muévete más lento"',
                script: `[GUION PARA REEL FACELESS - TIKTOK/IG/FB]
Título en pantalla: El truco psicológico del 20% 👑

[Visual sugerido: Un hombre acomodándose los gemelos de la camisa en cámara extremadamente lenta. O un león caminando lentamente por la sabana.]

Voz en off: "Hay un truco psicológico brutal para triplicar tu carisma instantáneamente. Muévete y habla un 20% más lento. Los hombres nerviosos, inseguros o que sienten que su tiempo no vale nada, se mueven rápido, asienten con la cabeza frenéticamente y hablan a mil por hora para que no los interrumpan. Eso huele a presa. El depredador, el hombre de alto estatus, se mueve con calma, porque sabe que el mundo lo va a esperar. Baja la velocidad de tus manos, haz pausas de dos segundos antes de responder, y mira lo que sucede con el nivel de respeto que recibes. Sígueme para dominar la psicología del estatus."

[COPIAR Y PEGAR EN DESCRIPCIÓN]
La prisa es el lenguaje corporal de los subordinados. ⏳♚
Los reyes no corren.
👉 Sígueme para reclamar tu poder personal.
#Arquetipos #LenguajeCorporal #CaballeroModerno #Psicologia #Estatus`
            },
            {
                id: 't-mon-fb',
                text: 'Publicar Post en Facebook (Copiar y Pegar)',
                script: `El Arquetipo del Rey: Por qué la prisa destruye tu estatus. ♚♟️

En el mundo animal, los movimientos rápidos y erráticos pertenecen a las presas. Los depredadores de la cima de la cadena alimenticia se mueven despacio, conservando su energía, porque no tienen a nadie de quién huir.

En las dinámicas sociales humanas, pasa exactamente lo mismo.

Observa al CEO de una empresa o al hombre más magnético del lugar. No habla rápido, no asiente con la cabeza mil veces cuando le hablan, y definitivamente no se apresura a responder. Domina el "Arquetipo del Rey": lentitud deliberada y relajación bajo presión.

Si quieres que te respeten más hoy mismo: 
1. Haz una pausa de 2 segundos antes de responder cualquier pregunta.
2. Camina un 20% más despacio.
3. No te encojas al sentarte; reclama tu espacio.

👉 ¿Estás proyectando energía de rey o de bufón? Analízate.

---\n🎨 PROMPT IMAGEN (Midjourney/DALL-E):\n"A highly cinematic, photorealistic image of a golden chess King standing tall, casting a massive, imposing shadow over a chaotic board of fallen pawns, dramatic lighting, moody and elegant, 8k --ar 4:5"`
            }
        ],
        2: [ // Martes
            { 
                id: 't-tue-1', 
                text: 'Publicar Reel: "Integrando la Sombra"',
                script: `[GUION PARA REEL FACELESS - TIKTOK/IG/FB]
Título en pantalla: Por qué prefiere a los "Tóxicos" 🐺

[Visual sugerido: Un lobo negro enseñando los dientes pero tranquilo. B-roll oscuro, humo, estética de 'peligro controlado'.]

Voz en off: "Te molesta que ella elija al chico malo en lugar de a ti. Crees que está loca. Pero la biología evolutiva tiene otra explicación. Ella no busca toxicidad, busca 'Energía Oscura'. Busca capacidad de agresión. En tiempos primitivos, el hombre inofensivo no podía protegerla de la tribu enemiga. El chico malo muestra agresión, y su cerebro primitivo se excita porque ve a un protector potencial, aunque hoy en día esté mal calibrado. ¿La solución? Integra tu sombra. Aprende a pelear, ponte físicamente intimidante, vuélvete capaz de destruir, y luego elige ser un caballero. Eso es irresistible. Sígueme."

[COPIAR Y PEGAR EN DESCRIPCIÓN]
No tienes que ser tóxico, tienes que ser PELIGROSO bajo control voluntario. 🐺⚔️
El hombre inofensivo es ignorado por la evolución.
👉 Sígueme para despertar tu instinto protector.
#EnergiaOscura #Evolucion #CaballeroModerno #Masculinidad #Seduccion`
            },
            {
                id: 't-tue-fb',
                text: 'Publicar Post en Facebook (Copiar y Pegar)',
                script: `La Paradoja del Chico Malo: No es toxicidad, es biología evolutiva. 🐺🧬

Los hombres buenos siempre hacen la misma pregunta: "¿Por qué las mujeres prefieren a patanes que las tratan mal, si yo le ofrezco el mundo?"

La respuesta está escondida en nuestro cerebro primitivo (el cerebro reptiliano). Hace 10,000 años, la supervivencia de una mujer dependía de emparejarse con el hombre capaz de ejercer mayor violencia contra amenazas externas. 

El "Chico Malo" proyecta rasgos de agresión, audacia y nulo miedo a la confrontación. El cerebro subconsciente de la mujer lee esto como: "Protector fuerte". 

El error del chico malo es que usa esa agresión contra ELLA. El error del chico bueno es que carece totalmente de esa agresión. 

El Caballero Moderno es la mezcla perfecta: Tiene la capacidad de la violencia (fuerza, carácter fuerte, habilidades de combate), pero la tiene bajo absoluto control voluntario. Es una bestia que decide ser un caballero. Eso, señores, rompe cualquier algoritmo de atracción.

👉 ¿Estás cultivando tu fuerza o solo tu amabilidad?

---\n🎨 PROMPT IMAGEN (Midjourney/DALL-E):\n"A cinematic, ultra-moody shot of a modern gentleman's reflection in a dark puddle. The reflection subtlely hints at a powerful wolf or a darker, primal version of himself, symbolizing the integration of the shadow self, 8k --ar 4:5"`
            }
        ],
        3: [ // Miércoles
            { 
                id: 't-wed-1', 
                text: 'Publicar Reel: "El hack de la voz profunda"',
                script: `[GUION PARA REEL FACELESS - TIKTOK/IG/FB]
Título en pantalla: El secreto de una voz hipnótica 🎙️

[Visual sugerido: Olas oscuras chocando en cámara lenta contra rocas. O un hombre de traje de espaldas mirando la ciudad nocturna. Sensación de vibración profunda.]

Voz en off: "Puedes decir las palabras perfectas, pero si tu voz vibra en la garganta y no en el pecho, vas a generar cero tensión sexual. Cuando los hombres se ponen nerviosos frente a una mujer hermosa, su voz se vuelve más aguda y hablan desde la nariz o la garganta. Ese es el sonido de la sumisión. El hack biológico de la dominancia es hablar desde el diafragma. Antes de hablarle, exhala todo el aire, relaja el pecho y proyecta tu voz desde el estómago. Una voz grave y resonante calma el sistema nervioso de la mujer y le subcomunica protección física. Sígueme para dominar la seducción."

[COPIAR Y PEGAR EN DESCRIPCIÓN]
Tu voz revela tus inseguridades antes de que digas una sola palabra. 🌊🗣️
Relaja el pecho, habla desde el estómago.
👉 Sígueme para aprender los secretos no verbales de la atracción.
#LenguajeCorporal #Seduccion #CaballeroModerno #Comunicacion #AltoValor`
            },
            {
                id: 't-wed-fb',
                text: 'Publicar Post en Facebook (Copiar y Pegar)',
                script: `El magnetismo de la frecuencia: Por qué tu voz te está saboteando. 🎙️🌊

Si pones atención, notarás un fenómeno interesante: cuando hablas con tu jefe, con la chica que te gusta o cuando estás bajo estrés, el tono de tu voz sube. Se vuelve más agudo y tu ritmo se acelera. 

Hablas desde la garganta. Biológicamente, los tonos agudos y rápidos son señales de angustia y sumisión. 

Cuando hablas con tus amigos de toda la vida, tu voz baja, se vuelve más ronca y vibra en tu pecho. Estás relajado. Esa es la voz de la autoridad y la confianza.

Para generar atracción subconsciente, tienes que hackear tu sistema nervioso. Antes de iniciar una conversación importante, respira hondo hasta inflar el estómago, relaja la mandíbula y habla empujando el aire desde el diafragma. El sonido debe vibrar en tu pecho. 

Esa resonancia grave transmite masculinidad sólida y calma el sistema nervioso de quien te escucha.

👉 Haz la prueba hoy mismo. 

---\n🎨 PROMPT IMAGEN (Midjourney/DALL-E):\n"A highly abstract, cinematic macro shot of deep bass soundwaves rippling through dark water, symbolizing the physical impact of a deep, resonant voice, elegant and moody, 8k --ar 4:5"`
            }
        ],
        4: [ // Jueves
            { 
                id: 't-thu-1', 
                text: 'Publicar Reel: "Mirada de depredador"',
                script: `[GUION PARA REEL FACELESS - TIKTOK/IG/FB]
Título en pantalla: Contacto visual: Depredador vs Presa 🦅

[Visual sugerido: Close up a los ojos de un león o un águila fijando su objetivo, intercalado con los ojos de un hombre entrecerrando ligeramente la mirada (Hunter eyes). Cinematografía intensa.]

Voz en off: "La forma en que miras a una mujer define si te verá como una opción o como un fanático más. Existen dos tipos de miradas. La mirada de presa: ojos muy abiertos, parpadeo constante, y desvías la vista hacia abajo cuando ella te atrapa mirándola. Esto grita baja autoestima. Luego está la mirada del depredador: los párpados ligeramente caídos, un parpadeo lento y relajado, y cuando ella te mira, no apartas los ojos. Sostienes la mirada, esbozas una media sonrisa y sigues con lo tuyo. Ese nivel de seguridad inquebrantable genera cortocircuitos en su cerebro. Sígueme."

[COPIAR Y PEGAR EN DESCRIPCIÓN]
Nunca bajes la mirada primero. Y si lo haces, que sea hacia un lado, nunca hacia el piso. 🦅👁️
El contacto visual es el primer test de confianza.
👉 Sígueme para dominar la psicología de la atracción.
#ContactoVisual #Seguridad #CaballeroModerno #PsicologiaOscura #HunterEyes`
            },
            {
                id: 't-thu-fb',
                text: 'Publicar Post en Facebook (Copiar y Pegar)',
                script: `Contacto Visual: El test de confianza que repruebas a diario. 🦅👁️

Imagina la situación: Estás en un café o en el gimnasio. Ves a una mujer atractiva. Ella voltea, te atrapa mirándola y... ¿qué haces?

El 95% de los hombres, presas del pánico, apartan la mirada inmediatamente hacia el piso, como si hubieran cometido un crimen. 
Subcomunicación: "Perdón por mirarte, sé que no estoy a tu nivel, me intimidas".

El hombre de alto estatus no pide disculpas por sentir atracción. Su mirada es la de un depredador relajado (párpados pesados, parpadeo lento). Si lo atrapan mirando, sostiene la mirada durante dos segundos, sonríe levemente con la mitad de la boca y luego aparta la mirada *hacia un lado*, nunca hacia abajo.

Hacia abajo = Sumisión.
Hacia un lado = Elección.

Mantén el marco. Tu mirada debe penetrar, no suplicar.

👉 Etiqueta al amigo que siempre baja la mirada al piso.

---\n🎨 PROMPT IMAGEN (Midjourney/DALL-E):\n"An extreme cinematic close-up of a modern gentleman's eyes, slightly squinted (hunter eyes), reflecting a dark city neon light. Showing absolute calm and unbothered confidence, 8k, photorealistic --ar 4:5"`
            }
        ],
        5: [ // Viernes
            { 
                id: 't-fri-1', 
                text: 'Publicar Reel: "Vulnerabilidad agresiva"',
                script: `[GUION PARA REEL FACELESS - TIKTOK/IG/FB]
Título en pantalla: El imán de tus cicatrices ⚔️

[Visual sugerido: B-roll de un herrero golpeando metal candente (forjando una espada) o un hombre levantándose del suelo con lluvia. Resiliencia pura.]

Voz en off: "Los hombres falsos intentan ocultar sus fracasos. Presumen relojes alquilados y fingen que nunca han perdido. Las mujeres huelen esa inseguridad a kilómetros. El verdadero carisma nace de lo que llamo 'Vulnerabilidad Agresiva'. Es el hombre que te mira a los ojos y te dice: 'Sí, quebré mi primera empresa', o 'Sí, me rompieron el corazón y toqué fondo... pero mírame ahora'. Aceptar tus cicatrices como medallas de guerra sin sentir pena por ti mismo, demuestra una confianza tan monstruosa que resulta hipnótica. Un hombre que no le teme a su pasado, es un hombre invencible. Sígueme."

[COPIAR Y PEGAR EN DESCRIPCIÓN]
Tus fracasos no te definen, tu resurrección sí. 🔥🦅
Nunca escondas tus cicatrices, son la prueba de que el fuego no te consumió.
👉 Sígueme para construir una mentalidad inquebrantable.
#Resiliencia #Mentalidad #CaballeroModerno #Estoicismo #Exito`
            },
            {
                id: 't-fri-fb',
                text: 'Publicar Post en Facebook (Copiar y Pegar)',
                script: `Vulnerabilidad Agresiva: El carisma del hombre forjado. ⚔️🔥

La sociedad te vende la idea de que para ser atractivo debes ser impecable. Sin errores, sin deudas, sin problemas emocionales, el "Macho Alfa" perfecto.

Eso no genera conexión, genera falsedad. 

Lo que verdaderamente impacta y genera un respeto profundo es la Vulnerabilidad Agresiva. Es la capacidad de hablar de tus fracasos más grandes (esa vez que te echaron del trabajo, esa relación donde fuiste el tóxico y aprendiste, ese negocio que quebró) sin una sola gota de victimismo.

El hombre débil cuenta sus problemas para dar lástima.
El Caballero Moderno cuenta sus cicatrices como quien narra cómo mató al dragón. 

Aceptar tu pasado con el pecho hacia afuera subcomunica una confianza letal: "Fui destruido, me reconstruí, y soy inmune a la vergüenza". Eso, señores, es verdadero poder.

👉 ¿Qué cicatriz te hizo el hombre que eres hoy?

---\n🎨 PROMPT IMAGEN (Midjourney/DALL-E):\n"A highly cinematic, moody image of glowing hot steel being forged on an anvil in a dark smithy, symbolizing the aggressive vulnerability and the pain required to forge a strong man, photorealistic --ar 4:5"`
            }
        ],
        6: [ // Sábado
            { 
                id: 't-sat-1', 
                text: 'Publicar Reel: "El Arquetipo del Mago"',
                script: `[GUION PARA REEL FACELESS - TIKTOK/IG/FB]
Título en pantalla: Cómo volverte adictivo (El Mago) 🎩

[Visual sugerido: Clips visualmente alucinantes: una tormenta eléctrica silenciosa, fuego ardiendo en cámara lenta, o un hombre caminando hacia la neblina donde no se ve el fondo.]

Voz en off: "Si quieres mantener a una mujer completamente enamorada de ti a largo plazo, debes incorporar el Arquetipo del Mago: La capacidad de crear caos positivo e imprevisibilidad. La rutina es la prisión del romance. Si ella sabe exactamente qué le vas a decir, a qué hora la vas a llamar y a dónde la vas a llevar a cenar, el aburrimiento está garantizado. El Mago cambia las reglas de golpe. Aparece sin avisar, cambia los planes a último minuto por una aventura espontánea, es críptico y misterioso. Si te vuelves predecible, te vuelves invisible. Mantén viva la magia. Sígueme."

[COPIAR Y PEGAR EN DESCRIPCIÓN]
La previsibilidad es la muerte de la pasión. 🌫️✨
Si siempre juegas seguro, terminarás jugando solo. Añade caos positivo.
👉 Sígueme para dominar las dinámicas de largo plazo.
#PsicologiaOscura #Seduccion #CaballeroModerno #Arquetipos #Atraccion`
            },
            {
                id: 't-sat-fb',
                text: 'Publicar Post en Facebook (Copiar y Pegar)',
                script: `El Arquetipo del Mago: Por qué la previsibilidad aniquila la pasión. 🎩✨

Las relaciones no mueren por falta de amor, mueren por exceso de certidumbre. 

Cuando iniciaste con ella, todo era un misterio. No sabía si le ibas a escribir, no sabía de qué iban a hablar. El cerebro estaba inundado de dopamina. Tres años después, sabe que los viernes comen pizza y ven Netflix a las 8:00 pm exactas. 

Has dejado morir al Mago, el arquetipo de la imprevisibilidad y la transformación. 

Para mantener la chispa viva, tienes que inyectar "caos positivo" periódicamente. Cancela la cena predecible y llévala a manejar por la carretera sin rumbo. Hazle una broma desconcertante. Deja de decirle "Te amo" de forma automatizada al colgar el teléfono. 

Debes recordar esto: Las mujeres son criaturas emocionales que prosperan en el misterio y la pequeña incertidumbre. Si te vuelves un libro abierto y ya leído, la cerrará y buscará otro.

👉 ¿Cuándo fue la última vez que fuiste espontáneo de verdad?

---\n🎨 PROMPT IMAGEN (Midjourney/DALL-E):\n"A cinematic, mysterious shot of a modern gentleman standing in thick, cinematic fog at night under a single streetlamp. You can't quite read his expression, symbolizing the archetype of the Magician and unpredictability, 8k --ar 4:5"`
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
