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
                text: 'Publicar Video Largo en YT: "El rechazo que cambió mi vida" (5:00 PM)',
                script: `[GUION PARA GRABAR YOUTUBE (3.5 mins)]
Título SEO: El peor rechazo de mi vida (Y por qué fue lo mejor que me pasó)

(0:00 - 0:30) Hook: "Hoy no te voy a dar tips de seducción. Hoy te voy a contar la historia del día que sentí que mi mundo se derrumbaba. Hace unos años, invité a salir a la mujer de mis sueños. Gasté la mitad de mi sueldo en una cena, me preparé por horas, y a la mitad de la noche, ella me dijo mirando su teléfono: 'Eres un gran chico, pero no te veo de esa forma, me aburro un poco'. Ese fue el día que toqué fondo, pero también el día que desperté."

(0:30 - 1:30) El error: "Por mucho tiempo intenté ser el 'chico perfecto'. Creía que si compraba cosas caras y era extremadamente complaciente, ella vería mi valor. Lo que no entendía es que la atracción no se compra con cenas, ni el respeto se gana diciendo que sí a todo. Yo no tenía un propósito de vida, mi propósito era ella. Y eso es lo menos atractivo que un hombre puede proyectar."

(1:30 - 2:30) El proceso: "Reconstruir mi confianza no fue como en las películas, donde vas al gimnasio y de repente eres un 'Macho Alfa'. Fue doloroso. Hubo días donde me sentía inferior. Pero empecé a documentar mis errores. Empecé a ir a terapia. Empecé a leer sobre estoicismo. Poco a poco dejé de actuar para gustarle a los demás y empecé a actuar para respetarme a mí mismo. El cambio no es de la noche a la mañana, es un proceso."

(2:30 - 3:30) La lección: "Si hoy estás pasando por un rechazo que te duele en el alma, quiero decirte que te entiendo. Todos hemos sido ese chico inseguro. No escondas tus errores debajo de la alfombra. Úsalos. Ese dolor es tu combustible para convertirte en el Caballero Moderno que estás destinado a ser. Si estás en este proceso, suscríbete. No estás solo, estamos construyendo esto juntos."`
            },
            { 
                id: 't-mon-2', 
                text: 'Publicar Reel: "Mi mayor error"',
                script: `[GUION PARA GRABAR - TIKTOK/IG/FB/YT SHORTS]
Título en pantalla: Mi peor error con las mujeres 🚫

"Durante años, cometí el peor error que un hombre puede cometer: intentar comprar el amor. Pensaba que si pagaba cenas caras y regalos, ella me vería como alguien de 'alto valor'. ¿El resultado? Me usaron por mi dinero y terminaron con chicos que no gastaban un centavo, pero que tenían confianza real. Me costó mucho tiempo entender que el estatus no está en tu billetera, está en cómo te valoras a ti mismo. Si estás cometiendo este error, detente. Empieza a invertir en ti. Sígueme, yo te enseño el camino."

[COPIAR Y PEGAR EN DESCRIPCIÓN]
Nadie respeta a un hombre que intenta sobornar a cambio de afecto. ❌
Te lo digo por experiencia propia. El verdadero valor se proyecta desde tu carácter, no desde tu tarjeta de crédito.
👉 Sígueme para dejar atrás los errores de novato.
#Storytime #DesarrolloPersonal #CaballeroModerno #MiHistoria #Seduccion`
            },
            {
                id: 't-mon-fb',
                text: 'Publicar Post en Facebook (Copiar y Pegar)',
                script: `El día que entendí que mi valor no estaba en mi billetera. 💸📉

Quiero ser brutalmente honesto con ustedes hoy. Hubo una época en la que yo era ese tipo: el que creía que una cena en un restaurante de cinco estrellas y regalos excesivos eran la clave para enamorar a una mujer. 

Lo hacía porque, en el fondo, me sentía insuficiente. Creía que mi personalidad por sí sola no era suficiente para retener la atención de nadie. Así que me escondía detrás del dinero. ¿Saben qué pasó? Atraía a personas que respetaban mis recursos, pero no me respetaban a mí. 

Desaprender ese hábito fue doloroso. Implicó enfrentarme al espejo y darme cuenta de que carecía de identidad y propósito. La transformación a un Caballero Moderno no ocurrió leyendo un libro mágico, ocurrió cuando decidí que la inversión más grande de mi vida sería en mi propio cerebro y en mi paz mental. 

A ti, que me lees y que sientes que tienes que darlo todo financieramente para ser notado: eres suficiente. Pero necesitas construir tu carácter.

👉 Únete a la comunidad de hombres que construyen valor real.

---\n🎨 PROMPT IMAGEN (Midjourney/DALL-E):\n"A highly cinematic image of a modern gentleman looking thoughtfully into a mirror in a dimly lit, elegant room. Reflecting on past mistakes, deep shadows, vulnerability, photorealistic --ar 4:5"`
            }
        ],
        2: [ // Martes
            { 
                id: 't-tue-1', 
                text: 'Publicar Reel: "No soy el Macho Alfa"',
                script: `[GUION PARA GRABAR - TIKTOK/IG/FB/YT SHORTS]
Título en pantalla: Renuncié a ser un "Macho Alfa" 🤫

"Cuando empecé a trabajar en mi confianza, consumí mucho contenido tóxico que me decía que tenía que ser un 'Macho Alfa' frío, tratar mal a la gente y nunca mostrar emociones. Lo intenté, y fue agotador. Fingir que nada te importa es la mayor muestra de inseguridad. Un verdadero Caballero Moderno llora cuando tiene que llorar, pide ayuda cuando no sabe algo, y es extremadamente cálido con los que ama. La verdadera fuerza es poder ser vulnerable sin perder el control. Sígueme para desmentir los mitos."

[COPIAR Y PEGAR EN DESCRIPCIÓN]
Fingir que eres una roca de hielo no es ser hombre, es ser un robot. 🤖❌
El proceso de sanar implica aceptar tus emociones, no suprimirlas. 
👉 Sígueme para entender la masculinidad desde un ángulo real y sano.
#Masculinidad #CaballeroModerno #MachoAlfa #Vulnerabilidad #DesarrolloPersonal`
            },
            {
                id: 't-tue-fb',
                text: 'Publicar Post en Facebook (Copiar y Pegar)',
                script: `La mentira del hombre que "no siente nada". 🎭

Durante meses intenté adoptar la personalidad del clásico "chico malo" estoico extremo que no se inmuta por nada. Creí que mostrar interés o vulnerabilidad me hacía débil. 

Ese fue uno de los periodos más oscuros y solitarios de mi proceso. Me di cuenta de que las personas siguen procesos, no muros inquebrantables. Al esconder mis fracasos y mis emociones, alejé a las conexiones genuinas (tanto amistades como mujeres). 

Hoy entiendo que el verdadero poder de un hombre radica en conocer sus demonios, hablar de ellos sin vergüenza y tener la inteligencia emocional para manejarlos. No somos robots; somos hombres construyendo nuestro imperio con cicatrices incluidas. 

👉 Síguenos si estás listo para construir una masculinidad auténtica y sin filtros.

---\n🎨 PROMPT IMAGEN (Midjourney/DALL-E):\n"A black and white cinematic portrait of a handsome man sitting alone, looking contemplative and human, breaking the tough guy stereotype, natural lighting, highly detailed --ar 4:5"`
            }
        ],
        3: [ // Miércoles
            { 
                id: 't-wed-1', 
                text: 'Publicar Reel: "El dolor del crecimiento"',
                script: `[GUION PARA GRABAR - TIKTOK/IG/FB/YT SHORTS]
Título en pantalla: Nadie te cuenta esta parte del proceso 📉

"Te venden que el crecimiento personal es hermoso. Te dicen que te despiertes a las 5 AM y todo será felicidad. Déjame contarte mi verdad: mi proceso ha estado lleno de ansiedad y recaídas. Hubo noches donde dudé de todo lo que estaba construyendo. Hubo semanas donde volví a caer en malos hábitos. Y eso está bien. El éxito no es una línea recta. Si hoy sientes que retrocediste, respira. Perdonarte es el paso número uno del crecimiento. Sígueme si quieres dejar de compararte con vidas falsas de internet."

[COPIAR Y PEGAR EN DESCRIPCIÓN]
Las redes sociales son un escaparate de victorias, casi nadie muestra el detrás de escena. 🎬❌
El proceso duele. Aceptarlo es tu mayor ventaja.
👉 Sígueme para acompañarnos en esta ruta.
#Proceso #MotivacionReal #CaballeroModerno #SaludMentalMasculina #Disciplina`
            },
            {
                id: 't-wed-fb',
                text: 'Publicar Post en Facebook (Copiar y Pegar)',
                script: `El crecimiento personal no es instagrameable. 📉

Vemos a "gurús" que parecen tener vidas perfectas, y cuando miramos nuestra propia lucha nos sentimos defectuosos. Quiero confesar algo: he tenido días donde aplazar la alarma y cancelar mis proyectos parecía la única opción. Días donde la disciplina me abandonó por completo.

Aprender a liderarte a ti mismo (y después a los demás) requiere fracasar brutalmente en el intento. La diferencia entre el hombre que yo era y el que soy hoy no es que ya no fracaso, sino que ya no me castigo durante semanas por haberlo hecho. 

Si esta semana te equivocaste, volviste a escribirle a tu ex, o rompiste tu dieta... sacúdete. Eres un ser humano en construcción, no un producto terminado. 

👉 Únete a nuestra comunidad donde documentamos el progreso real, no solo la perfección.

---\n🎨 PROMPT IMAGEN (Midjourney/DALL-E):\n"A realistic shot of a modern man rubbing his eyes tiredly while working late at night on a laptop, showing the real grind and fatigue of the process, moody lighting, photorealistic --ar 4:5"`
            }
        ],
        4: [ // Jueves
            { 
                id: 't-thu-1', 
                text: 'Publicar Reel: "Las mujeres no son trofeos"',
                script: `[GUION PARA GRABAR - TIKTOK/IG/FB/YT SHORTS]
Título en pantalla: Cómo arruinaba mis propias citas 🏆

"Hace años yo veía las citas como un videojuego. Tenía un guion, una lista de cosas que hacer para 'ganar' el afecto de la mujer. Actuaba. ¿Y sabes qué? Ellas lo notaban. Se daban cuenta de que yo no estaba ahí con ellas, yo estaba ahí con mi ego. Hasta que un día dejé de verlas como trofeos a conquistar y empecé a verlas como compañeras para compartir un buen rato. Ese simple cambio de paradigma hizo que mi atractivo se multiplicara por mil. Deja de intentar 'ganar'. Sígueme para más honestidad."

[COPIAR Y PEGAR EN DESCRIPCIÓN]
Cuando tratas de impresionar, demuestras que no te crees suficiente. 🤫🔥
Relájate. No es un examen, es una interacción entre dos humanos.
👉 Sígueme para aprender a disfrutar el proceso de conocer a alguien.
#Vulnerabilidad #CaballeroModerno #SeduccionReal #ErroresComunes #Citas`
            },
            {
                id: 't-thu-fb',
                text: 'Publicar Post en Facebook (Copiar y Pegar)',
                script: `El error de tratar las relaciones como una lista de tareas. 📝❌

Cuando empecé en el mundo de la mejora personal, cometí el grave error de mecanizar mis interacciones sociales. Analizaba cada palabra que decía una mujer, medía el tiempo exacto que tardaba en responderle un mensaje y ensayaba "rutinas" para parecer interesante.

Era una fachada agotadora. 
Descubrí, a base de golpes, que la autenticidad defectuosa es mil veces más magnética que la perfección ensayada. Cuando dejas caer la máscara de "seductor invencible" y te permites reírte de tus propios nervios o admitir que no sabes algo, creas una conexión emocional imposible de falsificar.

Las personas se enamoran de tu humanidad, no de tus tácticas.

👉 Síguenos para aprender a conectar desde la autenticidad y el alto valor real.

---\n🎨 PROMPT IMAGEN (Midjourney/DALL-E):\n"A cinematic image of a gentleman holding a torn-up piece of paper representing an old script, smiling naturally and genuinely at a cafe, showing authenticity, highly detailed --ar 4:5"`
            }
        ],
        5: [ // Viernes
            { 
                id: 't-fri-1', 
                text: 'Publicar Reel: "El día que dije BASTA"',
                script: `[GUION PARA GRABAR - TIKTOK/IG/FB/YT SHORTS]
Título en pantalla: El día que mis estándares cambiaron 🛑

"Recuerdo exactamente el día que mi vida cambió. Estaba esperando en un restaurante a una chica que llevaba una hora de retraso. Sin un mensaje de disculpa. En el pasado, yo la habría esperado y le habría restado importancia. Ese día, me levanté, pagué mi café y me fui. Al salir por esa puerta, mi autoestima subió de nivel de forma permanente. Aprendí que lo que toleras, es lo que te define. Si estás recibiendo migajas, es porque las estás aceptando. Sígueme y levanta tus estándares."

[COPIAR Y PEGAR EN DESCRIPCIÓN]
El límite lo pones tú, siempre. 🛋️❌
Es preferible estar solo y respetado, que acompañado pero humillado. Yo lo aprendí a la mala, tú puedes aprenderlo hoy.
👉 Sígueme para construir una columna vertebral de titanio.
#Limites #Autoestima #CaballeroModerno #Storytime #Estándares`
            },
            {
                id: 't-fri-fb',
                text: 'Publicar Post en Facebook (Copiar y Pegar)',
                script: `La anécdota que redefinió mis estándares para siempre. ♟️👑

Todos tenemos un punto de quiebre. El mío llegó cuando me di cuenta de que estaba invirtiendo más energía en justificar el mal comportamiento de las personas, que en protegerme a mí mismo. 

Aceptaba cancelaciones de última hora, conversaciones mediocres y faltas de respeto disfrazadas de "bromas". Toleraba todo esto porque temía la soledad. 

La soledad, hermanos, no es un castigo, es un taller de forja. Cuando decidí que prefería cenar solo en lugar de cenar con alguien que no valoraba mi tiempo, mi vida se transformó. Subir tus estándares asusta porque inicialmente perderás personas. Pero te aseguro que el espacio que dejan libre será ocupado por respeto, paz mental y relaciones de verdadera calidad.

👉 Síguenos si estás listo para dejar de aceptar menos de lo que mereces.

---\n🎨 PROMPT IMAGEN (Midjourney/DALL-E):\n"A powerful image of an elegant man walking out of a restaurant alone with a strong, determined, and peaceful look, leaving behind an empty table. Cinematic, empowering, 8k --ar 4:5"`
            }
        ],
        6: [ // Sábado
            { 
                id: 't-sat-1', 
                text: 'Publicar Reel: "Documentando el viaje"',
                script: `[GUION PARA GRABAR - TIKTOK/IG/FB/YT SHORTS]
Título en pantalla: Por qué hablo de mis fracasos 👀

"Muchos me preguntan por qué revelo mis inseguridades y errores en internet en lugar de fingir que tengo la vida perfecta. La respuesta es sencilla: estoy harto de ver cómo las redes sociales nos mienten. Yo no soy un gurú inalcanzable. Soy un tipo normal que cometió todos los errores posibles y decidió aprender de ellos. Si mi proceso te ahorra un año de sufrimiento, mi misión está cumplida. Gracias por estar aquí y formar parte de esta comunidad. Sígueme, esto apenas comienza."

[COPIAR Y PEGAR EN DESCRIPCIÓN]
No busco seguidores, busco construir una comunidad de hombres reales. 👀🔥
Gracias a todos los que me acompañan en este viaje. La vulnerabilidad es nuestra mayor fuerza.
👉 Sígueme para seguir creciendo juntos.
#Proceso #Comunidad #CaballeroModerno #Vulnerabilidad #Gratitud`
            },
            {
                id: 't-sat-fb',
                text: 'Publicar Post en Facebook (Copiar y Pegar)',
                script: `Detrás de la armadura: Por qué elegí documentar mis caídas. 💎

Las redes sociales se han convertido en un escaparate donde todos compiten por ver quién tiene menos problemas. He decidido no jugar a ese juego. 

He hablado de mis fracasos, de la época en la que mi autoestima dependía de un mensaje de texto, y de lo doloroso que ha sido desaprender mis comportamientos tóxicos. Y saben qué es lo más loco... al desnudar mi proceso frente a ustedes, me he vuelto más fuerte que nunca.

Las personas no se inspiran con el perfeccionismo falso; se inspiran al ver a alguien caer al barro, levantarse lleno de cicatrices y seguir caminando. 

Quiero agradecerles a cada uno de ustedes por leer, comentar y ser parte de esta tribu. El Caballero Moderno no nace perfecto, se forja en el fuego del error y la reflexión.

👉 Únete a nosotros si crees en el poder de la mejora continua.

---\n🎨 PROMPT IMAGEN (Midjourney/DALL-E):\n"A warm, inviting shot of a modern gentleman looking directly into the camera with a genuine, humble smile, writing in a journal at a rustic desk. Cinematic morning light, photorealistic, intimate --ar 4:5"`
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
