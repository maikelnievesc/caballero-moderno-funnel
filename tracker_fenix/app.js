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
        0: [ // Domingo
            { 
                id: 't-sun-1', 
                text: 'Publicar Reel: "Auditoría de fin de semana"',
                script: `[GUION PARA GRABAR]\nTítulo en pantalla: Lo que haces los fines de semana te delata 🛑\n\n"Si tus fines de semana se resumen en jugar videojuegos solo y no tienes pasiones, ninguna 'frase para ligar' te va a salvar. Vuélvete fascinante primero. Empieza por reconstruir tu vida, un hábito a la vez. Sígueme y te enseñaré cómo convertirte en un hombre magnético."\n\n[COPIAR Y PEGAR EN DESCRIPCIÓN]\nDeja de intentar entrar en la vida de ella, y empieza a construir una vida a la que ella quiera unirse. 🛑🔥\nEse es el doloroso primer paso. Ninguna frase para ligar te va a salvar si no tienes pasiones ni metas.\n👉 Sígueme para más desarrollo personal y seducción de alto valor.\n#CaballeroModerno #AltoValor #Seduccion #DesarrolloPersonal #Friendzone`
            },
            {
                id: 't-sun-fb',
                text: 'Publicar Post en Facebook (Copiar y Pegar)',
                script: `¿Cansado de que la chica que te gusta te vea solo como un amigo?\n\nLa cruda realidad que nadie te dice es que la atracción no se negocia. No puedes convencerla lógicamente de que te dé una oportunidad. Tienes que dejar de intentar "entrar" en su vida a la fuerza y empezar a construir una realidad tan fascinante, profunda y alineada con tus propósitos que ella misma sienta la curiosidad de unirse a la tuya.\n\nEl hombre que dedica sus fines de semana a crecer, aprender, entrenar y descubrir sus verdaderas pasiones, emite una frecuencia completamente diferente al hombre que se queda esperando un mensaje de texto. No busques validación, busca evolución.\n\n👉 Síguenos y únete a nuestra comunidad de hombres que están reescribiendo las reglas de su vida.\n\n---\n🎨 PROMPT IMAGEN (Midjourney/DALL-E):\n"Cinematic shot of a confident man walking away from a glowing smartphone screen, stepping into a vibrant and exciting city night, neon lights, high contrast, photorealistic --ar 4:5"`
            },
            { id: 't-sun-2', text: 'Preparar y agendar métricas semanales' },
            { id: 't-sun-3', text: 'Atender chats de WhatsApp (Cierres semanales)' }
        ],
        1: [ // Lunes
            { 
                id: 't-mon-1', 
                text: 'Publicar Video Largo en YT: "Temas de conversación ganadores" (5:00 PM)',
                script: `[GUION PARA GRABAR]\nTítulo SEO: 3 Temas de conversación para nunca aburrir a una mujer (Atraer sin esfuerzo)\n\n"El error más común en una cita es hacer preguntas de entrevista de trabajo. '¿A qué te dedicas? ¿Cuántos hermanos tienes?'. Eso aburre a los 5 minutos. Hoy te daré 3 temas de conversación que activan sus emociones y la mantienen enganchada.\n\nTema 1: Preguntas de pasión. En lugar de preguntar a qué se dedica, pregúntale 'Si el dinero no importara, ¿qué estarías haciendo con tu vida ahora mismo?'. Eso activa su imaginación.\n\nTema 2: Suposiciones. No le preguntes de dónde es. Dile 'Tienes una vibra muy tranquila, seguro eres del sur o creciste cerca de la naturaleza'. Si te equivocas, la harás reír y te corregirá.\n\nTema 3: Tensiones de futuro. 'Siento que eres el tipo de persona que en 5 años terminará viviendo en otro continente y adoptando tres perros'. Estás pintando un panorama divertido y misterioso.\n\nEvita la lógica, apela a las emociones. Si te sirvió este video, suscríbete y acompáñame en el camino del Caballero Moderno."\n\n[COPIAR Y PEGAR EN DESCRIPCIÓN]\nLas preguntas de "entrevista de trabajo" están matando tus citas. ❌🤐\nSi sigues preguntando "¿A qué te dedicas?" o "¿Cuál es tu color favorito?", le estás comunicando a su cerebro que eres un hombre aburrido y predecible. Tienes que aprender a activar sus emociones.\n👉 Suscríbete y activa la campanita para más contenido de valor.\n#CaballeroModerno #Seduccion #TemasDeConversacion #ComoLigar #AtraerMujeres #PsicologiaOscura #DesarrolloPersonal`
            },
            { 
                id: 't-mon-2', 
                text: 'Publicar Reel: "Temas de conversación (El error de la entrevista)"',
                script: `[GUION PARA GRABAR]\nTítulo en pantalla: Deja de hacer estas preguntas en tus citas 🚫\n\n"¿Sabes por qué ella se aburre a los 10 minutos de conocerte? Porque le haces preguntas de entrevista de trabajo. '¿A qué te dedicas? ¿Qué estudias?'. Eso apaga cualquier atracción emocional. En lugar de preguntar, haz suposiciones. Dile: 'Tienes vibra de que estudias algo relacionado con arte'. Generas intriga y la haces reír. Sígueme y aprende a conversar como un hombre magnético."\n\n[COPIAR Y PEGAR EN DESCRIPCIÓN]\nLas preguntas lógicas matan la tensión emocional. ❌\nSi quieres que una mujer te recuerde, tienes que hacerla sentir, no hacerla pensar.\n👉 Sígueme para dominar el arte de la primera impresión.\n#CaballeroModerno #CitasOnline #Seduccion #AtraerMujeres #Psicologia #DesarrolloPersonal`
            },
            {
                id: 't-mon-fb',
                text: 'Publicar Post en Facebook (Copiar y Pegar)',
                script: `Las preguntas de "entrevista de trabajo" están matando tus citas. ❌🤐\n\nTodos hemos estado ahí: el silencio incómodo, el café que se enfría, y la típica pregunta de "¿Y cuántos hermanos tienes?". Si sigues recurriendo a estas interrogantes lógicas, le estás comunicando subconscientemente a su cerebro que no sabes cómo liderar una interacción emocionante.\n\nLa solución radica en la psicología de las 'Suposiciones'. Cuando en lugar de preguntar le dices "Tienes vibra de ser alguien súper competitiva", la obligas a calificarse, la haces reír y creas un puente emocional inmediato. No busques datos biográficos, busca detonadores emocionales.\n\n👉 Síguenos en la página para aprender a hackear la atracción y proyectar verdadero alto estatus en todas tus interacciones diarias.\n\n---\n🎨 PROMPT IMAGEN (Midjourney/DALL-E):\n"A split screen composition. On the left, a bored beautiful woman on a bad coffee date. On the right, a confident man making a beautiful woman laugh naturally in an aesthetic bar, cinematic lighting, photorealistic --ar 4:5"`
            },
            { id: 't-mon-3', text: 'Responder comentarios y DMs' },
            { id: 't-mon-4', text: 'Atender chats de WhatsApp' }
        ],
        2: [ // Martes
            { 
                id: 't-tue-1', 
                text: 'Publicar Reel: "El error de responder rápido"',
                script: `[GUION PARA GRABAR]\nTítulo en pantalla: Responder rápido te manda a la friendzone 📱\n\n"Si ella te responde después de 4 horas, y tú le contestas en 30 segundos... acabas de matar la atracción. Le estás diciendo subconscientemente que no tienes una vida propia y estabas esperando su mensaje. Un Caballero Moderno tiene un propósito que lo mantiene ocupado. Tu atención es valiosa, no la regales. Sígueme si quieres dejar de mendigar atención."\n\n[COPIAR Y PEGAR EN DESCRIPCIÓN]\nResponder en 3 segundos cuando ella tardó 5 horas en contestarte es la receta exacta para perder su respeto. 🚫📱\nTu tiempo tiene que ser un premio. \n👉 Sígueme para dejar de cometer estos errores fatales.\n#CaballeroModerno #ErroresDeWhatsapp #AtraerMujeres #Friendzone #AltoValor #Seduccion #Masculinidad`
            },
            {
                id: 't-tue-fb',
                text: 'Publicar Post en Facebook (Copiar y Pegar)',
                script: `3 Mensajes de WhatsApp que MATAN la atracción instantáneamente 📵👇\n\n❌ 1. El Doble Mensaje "Justificador" ("Perdón, sé que debes estar muy ocupada"). Esto grita desesperación y baja autoestima.\n❌ 2. El "Buenos días" genérico sin contexto. Si no hay una emoción detrás del mensaje, se siente como una obligación vacía.\n❌ 3. Responder en 3 segundos cuando ella tardó 5 horas. Esto demuestra que no valoras tu propio tiempo y que estabas ansioso esperando su validación.\n\nCada interacción digital debe ser una extensión de tu vida real: ocupada, con propósito y sin miedo a perder a quien no te valora. El apego excesivo siempre empuja a la otra persona lejos.\n\n👉 Síguenos si estás listo para construir una masculinidad más fuerte y blindarte contra la dependencia emocional.\n\n---\n🎨 PROMPT IMAGEN (Midjourney/DALL-E):\n"A confident, well-dressed modern man standing on a city street at night, looking calmly at his phone, neon lights, high status, cinematic, photorealistic, vertical format."`
            },
            { id: 't-tue-3', text: 'Responder comentarios y DMs' }
        ],
        3: [ // Miércoles
            { 
                id: 't-wed-1', 
                text: 'Publicar Reel: "La Paradoja de la Atracción"',
                script: `[GUION PARA GRABAR]\nTítulo en pantalla: La triste paradoja de la atracción 💔\n\n"¿Te has dado cuenta que la chica que no te interesa siempre está detrás de ti, pero la que te encanta te ignora? Esa es la paradoja de la atracción. A la que no te gusta, la tratas con indiferencia, y eso proyecta estatus y desapego. A la que te gusta, la persigues y te vuelves complaciente. Tienes que tratar a la que te importa como si no lo hiciera. Sígueme para entender la mente femenina."\n\n[COPIAR Y PEGAR EN DESCRIPCIÓN]\nDeja de intentar comprar su atención. 🛑\nLa neurociencia es clara: los humanos persiguen aquello que no pueden controlar fácilmente. Sé un reto.\n👉 Sígueme y conviértete en el hombre que ellas buscan.\n#CaballeroModerno #Seduccion #PsicologiaDeAtraccion #HombreDeAltoValor #ComoLigar #Friendzone #DesarrolloPersonal`
            },
            {
                id: 't-wed-fb',
                text: 'Publicar Post en Facebook (Copiar y Pegar)',
                script: `La paradoja del amor moderno: La chica que no te interesa te busca obsesivamente, y la que te gusta profundamente te ignora o te deja en "visto". 💔\n\nMuchos hombres culpan a la suerte de este fenómeno, pero la explicación está en el comportamiento humano básico. Con la persona que no te interesa, no tienes miedo a equivocarte. Eres auténtico, marcas tus límites, eres un poco desafiante y muestras total desapego a los resultados. Ese comportamiento es magnético.\n\nCon la que te encanta, el miedo al rechazo te paraliza. Te vuelves excesivamente complaciente, aburrido y pierdes tu esencia tratando de agradar. La clave de la atracción sostenible es mantener el desapego y la autonomía emocional incluso cuando sientes mariposas en el estómago.\n\n👉 Síguenos para aprender a dominar el arte del desapego y proyectar verdadero alto estatus.\n\n---\n🎨 PROMPT IMAGEN (Midjourney/DALL-E):\n"A cinematic shot of a dark marble chessboard. A solitary black King piece stands tall and dominant, while white pawns are scattered blurred in the background. High contrast, elegant dark and gold color palette, photorealistic --ar 4:5"`
            },
            { id: 't-wed-2', text: 'Responder comentarios y DMs' },
            { id: 't-wed-3', text: 'Atender chats de WhatsApp' }
        ],
        4: [ // Jueves
            { 
                id: 't-thu-1', 
                text: 'Publicar Reel: "El lenguaje corporal del 1%"',
                script: `[GUION PARA GRABAR]\nTítulo en pantalla: El lenguaje corporal del 1% de los hombres ♟️\n\n"Tu lenguaje corporal habla antes que tú. Si estás encorvado, haces movimientos rápidos y nerviosos, y esquivas la mirada... le gritas 'inseguridad' a su subconsciente. Un Caballero Moderno del 1% ocupa su espacio. Se mueve lento y sin prisa. Mantiene el contacto visual. Esa calma proyecta un estatus brutal. Sígueme y aprende a dominar la atracción no verbal."\n\n[COPIAR Y PEGAR EN DESCRIPCIÓN]\nEl 90% de la atracción es NO verbal. 🤫🔥\nSi tu cuerpo comunica miedo o ansiedad, no importa qué tan buen conversador seas. Tienes que dominar la primera impresión.\n👉 Sígueme para más secretos de la atracción gratuita.\n#CaballeroModerno #LenguajeCorporal #Psicologia #Seduccion #AltoValor #Masculinidad #Confianza`
            },
            {
                id: 't-thu-fb',
                text: 'Publicar Post en Facebook (Copiar y Pegar)',
                script: `Tu lenguaje corporal grita tus inseguridades mucho antes de que digas siquiera 'Hola'. 🤫🔥\n\nMoverte rápido, esquivar la mirada, tocarte el rostro constantemente o encorvarte son señales evolutivas de sumisión y ansiedad. El cerebro humano, especialmente el femenino, ha evolucionado para detectar estas señales subconscientes en una fracción de segundo.\n\nUn verdadero líder se mueve con calma. Ocupa su espacio sin pedir disculpas. Su contacto visual es sereno y directo. La próxima vez que entres a un salón, haz el experimento: camina un 10% más lento y respira desde el diafragma. La calma es la demostración definitiva de poder.\n\n👉 Síguenos para descubrir más sobre cómo hackear tu lenguaje no verbal y proyectar masculinidad inquebrantable.\n\n---\n🎨 PROMPT IMAGEN (Midjourney/DALL-E):\n"A confident, well-dressed man walking powerfully through a busy modern lobby, looking straight ahead with intense focus, sharp suit, slow motion feel, cinematic, photorealistic --ar 4:5"`
            },
            { id: 't-thu-2', text: 'Responder comentarios y DMs' },
            { id: 't-thu-3', text: 'Revisar métricas parciales' }
        ],
        5: [ // Viernes
            { 
                id: 't-fri-1', 
                text: 'Publicar Reel: "La mentira del mejor amigo"',
                script: `[GUION PARA GRABAR]\nTítulo en pantalla: Por qué ser su amigo es el peor error 🚫\n\n"Creer que siendo su 'mejor amigo' y escuchando todos sus problemas sobre su ex te va a llevar a una relación... es la mayor mentira de Hollywood. Si la tratas como una amiga, te verá como una amiga. Tienes que polarizar. Muestra tu interés con elegancia. Es mejor recibir un 'no' temprano que perder 6 meses en la friendzone. Sígueme para salir de la friendzone para siempre."\n\n[COPIAR Y PEGAR EN DESCRIPCIÓN]\nUn hombre de alto valor no es un terapeuta gratuito. 🛋️❌\nOcultar tus intenciones por miedo a asustarla es el boleto VIP hacia la Friendzone. \n👉 Sígueme y aprende a comunicar tus intenciones con confianza y estatus.\n#CaballeroModerno #Friendzone #AtraerMujeres #Seduccion #AltoValor #ConsejosParaHombres #DesarrolloPersonal`
            },
            {
                id: 't-fri-fb',
                text: 'Publicar Post en Facebook (Copiar y Pegar)',
                script: `Deja de ser un Peón en un juego de Reyes ♟️👑\n\nLa mayoría de los hombres navegan las relaciones románticas como peones en un tablero de ajedrez: avanzan con miedo, son predecibles y su único objetivo es agradar al oponente esperando no ser eliminados. Ocultan sus intenciones románticas bajo el disfraz de "mejores amigos" por terror al rechazo, convirtiéndose en terapeutas emocionales no remunerados.\n\nUn hombre de alto valor no se conforma con las sobras de la atención. Polariza desde el principio. Comunica su interés de forma respetuosa pero firme. Si es rechazado, se retira con dignidad. Él controla su propio tablero y sabe que su tiempo y su energía no son para quienes solo lo ven como un respaldo.\n\n👉 Síguenos para empezar a pensar como el Rey y conquistar tus relaciones con verdadera inteligencia emocional.\n\n---\n🎨 PROMPT IMAGEN (Midjourney/DALL-E):\n"A sleek, cinematic close-up of a dark marble chessboard. A solitary black King piece stands tall and dominant, white pawns scattered. High contrast, elegant dark and gold color palette, photorealistic --ar 4:5"`
            },
            { id: 't-fri-2', text: 'Responder comentarios y DMs' }
        ],
        6: [ // Sábado
            { 
                id: 't-sat-1', 
                text: 'Publicar Reel: "El poder del contacto visual"',
                script: `[GUION PARA GRABAR]\nTítulo en pantalla: El secreto de la mirada magnética 👀\n\n"¿Sabías que sostener el contacto visual con una mujer por más de 3 segundos activa zonas de su cerebro relacionadas con la excitación y la intimidación? La mayoría de los hombres desvían la mirada porque se sienten intimidados por la belleza. Cuando tú sostienes la mirada con una sonrisa relajada, le dices: 'Soy un líder y no me asustas'. Sígueme para más secretos."\n\n[COPIAR Y PEGAR EN DESCRIPCIÓN]\nTu mirada dice más que mil frases para ligar. 👀🔥\nDominar el contacto visual es la forma más rápida de proyectar confianza absoluta y masculinidad.\n👉 Sígueme para dominar la seducción desde el respeto y el poder personal.\n#CaballeroModerno #ContactoVisual #LenguajeCorporal #Seduccion #Masculinidad #AtraerMujeres #AltoValor`
            },
            { id: 't-sat-2', text: 'Responder comentarios y DMs' }
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
