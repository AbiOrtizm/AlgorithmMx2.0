export default function Home() {
  return (
    <main className="container">
      <header className="hero">
        <div>
          <p className="eyebrow">Portafolio Personal</p>
          <h1>Hola, nosotros somos<span>AlgoritmMx</span></h1>
          <p className="description">
            Diseñadores y desarrolladores web enfocados en crear experiencias limpias, rápidas y accesibles.
          </p>
          <div className="actions">
            <a href="#projects" className="button primary">Ver Cursos y certificados</a>
            <a href="#contact" className="button secondary">Contáctame</a>
          </div>
        </div>
        <div className="hero-card">
          <p className="hero-card-title">Sobre nosotros</p>
          <p>
            Somos un grupo apasionado por la programación y el diseño. Nos gusta construir aplicaciones
            y mejorar cada día nuestras habilidades en desarrollo.
          </p>
        </div>
      </header>

      <section id="about" className="section card">
        <h2>Acerca de nosotros</h2>
        <p>
           Nosotros somos un equipo de estudiantes de la carrera de Ingeniería en Informática que estamos 
           comprometidos con la excelencia en cada proyecto. Nos especializamos en crear sitios web modernos,
           rápidos y accesibles. Nos esforzamos cada día por mejorar nuestras habilidades y ofrecer soluciones
           innovadoras.
           Los participantes de este proyecto son: Abigail Ortiz, María Martinez, Belén Fereira, 
           Alexander Landaida, Guillerme Martho, Jhosef, Julián Tavares, Victor Pico, Joel Moran y Ronal Ramos.
        </p>
        <div className="stats">
          <div>
            <strong>1</strong>
            <span>Proyectos</span>
          </div>
          <div>
            <strong>En proceso</strong>
            <span>Calificación</span>
          </div>
          <div>
            <strong>100%</strong>
            <span>Responsivo</span>
          </div>
        </div>
      </section>

      <section id="projects" className="section">
        <h2>Certificados destacados</h2>
        <div className="grid">
          <article className="card project-card">
            <h3>Cursos y certificados A</h3>
            <p>Certificado 
              congreso digital -Inteligencia Artificial Aplicada: Empleabilidad y futuro profesional en la era Digital. 
              Participación en Proyectos educativos Integra y Nature house.
              ⁠Gestión de y administración de redes sociales. 
              ⁠creación de contenido digital. 
              ⁠Desarrollo de página web para  microempresa.</p>
          </article>
          <article className="card project-card">
            <h3>Cursos y certificados B</h3>
            <p>Curso de Ofimática: Capacitación en el manejo de herramientas como Microsoft Word, Excel y PowerPoint 
              Implementación de un sistema de gestión en una institución.</p>
          </article>
          <article className="card project-card">
            <h3>Cursos y certificados C</h3>
            <p>certificado de ofimática 
             participe en la first lego league. Certuficado de curso de Google for Summit. Curso de programación MiLab.
             Curso de GitHub + AI </p>
          </article>
        </div>
      </section>

      <section id="contact" className="section card contact-section">
        <h2>Contacto</h2>
        <p>
          Contáctanos con este número (0975) 000000 o en nuestro gmail algoritmmx@gmail.com
        </p>
        <p>
          ¿Tienes un proyecto en mente? Estoy disponible para colaborar y ayudarte a construirlo.
        </p>
        <a href="mailto:algoritmmx@gmail.com" className="button primary">Enviar correo</a>
      </section>
    </main>
  );
}
