// script.js

// Textos para cada día
const textos = {
    1: "el primer manwha que leí y me enamoró hace muchísimos años, fue el primer manhwa en tener su adaptación al anime y encima su OP es de Stray Kids, así que cada vez que lo veía me acordaba de ti. Me hacía ilusión regalártelo para que lo guardases con cariño y te acordases de mi con cariño al verlo en la estantería. Además puedes leerlo o directamente pasar a probar el anime conmigo <3",
    2: "AAA",
    3: "3333",
    4: "4444",
    5: "555",
    6: "6666",
    10: "aaa",
    11: ""
};

// Función para abrir el modal
function abrirModal(dia) {
    // Mostrar el modal y actualizar el título y texto
    document.getElementById("modal").style.display = "block";
    document.getElementById("modal-dia").textContent = dia;
    document.getElementById("modal-texto").textContent = textos[dia] || "No hay texto disponible para este día.";
}

// Función para cerrar el modal
function cerrarModal() {
    document.getElementById("modal").style.display = "none";
}
