let memory = []; // Array para representar la memoria paginada

function addProcess() {
    const processSize = Math.floor(Math.random() * 5) + 1; // Tamaño aleatorio del proceso (1-5 páginas)

    if (memory.length + processSize <= 10) { // Tamaño máximo de la memoria
        for (let i = 0; i < processSize; i++) {
            memory.push(`Página ${i + 1}`);
        }
        updateMemoryDisplay();
    } else {
        alert('No hay suficiente espacio en la memoria.');
    }
}

function updateMemoryDisplay() {
    const memoryContainer = document.querySelector('.memory');
    memoryContainer.innerHTML = '';

    for (let i = 0; i < memory.length; i++) {
        const page = document.createElement('div');
        page.classList.add('page');
        page.textContent = memory[i];
        memoryContainer.appendChild(page);
    }
}

window.addEventListener('DOMContentLoaded', () => {
    updateMemoryDisplay();
});
