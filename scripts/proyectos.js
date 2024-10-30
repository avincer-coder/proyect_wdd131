// Array de datos de proyectos
const projects = [
    {
        title: "Proyecto 1",
        description: "Descripción breve del Proyecto 1, una aplicación web para gestionar tareas.",
        link: "#"
    },
    {
        title: "Proyecto 2",
        description: "Descripción breve del Proyecto 2, una página web para un portafolio fotográfico.",
        link: "#"
    },
    {
        title: "Proyecto 3",
        description: "Descripción breve del Proyecto 3, un sitio de ecommerce para productos locales.",
        link: "#"
    }
];

// Selección del contenedor principal
const projectContainer = document.getElementById("project-container");

// Creación de las tarjetas de proyecto
projects.forEach(project => {
    const card = document.createElement("div");
    card.classList.add("card");

    // Título del proyecto
    const title = document.createElement("h2");
    title.classList.add("card-title");
    title.textContent = project.title;

    // Descripción del proyecto
    const description = document.createElement("p");
    description.classList.add("card-description");
    description.textContent = project.description;

    // Botón de enlace
    const button = document.createElement("button");
    button.textContent = "Ver Proyecto";
    button.onclick = () => {
        window.location.href = project.link;
    };

    // Añadir elementos a la tarjeta
    card.appendChild(title);
    card.appendChild(description);
    card.appendChild(button);

    // Añadir tarjeta al contenedor
    projectContainer.appendChild(card);
});
