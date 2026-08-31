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
    
    // --- Agenda de la Semana 12 (Filosofía Oscura y Seducción) ---
    const weeklyAgenda = {
        0: [ // Domingo - Empty
            { id: 't-sun-1', text: 'Descanso y planificación' }
        ],
        1: [ // Lunes
            { 
                id: 't-mon-1', 
                text: 'Publicar Video Largo en YT: "Mejor ser temido (respetado) que amado" (5:00 PM)',
                script: `[GUION PARA VIDEO FACELESS - YT (3.5 mins)]
Título SEO: El error de buscar ser "Amado": La lección de Maquiavelo

[Visual sugerido: B-roll cinemático. Una estatua de mármol clásico (estilo renacentista), un rey antiguo, o un hombre vestido de forma impecable en las sombras leyendo un libro antiguo. Oscuro y académico.]

(0:00 - 0:30) Hook: "Maquiavelo escribió hace 500 años una frase que destruye por completo el consejo de citas moderno: 'Es mucho más seguro ser temido que amado, si se debe renunciar a uno de los dos'. En el contexto moderno, 'temido' significa 'respetado'. Y el gran error que comete el 99% de los hombres hoy en día es que prefieren ser amados antes que respetados. Hoy entenderás por qué esta actitud te condena al fracaso."

(0:30 - 1:30) La trampa del afecto: "Cuando buscas ser 'amado' desde el día uno, te vuelves complaciente. Pagas todas las cenas, cambias tus horarios, aguantas faltas de respeto y nunca dices que no. Quieres comprar el afecto. Pero el amor sin respeto no es amor, es lástima. Las mujeres no pueden sentir atracción genuina por un hombre al que pueden pisotear. El respeto es el cimiento, el amor es el tejado. Estás empezando la casa por el tejado."

(1:30 - 2:30) Construyendo Respeto: "Para ser respetado (o 'temido', en el sentido maquiavélico de que teman perderte), debes tener reglas inquebrantables. Si ella llega una hora tarde, te levantas y te vas. Si te falta el respeto, le retiras tu atención. Estar dispuesto a destruir la relación para proteger tus estándares es exactamente lo que hace que tu valor se dispare. No eres malo, eres un hombre con una frontera vigilada."

(2:30 - 3:30) Conclusión: "Deja de intentar gustarles a todos. El hombre que quiere agradar a todos, termina siendo una broma para sí mismo. Prioriza tu respeto, tu propósito y tus límites. Si haces eso, el amor que recibas será real, no comprado. Suscríbete si estás listo para leer el juego con otros ojos."`
            },
            { 
                id: 't-mon-2', 
                text: 'Publicar Reel: "Respeto > Amor"',
                script: `[GUION PARA REEL FACELESS - TIKTOK/IG/FB]
Título en pantalla: La cruda verdad sobre el amor 🖤

[Visual sugerido: Un hombre encendiendo un fósforo en cámara lenta. O una pieza de ajedrez (el rey) cayendo sobre el tablero.]

Voz en off: "El error más catastrófico del hombre moderno es intentar que las mujeres lo amen, antes de exigir que lo respeten. Cuando buscas amor, te vuelves dócil, regalas tu tiempo, pagas por atención y no pones límites. Básicamente te conviertes en un sirviente. Y las mujeres nunca se enamoran de sus sirvientes. Como dijo Maquiavelo, si tienes que elegir entre ser amado o respetado, elige siempre el respeto. El amor sin respeto es solo lástima disfrazada. Pon límites. Exige estándares. Arriésgate a perderla. Irónicamente, el miedo a perderte es lo único que garantizará que se quede. Sígueme para más filosofía de alto valor."

[COPIAR Y PEGAR EN DESCRIPCIÓN]
El respeto es el único cimiento sólido. El amor construido sobre la sumisión se derrumba. 🏛️♟️
No regales lo que deberías cobrar en respeto.
👉 Sígueme para forjar una mentalidad de hierro.
#Maquiavelo #FilosofiaOscura #CaballeroModerno #Respeto #AltoValor`
            },
            {
                id: 't-mon-fb',
                text: 'Publicar Post en Facebook (Copiar y Pegar)',
                script: `El Síndrome del Sirviente: Por qué el respeto va antes que el amor. 🏛️♟️

Vivimos en una época que nos dice "entrega todo, sé súper romántico, dale flores en la primera cita, hazla sentir como una reina". Nos enseñaron a comprar el amor.

El problema es que la atracción femenina no responde a los sobornos lógicos ni a la devoción ciega. Responde al estatus y al respeto.

Nicolás Maquiavelo tenía razón: Si no puedes ser amado y respetado (temido de perderte) al mismo tiempo, siempre elige el respeto. 

Cuando aguantas cancelaciones de último minuto o mensajes dejados en visto solo porque "no quieres que se enoje", le estás demostrando que tu tiempo y tu dignidad valen cero. Y nadie ama lo que no vale nada.

El Caballero Moderno entiende que sus límites son la puerta de entrada a su vida. Si cruzas la línea, se retira. Y esa disposición a caminar hacia la puerta es lo que lo hace magnético.

👉 ¿Has sacrificado tu respeto por mendigar amor? Únete a nosotros y cambia el guion.

---\n🎨 PROMPT IMAGEN (Midjourney/DALL-E):\n"A highly cinematic, dark academia aesthetic image of an ancient marble bust of a Roman Emperor half-lit by a flickering candle in a dark room. Symbolizing stoic power, respect, and dark philosophy, photorealistic, 8k --ar 4:5"`
            }
        ],
        2: [ // Martes
            { 
                id: 't-tue-1', 
                text: 'Publicar Reel: "Amor Fati (El rechazo es combustible)"',
                script: `[GUION PARA REEL FACELESS - TIKTOK/IG/FB]
Título en pantalla: Cómo volverte inmune al rechazo 🔥

[Visual sugerido: Un hombre caminando bajo una lluvia torrencial con paso firme, o fuego consumiendo un papel. Vibras de estoicismo puro y transformación.]

Voz en off: "Friedrich Nietzsche propuso una idea llamada 'Amor Fati': Amar tu destino. No solo soportarlo, amarlo. Cuando una mujer te rechaza, te ignora o te traiciona, el hombre débil llora y se deprime. El hombre de alto valor aplica Amor Fati. Mira el rechazo a los ojos y dice: 'Exactamente esto era lo que necesitaba'. Usa ese dolor como combustible puro. Ese rechazo es lo que lo empuja al gimnasio a las 5 de la mañana, es lo que lo hace enfocarse en sus finanzas, es lo que lo hace peligroso. El dolor no viene a destruirte, viene a forjarte. Ama tu destino. Sígueme."

[COPIAR Y PEGAR EN DESCRIPCIÓN]
El rechazo no es un castigo, es la herramienta de forja del universo. ⚔️🔥
Amor Fati: Aprende a amar la adversidad.
👉 Sígueme para construir una resiliencia inquebrantable.
#AmorFati #Nietzsche #CaballeroModerno #Estoicismo #DesarrolloPersonal`
            },
            {
                id: 't-tue-fb',
                text: 'Publicar Post en Facebook (Copiar y Pegar)',
                script: `Amor Fati: El superpoder del hombre inquebrantable. 🔥⚔️

Hay dos formas de reaccionar cuando la vida (o una mujer) te golpea duro:

1. El Victimismo: "¿Por qué a mí? Fui tan bueno, di lo mejor, el mundo es injusto". (El camino del hombre débil, que lleva a la depresión y la amargura).

2. Amor Fati: "Amo mi destino". (El concepto de Friedrich Nietzsche).
Amor Fati no es resignación. Es abrazar agresivamente la adversidad. Es entender que ese corazón roto, esa traición o ese rechazo era EXACTAMENTE el evento que necesitabas para despertar. 

Es la chispa que te levanta del sofá, te mete al gimnasio, te obliga a leer, a mejorar tu estilo y a elevar tu estatus financiero. 

El dolor es el mejor pre-entreno del mundo. Cuando logras ver el rechazo no como una pérdida, sino como la lección que necesitabas para forjarte como un hombre superior, te vuelves literalmente invencible.

👉 Convierte tu dolor en poder. Únete a la tribu.

---\n🎨 PROMPT IMAGEN (Midjourney/DALL-E):\n"A highly cinematic, moody image of a modern gentleman standing confidently while a storm rages behind him, subtle lightning illuminating his silhouette, symbolizing Amor Fati and embracing the storm, 8k --ar 4:5"`
            }
        ],
        3: [ // Miércoles
            { 
                id: 't-wed-1', 
                text: 'Publicar Reel: "Memento Mori (No hay tiempo para juegos)"',
                script: `[GUION PARA REEL FACELESS - TIKTOK/IG/FB]
Título en pantalla: Tu tiempo se acaba ⏳

[Visual sugerido: Un reloj de bolsillo antiguo, la arena cayendo, o las manecillas de un reloj moviéndose rápido. Tonos sepia oscuros.]

Voz en off: "Los emperadores romanos tenían un siervo que les susurraba al oído: 'Memento Mori'. Recuerda que vas a morir. Suena oscuro, pero es la máxima lección de libertad. ¿Por qué estás perdiendo semanas analizando el mensaje de texto de una chica que no te valora? ¿Por qué mendigas atención? ¿Por qué pospones tus metas financieras por salir de fiesta? Tu tiempo en este planeta se está consumiendo en este preciso segundo. Un Caballero Moderno no tolera juegos mentales ni falta de interés, porque su tiempo es demasiado valioso. Despierta. Enfócate en tu propósito. Memento Mori. Sígueme."

[COPIAR Y PEGAR EN DESCRIPCIÓN]
El recurso más valioso que tienes no es el dinero, es tu tiempo. ⏳💀
No lo desperdicies en personas que no saben valorarlo.
👉 Sígueme para alinear tu vida con tu verdadero propósito.
#MementoMori #Estoicismo #CaballeroModerno #Proposito #Masculinidad`
            },
            {
                id: 't-wed-fb',
                text: 'Publicar Post en Facebook (Copiar y Pegar)',
                script: `Memento Mori: La cura contra las relaciones tóxicas. ⏳💀

"Recuerda que vas a morir". Esta era la frase estoica que resonaba en la antigua Roma. No para deprimir, sino para despertar.

La mayoría de los hombres viven como si tuvieran mil años. Gastan 6 meses intentando convencer a una chica que los dejó en la 'friendzone'. Pierden horas analizando por qué los dejaron en visto. Tolera dramas absurdos y juegos mentales.

Cuando internalizas la realidad de que tu tiempo es limitado y se agota a cada segundo, tu tolerancia por las tonterías cae a cero. 

De repente, ya no te importa si ella responde tarde. Tu cerebro está enfocado en construir tu negocio, moldear tu físico, proteger a tu familia. Cuando vives con este nivel de urgencia y propósito, cortas de raíz a la gente que te hace perder el tiempo. Y paradójicamente, esa indiferencia absoluta a los juegos es lo que te vuelve brutalmente atractivo.

👉 Tu reloj sigue avanzando. ¿En qué estás gastando hoy tu tiempo?

---\n🎨 PROMPT IMAGEN (Midjourney/DALL-E):\n"A macro, cinematic dark aesthetic shot of an ornate antique pocket watch resting on a skull, soft shadows, moody lighting, symbolizing Memento Mori and the value of time, photorealistic --ar 4:5"`
            }
        ],
        4: [ // Jueves
            { 
                id: 't-thu-1', 
                text: 'Publicar Reel: "El Arte de la Guerra (El mercado)"',
                script: `[GUION PARA REEL FACELESS - TIKTOK/IG/FB]
Título en pantalla: Sun Tzu y el mercado de citas ⚔️

[Visual sugerido: Un pergamino antiguo, o un juego de estrategia (mapa de guerra, ajedrez). Hombre moviendo piezas en la oscuridad.]

Voz en off: "Sun Tzu dijo: 'Si conoces al enemigo y te conoces a ti mismo, no temerás el resultado de cien batallas'. Las citas modernas son un campo de batalla psicológico. El problema es que no te conoces. Crees que eres un 10, pero vistes mal, ganas poco y no tienes habilidades sociales. Y tampoco conoces el mercado: no entiendes que las mujeres responden al estatus, la preselección y la seguridad, no a la poesía barata. Deja de quejarte del algoritmo. Analiza tus debilidades, mejora tu apariencia, aumenta tus ingresos y aprende psicología humana. Cuando domines ambas partes, ganarás sin pelear. Sígueme."

[COPIAR Y PEGAR EN DESCRIPCIÓN]
Deja de culpar a las mujeres y empieza a estudiar el juego. ♟️📜
Conocimiento + Ejecución = Resultados.
👉 Sígueme para dominar la estrategia social de alto nivel.
#SunTzu #Estrategia #CaballeroModerno #Seduccion #ValorPersonal`
            },
            {
                id: 't-thu-fb',
                text: 'Publicar Post en Facebook (Copiar y Pegar)',
                script: `Sun Tzu aplicado al romance moderno. ⚔️📜

"Si conoces al enemigo y te conoces a ti mismo, no temerás el resultado de cien batallas." - Sun Tzu.

Si bien las mujeres no son el "enemigo", el mercado de citas actual es un campo altamente competitivo. Y la gran mayoría de los hombres pierden la guerra antes de salir de casa por dos razones:

1. No se conocen a sí mismos: Tienen un ego inflado pero un valor de mercado bajo. No cuidan su físico, no tienen ambición, visten mal, pero esperan a una supermodelo.

2. No conocen las reglas del juego: Creen que las mujeres se sienten atraídas por lo mismo que los hombres. Los hombres somos visuales; las mujeres son criaturas que responden al estatus, la seguridad emocional, la confianza y la preselección.

Si sigues intentando ganar el juego enviando fotos no solicitadas o pagando cenas caras, estás usando tácticas del siglo pasado. Estudia psicología evolutiva. Trabaja en tus finanzas. Entrena tu cuerpo. Conoce tus herramientas y conoce el terreno.

👉 Deja de improvisar. Únete a nuestra tribu y aprende estrategia de alto valor.

---\n🎨 PROMPT IMAGEN (Midjourney/DALL-E):\n"A highly cinematic, moody image of a modern gentleman standing in a dimly lit library, studying a grand, ancient map of a battlefield. Merging modern elegance with ancient strategy, 8k --ar 4:5"`
            }
        ],
        5: [ // Viernes
            { 
                id: 't-fri-1', 
                text: 'Publicar Reel: "La Ley del Péndulo (Tensión vs Aburrimiento)"',
                script: `[GUION PARA REEL FACELESS - TIKTOK/IG/FB]
Título en pantalla: Por qué se aburren del chico bueno 🕰️

[Visual sugerido: Un péndulo de Newton moviéndose, o una montaña rusa en cámara lenta. Sensación de movimiento y contraste.]

Voz en off: "Schopenhauer dijo que la vida es un péndulo que oscila entre el dolor y el aburrimiento. Las relaciones funcionan igual. Cuando eres el 'chico bueno' perfecto, que nunca pelea, que siempre está disponible y le da todo en bandeja de plata... matas la tensión. El dolor desaparece, pero el péndulo se va al extremo del aburrimiento total. Y el aburrimiento destruye la atracción. Las mujeres necesitan la montaña rusa emocional. Necesitan el miedo a perderte, la tensión de no saber qué piensas, el conflicto resuelto. Necesitan drama positivo. No seas el chico seguro y aburrido, sé el caos controlado. Sígueme."

[COPIAR Y PEGAR EN DESCRIPCIÓN]
La seguridad total mata la atracción química. 🎢⚡
El deseo solo puede existir en la incertidumbre.
👉 Sígueme para entender los secretos oscuros de la seducción.
#Filosofia #Atraccion #CaballeroModerno #Schopenhauer #Psicologia`
            },
            {
                id: 't-fri-fb',
                text: 'Publicar Post en Facebook (Copiar y Pegar)',
                script: `La Ley del Péndulo: Por qué tu relación perfecta está a punto de morir. 🕰️⚡

El filósofo Arthur Schopenhauer dijo: "La vida oscila como un péndulo entre el sufrimiento y el aburrimiento". 

Este es el secreto mejor guardado de las dinámicas de pareja. Cuando un hombre se esfuerza por ser 100% perfecto, complaciente, evitar todas las discusiones y darle a su mujer una vida de seguridad absoluta... el péndulo se mueve de inmediato hacia el aburrimiento.

Y para una mujer, el aburrimiento emocional es el destructor número uno del deseo sexual y la atracción. 

El cerebro femenino necesita una montaña rusa emocional (dentro de parámetros saludables). Necesita la tensión de que le digas que "NO". Necesita verte ocupado y no disponible. Necesita sentir la ligera incertidumbre de que podrías irte si te faltan el respeto. 

Ese contraste, ese "caos positivo", es lo que mantiene la chispa viva. Si te vuelves demasiado seguro, te vuelves invisible.

👉 ¿Estás pecando de ser demasiado predecible? 

---\n🎨 PROMPT IMAGEN (Midjourney/DALL-E):\n"A highly aesthetic cinematic image of a massive swinging pendulum in a dark, atmospheric room. One side illuminated by cold blue light, the other by warm fire, symbolizing the swing between tension and boredom, photorealistic --ar 4:5"`
            }
        ],
        6: [ // Sábado
            { 
                id: 't-sat-1', 
                text: 'Publicar Reel: "El Mito de Sísifo (Ama el proceso)"',
                script: `[GUION PARA REEL FACELESS - TIKTOK/IG/FB]
Título en pantalla: El error de buscar la felicidad ⛰️

[Visual sugerido: B-roll épico de un hombre escalando una montaña empinada, o entrenando hasta el fallo en el gimnasio. Mucha épica y esfuerzo.]

Voz en off: "Estás deprimido porque crees que serás feliz cuando consigas a la chica perfecta o el auto de lujo. Mentira. Albert Camus usó el Mito de Sísifo (el hombre condenado a empujar una roca hasta la cima de la montaña por la eternidad) para explicarnos algo vital. La felicidad no está en llegar a la cima, está en empujar la roca. La atracción real no sucede cuando persigues a una mujer; sucede cuando te enamoras del proceso de construirte a ti mismo. Cuando te obsesionas con tu gimnasio, tus negocios y tu mente, la ansiedad desaparece. Imagina a Sísifo feliz. Ama el esfuerzo brutal de ser hombre. Sígueme."

[COPIAR Y PEGAR EN DESCRIPCIÓN]
El propósito no es el destino, es el sudor que dejas en el camino. ⛰️🦅
Deja de perseguir mujeres y empieza a perseguir la excelencia.
👉 Sígueme para construir una vida de la que estés orgulloso.
#Sisifo #Camus #CaballeroModerno #Proposito #Masculinidad`
            },
            {
                id: 't-sat-fb',
                text: 'Publicar Post en Facebook (Copiar y Pegar)',
                script: `El Mito de Sísifo: Por qué perseguir mujeres te hace miserable. ⛰️🦅

En la mitología griega, Sísifo fue condenado a empujar una roca enorme hasta la cima de una montaña, solo para verla caer y tener que empezar de nuevo por la eternidad. 

Albert Camus, el filósofo, dijo algo brillante: "Hay que imaginar a Sísifo feliz". 

La miseria del hombre moderno viene de creer que la felicidad está en la cima (conseguir el dinero, casarse con la chica hermosa). Pero una vez que llegas, la biología te quita la dopamina y te sientes vacío.

El secreto del Caballero Moderno es enamorarse de empujar la roca. Es amar el dolor del gimnasio a las 5 am. Es disfrutar el proceso de construir un negocio, incluso cuando falla. 

Cuando cambias el foco del "resultado" (conseguir a la chica) al "proceso" (construirte como un hombre de alto valor), la magia ocurre: tu ansiedad desaparece, tu necesidad se evapora, y automáticamente te vuelves 100 veces más atractivo.

👉 Deja de perseguir mariposas. Construye un jardín hermoso y las mariposas vendrán solas.

---\n🎨 PROMPT IMAGEN (Midjourney/DALL-E):\n"An epic, sweeping cinematic shot of a lone, powerful man pushing a massive boulder up a steep, rocky mountain at dawn. Aesthetic, gritty, symbolizing the love for the struggle, photorealistic, 8k --ar 4:5"`
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
