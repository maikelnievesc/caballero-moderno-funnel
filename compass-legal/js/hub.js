// Compass Hub - Lógica de Panel de Control (Mock)

// 1. Datos Ficticios (Mock Data)
let cases = [
    { id: 1, name: "Michael Smith", email: "msmith@email.com", category: "Fideicomiso (Bienes Raíces)", status: "curso", folder: "https://drive.google.com/", comments: "Esperando firma del notario." },
    { id: 2, name: "Sarah Jenkins", email: "s.jenkins@email.com", category: "Residencia Temporal", status: "nuevo", folder: "", comments: "Agendar llamada inicial para solvencia económica." },
    { id: 3, name: "David O'Connor", email: "doconnor@email.com", category: "Cancelación TIP (Barco)", status: "pausa", folder: "https://drive.google.com/", comments: "Falta documento original de importación." },
    { id: 4, name: "Elena Rostova", email: "elena.r@email.com", category: "Creación LLC", status: "completado", folder: "https://drive.google.com/", comments: "RFC y acta constitutiva entregados." }
];

// Mapeo de Estatus para la UI
const statusMap = {
    'nuevo': { text: 'Nuevo', class: 'status-nuevo' },
    'curso': { text: 'En Curso', class: 'status-curso' },
    'pausa': { text: 'En Pausa', class: 'status-pausa' },
    'completado': { text: 'Completado', class: 'status-completado' },
    'cancelado': { text: 'Cancelado', class: 'status-cancelado' }
};

// 2. Elementos del DOM
const tableBody = document.getElementById('casesTableBody');
const searchInput = document.getElementById('searchInput');

// Modal Elements
const modal = document.getElementById('newCaseModal');
const openModalBtn = document.getElementById('newCaseBtn');
const closeModalBtn = document.getElementById('closeModalBtn');
const cancelModalBtn = document.getElementById('cancelModalBtn');
const saveCaseBtn = document.getElementById('saveCaseBtn');
const newCaseForm = document.getElementById('newCaseForm');

// 3. Funciones de Renderizado
function renderTable(dataToRender) {
    tableBody.innerHTML = ''; // Limpiar tabla
    
    if (dataToRender.length === 0) {
        tableBody.innerHTML = '<tr><td colspan="5" style="text-align: center; color: #999;">No se encontraron casos.</td></tr>';
        return;
    }

    dataToRender.forEach(c => {
        const tr = document.createElement('tr');
        
        // Columna Nombre
        const tdName = document.createElement('td');
        tdName.innerHTML = `<strong>${c.name}</strong>`;
        
        // Columna Email
        const tdEmail = document.createElement('td');
        tdEmail.textContent = c.email;
        
        // Columna Categoría
        const tdCat = document.createElement('td');
        tdCat.textContent = c.category;
        
        // Columna Estatus
        const tdStatus = document.createElement('td');
        const st = statusMap[c.status];
        tdStatus.innerHTML = `<span class="status-pill ${st.class}">${st.text}</span>`;
        
        // Columna Expediente (Drive)
        const tdFolder = document.createElement('td');
        if (c.folder) {
            tdFolder.innerHTML = `<a href="${c.folder}" target="_blank" onclick="event.stopPropagation();" style="color: var(--color-primary); text-decoration: none; font-weight: 500;">📁 Ver Carpeta</a>`;
        } else {
            tdFolder.innerHTML = `<span style="color: #999; font-size: 0.9rem;">Sin enlace</span>`;
        }
        
        // Columna Comentarios
        const tdComments = document.createElement('td');
        tdComments.textContent = c.comments;

        tr.appendChild(tdName);
        tr.appendChild(tdEmail);
        tr.appendChild(tdCat);
        tr.appendChild(tdStatus);
        tr.appendChild(tdFolder);
        tr.appendChild(tdComments);

        // Click en fila para ver detalle (Simulación)
        tr.addEventListener('click', () => {
            alert(`Vista detallada del caso de ${c.name}.\n\nAquí en el futuro se abrirá la vista con la bóveda de documentos conectada a Supabase Storage.`);
        });

        tableBody.appendChild(tr);
    });
}

// 4. Búsqueda y Filtros
searchInput.addEventListener('input', (e) => {
    const term = e.target.value.toLowerCase();
    const filtered = cases.filter(c => 
        c.name.toLowerCase().includes(term) || 
        c.email.toLowerCase().includes(term) ||
        c.category.toLowerCase().includes(term)
    );
    renderTable(filtered);
});

// 5. Lógica del Modal
function openModal() {
    modal.classList.add('active');
}

function closeModal() {
    modal.classList.remove('active');
    newCaseForm.reset(); // Limpiar formulario
}

openModalBtn.addEventListener('click', openModal);
closeModalBtn.addEventListener('click', closeModal);
cancelModalBtn.addEventListener('click', closeModal);

// Cerrar al dar click afuera
modal.addEventListener('click', (e) => {
    if (e.target === modal) {
        closeModal();
    }
});

// 6. Guardar Nuevo Caso
saveCaseBtn.addEventListener('click', (e) => {
    e.preventDefault();
    
    // Obtener valores
    const name = document.getElementById('caseName').value;
    const email = document.getElementById('caseEmail').value;
    const category = document.getElementById('caseCategory').value;
    const status = document.getElementById('caseStatus').value;
    const folder = document.getElementById('caseFolder').value;
    const comments = document.getElementById('caseComments').value;

    if (!name || !email) {
        alert("Por favor ingresa al menos el Nombre y el Email.");
        return;
    }

    // Crear nuevo objeto
    const newCase = {
        id: cases.length + 1,
        name: name,
        email: email,
        category: category,
        status: status,
        folder: folder,
        comments: comments
    };

    // Agregar a memoria y re-renderizar
    cases.unshift(newCase); // unshift lo pone al inicio
    renderTable(cases);
    closeModal();
});

// 7. Exportar CSV (Simulación)
document.getElementById('exportBtn').addEventListener('click', () => {
    alert("Funcionalidad de Exportación a CSV/Excel.\nDescargando archivo 'casos_compass_legal.csv'...");
});

// Inicializar
renderTable(cases);
