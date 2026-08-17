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
        0: [ // Domingo - Empty
            { id: 't-sun-1', text: 'Descanso y planificación' }
        ],
        1: [ // Lunes
            { 
                id: 't-mon-1', 
                text: 'Publicar Video Largo en YT: "La Ley del Contraste" (5:00 PM)',
                script: `[GUION PARA VIDEO FACELESS - YT (3.5 mins)]
Título SEO: Por qué siempre se alejan cuando eres "Demasiado Bueno" (Ley del Contraste)

[Visual sugerido: B-roll cinemático. Un reloj de arena cayendo. Un hombre caminando por un pasillo oscuro hacia la luz. Juego de ajedrez en cámara lenta. Tonos serios y misteriosos.]

(0:00 - 0:30) Hook: "¿Alguna vez has sido el hombre perfecto, siempre disponible, siempre atento, y de repente ella pierde el interés? Te voy a explicar por qué tu bondad te está destruyendo. En la psicología humana, el valor de algo no se mide por lo que es, sino por el contraste de su ausencia. Si siempre estás ahí, te vuelves invisible. Hoy aprenderás a usar la Ley del Contraste a tu favor."

(0:30 - 1:30) La economía de la atención: "El cerebro humano ignora lo constante y presta atención a lo que cambia. Si el sol brillara las 24 horas del día, nadie se detendría a ver un amanecer. Si tú le escribes 'buenos días' todos los días a las 8 AM, tu mensaje pierde valor; se vuelve rutina. Pero si un día no escribes, creas contraste. Ese espacio vacío obliga a su cerebro a pensar en ti."

(1:30 - 2:30) Validación Intermitente: "Los casinos ganan millones gracias a la recompensa intermitente. No ganas siempre que jalas la palanca, por eso sigues jugando. Si tu validación hacia una mujer es constante e incondicional, ella se aburre. Debes ser capaz de retirar tu atención cuando ella no invierte en la interacción, y recompensarla solo cuando sí lo hace. Esto no es manipulación, es tener estándares."

(2:30 - 3:30) Conclusión: "Deja de ser predecible. Deja que ella experimente tu ausencia de vez en cuando. Tómate horas para responder si estás ocupado construyendo tu imperio. La próxima vez que sientas el impulso de enviarle el tercer mensaje consecutivo, detente. Regálale el don de extrañarte. Suscríbete si estás listo para dejar de ser la opción segura."`
            },
            { 
                id: 't-mon-2', 
                text: 'Publicar Reel: "Regálale tu ausencia"',
                script: `[GUION PARA REEL FACELESS - TIKTOK/IG/FB]
Título en pantalla: El error de estar siempre disponible 📉

[Visual sugerido: Un hombre conduciendo un auto clásico bajo la lluvia, o alguien cerrando su laptop y alejándose en la oscuridad. Cinematografía melancólica pero poderosa.]

Voz en off: "Si quieres matar la atracción en tiempo récord, haz esto: está siempre disponible. Responde a los 2 segundos. Cancela tus planes si ella te llama. Conviértete en su tapete. En la psicología de la atracción, las personas solo valoran lo que temen perder o lo que les cuesta esfuerzo conseguir. Si le das el 100% de ti sin que ella haya invertido nada, tu valor percibido cae a cero. Aprende a regalar tu ausencia. El espacio no destruye las relaciones, el espacio crea el deseo. No puedes extrañar a alguien que nunca se va. Sígueme."

[COPIAR Y PEGAR EN DESCRIPCIÓN]
El agua es gratis porque abunda. Los diamantes son caros porque escasean. 💎💧
Tu tiempo funciona exactamente igual. 
👉 Sígueme para dominar la psicología del alto valor.
#Psicologia #Atraccion #CaballeroModerno #AltoValor #Seduccion`
            },
            {
                id: 't-mon-fb',
                text: 'Publicar Post en Facebook (Copiar y Pegar)',
                script: `La Ley del Contraste: Por qué debes aprender a desaparecer. ♟️⏳

La mayoría de los hombres son predecibles. Escriben a la misma hora, reaccionan a todas las historias de Instagram y están disponibles 24/7. Creen que la persistencia incondicional es romántica. 

La psicología humana dice lo contrario: El cerebro ignora los estímulos constantes. Si vives cerca de un aeropuerto, eventualmente dejas de escuchar los aviones. Si siempre estás ahí para ella, eventualmente dejará de valorar tu presencia.

Tienes que crear contraste. Tu presencia solo tiene valor si tu ausencia es una posibilidad real. 

No respondas inmediatamente si estás ocupado. No canceles tus entrenamientos por una cita de último minuto. Haz que tu tiempo se sienta como un recurso VIP, no como folletos gratis en la calle.

👉 ¿Te cuesta trabajo poner límites con tu tiempo? Únete a nosotros.

---\n🎨 PROMPT IMAGEN (Midjourney/DALL-E):\n"A highly cinematic, moody image of a modern gentleman's silhouette walking away down a misty, cobblestone street, symbolizing absence and creating space, photorealistic, 8k --ar 4:5"`
            }
        ],
        2: [ // Martes
            { 
                id: 't-tue-1', 
                text: 'Publicar Reel: "Validación Intermitente"',
                script: `[GUION PARA REEL FACELESS - TIKTOK/IG/FB]
Título en pantalla: Por qué prefiere al "chico malo" 🎰

[Visual sugerido: Clips elegantes de un casino, dados cayendo, ruleta girando. O B-roll de un hombre de negocios tomando una decisión difícil.]

Voz en off: "¿Por qué las mujeres a veces se obsesionan con hombres que no las tratan tan bien, y se aburren del chico que les da todo? La ciencia lo llama 'Refuerzo Intermitente'. Es el mismo mecanismo que hace adictivas a las máquinas tragamonedas. No sabes si vas a ganar o perder. El 'chico bueno' da validación constante, es un juego predecible y aburrido. El hombre magnético da validación solo cuando ella se lo gana. No tienes que ser un patán, simplemente tienes que dejar de regalar tu atención. Haz que ella trabaje por tu interés. Sígueme para más psicología social."

[COPIAR Y PEGAR EN DESCRIPCIÓN]
Deja de regalar "likes" y cumplidos gratis. 🛑
Tu validación debe ser un premio, no un derecho de nacimiento.
👉 Sígueme para entender cómo funciona la mente humana.
#PsicologiaOscura #Seduccion #CaballeroModerno #InteligenciaSocial #Atraccion`
            },
            {
                id: 't-tue-fb',
                text: 'Publicar Post en Facebook (Copiar y Pegar)',
                script: `El Síndrome del Tragamonedas: Por qué lo predecible aburre. 🎰🧠

¿Alguna vez te has preguntado por qué alguien jugaría horas en un casino perdiendo dinero, pero se aburriría a los 5 minutos de un juego donde gana el 100% de las veces?

El cerebro humano es adicto a la incertidumbre. El mecanismo de "Refuerzo Intermitente" libera picos altísimos de dopamina precisamente porque la recompensa no está garantizada.

Cuando eres un "Chico Bueno" de manual, ofreces un juego donde ella gana el 100% de las veces. Tu validación, tus cumplidos y tu tiempo están garantizados. ¿El resultado? Aburrimiento total.

No se trata de ser un villano o maltratar a la gente. Se trata de tener estándares. Valídala cuando invierta en la interacción, y retira tu atención cuando sea fría o distante. Sé un reto, no un trofeo de participación.

👉 Comparte esto con quien necesite despertar hoy.

---\n🎨 PROMPT IMAGEN (Midjourney/DALL-E):\n"A conceptual, high-end cinematic image of a roulette wheel blending into a sophisticated dinner setting. Symbolizing the unpredictable nature of attraction, dark and moody, photorealistic --ar 4:5"`
            }
        ],
        3: [ // Miércoles
            { 
                id: 't-wed-1', 
                text: 'Publicar Reel: "El poder del NO"',
                script: `[GUION PARA REEL FACELESS - TIKTOK/IG/FB]
Título en pantalla: La palabra más atractiva del mundo 🛑

[Visual sugerido: B-roll cinemático de un hombre levantando una mano sutilmente para rechazar algo, o un hombre leyendo un libro sin inmutarse ante el caos. Tranquilidad absoluta.]

Voz en off: "La palabra que más eleva tu valor social en tiempo real tiene solo dos letras: NO. Los hombres de bajo valor dicen 'sí' a todo porque le tienen terror al rechazo. Dicen sí a citas que no quieren ir, dicen sí a favores abusivos, dicen sí a mujeres que no los respetan. Cuando aprendes a decir 'No, eso no funciona para mí' sin enojarte y sin dar explicaciones largas, proyectas un estatus inmenso. El 'NO' demuestra que tienes límites. Y las mujeres respetan los límites antes de enamorarse de ti. Sígueme si estás listo para subir tus estándares."

[COPIAR Y PEGAR EN DESCRIPCIÓN]
Un 'Sí' pierde todo su valor cuando eres incapaz de decir 'No'. 👑🛡️
Establecer límites es la forma más rápida de filtrar a quienes no te convienen.
👉 Sígueme para construir un carácter inquebrantable.
#Limites #Autoestima #CaballeroModerno #Estoicismo #AltoValor`
            },
            {
                id: 't-wed-fb',
                text: 'Publicar Post en Facebook (Copiar y Pegar)',
                script: `Decir "NO" es el filtro de estatus definitivo. 🛡️👑

Desde niños nos enseñaron que ser "buenos" significaba complacer a los demás. Crecimos creyendo que decir "No" era ser egoísta.

Pero en el mundo de las dinámicas sociales y de citas, el hombre que dice "Sí" a todo es percibido como alguien sin columna vertebral. Si aceptas malos comportamientos, cambios de planes de última hora o faltas de respeto con una sonrisa, estás subcomunicando: "Acéptame, por favor, no tengo otras opciones".

Aprender a decir "No" de forma tranquila, sin elevar la voz y sin dar excusas kilométricas ("No, hoy no me va bien, lo dejamos para otro día"), es un shock para el sistema de quien te escucha. De repente, ya no eres una opción segura. Eres un hombre con reglas.

Y el respeto siempre, siempre precede a la atracción.

👉 ¿Cuándo fue la última vez que dijiste NO a algo que no querías hacer?

---\n🎨 PROMPT IMAGEN (Midjourney/DALL-E):\n"A highly aesthetic, cinematic shot of a modern gentleman sitting confidently, slightly raising one hand in a calm but firm 'stop' gesture. Sharp suit, dark background, symbolizing boundaries, 8k --ar 4:5"`
            }
        ],
        4: [ // Jueves
            { 
                id: 't-thu-1', 
                text: 'Publicar Reel: "El poder de la preselección"',
                script: `[GUION PARA REEL FACELESS - TIKTOK/IG/FB]
Título en pantalla: Por qué le gustas cuando estás ocupado 🦅

[Visual sugerido: B-roll de un hombre caminando con paso firme a través de una multitud desenfocada, o trabajando concentrado en su oficina rodeado de planos/pantallas.]

Voz en off: "¿Has notado que cuando consigues novia, de repente otras mujeres te prestan más atención? O cuando estás tapado de trabajo, te invitan a más lugares. Se llama el Efecto de Preselección. El ser humano usa atajos mentales. Si otras personas valoran tu tiempo, tu cerebro asume que eres alguien valioso. Si quieres hackear este efecto sin tener que fingir, simplemente ocúpate. Construye tu cuerpo, tu negocio, tus hobbies. Cuando estás verdaderamente ocupado persiguiendo tu propósito, la escasez de tu tiempo te vuelve irresistible. Sígueme."

[COPIAR Y PEGAR EN DESCRIPCIÓN]
No tienes que fingir que estás ocupado. Tienes que OCUPARTE de verdad. 📈💼
El hombre con un propósito claro es un imán andante.
👉 Sígueme para construir una vida de la que no quieras escapar.
#Proposito #Preseleccion #CaballeroModerno #Atraccion #Exito`
            },
            {
                id: 't-thu-fb',
                text: 'Publicar Post en Facebook (Copiar y Pegar)',
                script: `El Efecto de Preselección: Tu propósito es tu mejor marketing. 🦅📈

Hay un fenómeno curioso en la psicología social: La gente quiere entrar al restaurante que tiene una fila afuera, e ignora el restaurante que está completamente vacío, aunque vendan lo mismo. 

El cerebro asume: "Si hay fila, debe ser bueno". 

En el mundo de las citas, tu tiempo es el restaurante. Si estás disponible a cualquier hora, cualquier día, la percepción de tu valor cae. El consejo novato es "finge que estás ocupado". El consejo del Caballero Moderno es "Ocúpate de verdad".

Llena tu agenda con tu propósito: gimnasio, lectura, negocios, familia. Cuando le digas a una mujer: "El jueves no puedo, pero tengo un hueco el sábado en la tarde", tu escasez será real. Y no hay nada más atractivo que un hombre cuya misión de vida va primero.

👉 Únete a la comunidad de hombres que priorizan su propósito.

---\n🎨 PROMPT IMAGEN (Midjourney/DALL-E):\n"A cinematic, blurry shot of a bustling city street at night, with a sharply focused, elegant modern man walking confidently in the opposite direction of the crowd, symbolizing purpose and high value, 8k --ar 4:5"`
            }
        ],
        5: [ // Viernes
            { 
                id: 't-fri-1', 
                text: 'Publicar Reel: "Desarmar la arrogancia"',
                script: `[GUION PARA REEL FACELESS - TIKTOK/IG/FB]
Título en pantalla: Cómo destruir un ego inflado 🎈

[Visual sugerido: Clip de B-roll muy lento de una pieza de ajedrez moviéndose (Reina o Rey cayendo). O un hombre encendiendo un puro con expresión neutral.]

Voz en off: "Si sales con alguien que tiene el ego por las nubes, que se cree inalcanzable o te trata con superioridad, nunca intentes presumir tus logros para impresionarla. Estarás jugando su juego. En su lugar, usa el arma nuclear de la psicología social: La Indiferencia Amable. Trátala como tratarías a tu hermana menor. Bromea con sus defectos sin ofenderla. Si te presume su bolso caro, sonríe y cambia de tema. Al no validar su ego físico ni material, su cerebro entrará en cortocircuito. Empezará a perseguir tu validación porque eres el único que no se la ha regalado. Sígueme."

[COPIAR Y PEGAR EN DESCRIPCIÓN]
El antídoto contra la arrogancia no es más arrogancia, es indiferencia. 🧊♟️
Nunca compitas en un juego de egos. Simplemente no participes.
👉 Sígueme para dominar las dinámicas de poder.
#JuegoMental #Seduccion #CaballeroModerno #PsicologiaOscura #Ego`
            },
            {
                id: 't-fri-fb',
                text: 'Publicar Post en Facebook (Copiar y Pegar)',
                script: `Cómo desarmar la arrogancia con Indiferencia Amable. 🧊♟️

Hoy en día, las redes sociales han inflado el ego de muchas personas a niveles absurdos. Si sales con una mujer que tiene una actitud de "soy inalcanzable y deberías sentirte afortunado de estar aquí", tu peor error es intentar demostrarle que tú también eres importante.

Querer impresionar a un arrogante es validar su marco de poder.

La estrategia del Caballero Moderno es la "Indiferencia Amable". Sé educado, caballeroso, pero totalmente impasible ante sus intentos de presumir. Trátala con la misma energía con la que tratarías a tu sobrina pequeña cuando te cuenta sobre sus juguetes. 

Cuando ella vea que su belleza o su actitud elitista no te mueven ni un milímetro, su ego entrará en pánico. Instintivamente, bajará la guardia e intentará ganarse TU aprobación. 

👉 ¿Has aplicado esta táctica alguna vez? Cuéntanos en los comentarios.

---\n🎨 PROMPT IMAGEN (Midjourney/DALL-E):\n"A conceptual, ultra-aesthetic image of a chessboard where a simple pawn casts the shadow of a massive king, symbolizing psychological leverage and unbothered confidence, moody lighting, 8k --ar 4:5"`
            }
        ],
        6: [ // Sábado
            { 
                id: 't-sat-1', 
                text: 'Publicar Reel: "El mito del alma gemela"',
                script: `[GUION PARA REEL FACELESS - TIKTOK/IG/FB]
Título en pantalla: La mentira más grande del romance 💔

[Visual sugerido: B-roll cinemático de una mujer hermosa desenfocándose, o un paisaje inmenso del océano al atardecer. Sensación de inmensidad.]

Voz en off: "Te vendieron la peor mentira de todas: la idea del 'Alma Gemela'. Hollywood te hizo creer que hay una sola mujer perfecta para ti en el mundo de 8 billones de personas. Esta idea es veneno puro. Es lo que te hace soportar faltas de respeto, rogar cuando te dejan, y tener pánico a quedarte solo. Escucha bien: Ella no es especial. Es especial por el valor que tú decidiste darle en tu cabeza. Hay millones de mujeres hermosas, leales y valiosas. Cuando dejas de creer en el alma gemela, eliminas el miedo a la pérdida. Y sin miedo, te vuelves inquebrantable. Sígueme para despertar."

[COPIAR Y PEGAR EN DESCRIPCIÓN]
Creer en el "alma gemela" es la receta perfecta para la escasez emocional. 📉🚫
Hay millones de oportunidades. Libérate de la ilusión.
👉 Sígueme para destruir la mentalidad de escasez.
#Mentalidad #Relaciones #CaballeroModerno #DesarrolloPersonal #Matrix`
            },
            {
                id: 't-sat-fb',
                text: 'Publicar Post en Facebook (Copiar y Pegar)',
                script: `El Mito del Alma Gemela: El veneno de la escasez. 🐍💔

Disney y Hollywood nos han programado con una de las creencias más destructivas para el hombre moderno: "El Único Amor Verdadero" o el "Alma Gemela".

Esta creencia es la raíz del comportamiento necesitado ("needy"). Si crees que ella es tu única oportunidad de ser feliz en un mundo con 8,000 millones de personas, vas a soportar faltas de respeto, manipulación y te aterrorizará poner límites. 

La verdad fría y dura es esta: Ella no es "la elegida". Es simplemente una mujer con la que tienes compatibilidad. Hay literalmente millones de mujeres con las que podrías construir una vida increíble. 

Cuando interiorizas esta verdad, pierdes el miedo a irte de la mesa cuando las condiciones no son justas. Y curiosamente, cuando no tienes miedo a irte, es cuando más te respetan.

👉 Libérate del mito. Únete a la comunidad de la abundancia real.

---\n🎨 PROMPT IMAGEN (Midjourney/DALL-E):\n"A highly cinematic, surreal image of a man dropping a glowing red rose into a vast, deep, dark ocean, symbolizing letting go of the 'one soulmate' illusion and embracing abundance, photorealistic, 8k --ar 4:5"`
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
