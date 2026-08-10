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
                text: 'Publicar Video Largo en YT: "El poder del misterio" (5:00 PM)',
                script: `[GUION PARA VIDEO FACELESS - YT (3.5 mins)]
Título SEO: Por qué hablar demasiado te hace menos atractivo (El Poder del Misterio)

[Visual sugerido: Imágenes cinemáticas de hombres solitarios caminando por la ciudad de noche, lluvia, manejando autos clásicos, tomando café en silencio. Todo muy estilo 'Peaky Blinders' o 'Drive'.]

(0:00 - 0:30) Hook: "El mayor error que cometen los hombres en la primera cita es vomitar toda su biografía en los primeros 10 minutos. Te esfuerzas tanto por impresionarla, que le cuentas tus logros, tus fracasos, lo que ganas y lo que planeas hacer. ¿Y sabes qué logras? Matar el misterio. Hoy te voy a enseñar por qué el silencio es la herramienta de seducción más letal de un Caballero Moderno."

(0:30 - 1:30) El problema de la sobre-exposición: "La atracción se alimenta de lo desconocido. Cuando un libro te cuenta el final en la primera página, dejas de leer. Cuando tú le cuentas todo tu pasado en una hora, le robas la oportunidad de descubrirte. Hablar mucho subcomunica inseguridad; grita 'por favor, valídame, mira todo lo que he logrado'."

(1:30 - 2:30) La técnica del Iceberg: "Aplica la regla del Iceberg. Deja que ella solo vea el 10% de quién eres. Si te pregunta a qué te dedicas, responde de forma breve y juguetona, y devuelve la pregunta. Deja que se pregunte qué haces los fines de semana, por qué eres tan tranquilo, qué piensas realmente. Esa incertidumbre genera espacio en su mente. Y cuando ocupas espacio en su mente, la atracción se dispara."

(2:30 - 3:30) Conclusión: "Un hombre de alto valor no necesita un megáfono para anunciar su presencia. Sus acciones hablan, su estilo habla, su postura habla. La próxima vez que salgas, muerde tu lengua. Habla un 20% y deja que ella hable el 80%. Suscríbete si quieres aprender a dominar el juego del silencio."`
            },
            { 
                id: 't-mon-2', 
                text: 'Publicar Reel: "La regla del silencio"',
                script: `[GUION PARA REEL FACELESS - TIKTOK/IG/FB]
Título en pantalla: El error que mata la atracción al instante 🤐

[Visual sugerido: Clip de B-roll muy estético. Un hombre arreglándose la corbata, o sirviéndose un vaso de whisky en cámara lenta. Tonos oscuros, elegantes.]

Voz en off: "Hablar demasiado es el asesino silencioso de la atracción. Los hombres inseguros sienten la necesidad de llenar cada silencio incómodo con palabras, presumiendo su trabajo o su dinero para impresionar. Grave error. La verdadera masculinidad es misteriosa. Cuando hablas menos, tus palabras pesan más. Deja que ella adivine. Deja que te pregunte. Si le das el libro completo en la primera cita, no tendrá motivos para leer el segundo capítulo. Cierra la boca y abre los oídos. Sígueme para convertirte en un hombre magnético."

[COPIAR Y PEGAR EN DESCRIPCIÓN]
El misterio genera obsesión. La sobre-exposición genera aburrimiento. ♟️📉
No le robes a una mujer el placer de descubrirte poco a poco.
👉 Sígueme para dominar la psicología oscura y la seducción.
#Misterio #Seduccion #CaballeroModerno #PsicologiaOscura #AltoValor`
            },
            {
                id: 't-mon-fb',
                text: 'Publicar Post en Facebook (Copiar y Pegar)',
                script: `El arte de cerrar la boca: Por qué el misterio atrae más que el currículum. 🤐♟️

La gran mayoría de los hombres van a las citas armados con su "currículum vital". Desesperados por validación, proceden a listar sus logros, sus bienes y sus planes a futuro en los primeros 20 minutos. 

¿Qué comunica esto subconscientemente? "Tengo miedo de que no te guste quién soy, así que intentaré comprarte con lo que tengo".

El Caballero Moderno domina el silencio. Responde a las preguntas con calma, da detalles mínimos pero interesantes, y devuelve el foco de la conversación. Él entiende que la atracción femenina es como un rompecabezas: si le das todas las piezas armadas de golpe, se aburrirá inmediatamente.

Deja vacíos. Deja que ella se pregunte quién eres realmente. 

👉 ¿Sueles hablar demasiado cuando te pones nervioso? Síguenos para aprender a calibrar.

---\n🎨 PROMPT IMAGEN (Midjourney/DALL-E):\n"A highly cinematic, dark academia aesthetic image of a modern gentleman sitting in a dimly lit, luxurious lounge. Only half of his face is illuminated by a warm lamp, symbolizing mystery and secrets, photorealistic, 8k --ar 4:5"`
            }
        ],
        2: [ // Martes
            { 
                id: 't-tue-1', 
                text: 'Publicar Reel: "Cómo responder insultos"',
                script: `[GUION PARA REEL FACELESS - TIKTOK/IG/FB]
Título en pantalla: Cómo responder a una falta de respeto 🛑

[Visual sugerido: B-roll cinemático de un lobo caminando en la nieve, o un hombre de negocios mirando fijamente por la ventana de un rascacielos. Vibras de estoicismo.]

Voz en off: "Si alguien te falta el respeto o te lanza un insulto sutil frente a otros, nunca te enojes ni devuelvas el insulto. El enojo demuestra que lograron sacarte de tu centro. En su lugar, haz esto: Míralo a los ojos, haz un silencio absoluto de 3 segundos, esboza una sonrisa muy leve, y luego cambia de tema con otra persona como si él no existiera. Ese silencio prolongado combinado con indiferencia total, lo hará sentir estúpido y diminuto frente a todo el grupo. El mayor desprecio es no hacer aprecio. Sígueme para más inteligencia social."

[COPIAR Y PEGAR EN DESCRIPCIÓN]
Tu atención es un privilegio. No se la regales a quien te falta el respeto. 🛑👑
El estoicismo es tu mejor arma en la guerra social.
👉 Sígueme para dominar tus emociones.
#Estoicismo #Respeto #CaballeroModerno #InteligenciaSocial #Psicologia`
            },
            {
                id: 't-tue-fb',
                text: 'Publicar Post en Facebook (Copiar y Pegar)',
                script: `La respuesta más letal a un insulto es el silencio. 🗡️🤐

Cuando alguien te falta el respeto, especialmente en grupo, su objetivo es hacerte reaccionar. Quieren verte enojado, a la defensiva o intentando justificarte. Si haces alguna de estas tres cosas, ellos ganan el juego de poder.

La herramienta más subestimada de un hombre de alto valor es la indiferencia estoica. 

Si te lanzan una burla, sostén el contacto visual, no digas absolutamente nada durante 4 segundos, y luego continúa tu conversación con otra persona. Ese silencio ensordecedor obligará al agresor a escuchar el eco de su propia estupidez. Lo despojas de todo su poder sin levantar la voz.

El verdadero poder no es gritar más fuerte, es que tu silencio pese más que sus palabras.

👉 Síguenos si estás construyendo un carácter inquebrantable.

---\n🎨 PROMPT IMAGEN (Midjourney/DALL-E):\n"A powerful cinematic image of a lone, strong man standing completely still and unbothered amidst a chaotic, moving background, symbolizing stoic calmness in the face of disrespect, high contrast, 8k --ar 4:5"`
            }
        ],
        3: [ // Miércoles
            { 
                id: 't-wed-1', 
                text: 'Publicar Reel: "Sé pacífico, no inofensivo"',
                script: `[GUION PARA REEL FACELESS - TIKTOK/IG/FB]
Título en pantalla: El error de ser un "Hombre Bueno" ⚠️

[Visual sugerido: Clips dinámicos intercalados de un hombre entrenando boxeo/artes marciales intensamente, seguido de un clip del mismo hombre vestido de traje ajustándose los gemelos.]

Voz en off: "Jordan Peterson dijo algo brillante: 'Un hombre inofensivo no es un buen hombre. Un buen hombre es un hombre muy, muy peligroso que lo tiene bajo control voluntario'. Las mujeres no se sienten atraídas por el 'chico bueno' que es incapaz de defenderse. Se sienten atraídas por el hombre que tiene la capacidad de destruir, pero elige la paz. Si eres inofensivo, no eres virtuoso, eres débil. Ve al gimnasio, aprende a pelear, hazte fuerte, y luego usa esa fuerza para proteger. Sígueme y conviértete en un monstruo controlado."

[COPIAR Y PEGAR EN DESCRIPCIÓN]
La debilidad nunca ha sido una virtud. 🦁⚔️
La verdadera paz solo la puede ofrecer aquel que está preparado para la guerra.
👉 Sígueme si estás trabajando en tu fuerza física y mental.
#Masculinidad #JordanPeterson #CaballeroModerno #Fuerza #Estoicismo`
            },
            {
                id: 't-wed-fb',
                text: 'Publicar Post en Facebook (Copiar y Pegar)',
                script: `Ser inofensivo no te hace un buen hombre. Te hace débil. ⚔️🦁

Existe una confusión masiva en la sociedad moderna. Nos han enseñado a castrar nuestra agresividad natural bajo la excusa de ser "buenas personas". 

Pero como bien dice la psicología evolutiva: Un hombre que no tiene la capacidad de causar daño y es pacífico, no es virtuoso, simplemente es inofensivo. No tiene otra opción. 

En cambio, un hombre que es fuerte, capaz de defenderse física y mentalmente, pero que ELIGE ser amable y pacífico... ese es un hombre de verdadero valor. 

Tu deber como Caballero Moderno es cultivar tu fuerza (física, financiera y mental). Sé peligroso para los problemas, pero un refugio seguro para los tuyos. 

👉 ¿Estás entrenando tu cuerpo y tu mente? Únete a la tribu.

---\n🎨 PROMPT IMAGEN (Midjourney/DALL-E):\n"A cinematic split composition: one side shows the shadows of a man intensely hitting a heavy bag in a gritty gym, the other side shows the same man in a sharp suit petting a dog calmly, symbolizing controlled strength, photorealistic --ar 4:5"`
            }
        ],
        4: [ // Jueves
            { 
                id: 't-thu-1', 
                text: 'Publicar Reel: "La regla del 1%"',
                script: `[GUION PARA REEL FACELESS - TIKTOK/IG/FB]
Título en pantalla: Cómo ser un 1% más atractivo hoy 💎

[Visual sugerido: Tomas detalle (close-ups) muy estéticos: un buen reloj en la muñeca, lustrando unos zapatos de cuero, aplicando perfume, arreglando el cuello de una camisa.]

Voz en off: "No necesitas ganarte la lotería genética para estar en el top 10% de los hombres más atractivos. Solo necesitas arreglar los detalles que el 90% ignora. Usa un perfume de nicho, no el comercial que usan todos. Ajusta tus camisas para que encajen perfecto en tus hombros, un sastre cuesta menos que una camiseta nueva. Mantén tus zapatos impecables. Y lo más importante, mantén tus uñas cortas y limpias. Las mujeres son criaturas de detalles. Mientras otros hombres descuidan su imagen, tú arrasarás por simple eliminación. Sígueme para elevar tu estética."

[COPIAR Y PEGAR EN DESCRIPCIÓN]
El diablo está en los detalles, y la atracción también. 👞👔
El estilo no es sobre cuánto gastas, es sobre cuánto te importa tu presentación.
👉 Sígueme para convertirte en la mejor versión visual de ti mismo.
#EstiloMasculino #Grooming #CaballeroModerno #AltoValor #Elegancia`
            },
            {
                id: 't-thu-fb',
                text: 'Publicar Post en Facebook (Copiar y Pegar)',
                script: `El estatus silencioso: Por qué los detalles te hacen irresistible. 👔💎

He escuchado a miles de hombres quejarse de que "las mujeres solo se fijan en el físico de modelo". Mentira. Se fijan en el cuidado personal, que es un indicador biológico de estatus y disciplina.

Puedes tener un rostro promedio, pero si entras a una sala proyectando el "Efecto Halo", el juego cambia. 
¿Qué es el Efecto Halo? 
- Un perfume amaderado que deja rastro cuando pasas.
- Ropa que abraza tus hombros correctamente (llévala al sastre, es barato).
- Zapatos de cuero impecablemente limpios.
- Postura recta (hombros atrás, barbilla alta).

Mientras el 90% de los hombres andan en tenis sucios y camisetas holgadas, tú automáticamente te colocas en la cima de la jerarquía visual sin decir una sola palabra.

👉 Invierte en ti. Únete a nuestra comunidad para elevar tus estándares.

---\n🎨 PROMPT IMAGEN (Midjourney/DALL-E):\n"A macro cinematic shot focusing on the refined details of a modern gentleman: adjusting a luxurious cufflink on a crisp white shirt, subtle background blur, high fashion lighting, photorealistic --ar 4:5"`
            }
        ],
        5: [ // Viernes
            { 
                id: 't-fri-1', 
                text: 'Publicar Reel: "Deja de convencerlas"',
                script: `[GUION PARA REEL FACELESS - TIKTOK/IG/FB]
Título en pantalla: El secreto de la abundancia real 🧠

[Visual sugerido: B-roll de un hombre leyendo un libro estoico en una biblioteca, o un hombre enfocado trabajando tarde en su laptop con una taza de café. Cero distracciones.]

Voz en off: "El momento en que te vuelves extremadamente atractivo es el momento en el que dejas de intentar convencer a la gente de tu valor. Si una chica te cancela una cita, no le pidas explicaciones. Si no te responde el mensaje, archiva el chat y sigue trabajando en tus metas. Perseguir es comportamiento de presa, no de cazador. La abundancia real no es tener 10 mujeres en tu teléfono, es tener un propósito de vida tan grande que no te importa quién decide irse. El hombre que no necesita a nadie, atrae a todos. Sígueme."

[COPIAR Y PEGAR EN DESCRIPCIÓN]
Deja de negociar tu valor con personas que no lo ven. 📉❌
Cuando tu propósito es el centro de tu vida, el rechazo pierde todo su poder.
👉 Sígueme para desarrollar inmunidad emocional.
#Abundancia #Mentalidad #CaballeroModerno #Seduccion #Proposito`
            },
            {
                id: 't-fri-fb',
                text: 'Publicar Post en Facebook (Copiar y Pegar)',
                script: `La verdadera abundancia no es tener opciones, es tener desapego. 🍂⛓️

Un error fatal de los hombres modernos es creer que la "Mentalidad de Abundancia" significa hablar con cinco chicas al mismo tiempo. Eso es ego disfrazado de abundancia.

La abundancia real es el desapego absoluto de los resultados. 
Es invitar a salir a alguien y que si dice "No", tu noche siga siendo igual de espectacular leyendo un libro o trabajando en tu negocio.
Es no sentir la necesidad patológica de enviar un doble mensaje cuando te dejan en visto. 

Cuando el centro de tu vida es tu propósito (tus metas, tu salud, tu legado) y no las mujeres, automáticamente adquieres un aura de seguridad que es imposible de fingir. Las personas gravitan hacia quienes no las necesitan.

👉 ¿Tu propósito ya es más grande que tus excusas? Síguenos.

---\n🎨 PROMPT IMAGEN (Midjourney/DALL-E):\n"A cinematic image of a modern gentleman walking confidently away from a blurry crowd towards a bright, golden sunset horizon, symbolizing walking towards his purpose with detachment, 8k --ar 4:5"`
            }
        ],
        6: [ // Sábado
            { 
                id: 't-sat-1', 
                text: 'Publicar Reel: "El costo del liderazgo"',
                script: `[GUION PARA REEL FACELESS - TIKTOK/IG/FB]
Título en pantalla: Por qué caminarás solo ⛰️

[Visual sugerido: Tomas de drones épicas. Un hombre en la cima de una montaña, o un auto deportivo manejando solo por una carretera vacía en el desierto al amanecer.]

Voz en off: "Nadie te advierte sobre el aislamiento del liderazgo. Cuando decides dejar la pornografía, comer limpio, leer, invertir y no salir de fiesta cada fin de semana, la mayoría de tus amigos te dirán que has cambiado, que eres aburrido. Y sí, caminarás solo por mucho tiempo. Las cimas de las montañas no están abarrotadas de gente. Si quieres resultados del 1%, tienes que estar dispuesto a soportar la soledad que el 99% no soporta. Sigue caminando. Tu nueva tribu te espera en la cima. Sígueme para no rendirte."

[COPIAR Y PEGAR EN DESCRIPCIÓN]
La soledad es el precio de admisión para la grandeza. 👑🦅
No bajes tus estándares para encajar en lugares donde ya no cabes.
👉 Sígueme si estás en la etapa solitaria del proceso, aquí somos tribu.
#Liderazgo #Motivacion #CaballeroModerno #DesarrolloPersonal #Mentalidad`
            },
            {
                id: 't-sat-fb',
                text: 'Publicar Post en Facebook (Copiar y Pegar)',
                script: `El costo oculto de la grandeza es el aislamiento temporal. 🦅🏔️

Hay un peaje que todo hombre debe pagar cuando decide abandonar la mediocridad: perderá temporalmente a casi todos los que lo rodean.

Cuando dejas de anestesiarte con alcohol, videojuegos y entretenimiento vacío, te vuelves un espejo incómodo para aquellos que no quieren cambiar. Te llamarán raro, obsesionado o aburrido. Intentarán arrastrarte de vuelta a la zona de confort.

Resiste. La soledad que sientes hoy no es un castigo, es un filtro. Estás limpiando tu ecosistema. Si aguantas la presión de caminar solo durante tu reconstrucción, llegarás a un nivel donde inevitablemente chocarás con hombres de tu mismo calibre. 

Las águilas vuelan solas; son los cuervos los que vuelan en bandada.

👉 Etiqueta o comparte esto con ese amigo que está enfocado en sus metas.

---\n🎨 PROMPT IMAGEN (Midjourney/DALL-E):\n"An epic, sweeping cinematic shot of a single eagle soaring above a majestic mountain peak at dawn. Below in the blur are smaller birds in a flock. Symbolizing solitary leadership and high standards, photorealistic --ar 4:5"`
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
