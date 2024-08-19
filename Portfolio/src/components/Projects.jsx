import React from "react";
// Componente para la sección de proyectos
export const Projects = () => {
  const projects = [
    {
      title: "𝐏𝐑𝐎𝐘𝐄𝐂𝐓𝐎 𝟏",
      description: "Descripción del proyecto 1",
      link: "#",
    },
    {
      title: "𝐏𝐑𝐎𝐘𝐄𝐂𝐓𝐎 𝟐",
      description: "Descripción del proyecto 2",
      link: "#",
    },
    {
      title: "𝐏𝐑𝐎𝐘𝐄𝐂𝐓𝐎 𝟑",
      description: "Descripción del proyecto 3",
      link: "#",
    },
  ];
  <body class="fondoPagina"></body>;

  return (
    <section id="projects">
      <h2>𝐌𝐈𝐒 𝐏𝐑𝐎𝐘𝐄𝐂𝐓𝐎𝐒</h2>
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
