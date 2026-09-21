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
    
    // --- Agenda de la Semana 15 (Biología Evolutiva y Atracción) ---
    const weeklyAgenda = {
        0: [ // Domingo - Empty
            { id: 't-sun-1', text: 'Descanso y planificación' }
        ],
        1: [ // Lunes
            { 
                id: 't-mon-1', 
                text: 'Publicar Video Largo en YT: "El Algoritmo de la Atracción" (5:00 PM)',
                script: `[GUION PARA VIDEO FACELESS - YT (3.5 mins)]
Título SEO: El secreto biológico que las mujeres no te cuentan (Hipergamia)

[Visual sugerido: B-roll cinemático. Una cadena de ADN girando en la oscuridad, leones cazando en la sabana, un reloj antiguo y hombres vestidos impecablemente. Estética científica y cruda.]

(0:00 - 0:30) Hook: "El 99% de los hombres fracasa en las citas porque intentan aplicar lógica moderna a un cerebro que tiene millones de años de antigüedad. Creen que siendo amables y pagando cenas van a generar deseo. Hoy vamos a destruir los mitos románticos de Disney y vamos a hablar de ciencia fría y dura: Biología Evolutiva. Si entiendes el 'algoritmo' de la hipergamia, nunca más volverás a preguntarte por qué te rechazaron."

(0:30 - 1:30) El instinto de supervivencia: "Hace miles de años, si una mujer elegía a un hombre débil, ella y su descendencia morían en el invierno. La biología cableó su cerebro para sentir atracción automática por el estatus, la fuerza y la capacidad de proveer seguridad. Esto se llama Hipergamia: la tendencia biológica a buscar una pareja de igual o mayor estatus. No es que sean interesadas, es que su ADN les exige asegurar la supervivencia."

(1:30 - 2:30) El error del hombre moderno: "El problema es que tú te ofendes por esto. Te quejas de que 'las mujeres de hoy exigen mucho'. El hombre superior no se queja del algoritmo, lo usa a su favor. Entiende que el respeto y la admiración son los precursores del deseo. Si no te admira, no te desea. Tu trabajo no es convencerla con palabras, es convertirte en un hombre que demuestre competencia, liderazgo y ambición."

(2:30 - 3:30) Conclusión: "Deja de intentar negociar la atracción. La atracción no es una elección lógica, es una respuesta biológica a estímulos de alto valor. Mejora tu físico, eleva tu intelecto y domina tu entorno. Suscríbete si estás listo para dejar de llorar por las reglas y empezar a ganar el juego."`
            },
            { 
                id: 't-mon-2', 
                text: 'Publicar Reel: "Hipergamia Evolutiva"',
                script: `[GUION PARA REEL FACELESS - TIKTOK/IG/FB]
Título en pantalla: Por qué la amabilidad no genera atracción 🧬

[Visual sugerido: B-roll de un león rugiendo o un lobo alfa liderando la manada. Contraste con un hombre moderno.]

Voz en off: "Te vendieron la mentira de que para enamorar a una mujer solo tienes que ser amable y tratarla como a una princesa. La biología evolutiva dice otra cosa. El cerebro femenino está diseñado para buscar supervivencia y estatus. Se llama hipergamia. Si eres muy amable pero eres débil, no tienes ambición y te disculpas por todo, su cerebro biológico te ve como un peligro para su supervivencia emocional y física. La amabilidad es un requisito básico de la decencia humana, no es una estrategia de seducción. Si quieres generar deseo crudo, tienes que demostrar competencia, fuerza y liderazgo. Deja de ser solo un 'chico bueno' y conviértete en un hombre capaz. Sígueme."

[COPIAR Y PEGAR EN DESCRIPCIÓN]
La biología no sabe de romanticismo. Responde al estatus y la supervivencia. 🧬🦁
Ser amable no es un superpoder, es lo mínimo indispensable.
👉 Sígueme para entender la cruda realidad del comportamiento humano.
#BiologiaEvolutiva #Psicologia #CaballeroModerno #Masculinidad #AltoValor`
            },
            {
                id: 't-mon-fb',
                text: 'Publicar Post en Facebook (Copiar y Pegar)',
                script: `Hipergamia Evolutiva: Por qué a la biología no le importa tu poesía. 🧬🦁

Desde que nacemos, nos bombardean con películas donde el chico promedio, torpe pero de "buen corazón", termina conquistando a la supermodelo porque le llevó flores bajo la lluvia.

La realidad biológica es mucho más fría y exacta.

Durante millones de años de evolución, el cerebro femenino fue programado con un mecanismo de supervivencia llamado Hipergamia: la necesidad de emparejarse con el hombre más competente y de mayor estatus posible en su tribu. Si en la prehistoria elegía a un hombre débil, ella no sobrevivía el invierno. 

Ese mismo cerebro de hace un millón de años es el que opera hoy cuando usas Tinder o estás en un bar. Ella no evalúa tu poesía, su subconsciente evalúa tu capacidad para liderar, tu lenguaje corporal relajado bajo presión, y tu ambición.

Muchos hombres se enojan con esto y dicen "son unas interesadas". El Caballero Moderno sonríe, entiende el algoritmo de la evolución, y se pone a trabajar en sí mismo para convertirse en el hombre más competente de la sala.

👉 No intentes negociar la atracción. Conviértete en el estímulo correcto.

---\n🎨 PROMPT IMAGEN (Midjourney/DALL-E):\n"A highly cinematic, photorealistic image of a dark, elegant room where a glowing, futuristic DNA double helix hovers above a heavy oak desk. Symbolizing the biological code of attraction, aesthetic, 8k --ar 4:5"`
            }
        ],
        2: [ // Martes
            { 
                id: 't-tue-1', 
                text: 'Publicar Reel: "Las Pruebas de Aptitud (Shit Tests)"',
                script: `[GUION PARA REEL FACELESS - TIKTOK/IG/FB]
Título en pantalla: Por qué ella siempre te pone a prueba ⚔️

[Visual sugerido: Espadas chocando en cámara lenta, o un herrero golpeando acero al rojo vivo.]

Voz en off: "Estás hablando con la chica que te gusta, todo va bien, y de repente te suelta un comentario hiriente: 'Tus zapatos son horribles'. Te enojas o te pones nervioso. Acabas de reprobar la prueba biológica más antigua del mundo: El Shit Test. Desde la biología evolutiva, las mujeres necesitan comprobar que eres tan fuerte como aparentas. Si te derrumbas emocionalmente por un comentario sobre tus zapatos, ¿cómo vas a protegerla durante una crisis real de vida o muerte? El test no es un ataque, es una auditoría de tu masculinidad. El hombre de alto valor no se ofende; sonríe, no se justifica, y le responde con humor. Sé inquebrantable. Sígueme."

[COPIAR Y PEGAR EN DESCRIPCIÓN]
Un 'Shit Test' no es un insulto, es una solicitud subconsciente de seguridad. ⚔️🔥
Si te rompes con una palabra, pierdes el juego.
👉 Sígueme para dominar la psicología del comportamiento humano.
#ShitTest #PsicologiaFemenina #CaballeroModerno #Estoicismo #Seduccion`
            },
            {
                id: 't-tue-fb',
                text: 'Publicar Post en Facebook (Copiar y Pegar)',
                script: `Pruebas de Aptitud: La verdad biológica detrás de los "Shit Tests". ⚔️🔥

Todo hombre ha pasado por esto: La cita va increíble, hay química, y de la nada, ella te lanza un comentario pasivo-agresivo o una prueba absurda. 
"Esa camisa te hace ver un poco raro, ¿no crees?" o "¿Siempre hablas tanto?".

El hombre promedio entra en pánico, se ofende, o empieza a justificarse ("No, bueno, es que esta camisa me la regalaron..."). Acaba de destruir la atracción.

En la biología evolutiva, esto tiene una función vital. Las mujeres usan los "Shit Tests" para auditar tu congruencia. Quieren saber si la confianza que proyectas es real o es una máscara. Su biología dice: "Si este tipo pierde los papeles porque critiqué su camisa, ¿qué va a hacer cuando haya un problema real, como perder el trabajo o una crisis familiar? Es débil".

El Caballero Moderno entiende que el fuego prueba el acero. Cuando llega la prueba, él no reacciona. Mantiene contacto visual, sonríe con arrogancia juguetona y responde exagerando: "Lo sé, uso esta camisa específicamente para ahuyentar a las chicas aburridas. Veo que no funcionó contigo".

👉 Pasa la auditoría. No te tomes en serio.

---\n🎨 PROMPT IMAGEN (Midjourney/DALL-E):\n"A cinematic macro shot of red-hot steel being struck by a blacksmith's hammer in a dark forge, sparks flying everywhere. Symbolizing being tested under pressure, ultra-detailed, 8k --ar 4:5"`
            }
        ],
        3: [ // Miércoles
            { 
                id: 't-wed-1', 
                text: 'Publicar Reel: "El Efecto Preselección"',
                script: `[GUION PARA REEL FACELESS - TIKTOK/IG/FB]
Título en pantalla: El truco biológico de la envidia 👥

[Visual sugerido: Un hombre caminando seguro por la calle en cámara lenta mientras las sombras de mujeres voltean a mirarlo. Estilo muy elegante.]

Voz en off: "¿Alguna vez notaste que cuando tienes novia, de repente otras mujeres te prestan más atención? No es magia, es un fenómeno biológico documentado llamado 'Mate Copying' o Preselección. Evaluar el valor de un hombre requiere mucho esfuerzo y riesgo para el cerebro femenino. Pero si otras mujeres hermosas ya te han validado riéndose de tus chistes o saliendo contigo, ellas hicieron el trabajo pesado. Tu valor está certificado. Automáticamente te conviertes en un recurso escaso y deseable. Por eso, el peor error es llegar solo y desesperado a un evento. Aprende a rodearte de alta energía social, y el resto se hará solo. Sígueme."

[COPIAR Y PEGAR EN DESCRIPCIÓN]
El efecto preselección: Las mujeres desean lo que otras mujeres ya han aprobado. 👥✨
Construye una red social poderosa y la atracción será un efecto secundario.
👉 Sígueme para hackear las dinámicas sociales.
#Preseleccion #Psicologia #CaballeroModerno #Atraccion #DinamicaSocial`
            },
            {
                id: 't-wed-fb',
                text: 'Publicar Post en Facebook (Copiar y Pegar)',
                script: `El Efecto Preselección: Por qué te desean más cuando estás acompañado. 👥✨

Es un fenómeno que confunde a todos los hombres: Cuando estás soltero y desesperado por atención, pareces ser invisible para las mujeres. Pero el día que consigues una novia hermosa, de repente otras mujeres empiezan a coquetearte. 

¿Es brujería? No. Es biología. En zoología y psicología evolutiva, se le conoce como "Mate Copying" (Copia de Pareja) o Preselección.

Para una mujer, evaluar si eres peligroso, perdedor, exitoso o seguro requiere mucho tiempo y riesgo. Pero si te ve entrar a un lugar haciéndole reír a dos mujeres hermosas, su cerebro toma un atajo cognitivo: "Si ellas confían en él y lo encuentran divertido, entonces él tiene alto valor. Ya pasó el control de calidad".

Tu valor social acaba de ser certificado por otras mujeres. 

La lección aquí no es que uses a la gente, sino que entiendas la importancia de construir una vida social rica. Sé el hombre que conecta con todos, que hace reír a sus amigas y que no opera desde la escasez y el aislamiento.

👉 La validación social es tu mejor tarjeta de presentación.

---\n🎨 PROMPT IMAGEN (Midjourney/DALL-E):\n"A moody, highly cinematic shot of a sharp-dressed modern gentleman at a dark, luxurious bar. He is engaged in conversation, but in the blurred foreground, we see the silhouettes of other people observing him with interest, symbolizing preselection and social proof, 8k --ar 4:5"`
            }
        ],
        4: [ // Jueves
            { 
                id: 't-thu-1', 
                text: 'Publicar Reel: "Dimorfismo Sexual (Polaridad)"',
                script: `[GUION PARA REEL FACELESS - TIKTOK/IG/FB]
Título en pantalla: Por qué ser su "mejor amigo" te destruye 🧲

[Visual sugerido: Dos imanes gigantes acercándose o rechazándose. O el choque de dos elementos: fuego y agua.]

Voz en off: "La atracción humana funciona exactamente igual que el magnetismo: polos opuestos se atraen. En biología, esto es el 'Dimorfismo Sexual'. La masculinidad cruda y estoica se siente naturalmente atraída por la feminidad caótica y emocional, y viceversa. Si te conviertes en su mejor amigo, chismeas con ella por horas y eres demasiado suave, estás destruyendo tu polaridad masculina. Te estás acercando a su energía. Y dos polos positivos se repelen. Para que exista tensión sexual, tiene que haber contraste. Tienes que ser la roca inamovible frente a su tormenta. Nunca sacrifiques tu núcleo masculino para encajar. La polaridad es lo único que crea deseo real. Sígueme."

[COPIAR Y PEGAR EN DESCRIPCIÓN]
La amistad mata la polaridad sexual. 🧲⚡
Si actúas como su amiga, te tratará como a una.
👉 Sígueme para recuperar tu núcleo masculino.
#Polaridad #Masculinidad #CaballeroModerno #Atraccion #EnergiaMasculina`
            },
            {
                id: 't-thu-fb',
                text: 'Publicar Post en Facebook (Copiar y Pegar)',
                script: `Polaridad Masculina: Por qué intentar ser su mejor amigo asesina la atracción. 🧲⚡

La física básica dicta que los polos opuestos se atraen. En la psicología de las relaciones, a esto le llamamos "Polaridad".

La energía masculina cruda (dirección, estoicismo, propósito, lógica) actúa como un imán hacia la energía femenina profunda (emoción, flujo, intuición, caos). La tensión sexual existe EN EL ESPACIO entre estas dos diferencias.

El error catastrófico del "chico bueno" es intentar acercarse a ella comportándose como una de sus amigas. Pasa 4 horas en el teléfono escuchando sus chismes, analizando los problemas de sus otras amigas, y mostrando un exceso de emotividad complaciente. 

Acaba de destruir la polaridad. Ahora es el Polo Femenino. Y como dos polos iguales se repelen, el deseo sexual muere instantáneamente, y le dicen la famosa frase: "Eres un chico increíble, te veo como un hermano".

El Caballero Moderno ama a las mujeres, pero mantiene su núcleo intacto. Él es la roca, la montaña silenciosa. Ese contraste es lo que vuelve locas a las mujeres.

👉 No diluyas tu masculinidad para encajar. Tu poder está en el contraste.

---\n🎨 PROMPT IMAGEN (Midjourney/DALL-E):\n"A highly aesthetic, cinematic image of raw elements colliding: a dark, solid stone mountain against a chaotic, beautiful swirling ocean wave. Symbolizing the polarity between masculine and feminine energy, photorealistic, 8k --ar 4:5"`
            }
        ],
        5: [ // Viernes
            { 
                id: 't-fri-1', 
                text: 'Publicar Reel: "Triada Oscura y Peligro Biológico"',
                script: `[GUION PARA REEL FACELESS - TIKTOK/IG/FB]
Título en pantalla: Por qué prefieren al "Chico Malo" 🐍

[Visual sugerido: Un hombre trajeado ajustándose los puños en las sombras. O un lobo mirando fijamente a la cámara con ojos amarillos.]

Voz en off: "Llevas toda tu vida preguntándote por qué las mujeres hermosas ignoran al chico bueno que las trata bien, y se obsesionan con el 'chico malo'. La biología evolutiva tiene la respuesta. El cerebro femenino asocia los rasgos de la 'Triada Oscura' (narcisismo, maquiavelismo y psicopatía) con altos niveles de testosterona, dominancia social y capacidad de protegerla frente a otros hombres. Biológicamente, un hombre inofensivo es inútil para la supervivencia. No te estoy diciendo que seas un criminal. Te estoy diciendo que tienes que integrar tu sombra. Tienes que ser un hombre capaz de ser peligroso, pero que decide mantener ese peligro bajo control voluntario. Sé un monstruo educado. Sígueme."

[COPIAR Y PEGAR EN DESCRIPCIÓN]
Un hombre inofensivo no es un buen hombre, es solo un hombre débil. 🐍⚔️
Integra tu sombra. Sé peligroso, pero mantenlo bajo control.
👉 Sígueme para dominar la verdadera masculinidad de alto valor.
#ChicoMalo #TriadaOscura #CaballeroModerno #Psicologia #Sombra`
            },
            {
                id: 't-fri-fb',
                text: 'Publicar Post en Facebook (Copiar y Pegar)',
                script: `El Mito del Chico Malo: Integrando el Peligro Biológico. 🐍⚔️

"¿Por qué siempre se van con el patán si yo soy un buen tipo?" 
Es el lamento eterno del hombre moderno. Y la respuesta no está en que las mujeres sean tontas, está en la biología evolutiva.

En la antigüedad, un hombre inofensivo y excesivamente amable no podía proteger a su tribu de los invasores o los depredadores. La biología cableó a las mujeres para buscar señales de dominancia agresiva, lo que hoy psicólogos llaman rasgos de la "Triada Oscura" (Maquiavelismo, Narcisismo y Psicopatía). 

El chico malo subcomunica que no le importa lo que piensen de él, que tiene altos niveles de testosterona y que no tiene miedo al conflicto. Biológicamente, eso es magnético.

Jordan Peterson lo explica perfectamente: "No deberías ser inofensivo. Deberías ser un monstruo, un hombre absolutamente peligroso, y luego aprender a controlarlo". 

El Caballero Moderno no es un criminal ni un patán. Es un hombre inmensamente capaz de ser agresivo, de romper cuellos si es necesario para defender a su familia o su empresa, pero elige la educación y la paz. 

👉 Ser inofensivo no es virtud, es debilidad. Sé letal, pero educado.

---\n🎨 PROMPT IMAGEN (Midjourney/DALL-E):\n"A highly cinematic, moody portrait of a sharp-dressed modern gentleman with a shadow cast over half his face. Behind him, a subtle reflection of a dark wolf or predator. Symbolizing the controlled danger and the integrated shadow, 8k --ar 4:5"`
            }
        ],
        6: [ // Sábado
            { 
                id: 't-sat-1', 
                text: 'Publicar Reel: "El Lenguaje de la Simetría y Salud"',
                script: `[GUION PARA REEL FACELESS - TIKTOK/IG/FB]
Título en pantalla: Tu físico es tu currículum biológico 🧬

[Visual sugerido: B-roll de un hombre entrenando pesas pesadas en blanco y negro, o esculturas griegas perfectas.]

Voz en off: "Deja de repetir la mentira de que el físico no importa. La biología no es políticamente correcta. Cuando una mujer te mira por primera vez, su cerebro escanea tus proporciones en milisegundos. ¿Tienes los hombros anchos y la cintura estrecha? ¿Tienes una mandíbula definida? Estos no son estándares de belleza culturales, son indicadores biológicos de altos niveles de testosterona, un sistema inmunológico fuerte y buena genética para la reproducción. Ir al gimnasio no es solo para verte bien sin camisa, es para hackear el algoritmo evolutivo más profundo del cerebro humano. Tu físico dice en voz alta la disciplina que tienes en privado. Empieza a levantar pesas. Sígueme."

[COPIAR Y PEGAR EN DESCRIPCIÓN]
El físico no miente. Es el reflejo físico de tu disciplina mental. 🏛️🧬
Hackea el algoritmo biológico construyendo un cuerpo de hierro.
👉 Sígueme para maximizar tu atractivo al más alto nivel.
#Estetica #Biologia #CaballeroModerno #Gimnasio #Masculinidad`
            },
            {
                id: 't-sat-fb',
                text: 'Publicar Post en Facebook (Copiar y Pegar)',
                script: `El Currículum Biológico: Por qué la estética importa más de lo que crees. 🏛️🧬

La sociedad moderna intenta vendernos la idea de que "el físico no importa, lo que cuenta es lo de adentro". Es una frase reconfortante, pero es una mentira biológica masiva.

La atracción inicial no es una decisión moral, es un algoritmo evolutivo. 

Cuando entras a una habitación, el cerebro subconsciente de las mujeres escanea tus proporciones:
- Hombros anchos y cintura estrecha (Forma de V) = Altos niveles de testosterona y capacidad para cazar/pelear.
- Piel limpia y buena postura = Sistema inmunológico fuerte y salud genética.

No es superficialidad, es la biología buscando los mejores genes posibles para garantizar la supervivencia. 

El gimnasio no es un lugar para inflar tu ego, es la herramienta para reescribir tu currículum biológico. Construir un cuerpo fuerte comunica subconscientemente disciplina, trabajo duro y poder. 

👉 No puedes exigir atracción si ni siquiera respetas tu propio templo.

---\n🎨 PROMPT IMAGEN (Midjourney/DALL-E):\n"A cinematic, aesthetic black and white image of an ancient Greek marble statue perfectly merged with a modern man in a tailored suit, emphasizing the timeless biological standard of the V-taper masculine physique, 8k --ar 4:5"`
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
