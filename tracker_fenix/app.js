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
    
    // --- Agenda de la Semana 14 (La Economía de la Atracción) ---
    const weeklyAgenda = {
        0: [ // Domingo - Empty
            { id: 't-sun-1', text: 'Descanso y planificación' }
        ],
        1: [ // Lunes
            { 
                id: 't-mon-1', 
                text: 'Publicar Video Largo en YT: "La Inflación de tu Atención" (5:00 PM)',
                script: `[GUION PARA VIDEO FACELESS - YT (3.5 mins)]
Título SEO: Por qué eres invisible para ella: La Economía de la Atracción

[Visual sugerido: B-roll cinemático. Gráficos de Wall Street en verde y rojo, máquinas imprimiendo billetes, hombres de negocios caminando rápido, estética de lujo y economía 'dark'.]

(0:00 - 0:30) Hook: "¿Sabías que las leyes de la economía que rigen a Wall Street son exactamente las mismas leyes que deciden si una mujer se siente atraída por ti o te ignora? Hoy no vamos a hablar de romance, vamos a hablar de economía pura. Y el error número uno que está quebrando tu valor social en este mismo instante se llama: 'Inflación de Atención'. Presta atención, porque esto va a cambiar tu forma de ver las relaciones."

(0:30 - 1:30) Ley de Oferta y Demanda: "En economía básica, cuando un gobierno imprime demasiados billetes, el valor de esa moneda cae al suelo. Se llama inflación. El dinero pierde su poder adquisitivo porque hay demasiado circulando. En el mercado de citas, tu atención, tus likes y tus mensajes son tu moneda. Si tú 'imprimes' likes ilimitados, respondes en 3 segundos y siempre estás disponible, estás hiper-inflando tu moneda. Tu atención ya no vale nada porque hay una sobreoferta."

(1:30 - 2:30) El patrón oro del estatus: "Los diamantes son caros porque son escasos. El agua es barata porque abunda. El hombre de alto estatus opera bajo el 'Patrón Oro'. Su atención está respaldada por su propósito. Como está construyendo un negocio, entrenando su cuerpo o educando su mente, su atención es escasa. Y cuando le dedica 30 minutos de su atención a una mujer, esos 30 minutos valen oro. Ella siente el peso de ese valor."

(2:30 - 3:30) Conclusión: "Deja de regalar tu moneda. Deja de ser un cajero automático de validación gratuita. Si quieres que tu presencia sea valorada, tiene que ser escasa. Empieza a cobrar caro por tu tiempo. Suscríbete si estás listo para dejar la bancarrota emocional y empezar a jugar en las grandes ligas."`
            },
            { 
                id: 't-mon-2', 
                text: 'Publicar Reel: "Inflación de Atención"',
                script: `[GUION PARA REEL FACELESS - TIKTOK/IG/FB]
Título en pantalla: Tu atención ya no vale nada 📉

[Visual sugerido: Clip cinemático de billetes cayendo o quemándose, o un hombre cerrando una bóveda acorazada.]

Voz en off: "Estás cometiendo un error económico brutal con las mujeres: La Inflación de Atención. En economía, si imprimes billetes a lo loco, el dinero pierde su valor. Cuando tú le das likes a todas sus fotos, respondes sus historias en segundos y le das cumplidos gratis todos los días, estás hiper-inflando tu moneda. Tu atención pasa a valer cero. ¿Por qué iba a esforzarse por ti si le das la recompensa gratis? El hombre magnético restringe la oferta. Su validación es escasa, y por lo tanto, es carísima. Deja de devaluarte. Haz que tu tiempo vuelva a ser un lujo. Sígueme."

[COPIAR Y PEGAR EN DESCRIPCIÓN]
Lo que se regala en abundancia, termina en la basura. 🗑️💸
Aplica la ley de la oferta y la demanda a tu vida social.
👉 Sígueme para dominar la economía del alto valor.
#Economia #CaballeroModerno #Atraccion #AltoValor #Seduccion`
            },
            {
                id: 't-mon-fb',
                text: 'Publicar Post en Facebook (Copiar y Pegar)',
                script: `La Inflación de tu Atención: Por qué le aburres. 📉💸

Si mañana el gobierno decide regalarle un Ferrari a cada ciudadano, ¿qué pasaría? Al día siguiente, ver un Ferrari en la calle dejaría de ser especial. Perdería su estatus mágico.

Tu atención funciona exactamente igual. 

Muchos hombres se preguntan por qué la chica que les gusta perdió el interés, si ellos "le dieron todo". Ese es precisamente el problema. Le diste todo gratis. 

Si eres el tipo que responde en 2 segundos, le envía mensajes de "buenos días" incondicionales, y cancela sus planes para verla, estás sufriendo de Inflación de Atención. Has creado una sobreoferta de tu validación, llevando su valor a cero.

El Caballero Moderno es la Reserva Federal de su propia energía. Restringe la oferta. Su atención es cara porque su tiempo está invertido en su propósito, no en su teléfono. 

👉 ¿Estás devaluando tu propio estatus sin darte cuenta?

---\n🎨 PROMPT IMAGEN (Midjourney/DALL-E):\n"A highly cinematic, dark academia image of a modern gentleman sitting in a shadowy room, carelessly tossing a gold coin in the air. Symbolizing control over value and attention, photorealistic, 8k --ar 4:5"`
            }
        ],
        2: [ // Martes
            { 
                id: 't-tue-1', 
                text: 'Publicar Reel: "La Falacia del Costo Hundido"',
                script: `[GUION PARA REEL FACELESS - TIKTOK/IG/FB]
Título en pantalla: Por qué no puedes soltarla ⚓

[Visual sugerido: B-roll de un ancla hundiéndose en el océano oscuro, o un hombre mirando un barco ardiendo a lo lejos. Sensación de pérdida.]

Voz en off: "¿Por qué sigues rogándole a una mujer que te trata mal? En finanzas, esto se llama 'La Falacia del Costo Hundido'. Ocurre cuando un inversor sigue inyectando dinero en una empresa que está quebrando, solo porque ya invirtió mucho antes y no quiere aceptar la pérdida. Tú estás haciendo lo mismo. Llevas 6 meses pagando cenas, aguantando rechazos y perdiendo tu dignidad. Y tu cerebro te engaña diciendo: 'Un poco más de esfuerzo y cambiará'. Mentira. Acepta la pérdida. Retira tu inversión emocional hoy mismo. Duele ahora, pero te salva la vida mañana. Corta el cable. Sígueme."

[COPIAR Y PEGAR EN DESCRIPCIÓN]
No sigas invirtiendo en un negocio (o relación) que está en bancarrota. 📉⚓
Aceptar la pérdida a tiempo es la mejor victoria financiera y emocional.
👉 Sígueme para construir inteligencia emocional.
#CostoHundido #Psicologia #CaballeroModerno #Finanzas #RelacionesToxicas`
            },
            {
                id: 't-tue-fb',
                text: 'Publicar Post en Facebook (Copiar y Pegar)',
                script: `La Falacia del Costo Hundido: Por qué te quedas donde no te valoran. ⚓📉

Imagina que compras un boleto de $500 pesos para ver una película. A los 20 minutos, te das cuenta de que la película es horrible. ¿Te sales del cine para disfrutar el resto de tu día, o te quedas sufriendo 2 horas solo porque "ya pagaste"?

El 90% de la gente se queda. Esto se llama la "Falacia del Costo Hundido".

Es el mismo error cognitivo que te mantiene persiguiendo a una mujer que te ignora, o atrapado en una relación tóxica. Tu cerebro te dice: "Ya le invertí 6 meses de mi vida, ya le pagué 10 cenas, ya aguanté sus dramas... si me voy ahora, todo ese esfuerzo fue en vano".

Error. Ese esfuerzo YA se perdió. Lo único que puedes controlar es si vas a seguir perdiendo MÁS tiempo, MÁS dinero y MÁS dignidad mañana.

El hombre superior sabe "cortar pérdidas" (Cut Losses). Si no hay retorno de inversión (respeto, lealtad, paz), levántate de la mesa y vete. 

👉 ¿A qué "inversión muerta" le sigues metiendo energía?

---\n🎨 PROMPT IMAGEN (Midjourney/DALL-E):\n"A cinematic, ultra-moody shot of a massive heavy anchor chain snapping in slow motion under dark water. Symbolizing breaking free from sunk costs, highly aesthetic, 8k --ar 4:5"`
            }
        ],
        3: [ // Miércoles
            { 
                id: 't-wed-1', 
                text: 'Publicar Reel: "El Costo de Oportunidad"',
                script: `[GUION PARA REEL FACELESS - TIKTOK/IG/FB]
Título en pantalla: Lo que te cuesta pensar en ella 💸

[Visual sugerido: Un hombre frente a dos caminos en la niebla, o un reloj de lujo haciendo 'tic tac' con billetes desenfocados de fondo.]

Voz en off: "Estás en tu cama, triste, pasando 3 horas analizando por qué te dejó en visto. Te voy a explicar tu verdadero problema usando el 'Costo de Oportunidad'. En la economía, toda decisión tiene un costo oculto: aquello a lo que renuncias para hacer lo que estás haciendo. Esas 3 horas sufriendo por una mujer que no te valora, son 3 horas que NO pasaste en el gimnasio, que NO usaste para leer, que NO usaste para crear una fuente de ingresos. No estás perdiendo a la chica, estás perdiendo tu potencial, tu imperio y tu vida. El costo de oportunidad de ser débil es demasiado alto. Levántate. Sígueme."

[COPIAR Y PEGAR EN DESCRIPCIÓN]
Llorar por quien no te valora te está costando millones a largo plazo. ⏳💸
Tu atención es capital. Invierte donde haya retorno.
👉 Sígueme para enfocarte en tu propósito.
#CostoDeOportunidad #Exito #CaballeroModerno #Mentalidad #Proposito`
            },
            {
                id: 't-wed-fb',
                text: 'Publicar Post en Facebook (Copiar y Pegar)',
                script: `El Costo de Oportunidad: El precio oculto de rogar atención. ⏳💸

Hay un concepto económico brutal llamado "Costo de Oportunidad". Se define como el valor de la mejor alternativa que dejas pasar cuando tomas una decisión.

Si tienes $1,000 dólares y los gastas en fiesta, el costo de oportunidad es la inversión o el negocio que pudiste haber iniciado con ese dinero.

Aplícalo a tu vida romántica: Si pasas 2 horas al día stalkeando el Instagram de tu ex, lamentándote por un rechazo o enviando mensajes a chicas que responden con un emoji frío... ¿cuál es el costo de oportunidad?

El costo es el físico espectacular que no estás construyendo en el gimnasio. 
El costo es la paz mental que no tienes. 
El costo es el conocimiento que no estás leyendo.

Tus emociones y tu atención son tu capital más valioso. Estás gastando capital Premium en inversiones que dan cero rendimiento. 

👉 Redirige tu capital hacia ti mismo hoy. 

---\n🎨 PROMPT IMAGEN (Midjourney/DALL-E):\n"A highly aesthetic, moody image of a modern gentleman looking at a luxury watch, while in the blurry background, a faint shadow of a woman walks away. Symbolizing the realization of opportunity cost and time, 8k --ar 4:5"`
            }
        ],
        4: [ // Jueves
            { 
                id: 't-thu-1', 
                text: 'Publicar Reel: "El Principio de Pareto (80/20)"',
                script: `[GUION PARA REEL FACELESS - TIKTOK/IG/FB]
Título en pantalla: La cruda verdad de las apps de citas 📊

[Visual sugerido: Un gráfico de barras estético en neon rojo, o un león comiendo solo mientras las hienas miran de lejos.]

Voz en off: "El Principio de Pareto dicta que el 80% de los resultados vienen del 20% de las causas. En el romance moderno, esto es brutalmente real: El 20% de los hombres se quedan con el 80% de la atención femenina. ¿Por qué? Porque el mercado premia a los ganadores. El 80% de los hombres promedio no van al gimnasio, visten mal, no tienen ambición y se quejan del algoritmo de Tinder. El top 20% está construyendo un cuerpo de hierro, mejorando sus ingresos y dominando su carisma. Tienes dos opciones: llorar porque el mercado es injusto, o ponerte a trabajar hoy mismo para entrar en ese 20%. La elección es tuya. Sígueme."

[COPIAR Y PEGAR EN DESCRIPCIÓN]
El mundo no es justo, es competitivo. 📊🐺
Deja de quejarte del mercado y conviértete en el producto de más alto valor.
👉 Sígueme para entrar al top 20%.
#Pareto #Ley8020 #CaballeroModerno #Competencia #AltoValor`
            },
            {
                id: 't-thu-fb',
                text: 'Publicar Post en Facebook (Copiar y Pegar)',
                script: `El Principio de Pareto: Por qué el mercado de citas es despiadado. 📊🐺

El economista Vilfredo Pareto descubrió que el 80% de la tierra en Italia era propiedad del 20% de la población. Esta ley (80/20) se aplica a casi todo: el 80% de las ventas vienen del 20% de los clientes.

Y en las dinámicas sociales modernas (especialmente en apps de citas y redes sociales), la regla es igual de salvaje: El 20% de los hombres compiten por el 80% de la atención femenina. 

Mientras el 80% de los hombres (el promedio) se queja de que "las mujeres son muy exigentes", envían fotos no solicitadas y no cuidan su higiene...

El Top 20% está en silencio:
1. Entrenando duro en el gimnasio.
2. Vistiendo de forma impecable.
3. Construyendo fuentes de ingresos.
4. Desarrollando inteligencia emocional.

El mercado no tiene piedad con la mediocridad. Puedes ofenderte por las reglas del juego, o puedes aprenderlas, usarlas a tu favor y convertirte en el 20%. 

👉 ¿Qué hiciste hoy para salir del promedio?

---\n🎨 PROMPT IMAGEN (Midjourney/DALL-E):\n"A cinematic, highly aesthetic image of a steep pyramid or graph in dark stone. One lone, sharp-dressed man stands at the very top glowing subtly, while a faceless crowd stands in the shadows at the bottom, symbolizing the 80/20 rule, 8k --ar 4:5"`
            }
        ],
        5: [ // Viernes
            { 
                id: 't-fri-1', 
                text: 'Publicar Reel: "Monopolios y Diversificación"',
                script: `[GUION PARA REEL FACELESS - TIKTOK/IG/FB]
Título en pantalla: El peligro de apostarlo todo a ella 🎲

[Visual sugerido: Un hombre apostando todas sus fichas de casino en un solo número (Ruleta), o un barco inmenso a punto de hundirse por cargar peso de un solo lado.]

Voz en off: "Cualquier inversor novato sabe que poner todo tu dinero en una sola acción es suicidio financiero. Si esa empresa quiebra, lo pierdes todo. Sin embargo, los hombres hacen esto emocionalmente todos los días. Convierten a una sola mujer en su única fuente de felicidad. No tienen hobbies, perdieron a sus amigos, y odian su trabajo. Han creado un Monopolio Emocional. Si ella se va o tiene un mal día, tu vida entera se derrumba. El hombre de alto estatus diversifica su identidad. Su felicidad viene de sus negocios, su entrenamiento, sus hermanos de batalla y su propósito. Ella es un complemento al portafolio, no todo el capital. Sígueme."

[COPIAR Y PEGAR EN DESCRIPCIÓN]
Nunca pongas la llave de tu felicidad en el bolsillo de otra persona. 🎲📉
Diversifica tus fuentes de propósito. 
👉 Sígueme para construir independencia emocional.
#Diversificacion #Inversiones #CaballeroModerno #Independencia #Estoicismo`
            },
            {
                id: 't-fri-fb',
                text: 'Publicar Post en Facebook (Copiar y Pegar)',
                script: `Diversificación de Identidad: Por qué depender de ella te destruirá. 🎲📉

Regla número 1 de las inversiones: "Nunca pongas todos tus huevos en la misma canasta". 

Si inviertes el 100% de tus ahorros en una sola empresa y esta quiebra, tu vida se arruina. La diversificación es el escudo de los ricos.

A nivel psicológico, los hombres promedio cometen este error letal. Conocen a una chica y de repente:
- Dejan de salir con sus amigos.
- Faltan al gimnasio para estar con ella.
- Abandonan sus pasatiempos.

Han invertido el 100% de su identidad y su felicidad en una sola persona. Si ella se enoja, su mundo se cae. Si ella los deja, entran en depresión clínica. 

El Caballero Moderno tiene un portafolio diversificado: Su felicidad se divide entre su propósito de vida, su salud física, su red de contactos, sus metas financieras y su paz mental. Una mujer increíble es simplemente un activo maravilloso que se suma al portafolio, pero si se va, el imperio no colapsa.

👉 ¿Dependes de alguien más para sonreír hoy? 

---\n🎨 PROMPT IMAGEN (Midjourney/DALL-E):\n"A highly cinematic, moody image of a modern gentleman standing confidently behind a massive roulette table in a dark casino, holding multiple chips in his hand rather than betting them all on one number, symbolizing diversification and control, 8k --ar 4:5"`
            }
        ],
        6: [ // Sábado
            { 
                id: 't-sat-1', 
                text: 'Publicar Reel: "Escasez Real vs Fingida"',
                script: `[GUION PARA REEL FACELESS - TIKTOK/IG/FB]
Título en pantalla: Deja de hacerte el interesante 🎭

[Visual sugerido: Un hombre quitándose una máscara elegante en la oscuridad, o alguien fingiendo trabajar frente a una computadora apagada. Contraste de mentira vs verdad.]

Voz en off: "Los falsos 'gurús' de seducción te dicen: 'Espera 3 horas para responderle el mensaje para que parezcas escaso y ocupado'. Eso es Escasez Fingida, y las mujeres huelen esa manipulación a kilómetros de distancia. Estás contando los minutos frente a tu celular esperando para contestar. Eres un fraude. La verdadera magia ocurre cuando aplicas la Escasez Real. Tardas 3 horas en responder porque estabas en una reunión de negocios, entrenando o leyendo, y literalmente NO tenías el teléfono en la mano. No tienes que fingir que tienes una vida interesante, tienes que construir una. Construye valor real y la atracción será un accidente automático. Sígueme."

[COPIAR Y PEGAR EN DESCRIPCIÓN]
La manipulación requiere memoria y esfuerzo. La realidad se sostiene sola. 🎭🛡️
No finjas estar ocupado. Ocúpate construyendo tu imperio.
👉 Sígueme para alejarte de los trucos baratos y construir valor real.
#Seduccion #DesarrolloPersonal #CaballeroModerno #AltoValor #Manipulacion`
            },
            {
                id: 't-sat-fb',
                text: 'Publicar Post en Facebook (Copiar y Pegar)',
                script: `Escasez Real vs Escasez Fingida: El fraude de hacerte el interesante. 🎭🛡️

La industria de la seducción barata arruinó a muchos hombres con un consejo tóxico: "Finge que estás ocupado. Si te escribe, déjala en visto un rato para que sufra".

Eso es Escasez Fingida. Es un truco manipulativo de bajo nivel. Y lo peor de todo, es que mientras "la haces esperar", tú estás sudando frío mirando el reloj de tu celular, rezando para que no pierda el interés. Eres esclavo de tu propia trampa.

Las mujeres tienen un sexto sentido biológico para detectar el fraude.

El Caballero Moderno no juega jueguitos de texto. Él aplica Escasez Real.
Si tarda 4 horas en responder un WhatsApp, no es para manipularla, es porque su teléfono estaba en modo avión mientras él estaba en el gimnasio, cerrando un negocio o enfocado en su propósito. 

No tienes que fingir que tu tiempo vale. Tienes que hacer cosas que hagan que tu tiempo valga. 

👉 Deja los trucos baratos. Construye una vida de la que no necesites escapar.

---\n🎨 PROMPT IMAGEN (Midjourney/DALL-E):\n"A highly aesthetic, cinematic image of a modern gentleman's desk in a dark room. On the desk, a glowing smartphone with notifications is completely ignored, out of focus, while in sharp focus the man is sketching blueprints or reading a heavy book, symbolizing real scarcity and focus, 8k --ar 4:5"`
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
