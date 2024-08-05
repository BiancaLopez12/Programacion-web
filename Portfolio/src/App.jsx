import "./App.css"; // Asegúrate de personalizar este archivo para tu estilo

// Componente para la sección de proyectos
const Projects = () => {
const projects = [
{
title: "Proyecto 1",
description: "Descripción del proyecto 1",
link: "#",
},
{
title: "Proyecto 2",
description: "Descripción del proyecto 2",
link: "#",
},
{
title: "Proyecto 3",
description: "Descripción del proyecto 3",
link: "#",
},
];
<body class="fondoPagina"></body>

return (
<section id="projects">
<h2>Mis Proyectos</h2>
<div className="projects-grid">
{projects.map((project, index) => (
<div key={index} className="project-card">
<h3>{project.title}</h3>
<p>{project.description}</p>
<a href={project.link} target="_blank" rel="noopener noreferrer">
Ver más
</a>
</div>
))}
</div>
</section>
);
};

// Componente principal del portfolio
const App = () => {
return (
<div className="App">
<header>
<h1>Bianca Joana López</h1>
<nav>
<ul>
<li>
<a href="#about">Sobre Mí</a>
</li>
<li>
<a href="#projects">Proyectos</a>
</li>
</ul>
</nav>
</header>
<section id="about">
<h2>Sobre Mí</h2>
<p>
Soy un desarrollador apasionado por la tecnología y el diseño. Aquí
encontrarás algunos de mis proyectos más recientes.
</p>
</section>
<Projects />
<section>
<h2>Contactos</h2>
<nav>
<ul>
<li>
<a href="#about">biancajoanalopez@gmail.com</a>
</li>
<li>
<a href="#projects">https://github.com/BiancaLopez12</a>
</li>
<li>
<a href="#projects"> telefono</a>
</li>
</ul>
</nav>
</section>
<footer>
<p>&copy; 2024 Bianca Joana López. Todos los derechos reservados.</p>
</footer>
</div>
);
};

export default App;