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
                text: 'Publicar Video Largo en YT: "La trampa de las apps de citas" (5:00 PM)',
                script: `[GUION PARA GRABAR YOUTUBE (3.5 mins)]
Título SEO: Por qué no tienes matches en Tinder (La verdad del Algoritmo)

(0:00 - 0:30) Hook: "Si crees que no tienes éxito en las apps de citas porque eres feo o pobre, te están mintiendo. El problema no eres tú, es un modelo de negocio. Hoy vamos a hablar de cómo las aplicaciones de citas están diseñadas matemáticamente para mantenerte soltero, adicto a la pantalla y comprando suscripciones premium. Si usas estas apps, necesitas entender esto hoy mismo."

(0:30 - 1:30) El Algoritmo: "Tinder y Bumble no son ONGs para que encuentres el amor. Son casinos de dopamina. El algoritmo castiga a los hombres que deslizan a la derecha en todos los perfiles (el 80% de nosotros) enviando tu perfil al fondo del pozo. Estás jugando un juego donde la casa siempre gana. Al estar en la sombra del algoritmo, tu autoestima se desploma porque crees que nadie te elige."

(1:30 - 2:30) La Ilusión de Opciones: "Para las mujeres, la experiencia es diferente pero igual de tóxica. La sobreestimulación de tener miles de matches crea la 'Paradoja de la Elección'. Siempre creen que hay alguien mejor a un 'swipe' de distancia. Esto destruye su capacidad para conectar genuinamente con un buen hombre cuando lo tienen enfrente."

(2:30 - 3:30) La Solución: "Sal de la Matrix. El 99% de los hombres están compitiendo en una pantalla de 6 pulgadas. El Caballero Moderno compite en el mundo real. Aprende a acercarte en un café, en una librería, en el gimnasio. En persona, no hay algoritmo que filtre tu carisma. Suscríbete si estás listo para dejar las apps y vivir en el mundo real."`
            },
            { 
                id: 't-mon-2', 
                text: 'Publicar Reel: "Sal del Casino"',
                script: `[GUION PARA GRABAR - TIKTOK/IG/FB/YT SHORTS]
Título en pantalla: Tinder te quiere soltero 🎰

"Las apps de citas no quieren que encuentres pareja. Si encuentras al amor de tu vida, borras la app y ellos pierden un cliente. Su modelo de negocio es mantenerte adicto a la dopamina del 'Match', deslizando infinitamente como si fuera una máquina tragamonedas. Si te sientes invisible en esas plataformas, no es porque no seas atractivo, es porque el algoritmo castiga tu perfil y lo oculta para obligarte a pagar la versión Premium. Deja de regalar tu autoestima a una pantalla. Sal al mundo real. El contacto visual no tiene algoritmo. Sígueme."

[COPIAR Y PEGAR EN DESCRIPCIÓN]
No eres feo, solo estás compitiendo en un casino amañado. 🚫📱
El Caballero Moderno domina el arte de la conexión en persona, donde no hay filtros ni algoritmos.
👉 Sígueme para aprender a acercarte en el mundo real.
#Tinder #AppsDeCitas #Dopamina #CaballeroModerno #Seduccion`
            },
            {
                id: 't-mon-fb',
                text: 'Publicar Post en Facebook (Copiar y Pegar)',
                script: `La Matrix del Romance: Por qué debes borrar las apps de citas. 📱❌

Muchos hombres llegan a mi comunidad con el ego destruido porque pasan semanas en aplicaciones de citas y apenas consiguen un par de interacciones mediocres. 

Quiero que entiendas esto: estás jugando un juego arreglado. Las apps de citas funcionan exactamente igual que las máquinas tragamonedas de Las Vegas. Están diseñadas para inyectarte pequeñas dosis de dopamina intermitente, manteniéndote adicto y, lo más importante, manteniéndote SOLTERO para que sigas consumiendo su producto.

Mientras la mayoría de los hombres se pelean por atención en una pantalla de 6 pulgadas, el mundo real está lleno de oportunidades para quienes tienen el coraje de mirar a los ojos y decir "Hola". 

Rompe la adicción. Construye tu confianza en la vida real.

👉 ¿Cuántas horas a la semana pierdes deslizando? Únete a nosotros y recupera tu tiempo.

---\n🎨 PROMPT IMAGEN (Midjourney/DALL-E):\n"A cinematic, moody illustration of a modern gentleman looking down at a glowing smartphone screen showing a slot machine graphic, symbolizing the casino-like nature of dating apps, dark and thought-provoking, 8k --ar 4:5"`
            }
        ],
        2: [ // Martes
            { 
                id: 't-tue-1', 
                text: 'Publicar Reel: "El fin de la atención"',
                script: `[GUION PARA GRABAR - TIKTOK/IG/FB/YT SHORTS]
Título en pantalla: Por qué ella se aburre de ti rápido 📉

"Estamos viviendo la mayor crisis de atención de la historia. Las personas están consumiendo videos de 5 segundos todo el día. Sus cerebros están fritos por la dopamina. ¿Y sabes qué pasa? Cuando sales con ella y empiezas a contar una historia aburrida que tarda 10 minutos en llegar al punto, su cerebro se apaga. Si quieres destacar hoy, tienes que ser un maestro de la síntesis. Habla con intención. Ve al grano. Deja misterio. En un mundo de ruido constante, el hombre que sabe usar las palabras exactas y el silencio es el que domina. Sígueme para mejorar tu labia."

[COPIAR Y PEGAR EN DESCRIPCIÓN]
Competir contra la pantalla de su teléfono es la nueva realidad. 📱🤯
Aprende a comunicarte con impacto y misterio, o serás ignorado.
👉 Sígueme para ser un maestro de la conversación magnética.
#Comunicacion #Atencion #CaballeroModerno #Psicologia #Dopamina`
            },
            {
                id: 't-tue-fb',
                text: 'Publicar Post en Facebook (Copiar y Pegar)',
                script: `El superpoder de la síntesis en la era del ruido. 🔇🗣️

Hoy en día, el "attention span" (capacidad de atención) promedio de un adulto es menor al de un pez dorado. Estamos sobreestimulados por TikToks, Reels y notificaciones constantes.

Si en una cita te dedicas a contar anécdotas largas, llenas de detalles innecesarios ("y entonces mi amigo Juan, que por cierto tiene un perro dorado, me dijo..."), vas a perderla. Su cerebro adicto a la dopamina rápida simplemente se desconectará.

El Caballero Moderno entiende la economía de las palabras. Habla con pausas. Cuenta historias con impacto. Y lo más importante: deja vacíos para que la otra persona llene el espacio. Cuando hablas menos, pero con más peso, la gente literalmente se inclina para escucharte. 

👉 Síguenos si quieres aprender el arte de ser escuchado sin tener que gritar.

---\n🎨 PROMPT IMAGEN (Midjourney/DALL-E):\n"A highly cinematic shot of a modern man speaking calmly at a dinner table, while the background and other distractions are blurred out, symbolizing focus and impactful communication, photorealistic --ar 4:5"`
            }
        ],
        3: [ // Miércoles - DESCANDO A PETICIÓN
            { 
                id: 't-wed-1', 
                text: 'Día de Descanso 🧘‍♂️ (Sin publicaciones)',
                script: 'Este día no hay contenido programado según tus instrucciones. Usa este tiempo para interactuar con comentarios de días anteriores o planificar.'
            }
        ],
        4: [ // Jueves
            { 
                id: 't-thu-1', 
                text: 'Publicar Reel: "La epidemia del Ghosting"',
                script: `[GUION PARA GRABAR - TIKTOK/IG/FB/YT SHORTS]
Título en pantalla: La verdadera razón por la que te hizo Ghosting 👻

"Te dejaron en visto. Desapareció sin decir nada. Y tu primer instinto es pensar: '¿Qué hice mal? ¿Soy feo? ¿Dije algo raro?'. Detente ahí. El 90% de las veces, el ghosting no tiene nada que ver contigo. Vivimos en una época de sobreestimulación masiva. Las personas están abrumadas por la vida, el trabajo y cientos de mensajes en su bandeja. Huyen porque no tienen la madurez emocional para lidiar con el conflicto o la comunicación directa. No tomes un problema de inmadurez ajena como un defecto tuyo. Pasa página y eleva tus estándares. Sígueme."

[COPIAR Y PEGAR EN DESCRIPCIÓN]
El ghosting habla de su falta de madurez, no de tu falta de valor. ❌👻
No te castigues tratando de descifrar a alguien que no sabe comunicarse.
👉 Sígueme para construir una mentalidad a prueba de balas.
#Ghosting #Relaciones #SaludMental #CaballeroModerno #Autoestima`
            },
            {
                id: 't-thu-fb',
                text: 'Publicar Post en Facebook (Copiar y Pegar)',
                script: `El Ghosting no es sobre ti, es un síntoma social. 👻📱

Uno de los mensajes que más recibo es de hombres destruidos porque una chica con la que llevaban saliendo semanas desapareció de la nada. Sin cierre, sin explicación.

Lo primero que hace el ego masculino herido es buscar defectos: "¿Fui aburrido? ¿No tengo suficiente dinero?". 

La cruda realidad de esta década es que la gente está sobreestimulada y aterrorizada de la confrontación. Es mucho más fácil bloquear un número que decir: "No estoy lista para esto". El ghosting es la herramienta de los cobardes emocionales. 

Si te hacen ghosting, agradécelo. Te acaban de mostrar que no tienen las herramientas emocionales para ser una pareja de alto valor a largo plazo. La basura se sacó sola.

👉 Comparte esto con ese amigo que sigue esperando que ella le responda.

---\n🎨 PROMPT IMAGEN (Midjourney/DALL-E):\n"A cinematic, moody image of a modern gentleman looking at a blurred, fading silhouette of a woman walking away in a foggy street, symbolizing ghosting, but he looks peaceful and unaffected, 8k --ar 4:5"`
            }
        ],
        5: [ // Viernes
            { 
                id: 't-fri-1', 
                text: 'Publicar Reel: "El poder del aburrimiento"',
                script: `[GUION PARA GRABAR - TIKTOK/IG/FB/YT SHORTS]
Título en pantalla: El hábito que destruye tu carisma 📱

"La próxima vez que estés esperando en la fila del súper o esperando a un amigo en un café, haz esto: NO saques el celular. Te reto. Tu cerebro va a entrar en pánico porque no soporta el aburrimiento. Pero aquí está el secreto: el carisma y la creatividad nacen en el aburrimiento. Si estás constantemente anestesiando tu mente con TikToks, matas tu capacidad para observar el entorno, hacer contacto visual y ser espontáneo. El hombre más interesante del cuarto es el que no necesita su pantalla para sentirse seguro. Sígueme y apaga tu teléfono."

[COPIAR Y PEGAR EN DESCRIPCIÓN]
La adicción al teléfono es la muerte de la presencia magnética. 📵👀
Aprende a estar cómodo en tu propia piel y en el silencio.
👉 Sígueme para recuperar tu enfoque y masculinidad.
#Dopamina #Productividad #CaballeroModerno #Carisma #Presencia`
            },
            {
                id: 't-fri-fb',
                text: 'Publicar Post en Facebook (Copiar y Pegar)',
                script: `El superpoder de estar presente (y aburrido). 📵🔋

¿Cuándo fue la última vez que te sentaste en un lugar público por 10 minutos sin sacar el celular de tu bolsillo? 

Nos hemos convertido en una sociedad aterrorizada de sus propios pensamientos. Usamos la pantalla como un escudo protector para no interactuar, para no hacer contacto visual, para no sentir la más mínima incomodidad.

Pero la incomodidad es donde reside el crecimiento. La próxima vez que estés en una cita y ella vaya al baño, no saques el celular. Observa el lugar. Siéntete cómodo ocupando espacio sin hacer nada. Cuando ella vuelva, te encontrará presente y enraizado, no jorobado con el cuello hacia abajo esclavo de una pantalla. Esa pequeña diferencia proyecta un nivel de confianza brutal.

👉 ¿Aceptas el reto de no sacar el celular en tu próxima sala de espera? Únete a nosotros.

---\n🎨 PROMPT IMAGEN (Midjourney/DALL-E):\n"A highly aesthetic photograph of an elegant man sitting confidently in a cafe, looking forward and observing the world calmly, while everyone else in the background is hunched over their glowing phones, photorealistic --ar 4:5"`
            }
        ],
        6: [ // Sábado
            { 
                id: 't-sat-1', 
                text: 'Publicar Reel: "El aura de la presencia"',
                script: `[GUION PARA GRABAR - TIKTOK/IG/FB/YT SHORTS]
Título en pantalla: Por qué pasas desapercibido 👻

"La mayoría de los hombres son invisibles cuando entran a un lugar. ¿Por qué? Porque su energía está fragmentada. Están físicamente en la sala, pero mentalmente están pensando en el trabajo, en sus problemas financieros, o en el mensaje que no les han respondido. A las mujeres no las seduce el dinero ni los autos, las seduce la PRESENCIA. Cuando hablas con alguien y estás 100% ahí, escuchando, sin pensar en tu respuesta, generas un aura que la mayoría nunca experimenta. Sé el ancla en el caos. Sígueme para destacar del 99%."

[COPIAR Y PEGAR EN DESCRIPCIÓN]
Tu atención es el recurso más escaso y valioso que puedes regalar. 🎁🔥
Cuando estás verdaderamente presente, te vuelves inolvidable.
👉 Sígueme para construir presencia y magnetismo real.
#Presencia #AtractivoMasculino #CaballeroModerno #Mindfulness #Seduccion`
            },
            {
                id: 't-sat-fb',
                text: 'Publicar Post en Facebook (Copiar y Pegar)',
                script: `El magnetismo de la presencia total. ⚓👁️

En un mundo donde todos están distraídos, prestar atención absoluta es el nuevo superpoder. 

Piensa en tus últimas interacciones sociales. ¿Estabas realmente escuchando o solo estabas esperando tu turno para hablar? Las mujeres tienen un radar increíble para detectar cuando un hombre está mentalmente ausente. 

El verdadero estatus no lo da un reloj caro, lo da la capacidad de hacer sentir a la persona que tienes enfrente que, en ese momento, no existe nada más en el mundo. Eso requiere dominar tu propia mente, apagar la ansiedad por el futuro y anclarte en el presente. 

Sé el hombre que trae calma al caos. 

👉 Síguenos si quieres dominar el juego interno.

---\n🎨 PROMPT IMAGEN (Midjourney/DALL-E):\n"A deeply cinematic portrait of a modern gentleman offering intense, calming eye contact in a busy, chaotic, and blurred environment, signifying the anchor of presence, dramatic lighting, 8k --ar 4:5"`
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
