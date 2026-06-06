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
                text: 'Publicar Reel: "Auditoría de tu vida (El doloroso primer paso)"',
                script: `Título en pantalla: El doloroso primer paso para atraer mujeres 🛑\n\n"Deja de intentar entrar en la vida de ella y empieza a construir una vida a la que ella quiera unirse. Si tus fines de semana se resumen en jugar videojuegos solo y no tienes pasiones, ninguna 'frase para ligar' te va a salvar. Vuélvete fascinante primero. ¿No sabes por dónde empezar? Ve a mi perfil y descarga el Escáner Magnético, ahí te doy la estructura base."`
            },
            {
                id: 't-sun-fb',
                text: 'Publicar Post en Facebook (Copiar y Pegar)',
                script: `¿Cansado de que la chica que te gusta te vea solo como un amigo? Deja de intentar entrar en su vida y empieza a construir una vida tan fascinante que ella quiera unirse a la tuya. Si tus fines de semana se resumen en videojuegos y no tienes propósito, ninguna "frase" te va a salvar.\n\nHe documentado exactamente cómo transformar tu mentalidad y volverte un hombre magnético en este manual. Léelo aquí:\n👉 ${linkVentas}\n\n---\n🎨 PROMPT PARA GENERAR IMAGEN EN IA (Midjourney/DALL-E):\n"Cinematic shot of a confident man walking away from a glowing smartphone screen, stepping into a vibrant and exciting city night, neon lights, high contrast, photorealistic --ar 4:5"`
            },
            { id: 't-sun-2', text: 'Preparar y agendar métricas semanales' },
            { id: 't-sun-3', text: 'Atender chats de WhatsApp (Cierres semanales)' }
        ],
        1: [ // Lunes
            { 
                id: 't-mon-1', 
                text: 'Publicar Video Largo en YT: "El Mito del Chico Bueno" (5:00 PM)',
                script: `Título SEO: Por qué ser el "Chico Bueno" te deja en la Friendzone (La Verdad Psicológica)\n\n"¿Alguna vez has invitado a salir a una chica, pagaste la cena, fuiste un caballero absoluto... y al final te dijo 'te veo como un amigo' o simplemente dejó de responderte? Si esto te pasa seguido, sufres del Síndrome del Chico Bueno.\n\nNos han enseñado una mentira: que el afecto es transaccional. Creemos que si somos lo suficientemente amables, si invertimos tiempo y dinero, ellas nos 'recompensarán' con amor o atracción. Pero la neurobiología no funciona así.\n\nLa atracción no es una decisión lógica, es un mecanismo instintivo. Cuando eres demasiado complaciente, cuando siempre estás disponible y nunca dices que 'no', le estás comunicando a su cerebro subconsciente dos cosas mortales: Primera, que no tienes opciones (escasez). Y segunda, que tu validación no tiene valor porque se la das a cambio de nada.\n\nLas mujeres de alto valor no quieren a un fan que les dé la razón en todo; quieren a un líder que tenga su propia vida, su propio propósito y que no tenga miedo de perderlas por decir lo que piensa.\n\nA partir de hoy, elimina el 'afecto transaccional'. No compres su atención. Invierte en ti, construye un estilo de vida que tú mismo disfrutes y deja que ellas sean las que quieran unirse a tu mundo, y no al revés.\n\nSi quieres la hoja de ruta exacta paso a paso para hacer esta transición, ve al enlace en la descripción y descarga gratis 'El Escáner Magnético'. Ahí te explico exactamente qué cambiar hoy."`
            },
            { 
                id: 't-mon-2', 
                text: 'Publicar Reel: "El contrato invisible (Error de Friendzone)"',
                script: `Título en pantalla: El error que te manda a la friendzone 🚫\n\n"El error número uno que cometes con las mujeres es creer que el afecto es transaccional. Piensas: 'Si la escucho durante horas, le pago la salida y soy súper amable, ella me dará su amor'. Falso. Eso no genera atracción, genera lástima o amistad. La atracción nace de la polaridad y el respeto, no de comprar su atención. Descarga mi guía gratuita en el link de mi perfil para aprender cómo generar atracción real."`
            },
            {
                id: 't-mon-fb',
                text: 'Publicar Post en Facebook (Copiar y Pegar)',
                script: `El error número UNO que te manda a la friendzone: Creer que el afecto se compra. \n\nSi piensas que por invitarle la cena, escucharla quejarse de su ex durante horas y ser el "chico bueno" ella se va a enamorar, estás equivocado. La atracción no se negocia lógicamente, es un instinto. Cuando eres demasiado complaciente, tu valor cae a cero.\n\nAprende a hackear la atracción y proyectar alto estatus (sin ser un idiota) en El Playbook del Conquistador. Consíguelo aquí y cambia tus resultados hoy:\n👉 ${linkVentas}\n\n---\n🎨 PROMPT PARA GENERAR IMAGEN EN IA (Midjourney/DALL-E):\n"A split screen composition. On the left, a sad man holding an expensive bouquet of roses in the rain. On the right, a confident, relaxed man laughing with a beautiful woman in a casual aesthetic coffee shop, cinematic lighting, photorealistic --ar 4:5"`
            },
            { id: 't-mon-3', text: 'Responder comentarios y DMs' },
            { id: 't-mon-4', text: 'Atender chats de WhatsApp' }
        ],
        2: [ // Martes
            { 
                id: 't-tue-1', 
                text: 'Publicar Reel: "Ceguera Digital en Instagram"',
                script: `Título en pantalla: Por qué las mujeres atractivas te ignoran en Instagram 📱\n\n"Si le envías mensajes a chicas lindas en Instagram y te dejan en visto, sufres de 'Ceguera Digital'. Eres uno más de los 50 chicos buenos en sus DMs diciéndole 'qué hermosa estás'. Para destacar, tienes que hackear el patrón. No des validación gratuita. Haz una suposición sobre ella en lugar de una pregunta aburrida. Aprende cómo abrir conversaciones magnéticas con el PDF gratuito en mi bio."`
            },
            {
                id: 't-tue-fb',
                text: 'Publicar Post en Facebook (Copiar y Pegar)',
                script: `¿Por qué las mujeres atractivas te dejan en VISTO en Instagram y WhatsApp?\n\nSe llama 'Ceguera Digital'. Eres el mensaje número 50 del día diciéndole "qué hermosa estás" o mandándole un fueguito. Si quieres destacar, tienes que romper el patrón. No hagas preguntas aburridas de entrevista, haz suposiciones. Crea tensión.\n\nEn mi nuevo Ebook te doy los abridores exactos tipo "Francotirador" para tener un 90% de respuesta. Léelo aquí:\n👉 ${linkVentas}\n\n---\n🎨 PROMPT PARA GENERAR IMAGEN EN IA (Midjourney/DALL-E):\n"A beautiful woman looking bored while scrolling through her smartphone, hundreds of unread message notification bubbles floating around her in the air, glowing screen reflection on her face, cinematic, highly detailed --ar 4:5"`
            },
            { id: 't-tue-3', text: 'Responder comentarios y DMs' }
        ],
        3: [ // Miércoles
            { 
                id: 't-wed-1', 
                text: 'Publicar Reel: "El Propósito (Lo más atractivo de un hombre)"',
                script: `Título en pantalla: Lo más atractivo que puede tener un hombre 🚀\n\n"Lo más atractivo que puede tener un hombre no es dinero ni un auto de lujo. Es estar obsesionado con un propósito. Cuando tu centro gravitacional es tu misión de vida y no una mujer, automáticamente te vuelves magnético. Dejas de estar desesperado por su atención, y la neurociencia dice que el cerebro humano persigue aquello que no puede controlar fácilmente. Enfócate en ti."`
            },
            {
                id: 't-wed-fb',
                text: 'Publicar Post en Facebook (Copiar y Pegar)',
                script: `Lo más atractivo que puede tener un hombre NO ES el dinero ni el físico.\n\nEs estar obsesionado con un PROPÓSITO. Cuando tu centro gravitacional es tu misión de vida y no rogarle a una mujer, te vuelves magnético automáticamente. Tu vibra cambia de "necesitado" a "líder".\n\nSi quieres aprender el sistema para construir este estatus interno y navegar el mundo de las citas modernas como un Rey, necesitas leer esto:\n👉 ${linkVentas}\n\n---\n🎨 PROMPT PARA GENERAR IMAGEN EN IA (Midjourney/DALL-E):\n"A driven, focused man working passionately at a creative desk, completely immersed in his craft, warm ambient lighting, high status, elegant dark aesthetic, highly detailed, photorealistic --ar 4:5"`
            },
            { id: 't-wed-2', text: 'Responder comentarios y DMs' },
            { id: 't-wed-3', text: 'Atender chats de WhatsApp' }
        ],
        4: [ // Jueves
            { 
                id: 't-thu-1', 
                text: 'Publicar Reel: "Abundancia vs Escasez (Truco del valor)"',
                script: `Título en pantalla: El truco psicológico del valor 💎\n\n"¿Por qué el oro vale tanto y la arena no vale nada? Por la escasez. Si estás siempre disponible para ella, respondes en un segundo y cancelas tus planes para verla, tu valor cae a cero. Operar desde la escasez huele a desesperación. Tu tiempo debe ser caro. Si quieres saber cómo proyectar verdadero alto estatus sin fingir, lee mi libro 'El Escáner Magnético'. Link en mi perfil."`
            },
            {
                id: 't-thu-fb',
                text: 'Publicar Post en Facebook (Copiar y Pegar)',
                script: `El truco psicológico del valor:\n\n¿Por qué el oro vale tanto y la arena no? Escasez.\nSi siempre estás disponible para ella, respondes sus mensajes en 1 segundo y cancelas tus planes solo por verla... tu valor se va al suelo. A nadie le gusta lo que se regala fácil. Tu tiempo tiene que ser un premio.\n\nDescubre cómo hackear esta psicología a tu favor y volverte un hombre de alto valor percibido en mi Playbook:\n👉 ${linkVentas}\n\n---\n🎨 PROMPT PARA GENERAR IMAGEN EN IA (Midjourney/DALL-E):\n"A cinematic macro shot of a single, glowing golden diamond resting on a pile of common grey sand, dramatic lighting, high contrast, symbol of value and scarcity, photorealistic --ar 4:5"`
            },
            { id: 't-thu-2', text: 'Responder comentarios y DMs' },
            { id: 't-thu-3', text: 'Revisar métricas parciales' }
        ],
        5: [ // Viernes
            { 
                id: 't-fri-1', 
                text: 'Publicar Reel: "Lenguaje Corporal (Estatus inmediato)"',
                script: `Título en pantalla: Haz esto y proyecta estatus de inmediato 🧍‍♂️\n\n"Antes de que digas 'hola', ella ya decidió si le atraes o no. ¿Cómo? Por tu lenguaje corporal. Los hombres inseguros se comprimen, cruzan los brazos, encorvan los hombros y evitan contacto visual. Un Caballero Moderno se expande. Ocupa su espacio, tiene movimientos lentos y mantiene la mirada. Hackea tu lenguaje corporal hoy y verás cómo cambia la forma en que te tratan. Sígueme para más."`
            },
            {
                id: 't-fri-fb',
                text: 'Publicar Post en Facebook (Copiar y Pegar)',
                script: `Antes de que digas la primera palabra, ella ya decidió si le atraes o no.\n\n¿Cómo? Tu lenguaje corporal. El "chico bueno" encorva los hombros, cruza los brazos y desvía la mirada. El Caballero Moderno se expande, ocupa su espacio y domina el silencio. El estatus se comunica en silencio.\n\nConoce las tácticas de neuro-lenguaje corporal y presencia magnética en mi libro:\n👉 ${linkVentas}\n\n---\n🎨 PROMPT PARA GENERAR IMAGEN EN IA (Midjourney/DALL-E):\n"A confident, attractive man sitting in a luxury lounge, occupying his space naturally, relaxed expansive posture, wearing a stylish dark suit, dark mood lighting, premium aesthetic, making direct eye contact with the camera, photorealistic --ar 4:5"`
            },
            { id: 't-fri-3', text: 'Atender chats de WhatsApp para fines de semana' }
        ],
        6: [ // Sábado
            { 
                id: 't-sat-1', 
                text: 'Publicar Reel: "Desapego al Resultado (Superpoder social)"',
                script: `Título en pantalla: El superpoder social de los hombres de alto valor 🦸‍♂️\n\n"El mayor superpoder social es el desapego al resultado. Es decir, ir a una cita o hablarle a una chica sin necesitar que termine en un 'sí'. Si vas con el objetivo de 'sacarle el número' a toda costa, ella olerá la ansiedad. Si vas con el objetivo de divertirte tú mismo, te vuelves impredecible y relajado. Y adivina qué... esa es exactamente la vibra que más las atrae."`
            },
            {
                id: 't-sat-fb',
                text: 'Publicar Post en Facebook (Copiar y Pegar)',
                script: `El mayor SUPERPODER social que puedes desarrollar: El Desapego al Resultado.\n\nSi sales con chicas pensando "necesito que me dé su número" o "necesito que me acepte", hueles a desesperación. Si sales a DIVERTIRTE TÚ, te vuelves impredecible y relajado. Esa es la vibra que vuelve locas a las mujeres.\n\nAprende a construir una mentalidad invencible frente al rechazo con El Playbook del Conquistador:\n👉 ${linkVentas}\n\n---\n🎨 PROMPT PARA GENERAR IMAGEN EN IA (Midjourney/DALL-E):\n"A charismatic man smiling genuinely and looking completely relaxed and unbothered, sitting at a high-end cocktail bar, soft bokeh background, warm ambient lighting, highly attractive aura, photorealistic --ar 4:5"`
            },
            { id: 't-sat-2', text: 'Descansar / Cierres orgánicos pasivos' }
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
            const isChecked = localStorage.getItem(task.id) === 'true';
            
            const div = document.createElement('div');
            div.className = 'task-item';
            
            const input = document.createElement('input');
            input.type = 'checkbox';
            input.id = task.id;
            input.checked = isChecked;
            
            input.addEventListener('change', (e) => {
                localStorage.setItem(task.id, e.target.checked);
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
            localStorage.setItem(task.id, 'false');
        });
        updateDayView();
        showToast('Tareas del día reiniciadas.');
    });

    // --- 2. Weekly Metrics Data ---
    const metricsIds = ['tk-start', 'tk-end', 'ig-start', 'ig-end', 'sales-ebook', 'sales-course', 'wa-chats'];
    
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
                <td>${record.waChats}</td>
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
        const waChats = parseInt(document.getElementById('wa-chats').value || 0);

        const record = {
            week: currentWeekRange,
            tkGrowth,
            igGrowth,
            sEbook,
            sCourse,
            waChats
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
            if(localStorage.getItem(t.id) === 'true') completed++;
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
        const waChats = document.getElementById('wa-chats').value || 0;
        
        const notes = localStorage.getItem('fenix-notes') || 'Ninguna';

        const exportText = `--- REPORTE DE FÉNIX COMMAND CENTER ---
✅ Tareas Diarias Completadas (${fDate}): ${completed}/${todaysTasks.length}

📊 Métricas Actuales (Semana ${currentWeekRange}):
- Crecimiento TikTok: +${tkGrowth} (De ${tkStart} a ${tkEnd})
- Crecimiento Instagram: +${igGrowth} (De ${igStart} a ${igEnd})
- Interacciones WhatsApp Iniciadas: ${waChats}
- Ventas Tripwire (Ebook): ${sEbook}
- Ventas Core (Curso): ${sCourse}

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
