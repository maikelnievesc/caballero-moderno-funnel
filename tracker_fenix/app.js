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
                text: 'Publicar Video Largo en YT: "Amistades tóxicas" (5:00 PM)',
                script: `[GUION PARA GRABAR YOUTUBE (3.5 mins)]
Título SEO: El día que me quedé sin amigos (Y por qué fue necesario)

(0:00 - 0:30) Hook: "Nos enseñan que los verdaderos amigos son para toda la vida, pero casi nadie habla del dolor que se siente cuando te das cuenta de que tu círculo social te está hundiendo. Hubo una época en la que salir de fiesta, quejarnos de la vida y gastar dinero que no teníamos era el único pegamento de mis amistades. El día que decidí cambiar de rumbo, me quedé completamente solo."

(0:30 - 1:30) El quiebre: "Cuando empecé a leer, a cuidar mi salud y a intentar construir algo de valor, las burlas de mi grupo no se hicieron esperar. 'Ya no eres divertido', me decían. Yo intentaba arrastrarlos conmigo hacia arriba, pero la gravedad de la complacencia era más fuerte. Me di cuenta de una verdad brutal: no puedes sanar en el mismo entorno que te enfermó."

(1:30 - 2:30) La soledad: "Elegir alejarme fue una de las decisiones más dolorosas de mi proceso. Pasé meses sin planes de fin de semana, lidiando con el sentimiento de culpa por haber 'abandonado' a mis amigos. Pero esa soledad fue mi taller de forja. Al vaciar mi vida de influencias mediocres, creé el espacio necesario para que llegaran personas con ambición, visión y empatía real."

(2:30 - 3:30) La lección: "Si hoy estás perdiendo amigos porque estás subiendo tus estándares, te prometo que no estás haciendo nada malo. Estás evolucionando. Perderás la cantidad, pero ganarás en calidad. Mantente firme. La tribu correcta llegará cuando tú estés listo. Suscríbete si estás en este camino de evolución."`
            },
            { 
                id: 't-mon-2', 
                text: 'Publicar Reel: "Mi círculo social"',
                script: `[GUION PARA GRABAR - TIKTOK/IG/FB/YT SHORTS]
Título en pantalla: Tuve que alejarme de todos 🚫

"El momento más duro de mi crecimiento personal no fue ir al gimnasio o leer libros. Fue darme cuenta de que mis amigos de toda la vida me estaban frenando. Sus únicas metas eran salir de fiesta y quejarse del mundo. Cuando empecé a enfocarme, se burlaron. Tuve que tomar la decisión más fría de mi vida: alejarme. Y sí, dolió. Estuve solo por mucho tiempo. Pero si quieres volar con las águilas, no puedes seguir picoteando con las gallinas. Cuida tu entorno, es tu recurso más valioso. Sígueme si estás en ese proceso."

[COPIAR Y PEGAR EN DESCRIPCIÓN]
No puedes sanar en el mismo entorno que te enfermó. ❌
Si estás perdiendo amigos por intentar mejorar tu vida, vas por el camino correcto.
👉 Sígueme para rodearte de una mentalidad de crecimiento.
#Amistades #DesarrolloPersonal #CaballeroModerno #Storytime #Crecimiento`
            },
            {
                id: 't-mon-fb',
                text: 'Publicar Post en Facebook (Copiar y Pegar)',
                script: `El costo oculto de crecer: Quedarte solo. 📉🚶‍♂️

Nadie te prepara para el luto que se vive cuando decides subir tus estándares y notas que tu círculo social empieza a desaparecer. Durante mucho tiempo, mi identidad estaba ligada a un grupo de personas cuyo único propósito era evadir la realidad los fines de semana.

Cuando decidí que quería más de la vida, me convertí en el "aburrido" del grupo. Intenté encajar, bajando mi nivel de energía y silenciando mis ambiciones para no incomodarlos. Ese fue mi mayor error. Estaba traicionándome a mí mismo por miedo a no pertenecer.

El día que acepté la soledad como un precio necesario por mi paz mental, todo cambió. La soledad asusta, pero te aseguro que es mil veces preferible estar solo en la cima que acompañado en la mediocridad.

👉 Únete a la comunidad de hombres que no le temen a la soledad con propósito.

---\n🎨 PROMPT IMAGEN (Midjourney/DALL-E):\n"A highly cinematic, photorealistic image of a modern gentleman standing alone in a misty city street at night, looking back with a sense of closure and moving forward into the light, moody, 8k --ar 4:5"`
            }
        ],
        2: [ // Martes
            { 
                id: 't-tue-1', 
                text: 'Publicar Reel: "La trampa de los likes"',
                script: `[GUION PARA GRABAR - TIKTOK/IG/FB/YT SHORTS]
Título en pantalla: Cómo las redes sociales me destruyeron 📱

"Hubo una época en la que mi estado de ánimo dependía literalmente de cuántos likes tenía mi última foto. Si no llegaba a cierto número, me sentía como un fracasado. Vivía para el escaparate. Compraba cosas que no podía pagar para impresionar a gente que no me importaba. Hasta que un día la ansiedad me ganó. Borré la aplicación por un mes. Y descubrí el superpoder más grande: hacer cosas increíbles en completo silencio, sin que nadie te aplauda. Esa es la verdadera confianza. Sígueme para escapar de la Matrix."

[COPIAR Y PEGAR EN DESCRIPCIÓN]
La validación externa es una droga, y las redes son el traficante. 💊❌
Cuando aprendes a disfrutar tus victorias sin publicarlas, te vuelves invencible.
👉 Sígueme para construir confianza real, no digital.
#RedesSociales #SaludMental #CaballeroModerno #Validacion #Estoicismo`
            },
            {
                id: 't-tue-fb',
                text: 'Publicar Post en Facebook (Copiar y Pegar)',
                script: `Confesión: Fui adicto a que ustedes me validaran. 🎭📱

Hoy hablo desde la vulnerabilidad absoluta. Hubo un periodo de mi vida donde no podía disfrutar de un paisaje, un plato de comida o un momento con amigos si no lo estaba grabando para subirlo. Mi autoestima estaba subcontratada a una pantalla.

Medía mi valía como hombre basado en interacciones digitales. Si una historia tenía muchas vistas, yo valía mucho. Si no, era nadie. 

Romper esa ilusión fue como un síndrome de abstinencia. Empecé a hacer cosas (leer, viajar, lograr metas) y prohibirme publicarlas. Al principio, mi cerebro gritaba: "¡Si no lo publicas, no cuenta!". Pero luego llegó una paz profunda. Entendí que la validación más importante es la que te das tú mismo cuando te miras al espejo.

👉 Síguenos si estás listo para construir una vida que se sienta bien, no solo que se vea bien.

---\n🎨 PROMPT IMAGEN (Midjourney/DALL-E):\n"A moody, cinematic portrait of a handsome man looking at his glowing smartphone screen in a dark room, illustrating digital isolation and the need for validation, highly detailed --ar 4:5"`
            }
        ],
        3: [ // Miércoles
            { 
                id: 't-wed-1', 
                text: 'Publicar Reel: "El poder de decir NO"',
                script: `[GUION PARA GRABAR - TIKTOK/IG/FB/YT SHORTS]
Título en pantalla: El día que aprendí a decir NO 🛑

"Yo era el rey de complacer a los demás. Siempre decía que sí a favores, a salidas que no me apetecían, a responsabilidades que no eran mías. ¿Por qué? Porque moría de miedo de que dejaran de quererme. Hasta que el estrés me enfermó físicamente. El primer 'NO' que dije fue aterrador. Pensé que el mundo se acabaría. ¿Y sabes qué pasó? Nada. La gente se adaptó. De hecho, me respetaron más. Tu 'Sí' no vale nada si no tienes la capacidad de decir 'No'. Sígueme para recuperar el control de tu tiempo."

[COPIAR Y PEGAR EN DESCRIPCIÓN]
Ser complaciente no te hace buena persona, te hace manipulable. 🎯❌
Poner límites es un acto de amor propio y la base del respeto ajeno.
👉 Sígueme para aprender a proteger tu energía.
#Limites #AmorPropio #CaballeroModerno #Psicologia #DesarrolloPersonal`
            },
            {
                id: 't-wed-fb',
                text: 'Publicar Post en Facebook (Copiar y Pegar)',
                script: `El dolor crónico de ser el "Chico Bueno". 🛑🎭

Si eres de los que siempre dice "Sí" a todo, este mensaje es para ti. Yo estuve ahí. Sentía una angustia terrible en el estómago cada vez que me pedían un favor que chocaba con mis propios planes, pero mi boca automáticamente respondía: "Claro, no hay problema".

Estaba financiando la felicidad de otros con mi propia paz mental. Pensaba que así me ganarían el respeto y el cariño de todos. La realidad fue opuesta: me convertí en el tapete de los demás. La gente no respeta a quien no se respeta a sí mismo.

El día que empecé a decir "No", algunas personas se ofendieron y se alejaron. Y fue el mejor filtro que pude haber puesto en mi vida. Un Caballero Moderno es servicial y amable, pero sus límites son muros de acero.

👉 Únete a nuestra comunidad donde aprendemos a priorizarnos sin culpa.

---\n🎨 PROMPT IMAGEN (Midjourney/DALL-E):\n"A cinematic shot of a modern man standing calmly and firmly with a raised hand in a subtle 'stop' gesture, expressing strong boundaries and inner peace, photorealistic, elegant --ar 4:5"`
            }
        ],
        4: [ // Jueves
            { 
                id: 't-thu-1', 
                text: 'Publicar Reel: "No eres tu trabajo"',
                script: `[GUION PARA GRABAR - TIKTOK/IG/FB/YT SHORTS]
Título en pantalla: Mi error más caro 💼

"Durante años, hice que mi carrera fuera mi personalidad entera. Si me preguntabas quién era, te decía mi cargo en la empresa. Estaba obsesionado con el éxito profesional porque creía que eso me haría atractivo y digno de amor. Un día perdí un proyecto gigante. Me sentí como la nada misma. Ahí entendí mi error: había construido mi identidad sobre algo que podía desaparecer en un segundo. Eres más que tu cuenta de banco, eres más que tu puesto. Tu valor está en tu carácter. Sígueme para encontrar equilibrio."

[COPIAR Y PEGAR EN DESCRIPCIÓN]
El éxito profesional no puede ser tu único pilar como hombre. 🏗️❌
Si te quitan tu trabajo hoy, ¿quién eres? 
👉 Sígueme para aprender a construir una identidad irrompible.
#Identidad #CaballeroModerno #Exito #SaludMental #Equilibrio`
            },
            {
                id: 't-thu-fb',
                text: 'Publicar Post en Facebook (Copiar y Pegar)',
                script: `La peligrosa ilusión de que "Eres lo que haces". 💼❌

En la cultura actual, a los hombres se nos mide constantemente por nuestra capacidad de producción y nuestro éxito financiero. Yo me tragué esa mentira por completo. Sacrifiqué amistades, salud y relaciones amorosas en el altar del "hustle" y el progreso profesional.

Pensé que cuando llegara a la meta, todo tendría sentido. Pero cuando llegas a la cima de la montaña incorrecta, la vista es desoladora. 

Entendí a base de ansiedad y burnout que mi carrera es solo un vehículo, no es el destino. Un verdadero hombre de valor cultiva sus pasatiempos, cuida su salud mental y nutre sus relaciones. No pongas todo tu valor en una canasta que el mercado laboral te puede arrebatar mañana.

👉 Síguenos para aprender a balancear tu ambición con tu humanidad.

---\n🎨 PROMPT IMAGEN (Midjourney/DALL-E):\n"A cinematic, high-contrast image of a businessman loosening his tie and leaving his briefcase behind on a desk, walking towards a brightly lit window, signifying freedom from over-identifying with work, 8k --ar 4:5"`
            }
        ],
        5: [ // Viernes
            { 
                id: 't-fri-1', 
                text: 'Publicar Reel: "Atraes lo que eres"',
                script: `[GUION PARA GRABAR - TIKTOK/IG/FB/YT SHORTS]
Título en pantalla: Por qué siempre atraía mujeres tóxicas 🚫

"Me la pasaba quejándome de que solo atraía mujeres interesadas, dramáticas o emocionalmente indisponibles. Culpaba a la sociedad, al feminismo, a las aplicaciones de citas... a todos menos a mí. Hasta que alguien me dijo la verdad a la cara: 'Atraes lo que eres, y toleras lo que crees que mereces'. Fue un balde de agua fría. Si yo era inseguro, obviamente iba a atraer dinámicas tóxicas. En el momento en que me volví un hombre emocionalmente estable, las mujeres tóxicas perdieron todo el interés en mí. Sígueme y toma responsabilidad."

[COPIAR Y PEGAR EN DESCRIPCIÓN]
El mundo es un espejo de tus propias carencias. 🪞❌
Si quieres una pareja de alto valor, tienes que convertirte en la persona que alguien de alto valor elegiría.
👉 Sígueme para dejar el papel de víctima.
#Relaciones #CaballeroModerno #Storytime #Autoestima #Responsabilidad`
            },
            {
                id: 't-fri-fb',
                text: 'Publicar Post en Facebook (Copiar y Pegar)',
                script: `El día que dejé de culpar a las mujeres por mis malas elecciones. 🪞

Es muy fácil sentarse en un bar con amigos y quejarse de cómo "todas son iguales" o cómo "ya no hay mujeres con buenos valores". Yo fui el capitán de ese barco. Me regodeaba en mi papel de víctima incomprendida.

La píldora más amarga que tuve que tragar en mi proceso fue la de la responsabilidad extrema. Me di cuenta de que mi baja autoestima y mi necesidad de validación eran un faro brillante para el drama y la toxicidad. 

Las relaciones caóticas que tuve no fueron mala suerte; fueron una manifestación de mi propio caos interno. Cuando sané mis heridas y definí mis principios, el drama simplemente dejó de hacer resonancia conmigo. Deja de buscar a la persona correcta, y empieza a convertirte en ella.

👉 Síguenos si tienes la valentía de hacerte responsable de tus resultados.

---\n🎨 PROMPT IMAGEN (Midjourney/DALL-E):\n"A striking cinematic image of a modern gentleman looking into a mirror, but the reflection shows an older, more chaotic version of himself, illustrating the concept of inner reflection and responsibility, photorealistic --ar 4:5"`
            }
        ],
        6: [ // Sábado
            { 
                id: 't-sat-1', 
                text: 'Publicar Reel: "Perdonando al viejo yo"',
                script: `[GUION PARA GRABAR - TIKTOK/IG/FB/YT SHORTS]
Título en pantalla: Un mensaje para mi versión del pasado ✉️

"Si pudiera volver el tiempo, hay muchísimas cosas que haría diferente. Las veces que rogué por amor, las veces que traicioné mis propios valores para encajar, el tiempo que perdí. A veces la culpa no me dejaba dormir. Pero hoy, decido perdonar a ese chico. Él hizo lo mejor que pudo con las herramientas y el nivel de consciencia que tenía en ese momento. No puedes odiar a la oruga por no saber volar. Si el fantasma de tus errores pasados te atormenta, perdónate. Sígueme, estamos construyendo nuestro futuro."

[COPIAR Y PEGAR EN DESCRIPCIÓN]
El auto-odio nunca ha sido un buen motor para el cambio permanente. 🌱🤍
Acepta tu pasado, abrázalo y úsalo como cimiento para el hombre que estás construyendo hoy.
👉 Sígueme para crecer con consciencia.
#Perdon #AmorPropio #CaballeroModerno #Crecimiento #SaludMental`
            },
            {
                id: 't-sat-fb',
                text: 'Publicar Post en Facebook (Copiar y Pegar)',
                script: `Haciendo las paces con el hombre que solía ser. ✉️🕊️

Uno de los efectos secundarios más brutales del crecimiento personal es el "Cringe" (la vergüenza ajena) que sientes al recordar quién eras hace unos años. 

Durante mucho tiempo me castigué mentalmente recordando los mensajes patéticos que envié, las oportunidades que dejé pasar por miedo y la forma en que permití que me trataran. El arrepentimiento es un veneno lento. 

Tuve que entender que esa versión mía, por muy defectuosa que fuera, fue la que recibió los golpes necesarios para que yo despertara. Él sobrevivió para que yo pudiera vivir. Si hoy sientes vergüenza de tus errores del pasado, significa que has crecido. Celebra el progreso, perdona la ignorancia y sigue avanzando.

👉 Únete a nosotros. Aquí no juzgamos el pasado, construimos el futuro.

---\n🎨 PROMPT IMAGEN (Midjourney/DALL-E):\n"A highly cinematic, emotional shot of a modern gentleman placing a hand gently on the shoulder of a faded, ghostly younger version of himself, symbolizing self-forgiveness and growth, dramatic lighting, photorealistic --ar 4:5"`
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
