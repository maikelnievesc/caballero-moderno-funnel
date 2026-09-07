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
    
    // --- Agenda de la Semana 13 (Control del Marco y Dinámicas de Poder) ---
    const weeklyAgenda = {
        0: [ // Domingo - Empty
            { id: 't-sun-1', text: 'Descanso y planificación' }
        ],
        1: [ // Lunes
            { 
                id: 't-mon-1', 
                text: 'Publicar Video Largo en YT: "La Batalla de los Marcos" (5:00 PM)',
                script: `[GUION PARA VIDEO FACELESS - YT (3.5 mins)]
Título SEO: Por qué siempre pierdes las discusiones: El Control del Marco

[Visual sugerido: B-roll cinemático. Un juego de ajedrez donde el rey negro acorrala al blanco. Dos leones mirándose fijamente. Una entrevista de alto nivel estilo 'Succession'. Estética oscura y psicológica.]

(0:00 - 0:30) Hook: "¿Alguna vez has estado hablando con una mujer y, sin darte cuenta, terminaste justificándote o pidiendo disculpas por algo que ni siquiera era tu culpa? Bienvenido a la 'Batalla de los Marcos'. En psicología social, un 'Marco' (Frame) es la perspectiva o realidad bajo la cual se está llevando a cabo una interacción. Y hay una regla de oro inmutable: El marco más fuerte siempre absorbe al más débil. Hoy te voy a enseñar a dominar esta dinámica de poder."

(0:30 - 1:30) Quien se justifica, pierde: "Cuando una mujer te lanza un 'shit test' o te cuestiona ('¿Por qué tardaste en responder?' o '¿Eres así de aburrido siempre?'), está intentando jalarte hacia su marco. Si tú respondes con lógica, pones excusas o te justificas, acabas de aceptar que ella es la autoridad y tú estás siendo evaluado. En el momento en que te justificas, pierdes la atracción. El hombre de alto estatus no es evaluado, él evalúa."

(1:30 - 2:30) Cómo mantener tu Marco: "Para mantener tu marco, debes usar el humor, la indiferencia o la exageración. Si ella te dice 'Seguro le dices eso a todas', tú no dices 'No, te lo juro que no'. Tú dices, con una media sonrisa: 'Solo a las que me invitan a cenar. ¿A dónde me vas a llevar?'. Inmediatamente volteas el marco. Ahora eres tú el premio, y es ella quien debe invertir. Mantener tu realidad frente a la presión externa es el rasgo masculino más atractivo que existe."

(2:30 - 3:30) Conclusión: "La próxima vez que sientas la urgencia de dar largas explicaciones para quedar bien, muerde tu lengua. Mantén contacto visual, sonríe ligeramente y no te tomes tan en serio. Sé el centro de tu propia realidad. Suscríbete si estás listo para dejar de reaccionar y empezar a liderar."`
            },
            { 
                id: 't-mon-2', 
                text: 'Publicar Reel: "Quien reacciona, pierde"',
                script: `[GUION PARA REEL FACELESS - TIKTOK/IG/FB]
Título en pantalla: La regla #1 de la psicología social ♟️

[Visual sugerido: Un hombre sentado relajado mientras un vaso se rompe cerca o hay caos alrededor, él ni se inmuta. O el océano chocando contra una roca sólida.]

Voz en off: "Hay una ley de poder en las dinámicas sociales que nadie te explica: La persona que reacciona más, es la persona que tiene menos poder. Si alguien te insulta de forma sutil y tú te enojas, pierdes. Si una mujer te hace una prueba y tú te pones nervioso y te justificas, pierdes. Quien altera su estado emocional por culpa del otro, acaba de entregarle el control de su mente. A esto se le llama 'Control del Marco'. El hombre magnético es como una roca en medio del océano. Las olas de drama, críticas o coqueteo chocan contra él, pero no lo mueven. Deja de ser reactivo. Conviértete en la roca. Sígueme."

[COPIAR Y PEGAR EN DESCRIPCIÓN]
El que más invierte emocionalmente en una interacción, es el subordinado. 🪨🌊
Deja de reaccionar a todo. Mantén tu centro.
👉 Sígueme para forjar un carácter inquebrantable.
#PsicologiaSocial #ControlDelMarco #CaballeroModerno #Estoicismo #Poder`
            },
            {
                id: 't-mon-fb',
                text: 'Publicar Post en Facebook (Copiar y Pegar)',
                script: `La Batalla de los Marcos: Por qué quien se justifica, pierde. ♟️🪨

Cada conversación que tienes es un choque de realidades. En psicología de la seducción y los negocios, esto se llama "Control del Marco" (Frame Control).

Imagina este escenario: Una chica te dice en tono de broma: "¿Esa es la camisa que vas a usar para nuestra cita?".

El hombre con un Marco Débil se asusta. Su mente piensa: "Oh no, no le gusta". Inmediatamente responde: "Ah, ¿no te gusta? Puedo cambiarme rápido, es que estaba apurado". 
Resultado: Acaba de ceder el poder. Ahora ella es el juez y él es el concursante. Atracción destruida.

El hombre con un Marco Fuerte sabe que es el premio. Sonríe ligeramente, la mira a los ojos y responde: "Sí, elegí mi camisa de la suerte. Trata de no distraerte mucho hoy". 
Resultado: Él mantuvo su realidad. Él lidera. Atracción disparada.

Nunca pidas disculpas por ser tú. Nunca des explicaciones innecesarias a quien solo está poniendo a prueba tu seguridad.

👉 ¿Eres reactivo o eres la roca?

---\n🎨 PROMPT IMAGEN (Midjourney/DALL-E):\n"A highly cinematic, photorealistic image of a massive, dark monolithic rock standing perfectly still in a stormy, crashing ocean. Symbolizing the stoic Frame Control and unreactiveness, 8k --ar 4:5"`
            }
        ],
        2: [ // Martes
            { 
                id: 't-tue-1', 
                text: 'Publicar Reel: "La Ley del Menor Esfuerzo"',
                script: `[GUION PARA REEL FACELESS - TIKTOK/IG/FB]
Título en pantalla: Por qué esforzarte te hace menos atractivo 🚫

[Visual sugerido: B-roll de un hombre sirviéndose un trago tranquilamente, ignorando a una multitud. O un león bostezando mientras otros animales corren.]

Voz en off: "Te enseñaron que para conseguir algo que vale la pena, tienes que esforzarte muchísimo. En el trabajo y en el gimnasio, eso es verdad. En la atracción, es veneno. Existe la 'Ley del Menor Esfuerzo Social'. Significa que la persona que parece estar intentando impresionar, automáticamente comunica que tiene menor valor. Si hablas más fuerte de lo normal, si te ríes excesivamente de sus chistes malos, o si usas ropa súper llamativa para que te miren... hueles a desesperación. El estatus real susurra, no grita. Relaja tus hombros, habla suave, no te esfuerces por caer bien. El verdadero magnetismo es parecer que no te importa en lo absoluto. Sígueme."

[COPIAR Y PEGAR EN DESCRIPCIÓN]
El estatus no se grita, se subcomunica. 🧊♟️
Quien intenta impresionar, ya perdió. Relájate.
👉 Sígueme para dominar el magnetismo silencioso.
#Estatus #Seduccion #CaballeroModerno #LeyDelMenorEsfuerzo #Carisma`
            },
            {
                id: 't-tue-fb',
                text: 'Publicar Post en Facebook (Copiar y Pegar)',
                script: `La Ley del Menor Esfuerzo: Tratar demasiado fuerte es tu perdición. 🧊🚫

Hay una regla contradictoria en las dinámicas sociales que frustra al 90% de los hombres: En la atracción, la ley del esfuerzo físico no aplica. 

Si quieres músculos grandes, tienes que levantar pesas pesadas (esfuerzo brutal). 
Pero si quieres generar atracción masiva, tienes que parecer que NO estás haciendo ningún esfuerzo.

El "Try-Hard" (el que se esfuerza demasiado) es el tipo que paga cenas carísimas para una chica que acaba de conocer, cuenta chistes gritando para que todos en la mesa lo miren, y se viste con marcas gigantes para demostrar que tiene dinero. 
Subcomunicación: "Por favor, acéptenme".

El Caballero Moderno domina la "Sprezzatura" (el arte italiano de la indiferencia calculada). Viste impecable pero sin logos. Habla pausado. Se ríe solo si el chiste es genuinamente bueno. Trata a la mujer hermosa de la misma forma que trataría al cajero del banco: con educación y cero necesidad de impresionarla.

👉 El verdadero poder es relajado. 

---\n🎨 PROMPT IMAGEN (Midjourney/DALL-E):\n"A highly aesthetic cinematic image of a modern gentleman in a sharp but understated dark suit, sitting comfortably in a high-end lounge, looking completely relaxed and unbothered, exuding silent power (Sprezzatura), 8k --ar 4:5"`
            }
        ],
        3: [ // Miércoles
            { 
                id: 't-wed-1', 
                text: 'Publicar Reel: "Patrones de Interrupción"',
                script: `[GUION PARA REEL FACELESS - TIKTOK/IG/FB]
Título en pantalla: Cómo hackear su piloto automático 🧠

[Visual sugerido: Matriz de código cayendo, o un disco de vinilo rayándose. Efecto visual de una falla en el sistema (Glitch), rápido y dinámico.]

Voz en off: "Las mujeres hermosas viven en piloto automático. Reciben los mismos cumplidos, los mismos mensajes de 'Hola, ¿qué tal tu día?', y las mismas miradas urgidas todos los días. Su cerebro ha creado una muralla para ignorarlos. Si quieres que te preste atención, tienes que usar un 'Patrón de Interrupción'. En PNL, esto significa hacer o decir algo tan inesperado que el cerebro no tiene un guion preprogramado para responder. En lugar de decirle 'Qué bonitos ojos tienes', acércate, mírala serio y dile: 'Tienes cara de que mientes en los juegos de mesa'. Su cerebro se descolocará, se reirá y te verá como una falla en la Matrix. Acabas de captar su atención total. Sígueme."

[COPIAR Y PEGAR EN DESCRIPCIÓN]
No seas un NPC más en su vida. Rompe el guion. 🧠⚡
Los patrones de interrupción son el hack más rápido para generar curiosidad.
👉 Sígueme para dominar la comunicación persuasiva.
#PsicologiaOscura #PNL #CaballeroModerno #Atraccion #Carisma`
            },
            {
                id: 't-wed-fb',
                text: 'Publicar Post en Facebook (Copiar y Pegar)',
                script: `Patrones de Interrupción: El hack para salir de la Matrix del "Hola, ¿cómo estás?". 🧠⚡

Imagina ser una mujer atractiva. Entras a Instagram y tienes 50 mensajes idénticos: 
- "Qué hermosa eres".
- "Hola, ¿qué tal tu día?".
- "Preciosa".

El cerebro humano, para no volverse loco, automatiza las respuestas a los estímulos repetitivos. A esto se le llama "Piloto Automático". Cuando le dices un cumplido genérico, su cerebro ni siquiera lo registra, simplemente lo archiva en la carpeta de "Fans aburridos".

Para penetrar esa barrera, la PNL (Programación Neurolingüística) utiliza los "Patrones de Interrupción".

Tienes que decir o hacer algo que rompa la secuencia lógica esperada. 
En lugar de invitarle un trago diciendo "¿Puedo invitarte algo?", acércate y dile con mucha seriedad: "¿Eres de las que roba las papas fritas del plato ajeno, o se puede confiar en ti?".

Su cerebro no tiene una respuesta preprogramada para eso. Hará un cortocircuito, se reirá por la sorpresa, y Boom: acabas de ganar su total atención porque eres diferente.

👉 ¿Sigues usando los mismos guiones aburridos que el resto? 

---\n🎨 PROMPT IMAGEN (Midjourney/DALL-E):\n"A cinematic, surreal image of a vinyl record being scratched, or a visual representation of a 'glitch' in the matrix in a crowded bar. Symbolizing breaking the pattern of normal social interaction, highly aesthetic, 8k --ar 4:5"`
            }
        ],
        4: [ // Jueves
            { 
                id: 't-thu-1', 
                text: 'Publicar Reel: "Dominio de Grupo"',
                script: `[GUION PARA REEL FACELESS - TIKTOK/IG/FB]
Título en pantalla: Cómo liderar a otros hombres (Sin pelear) 🐺

[Visual sugerido: B-roll de un lobo alfa observando a la manada desde arriba en silencio. O varios hombres de negocios, pero solo uno (enfoque oscuro) está relajado.]

Voz en off: "Cuando hay un grupo de hombres compitiendo por la atención de las mujeres, siempre hay dos tipos. Está el payaso: levanta la voz, cuenta chistes histéricos, e intenta dominar la conversación. Y luego está el líder silencioso. Mientras los demás compiten, él se sienta recostado hacia atrás. No compite por la palabra. Hace preguntas cortas y deja que los otros hombres hablen para validarse ante él. Físicamente ocupa más espacio, sus movimientos son lentos. Irónicamente, el hombre que no necesita ser el centro de atención, termina atrayendo la mirada de todas, porque subcomunica que no tiene nada que probar. Sé el líder silencioso. Sígueme."

[COPIAR Y PEGAR EN DESCRIPCIÓN]
En un cuarto lleno de hombres gritando, el que susurra tiene el poder. 🐺🤫
Deja que los betas compitan, el alfa evalúa.
👉 Sígueme para dominar la dinámica social de grupos.
#Liderazgo #DinamicaSocial #CaballeroModerno #Masculinidad #AltoValor`
            },
            {
                id: 't-thu-fb',
                text: 'Publicar Post en Facebook (Copiar y Pegar)',
                script: `Dominio de Grupo: Por qué el líder no es el que más grita. 🐺🤫

Pon a cinco hombres y un par de mujeres hermosas en una mesa, y observarás la biología evolutiva en su estado más primitivo.

En cuestión de minutos, empezará la competencia. Verás a los hombres (incluso a tus amigos) hablando más fuerte, alardeando sobre sus trabajos, interrumpiéndose y contando chistes para ver quién hace reír más a las chicas. Es una danza de pavos reales.

El error número uno es entrar a competir en ese circo. 

El hombre magnético de alto estatus adopta la postura del "Líder Silencioso". Se recuesta en su silla (ocupando espacio). No eleva la voz. Sonríe ligeramente ante los intentos de los demás por impresionar. Hace preguntas y permite que los otros hombres intenten impresionarlo a ÉL.

Las mujeres tienen un radar agudo para el estatus. Rápidamente notarán que mientras 4 hombres compiten por atención, hay 1 hombre que no siente la necesidad de probar nada. Y la curiosidad por ese hombre silencioso las volverá locas.

👉 No compitas en su juego, cambia las reglas.

---\n🎨 PROMPT IMAGEN (Midjourney/DALL-E):\n"A highly cinematic shot of a dark, elegant poker table with several men blurrily leaning in aggressively, while one man in sharp focus leans back comfortably in the shadows, quietly holding his cards, symbolizing silent leadership, 8k --ar 4:5"`
            }
        ],
        5: [ // Viernes
            { 
                id: 't-fri-1', 
                text: 'Publicar Reel: "El Efecto Takeaway"',
                script: `[GUION PARA REEL FACELESS - TIKTOK/IG/FB]
Título en pantalla: Vete cuando la fiesta esté buena 🚪

[Visual sugerido: Un hombre caminando alejándose de una fiesta llena de luces y gente hacia la oscuridad, o alguien colgando un teléfono con calma.]

Voz en off: "Este es el truco de manipulación de estatus más poderoso que vas a aprender: El Takeaway. La mayoría de los hombres se quedan en una cita o en una conversación hasta que se vuelve incómoda o se acaba el tema. Están exprimiendo hasta la última gota de validación. El hombre de alto valor hace exactamente lo contrario. En el momento más divertido de la cita, cuando ella se está riendo y hay máxima tensión química, él mira su reloj y dice: 'Me encantaría quedarme, pero tengo que madrugar mañana'. Corta la interacción en el punto más alto de dopamina. Eso la dejará literalmente adicta a tu presencia. Siempre retírate siendo el premio. Sígueme."

[COPIAR Y PEGAR EN DESCRIPCIÓN]
Nunca dejes que el globo se desinfle frente a ella. Pínchalo cuando esté en lo más alto. 🎈🚪
El Takeaway es el arte de dejar a la gente queriendo más.
👉 Sígueme para convertirte en una adicción saludable.
#PsicologiaSocial #Seduccion #CaballeroModerno #Takeaway #Atraccion`
            },
            {
                id: 't-fri-fb',
                text: 'Publicar Post en Facebook (Copiar y Pegar)',
                script: `El Efecto Takeaway: Retírate cuando la fiesta esté en su clímax. 🚪🎈

Existe una regla de oro en el mundo del espectáculo (y en la seducción): Deja siempre a tu audiencia con ganas de más.

El error garrafal que cometen los hombres cuando por fin consiguen una cita que va muy bien, es que no saben irse. Se quedan hasta las 3 de la mañana hablando, hasta que ya no hay tema de conversación, empiezan los bostezos y la interacción muere por inercia.

Estás entrenando a su cerebro para asociarte con aburrimiento al final de la noche.

Prueba el Efecto "Takeaway" (Quitar o retirar). Cuando la cita esté en su punto MÁS ALTO, cuando ella se esté riendo a carcajadas, tocándote el brazo y la química sea eléctrica, di esto:
"Ha sido increíble, pero mañana tengo un día pesado. Tenemos que irnos".

Cortar la dopamina en el pico más alto provoca un vacío masivo. Su cerebro se quedará reproduciendo esa noche en bucle y estará literalmente desesperada por volver a verte.

👉 Sé el hombre que controla su tiempo, no el que lo regala.

---\n🎨 PROMPT IMAGEN (Midjourney/DALL-E):\n"A moody, highly cinematic image of a sharp-dressed gentleman walking away from a bright, glowing, blurry party scene into the cool, dark night, symbolizing leaving on a high note, photorealistic, 8k --ar 4:5"`
            }
        ],
        6: [ // Sábado
            { 
                id: 't-sat-1', 
                text: 'Publicar Reel: "Arquitectura Espacial"',
                script: `[GUION PARA REEL FACELESS - TIKTOK/IG/FB]
Título en pantalla: Cómo sentarte en una primera cita 🪑

[Visual sugerido: B-roll mostrando dos tazas de café o tragos. Diagrama visual muy rápido o simplemente planos estéticos de un bar oscuro desde diferentes ángulos.]

Voz en off: "Si vas a una cita y te sientas frente a frente con ella, como en una entrevista de trabajo, ya empezaste perdiendo. La arquitectura espacial dicta las emociones. Sentarte cara a cara genera confrontación subconsciente y bloquea cualquier posibilidad de romper la barrera física (el kino). El truco de los seductores de élite es sentarse a 90 grados, en la esquina de una mesa, o uno al lado del otro en la barra de un bar. Esto subcomunica que están juntos contra el mundo, no uno contra el otro. Además, permite el contacto físico accidental. Cambia tu posicionamiento físico, y cambiarás el resultado de la noche. Sígueme."

[COPIAR Y PEGAR EN DESCRIPCIÓN]
No vayas a una cita como si fueras a pedir trabajo de contador. 📐☕
Las entrevistas son frente a frente. El romance es a 90 grados.
👉 Sígueme para dominar la logística de la atracción.
#LenguajeCorporal #PrimeraCita #CaballeroModerno #Seduccion #Logistica`
            },
            {
                id: 't-sat-fb',
                text: 'Publicar Post en Facebook (Copiar y Pegar)',
                script: `Arquitectura Espacial: La logística oculta de una primera cita. 📐☕

El 90% de los hombres arruinan su primera cita antes de siquiera decir "Hola". Lo arruinan con la logística espacial.

Van a Starbucks, eligen una mesa cuadrada, y se sientan EXACTAMENTE frente a la mujer. 

En psicología espacial, la posición frente a frente es la posición de la confrontación, la negociación y la entrevista de trabajo. Hay una barrera física (la mesa) separándolos. Esto eleva la tensión defensiva y hace que cualquier intento de contacto físico (rozar una mano) se sienta forzado y lejano.

El Caballero Moderno sabe que la logística lo es todo. Llévala a la barra de un bar (sentados lado a lado) o busca una mesa cuadrada y siéntate en la esquina, a 90 grados de ella. 

Sentarse a 90 grados o lado a lado elimina la sensación de interrogatorio. Invita a compartir el mismo punto de vista visual (mirar el lugar juntos) y hace que romper la barrera del contacto físico sea tan natural como rozar codos por accidente. 

👉 Los pequeños detalles separan a los novatos de los maestros.

---\n🎨 PROMPT IMAGEN (Midjourney/DALL-E):\n"A highly aesthetic, cinematic overhead shot of a moody, dimly lit bar table. Two elegant cocktail glasses are placed at a 90-degree angle corner of the table, not opposite each other, symbolizing intimate spatial architecture, 8k --ar 4:5"`
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
