// Compass Hub - Lógica de Panel de Control (Mock)

// 1. Datos Ficticios (Mock Data)
let cases = [
    { id: 1, name: "Michael Smith", email: "msmith@email.com", category: "Fideicomiso (Bienes Raíces)", status: "curso", folder: "https://drive.google.com/", comments: "Esperando firma del notario." },
    { id: 2, name: "Sarah Jenkins", email: "s.jenkins@email.com", category: "Residencia Temporal", status: "nuevo", folder: "", comments: "Agendar llamada inicial para solvencia económica." },
    { id: 3, name: "David O'Connor", email: "doconnor@email.com", category: "Cancelación TIP (Barco)", status: "pausa", folder: "https://drive.google.com/", comments: "Falta documento original de importación." },
    { id: 4, name: "Elena Rostova", email: "elena.r@email.com", category: "Creación LLC", status: "completado", folder: "https://drive.google.com/", comments: "RFC y acta constitutiva entregados." },
    { id: 5, name: "James & Lily Potter", email: "jpotter@email.com", category: "Fideicomiso (Bienes Raíces)", status: "nuevo", folder: "https://drive.google.com/", comments: "Revisando opciones de propiedades en la costa." },
    { id: 6, name: "Robert Chen", email: "rchen@email.com", category: "Residencia Permanente", status: "curso", folder: "https://drive.google.com/", comments: "Traducción de documentos apostillados en proceso." },
    { id: 7, name: "Ana Maria Lopez", email: "amlopez@email.com", category: "Renovación TIP (Carro)", status: "cancelado", folder: "", comments: "Cliente decidió vender el vehículo en EEUU." },
    { id: 8, name: "Thomas Wright", email: "twright@email.com", category: "Creación LLC", status: "curso", folder: "https://drive.google.com/", comments: "Esperando confirmación de nombre por la Secretaría de Economía." },
    { id: 9, name: "Emily Davis", email: "edavis@email.com", category: "Residencia Temporal", status: "completado", folder: "https://drive.google.com/", comments: "Tarjeta de residente entregada exitosamente." },
    { id: 10, name: "John Miller", email: "jmiller@email.com", category: "Fideicomiso (Bienes Raíces)", status: "pausa", folder: "https://drive.google.com/", comments: "Esperando transferencia de fondos del cliente." }
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
// ==== RENDER CHART ====
let statusChartInstance = null;

function renderChart() {
    const ctx = document.getElementById('statusChart').getContext('2d');
    
    // Count statuses
    const counts = { nuevo: 0, curso: 0, pausa: 0, completado: 0, cancelado: 0 };
    cases.forEach(c => {
        if (counts[c.status] !== undefined) counts[c.status]++;
    });

    const data = {
        labels: ['Nuevo', 'En Curso', 'En Pausa', 'Completado', 'Cancelado'],
        datasets: [{
            data: [counts.nuevo, counts.curso, counts.pausa, counts.completado, counts.cancelado],
            backgroundColor: ['#E0F2FE', '#FEF3C7', '#FEE2E2', '#DCFCE7', '#F1F5F9'],
            borderColor: ['#0369A1', '#B45309', '#B91C1C', '#15803D', '#475569'],
            borderWidth: 1
        }]
    };

    if (statusChartInstance) {
        statusChartInstance.data = data;
        statusChartInstance.update();
    } else {
        statusChartInstance = new Chart(ctx, {
            type: 'doughnut',
            data: data,
            options: {
                responsive: true,
                maintainAspectRatio: false,
                plugins: {
                    legend: { position: 'right', labels: { boxWidth: 12, font: { size: 11 } } }
                }
            }
        });
    }
}

// ==== MAIN RENDERER ====
function renderTable(dataToRender) {
    const tbody = document.getElementById('casesTableBody');
    tbody.innerHTML = '';

    if (dataToRender.length === 0) {
        tbody.innerHTML = '<tr><td colspan="6" style="text-align: center; color: #999;">No se encontraron casos.</td></tr>';
        return;
    }

    dataToRender.forEach(c => {
        const tr = document.createElement('tr');

        // Columna Nombre
        const tdName = document.createElement('td');
        tdName.style.fontWeight = "500";
        tdName.style.color = "#0F172A";
        tdName.textContent = c.name;
        
        // Columna Email
        const tdEmail = document.createElement('td');
        tdEmail.textContent = c.email;
        
        // Columna Categoría
        const tdCat = document.createElement('td');
        tdCat.textContent = c.category;
        
        // Columna Estatus (Interactiva)
        const tdStatus = document.createElement('td');
        const selectStatus = document.createElement('select');
        selectStatus.className = `status-pill ${statusMap[c.status].class}`;
        
        // Add options
        Object.keys(statusMap).forEach(key => {
            const option = document.createElement('option');
            option.value = key;
            option.textContent = statusMap[key].text;
            if (key === c.status) option.selected = true;
            selectStatus.appendChild(option);
        });

        // Event listener to change status
        selectStatus.addEventListener('change', (e) => {
            // Update data model
            c.status = e.target.value;
            // Update class for colors
            selectStatus.className = `status-pill ${statusMap[c.status].class}`;
            // Update Chart!
            renderChart();
            e.stopPropagation(); // prevent row click
        });
        // Prevent row click when clicking select
        selectStatus.addEventListener('click', (e) => e.stopPropagation());

        tdStatus.appendChild(selectStatus);
        
        // Columna Expediente (Drive)
        const tdFolder = document.createElement('td');
        if (c.folder) {
            tdFolder.innerHTML = `<a href="${c.folder}" target="_blank" style="color: var(--color-primary); font-weight: 500; text-decoration: none;">📁 Ver Carpeta</a>`;
            // Prevent row click when clicking link
            tdFolder.querySelector('a').addEventListener('click', (e) => e.stopPropagation());
        } else {
            tdFolder.innerHTML = `<span style="color: #999; font-size: 0.9rem;">Sin enlace</span>`;
        }
        
        // Columna Comentarios / Última Acción (Editable)
        const tdComments = document.createElement('td');
        const commentDiv = document.createElement('div');
        commentDiv.contentEditable = "true";
        commentDiv.className = "editable-comment";
        commentDiv.textContent = c.comments;
        
        // Save comment when losing focus
        commentDiv.addEventListener('blur', (e) => {
            c.comments = e.target.textContent;
            console.log(`Saved comment for ${c.name}: ${c.comments}`);
        });

        // Prevent row click (alert) when clicking to edit
        commentDiv.addEventListener('click', (e) => e.stopPropagation());
        
        tdComments.appendChild(commentDiv);

        tr.appendChild(tdName);
        tr.appendChild(tdEmail);
        tr.appendChild(tdCat);
        tr.appendChild(tdStatus);
        tr.appendChild(tdFolder);
        tr.appendChild(tdComments);

        // Simulated Row Click (Future Feature)
        tr.addEventListener('click', () => {
            alert(`Vista detallada del caso de ${c.name}.\n\nAquí en el futuro se abrirá la vista con la bóveda de documentos conectada a Supabase Storage.`);
        });

        tbody.appendChild(tr);
    });
}

// Initial Render
document.addEventListener('DOMContentLoaded', () => {
    renderTable(cases);
    renderChart();
});

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
