// script.js

// Textos para cada día
const textos = {
    1: "el primer manwha que leí y me enamoró hace muchísimos años, fue el primer manhwa en tener su adaptación al anime y encima su OP es de Stray Kids, así que cada vez que lo veía me acordaba de ti. Me hacía ilusión regalártelo para que lo guardases con cariño y te acordases de mi con cariño al verlo en la estantería. Además puedes leerlo o directamente pasar a probar el anime conmigo <3",
    2: "AAA",
    3: "3333",
    4: "4444",
    5: "555",
    6: "6666",
    10: "2",
    11: ""
};

// Función para abrir el modal
function abrirModal(dia) {
    // Mostrar el modal y actualizar el título y texto
    document.getElementById("modal").style.display = "block";
    document.getElementById("modal-dia").textContent = dia;
    document.getElementById("modal-texto").textContent = textos[dia] || "";

    // Marcar el día como visto y guardar en localStorage
    marcarDiaVisto(dia);
}

// Función para cerrar el modal
function cerrarModal() {
    document.getElementById("modal").style.display = "none";
}

// Función para marcar el día como visto
function marcarDiaVisto(dia) {
    const dayElement = document.querySelector(`.day[data-dia="${dia}"]`);
    dayElement.classList.add('day-viewed');

    // Guardar en localStorage
    const vistos = JSON.parse(localStorage.getItem('vistos') || '[]');
    if (!vistos.includes(dia)) {
        vistos.push(dia);
        localStorage.setItem('vistos', JSON.stringify(vistos));
    }
}

// Función para inicializar los días del calendario
function inicializarCalendario() {
    const vistos = JSON.parse(localStorage.getItem('vistos') || '[]');

    document.querySelectorAll('.day').forEach(dayElement => {
        const dia = dayElement.dataset.dia;
        if (textos[dia] === "") {
            dayElement.classList.add('day-no-text');
        } else if (vistos.includes(parseInt(dia))) {
            dayElement.classList.add('day-viewed');
        }
    });
}

// Inicializar el calendario al cargar la página
window.onload = function() {
    inicializarCalendario();
};
