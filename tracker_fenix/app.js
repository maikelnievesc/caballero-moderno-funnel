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
                text: 'Publicar Video Largo en YT: "Contacto Cero: El Error que todos cometen" (5:00 PM)',
                script: `[GUION PARA GRABAR YOUTUBE (3.5 mins)]
Título SEO: Por qué el Contacto Cero NO funciona si cometes este error (Recupera tu poder)

(0:00 - 0:30) Hook: "Te acaban de rechazar o de pedir 'tiempo'. Todo el mundo en internet te dice: '¡Aplica el contacto cero! ¡Ignórala por 30 días!'. Así que lo haces. No le escribes. Pero te pasas esos 30 días revisando sus historias desde cuentas falsas, mirando si está en línea en WhatsApp, y tu vida gira en torno a su ausencia. Hermano, si haces eso, el contacto cero no sirve de nada. Hoy te voy a explicar la verdadera psicología detrás de desaparecer y cómo recuperar tu poder."

(0:30 - 1:30) El problema: "El 99% de los hombres usa el contacto cero como una técnica de manipulación. Creen que es un botón mágico que hará que ella los extrañe. Pero las mujeres tienen un radar infalible para la energía. Si tú no le hablas, pero estás desesperado, vibrando en escasez, ella lo va a sentir. Cuando reaparezcas a los 30 días, seguirás siendo el mismo hombre inseguro del que se alejó. El objetivo del contacto cero no es que ella cambie, es que TÚ cambies."

(1:30 - 2:30) La Verdadera Regla: "El verdadero contacto cero significa 'Desintoxicación Emocional'. Durante este periodo, su existencia debe volverse irrelevante para tu crecimiento. ¿Qué significa esto? Bloqueas o silencias todo. Te inscribes en ese curso que postergaste, te matas en el gimnasio, empiezas a leer sobre estoicismo. Cada vez que tengas ganas de escribirle, escribes en tu diario o le hablas a un mentor. Tienes que matar la versión tuya que dependía de su validación."

(2:30 - 3:30) El resultado: "Si haces esto bien, pasarán dos cosas. Opción A: Ella nota la retirada real de tu energía, siente el vacío absoluto de tu atención (que antes tenía garantizada) y regresa a buscarte. Opción B: Tú creces tanto en este proceso que, cuando pasen los 30 días, te das cuenta de que ya no la quieres en tu vida porque tus estándares subieron. Cualquiera de las dos es una victoria absoluta. Recuperaste el trono. Suscríbete si quieres dominar tus emociones."`
            },
            { 
                id: 't-mon-2', 
                text: 'Publicar Reel: "El falso contacto cero"',
                script: `[GUION PARA GRABAR - TIKTOK/IG/FB/YT SHORTS]
Título en pantalla: El peor error del Contacto Cero 🚫

"Si le aplicas contacto cero pero ves todas sus historias a los 5 minutos de publicadas... no estás haciendo contacto cero, estás haciendo el ridículo en silencio. El contacto cero no es una estrategia para que te extrañe, es un periodo de desintoxicación para que recuperes tu maldita dignidad. Si tu energía sigue enfocada en ella, no sirve. Silénciala, enfócate en tus metas y desaparece de verdad. Sígueme para recuperar tu poder."

[COPIAR Y PEGAR EN DESCRIPCIÓN]
El verdadero poder está en quitarle tu atención, no solo tus mensajes. 🛑🔥
Si sigues orbitando su vida digital, le sigues dando validación gratuita. 
👉 Asegúrate de usar el botón de "Silenciar" y pon el foco en ti. Sígueme para más.
#ContactoCero #Ruptura #CaballeroModerno #PsicologiaOscura #DesarrolloPersonal #Masculinidad`
            },
            {
                id: 't-mon-fb',
                text: 'Publicar Post en Facebook (Copiar y Pegar)',
                script: `El "Contacto Cero" que te enseñan en internet es una mentira manipuladora. ❌🤫

Muchos hombres aplican la regla de los 30 días esperando ansiosamente junto al teléfono, contando las horas, imaginando qué estará haciendo ella. Creen que el simple acto de no enviar mensajes de texto es suficiente para crear atracción. Esto es un error brutal.

El verdadero contacto cero es una declaración de guerra contra tu propia dependencia emocional. Es decirle a tu cerebro: "Mi paz mental y mi misión en la vida son mil veces más importantes que la validación de otra persona". No se trata de castigarla a ella con tu ausencia; se trata de premiarte a ti mismo con tu presencia. 

Si te acaban de rechazar, retira tu atención por completo. No mires sus redes. No preguntes por ella. Invierte esa energía en construir un imperio personal tan grande que su ausencia sea solo una nota a pie de página en tu historia de éxito.

👉 Únete a la comunidad de hombres que construyen desde el valor, no desde la necesidad.

---\n🎨 PROMPT IMAGEN (Midjourney/DALL-E):\n"A highly cinematic, photorealistic image of a sophisticated man walking away from a shattered glass phone screen reflecting a blurred figure, stepping into a bright, golden, inspiring horizon. Symbolizing moving on and self-focus, hyper-detailed, 8k --ar 4:5"`
            }
        ],
        2: [ // Martes
            { 
                id: 't-tue-1', 
                text: 'Publicar Reel: "Por qué te rechazó"',
                script: `[GUION PARA GRABAR - TIKTOK/IG/FB/YT SHORTS]
Título en pantalla: La cruda verdad sobre su rechazo 💔

"¿Quieres saber por qué te dejó o te rechazó? No fue por el dinero, ni por tu físico. Te rechazó porque te volviste predecible y perdiste tu centro. Empezaste a dejar tus hobbies para verla, le respondías a los dos segundos y la convertiste en tu único propósito. A ninguna mujer de alto valor le excita ser el centro de la vida de un hombre sin metas. Recupera tu propósito. Sígueme para entender la atracción real."

[COPIAR Y PEGAR EN DESCRIPCIÓN]
El exceso de disponibilidad destruye el deseo. 🚫📱
Cuando haces de una mujer tu mundo, ella pierde el interés de habitarlo.
👉 Sígueme para aprender a balancear tu vida y tus relaciones.
#Rechazo #ContactoCero #CaballeroModerno #Seduccion #AltoValor`
            },
            {
                id: 't-tue-fb',
                text: 'Publicar Post en Facebook (Copiar y Pegar)',
                script: `La anatomía de un rechazo: Por qué el exceso de interés destruye la atracción. 📵👇

La paradoja más dolorosa para el hombre moderno es descubrir que darlo todo, estar siempre disponible y ser el "hombre perfecto", a menudo resulta en un "no eres tú, soy yo". 

La atracción femenina requiere tensión, espacio y un grado de misterio. Cuando abandonas tu propósito, tus hobbies y a tus amigos para orbitar su vida, pasas de ser un reto estimulante a una carga predecible. La devoción absoluta, cuando no ha sido ganada a través del tiempo y el compromiso mutuo, se percibe biológicamente como debilidad.

Para recuperar tu poder hoy mismo: retoma el control de tu agenda. Que ella tenga que encajar en tu vida, no que tu vida se pause para encajar en la suya. 

👉 Síguenos si estás listo para dejar de mendigar atención y empezar a proyectar estatus real.

---\n🎨 PROMPT IMAGEN (Midjourney/DALL-E):\n"A split image. Left: a man looking desperate at his glowing phone in the dark. Right: A modern gentleman confidently reading a book in an upscale lounge, ignoring his phone. High contrast, cinematic, photorealistic --ar 4:5"`
            }
        ],
        3: [ // Miércoles
            { 
                id: 't-wed-1', 
                text: 'Publicar Reel: "El poder del silencio"',
                script: `[GUION PARA GRABAR - TIKTOK/IG/FB/YT SHORTS]
Título en pantalla: Tu silencio es tu mejor respuesta 🤫

"Cuando ella te dice que 'no está lista' o que 'solo quiere amistad', el 90% de los hombres intentan convencerla lógicamente o le reclaman. Error fatal. El 10% de los hombres simplemente dice 'Entiendo, que te vaya increíble', da la media vuelta y nunca más vuelve a escribir. Ese silencio ensordecedor es la mayor demostración de alto valor que puedes dar. Demuestra que no dependes de nadie. Sígueme para más estoicismo."

[COPIAR Y PEGAR EN DESCRIPCIÓN]
No intentes negociar la atracción. 🛑
Tu retirada silenciosa y digna genera más impacto que mil mensajes rogando por una oportunidad.
👉 Sígueme y conviértete en un maestro del autocontrol.
#Estoicismo #CaballeroModerno #Silencio #ContactoCero #Mentalidad`
            },
            {
                id: 't-wed-fb',
                text: 'Publicar Post en Facebook (Copiar y Pegar)',
                script: `El arma más poderosa del Caballero Moderno después de un rechazo: El Silencio Absoluto. 🤫♟️

Cuando eres rechazado, tu ego entra en pánico. Te pide que mandes ese párrafo de tres hojas por WhatsApp explicando tus sentimientos, o peor aún, tratando de hacerla sentir culpable. 

Detente. Las palabras en ese momento comunican baja inteligencia emocional. 
El silencio, por otro lado, comunica un mensaje devastadoramente atractivo: "Mi valor no disminuye por tu incapacidad de verlo". Al aceptar un "no" con una sonrisa relajada y desaparecer, rompes el guion que ella esperaba. Ella esperaba dramas, ruegos o insultos. Al darle vacío, plantas la semilla de la duda y, lo más importante, retienes tu dignidad intacta.

Elige siempre el respeto propio por encima del cierre emocional.

👉 Síguenos para aprender a dominar tus emociones en los momentos más críticos.

---\n🎨 PROMPT IMAGEN (Midjourney/DALL-E):\n"A close-up of an elegant, serene man slightly smiling while looking away, conveying absolute calm and stoicism. Dark cinematic background, highly detailed facial features, photorealistic --ar 4:5"`
            }
        ],
        4: [ // Jueves
            { 
                id: 't-thu-1', 
                text: 'Publicar Reel: "Qué hacer si te busca"',
                script: `[GUION PARA GRABAR - TIKTOK/IG/FB/YT SHORTS]
Título en pantalla: Qué hacer cuando ella regresa ♟️

"Aplicaste el contacto cero y, de repente, un mensaje de ella a las 10 PM: 'Hola, ¿cómo estás?'. Si le respondes al instante emocionado, acabas de tirar todo a la basura. Está tanteando el terreno para ver si sigues en la palma de su mano. Tarda horas en responder, sé amable pero cortante, y no la invites a salir de inmediato. Que invierta esfuerzo. Tu tiempo es un premio. Sígueme para dominar el juego a largo plazo."

[COPIAR Y PEGAR EN DESCRIPCIÓN]
El regreso no significa que ganaste. 🤫🔥
Es una prueba. Si te muestras demasiado ansioso, perderá el interés tan rápido como apareció. Mantén el marco.
👉 Sígueme para no arruinar tus oportunidades.
#ContactoCero #Ex #CaballeroModerno #Masculinidad #Seduccion`
            },
            {
                id: 't-thu-fb',
                text: 'Publicar Post en Facebook (Copiar y Pegar)',
                script: `La Prueba Final del Contacto Cero: El mensaje de "Hola, me acordé de ti". 📱🎣

Muchos hombres logran sostener el contacto cero por semanas, construyen su vida y avanzan. Pero en cuanto reciben esa famosa migaja de atención (un like, un 'jaja' a una historia, o un mensaje casual), tiran su progreso por la ventana, respondiendo en 5 segundos y pidiéndole una cita.

Entiende esto: ese mensaje no es una declaración de amor, es un radar. Ella quiere verificar si su ego aún tiene acceso a tu atención gratuita. 

La respuesta de un hombre de alto estatus es demorada, educada, breve y sin hacer preguntas de vuelta. (Ej: 'Hola, todo excelente por acá, muy ocupado con proyectos. ¡Espero que estés bien!'). No premias un comportamiento ambiguo con tu validación total. Haz que se gane su lugar de vuelta.

👉 Síguenos para descubrir cómo establecer límites de hierro que generen respeto absoluto.

---\n🎨 PROMPT IMAGEN (Midjourney/DALL-E):\n"A sophisticated man looking at his glowing smartphone with a neutral, uninterested expression while working on a laptop in a luxury office. Cinematic lighting, photorealistic --ar 4:5"`
            }
        ],
        5: [ // Viernes
            { 
                id: 't-fri-1', 
                text: 'Publicar Reel: "Mejorar tus estándares"',
                script: `[GUION PARA GRABAR - TIKTOK/IG/FB/YT SHORTS]
Título en pantalla: Tu error no fue amarla, fue idealizarla 🚫

"Después de un rechazo, tu cerebro te engaña haciéndote creer que perdiste a un ser humano perfecto e irremplazable. Falso. La estabas mirando a través de los lentes de la escasez. Quítala del pedestal. Seguramente era impuntual, caprichosa o no aportaba nada más que belleza. Empieza a subir tus estándares. Un hombre de verdad se enamora del carácter, no solo del físico. Sígueme y aprende a elegir mejor."

[COPIAR Y PEGAR EN DESCRIPCIÓN]
El pedestal en el que la pones es el mismo desde donde te mira hacia abajo. 🛋️❌
La idealización nace de la falta de opciones. Trabaja en ti mismo y tus opciones se multiplicarán.
👉 Sígueme y aprende a no conformarte.
#CaballeroModerno #Abundancia #Estandares #ConsejosParaHombres`
            },
            {
                id: 't-fri-fb',
                text: 'Publicar Post en Facebook (Copiar y Pegar)',
                script: `La trampa de la idealización post-ruptura. ♟️👑

Cuando sufrimos un rechazo, nuestra memoria se vuelve selectiva. Solo recordamos su sonrisa, el olor de su perfume y las cosas buenas. Olvidamos convenientemente sus dramas, su falta de iniciativa, o que no compartía nuestros valores más profundos. 

Esta idealización ocurre porque operamos desde la escasez mental. Creemos erróneamente que "nunca encontraremos a nadie igual". Y es cierto, no encontrarás a nadie igual, encontrarás a alguien MEJOR, pero solo si tú te conviertes en un hombre mejor.

Baja a esa persona del pedestal. El único que pertenece en un pedestal en tu propia vida, eres tú y tu propósito. Exige lealtad, paz mental y compañerismo en tus futuras relaciones.

👉 Síguenos para reconstruir tu mentalidad desde la abundancia, no desde la carencia.

---\n🎨 PROMPT IMAGEN (Midjourney/DALL-E):\n"A powerful visual metaphor: A man smashing a golden pedestal with a sledgehammer, confident and strong. Cinematic dust and lighting, dark background, photorealistic --ar 4:5"`
            }
        ],
        6: [ // Sábado
            { 
                id: 't-sat-1', 
                text: 'Publicar Reel: "Abundancia real"',
                script: `[GUION PARA GRABAR - TIKTOK/IG/FB/YT SHORTS]
Título en pantalla: Cómo volverte inmune al rechazo 👀

"¿Sabes cuál es el antídoto contra el dolor del rechazo? La abundancia. Y no me refiero a tener 20 mujeres escribiéndote. La abundancia real es tener metas que te apasionan, dinero en tu cuenta, salud física de hierro y un círculo de amigos leales. Cuando tu vida es un 10 sobre 10 estando solo, el rechazo de una mujer ya no te destruye, solo es un pequeño inconveniente. Sígueme para construir una vida épica."

[COPIAR Y PEGAR EN DESCRIPCIÓN]
La inmunidad emocional se construye fuera de las relaciones. 👀🔥
Si tu felicidad depende de que ella te responda el mensaje, eres un esclavo. 
👉 Sígueme para romper las cadenas de la dependencia.
#CaballeroModerno #Abundancia #DesarrolloPersonal #Confianza`
            },
            {
                id: 't-sat-fb',
                text: 'Publicar Post en Facebook (Copiar y Pegar)',
                script: `La Abundancia Real no es lo que te han vendido. 💎

Muchos gurús te dicen que para superar un rechazo debes buscar validación inmediata en otras mujeres. Usar a otras personas como tiritas emocionales solo demuestra lo frágil que es tu ego.

La verdadera abundancia es holística. Es saber que tienes la disciplina para levantar pesas 5 veces por semana. Es la tranquilidad de tus finanzas en orden. Es la sabiduría que estás adquiriendo al leer libros difíciles. Es la paz de sentarte solo en una cafetería y sentirte completo.

Cuando operas desde esta abundancia real, te vuelves inquebrantable. Ya no buscas a una pareja para que "te complete" ni para tapar tus vacíos, la buscas para compartir tu plenitud. Y créeme, esa energía es la más magnética que un hombre puede proyectar.

👉 Únete a la rebelión de hombres que están recuperando su control total. Síguenos.

---\n🎨 PROMPT IMAGEN (Midjourney/DALL-E):\n"A highly successful and calm man enjoying an espresso alone in a beautiful aesthetic cafe, reading a thick book, perfectly content, warm cinematic lighting, photorealistic --ar 4:5"`
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
