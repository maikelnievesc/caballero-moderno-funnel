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
                text: 'Publicar Reel: "Planificación implacable"',
                script: `[GUION PARA GRABAR]\nTítulo en pantalla: Lo que no planificas, fracasa 🛑\n\n"Un Caballero Moderno no se despierta el lunes preguntándose qué va a hacer. El domingo por la noche, su semana ya está conquistada en papel. Si dejas tus metas al azar, serás víctima del plan de alguien más. Sígueme y aprende a tomar el control."\n\n[COPIAR Y PEGAR EN DESCRIPCIÓN]\nEl éxito empieza el domingo. 🛑🔥\nDeja de improvisar tu vida y comienza a diseñarla.\n👉 Sígueme para más desarrollo personal.\n#CaballeroModerno #AltoValor #Planificacion #DesarrolloPersonal`
            },
            {
                id: 't-sun-fb',
                text: 'Publicar Post en Facebook (Copiar y Pegar)',
                script: `¿Cómo te preparas para la semana? ♟️\n\nLa mayoría de los hombres temen que llegue el lunes. El Caballero Moderno lo espera con una estrategia clara. Dedica 30 minutos de tu domingo a estructurar tus victorias semanales.\n\n👉 Únete a la comunidad y diseña tu camino.\n\n---\n🎨 PROMPT IMAGEN (Midjourney/DALL-E):\n"A confident man planning in a sleek journal, cinematic lighting, modern coffee shop, highly detailed --ar 4:5"`
            },
            { id: 't-sun-2', text: 'Preparar y agendar métricas semanales' },
            { id: 't-sun-3', text: 'Atender chats de WhatsApp (Cierres semanales)' }
        ],
        1: [ // Lunes
            { 
                id: 't-mon-1', 
                text: 'Publicar Video Largo en YT: "Cómo superar los Shit Tests" (5:00 PM)',
                script: `[GUION PARA GRABAR]\nTítulo SEO: Cómo responder a los "Shit Tests" femeninos (y superarlos)\n\n"Las mujeres de alto valor siempre pondrán a prueba tu confianza. Te dirán cosas como 'Seguro le dices eso a todas'. Si te justificas y dices '¡No, te lo juro!', perdiste. Estás demostrando inseguridad. Un verdadero Caballero Moderno usa el humor y la exageración. Tú respondes: 'Sí, de hecho tengo un Excel con todas a las que se lo digo'. Al no tomarte en serio su prueba, le demuestras que tu confianza es inquebrantable."\n\n[COPIAR Y PEGAR EN DESCRIPCIÓN]\nNo te tomes todo de forma literal. ❌🤐\nLas pruebas son su manera subconsciente de ver si eres tan seguro como aparentas.\n👉 Suscríbete para más técnicas avanzadas.\n#CaballeroModerno #Seduccion #ShitTests #AtraerMujeres #Psicologia`
            },
            { 
                id: 't-mon-2', 
                text: 'Publicar Reel: "El test de confianza"',
                script: `[GUION PARA GRABAR]\nTítulo en pantalla: Por qué ella te pone a prueba 🚫\n\n"Si ella te desafía con un comentario sarcástico, no es porque te odie. Está viendo de qué estás hecho. Si te ofendes, fracasas. Si te ríes y le devuelves la broma, apruebas. La indiferencia juguetona es tu mejor arma. Sígueme para dominar estas situaciones."\n\n[COPIAR Y PEGAR EN DESCRIPCIÓN]\nLas pruebas son oportunidades disfrazadas. ❌\nAprende a mantener la calma bajo presión.\n👉 Sígueme y mejora tu dinámica social.\n#CaballeroModerno #Seduccion #Confianza`
            },
            {
                id: 't-mon-fb',
                text: 'Publicar Post en Facebook (Copiar y Pegar)',
                script: `¿Por qué ella siempre te contradice? ❌🤐\n\nEs lo que en psicología evolutiva se conoce como un test de aptitud. Tu trabajo no es convencerla con lógica, es demostrar que su presión no altera tu estado emocional. Responde con humor, no con argumentos.\n\n👉 Síguenos para aprender a mantener tu centro emocional.\n\n---\n🎨 PROMPT IMAGEN (Midjourney/DALL-E):\n"A confident man smiling calmly while a woman playfully challenges him, elegant setting, photorealistic --ar 4:5"`
            },
            { id: 't-mon-3', text: 'Responder comentarios y DMs' },
            { id: 't-mon-4', text: 'Atender chats de WhatsApp' }
        ],
        2: [ // Martes
            { 
                id: 't-tue-1', 
                text: 'Publicar Reel: "El error de escribir demasiado"',
                script: `[GUION PARA GRABAR]\nTítulo en pantalla: Textos largos = Cero atracción 📱\n\n"Si ella te envía un texto de una línea y tú respondes con tres párrafos, le estás regalando tu poder. En la comunicación digital, quien escribe menos, lidera. Mantén el misterio, sé breve y usa el chat solo para concretar la cita, no para conocerse. Sígueme si quieres dejar de ser el amigo por chat."\n\n[COPIAR Y PEGAR EN DESCRIPCIÓN]\nEl exceso de texto mata el misterio. 🚫📱\nGuarda tus mejores historias para la cita en persona.\n👉 Sígueme para mejorar tu juego de texto.\n#CaballeroModerno #ErroresDeWhatsapp #AtraerMujeres`
            },
            {
                id: 't-tue-fb',
                text: 'Publicar Post en Facebook (Copiar y Pegar)',
                script: `La regla de oro del WhatsApp: Textos cortos, intenciones claras. 📵👇\n\nEl error más común de los hombres es intentar generar conexión emocional a través de una pantalla. El chat es una herramienta logística. Tu objetivo es conseguir la cita, no contarle tu vida entera.\n\n👉 Síguenos para aprender la verdadera función del chat.\n\n---\n🎨 PROMPT IMAGEN (Midjourney/DALL-E):\n"A man calmly texting, holding his phone, modern and stylish, high value, cinematic --ar 4:5"`
            },
            { id: 't-tue-3', text: 'Responder comentarios y DMs' }
        ],
        3: [ // Miércoles
            { 
                id: 't-wed-1', 
                text: 'Publicar Reel: "El poder de decir NO"',
                script: `[GUION PARA GRABAR]\nTítulo en pantalla: Decir NO te hace irresistible 💔\n\n"El hombre que siempre está disponible no tiene valor. Si ella te propone salir hoy mismo a última hora y tú cancelas tus planes por ella, acabas de perder su respeto. Un Caballero Moderno valora su tiempo. Decir 'Hoy no puedo, pero ¿qué tal el jueves?' demuestra que tienes una vida. Sígueme para recuperar tu valor."\n\n[COPIAR Y PEGAR EN DESCRIPCIÓN]\nTu disponibilidad no debe ser garantizada. 🛑\nTener límites es la base de la verdadera masculinidad.\n👉 Sígueme y conviértete en tu máxima prioridad.\n#CaballeroModerno #Seduccion #AltoValor`
            },
            {
                id: 't-wed-fb',
                text: 'Publicar Post en Facebook (Copiar y Pegar)',
                script: `Decir NO es el mayor filtro de respeto. 💔\n\nSi siempre estás de acuerdo con todo lo que ella dice y haces todo lo que te pide, te conviertes en un fan, no en una pareja potencial. Los hombres magnéticos no tienen miedo a marcar límites saludables.\n\n👉 Síguenos para aprender a proyectar verdadero alto estatus.\n\n---\n🎨 PROMPT IMAGEN (Midjourney/DALL-E):\n"A cinematic shot of a man looking confident and relaxed, saying no with a calm gesture, elegant --ar 4:5"`
            },
            { id: 't-wed-2', text: 'Responder comentarios y DMs' },
            { id: 't-wed-3', text: 'Atender chats de WhatsApp' }
        ],
        4: [ // Jueves
            { 
                id: 't-thu-1', 
                text: 'Publicar Reel: "Líder vs Macho Alfa"',
                script: `[GUION PARA GRABAR]\nTítulo en pantalla: El mito del Macho Alfa ♟️\n\n"Ser un macho alfa no se trata de gritar, ser agresivo o tratar mal a los demás. Eso es inseguridad disfrazada. El verdadero liderazgo es silencioso. Un Caballero Moderno no necesita demostrar nada, su simple presencia transmite seguridad. Protege, provee valor y lidera con el ejemplo. Sígueme para entender la verdadera masculinidad."\n\n[COPIAR Y PEGAR EN DESCRIPCIÓN]\nLa masculinidad tóxica nace de la inseguridad. 🤫🔥\nEl verdadero poder no necesita anunciarse.\n👉 Sígueme para más secretos de masculinidad moderna.\n#CaballeroModerno #Masculinidad #Liderazgo`
            },
            {
                id: 't-thu-fb',
                text: 'Publicar Post en Facebook (Copiar y Pegar)',
                script: `El verdadero poder no se grita, se susurra. 🤫🔥\n\nNo necesitas ser el tipo más ruidoso de la habitación para liderar. De hecho, el hombre más peligroso y atractivo es aquel que observa en silencio, pero actúa con absoluta convicción cuando es necesario.\n\n👉 Síguenos para descubrir la esencia del liderazgo magnético.\n\n---\n🎨 PROMPT IMAGEN (Midjourney/DALL-E):\n"A calm, well-dressed man observing a crowded room, quiet confidence, cinematic lighting --ar 4:5"`
            },
            { id: 't-thu-2', text: 'Responder comentarios y DMs' },
            { id: 't-thu-3', text: 'Revisar métricas parciales' }
        ],
        5: [ // Viernes
            { 
                id: 't-fri-1', 
                text: 'Publicar Reel: "Logística de la primera cita"',
                script: `[GUION PARA GRABAR]\nTítulo en pantalla: El peor lugar para una primera cita 🚫\n\n"Nunca, jamás la lleves al cine o a una cena formal en la primera cita. Es caro, no pueden hablar y se siente como una entrevista incómoda. Llévala a tomar un café, a caminar por un parque o a jugar billar. Algo barato, interactivo y donde puedas estar sentado junto a ella, no enfrente. Sígueme para dominar tus citas."\n\n[COPIAR Y PEGAR EN DESCRIPCIÓN]\nEl entorno dicta la vibra de la cita. 🛋️❌\nFacilita la interacción y el contacto físico sutil eligiendo el lugar correcto.\n👉 Sígueme y aprende a diseñar citas inolvidables.\n#CaballeroModerno #PrimerCita #ConsejosParaHombres`
            },
            {
                id: 't-fri-fb',
                text: 'Publicar Post en Facebook (Copiar y Pegar)',
                script: `El diseño de tu cita revela tu experiencia. ♟️👑\n\nSi la invitas a una cena cara la primera vez que se ven, estás tratando de comprar su validación. Mantén las primeras interacciones simples, casuales y centradas en la diversión mutua, no en impresionar con tu billetera.\n\n👉 Síguenos para pensar estratégicamente en tus relaciones.\n\n---\n🎨 PROMPT IMAGEN (Midjourney/DALL-E):\n"A couple laughing casually at an aesthetic coffee shop, sitting next to each other, photorealistic --ar 4:5"`
            },
            { id: 't-fri-2', text: 'Responder comentarios y DMs' }
        ],
        6: [ // Sábado
            { 
                id: 't-sat-1', 
                text: 'Publicar Reel: "Postura de dominancia relajada"',
                script: `[GUION PARA GRABAR]\nTítulo en pantalla: El secreto de la postura relajada 👀\n\n"La ansiedad hace que te encojas y te muevas rápido. Para proyectar confianza inmediata, adopta la dominancia relajada. Hombros atrás, pecho ligeramente expuesto y movimientos un 10% más lentos. Cuando te sientes, ocupa espacio sin ser invasivo. Tu cuerpo debe decir: 'Estoy cómodo en cualquier situación'. Sígueme para más secretos de lenguaje no verbal."\n\n[COPIAR Y PEGAR EN DESCRIPCIÓN]\nComodidad extrema = Confianza extrema. 👀🔥\nSi tú estás relajado, harás que ella se relaje en tu presencia.\n👉 Sígueme para dominar el lenguaje corporal.\n#CaballeroModerno #LenguajeCorporal #Confianza`
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
