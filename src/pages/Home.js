import samanthaImg from '../../assets/images/Personal Samantha.jpeg';

export const Home = () => {
  /* Scroll-reveal: runs after HTML is injected into the DOM */
  setTimeout(() => {
    const observer = new IntersectionObserver(
      (entries) =>
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add("visible");
            observer.unobserve(e.target);
          }
        }),
      { threshold: 0.12 },
    );
    document.querySelectorAll(".fade-up").forEach((el) => observer.observe(el));
  }, 60);

  return `
    <!-- ========== HERO ========== -->
    <section class="hero">
      <div class="hero-container">

        <!-- Left: text -->
        <div class="hero-content">
          <div class="hero-badge">🌱 Centro de Pedagogía Infantil</div>

          <h1 class="hero-title">
            Donde las <em>raíces</em> crecen<br>
            y las <em>alas</em> aprenden a volar
          </h1>

          <p class="hero-subtitle">
            Acompañamos el desarrollo integral de cada niño con un enfoque
            personalizado, basado en neurociencia y educación emocional.
            Cada infancia merece florecer.
          </p>

          <div class="hero-actions">
            <a href="/servicios" class="btn btn-secondary" data-link>Nuestros Servicios</a>
            <a href="/contacto" class="btn btn-outline" data-link>Contáctanos</a>
          </div>

          <div class="hero-stats">
            <div class="stat">
              <span class="stat-number">+50</span>
              <span class="stat-label">Familias acompañadas</span>
            </div>
            <div class="stat">
              <span class="stat-number">+5</span>
              <span class="stat-label">Años de experiencia</span>
            </div>
            <div class="stat">
              <span class="stat-number">98%</span>
              <span class="stat-label">Satisfacción familiar</span>
            </div>
          </div>
        </div>

        <!-- Right: visual -->
        <div class="hero-visual">
          <div class="hero-image-frame">
            <div class="hero-image-circle">
              <img src="${samanthaImg}" alt="Pedagoga — Raíces y Alas" class="hero-photo">
            </div>

            <div class="hero-floating-card hero-floating-card-1">
              <div class="floating-card-icon" style="background:#EAF3EB;">🎯</div>
              <div class="floating-card-text">
                <span class="floating-card-label">Enfoque</span>
                <span class="floating-card-value">100% Personalizado</span>
              </div>
            </div>

            <div class="hero-floating-card hero-floating-card-2">
              <div class="floating-card-icon" style="background:#FDF0D5;">⭐</div>
              <div class="floating-card-text">
                <span class="floating-card-label">Valoración</span>
                <span class="floating-card-value">5 / 5 estrellas</span>
              </div>
            </div>
          </div>
        </div>

      </div>

      <!-- Wave divider -->
      <div class="hero-wave">
        <svg preserveAspectRatio="none" viewBox="0 0 1440 60" xmlns="http://www.w3.org/2000/svg">
          <path d="M0,30 C360,60 1080,0 1440,30 L1440,60 L0,60 Z" fill="#FFFFFF"/>
        </svg>
      </div>
    </section>

    <!-- ========== CÓMO TRABAJAMOS ========== -->
    <section class="how-section section">
      <div class="container">
        <div class="text-center fade-up">
          <span class="section-badge">Nuestro Enfoque</span>
          <h2 class="section-title">¿Cómo acompañamos a cada niño?</h2>
          <p class="section-subtitle">
            Combinamos rigor científico y calidez humana para crear un espacio
            donde cada niño se siente visto, escuchado y apoyado.
          </p>
        </div>

        <div class="features-grid">
          <div class="feature-card fade-up">
            <div class="feature-icon" style="background:#EAF3EB;">🌱</div>
            <h3>Intervención Personalizada</h3>
            <p>Cada niño tiene su propio ritmo y talento único. Diseñamos planes
            adaptados a sus fortalezas, necesidades y estilo de aprendizaje.</p>
          </div>

          <div class="feature-card fade-up" style="transition-delay:0.1s">
            <div class="feature-icon" style="background:#FDF0D5;">🎨</div>
            <h3>Evaluación psicopedagógica</h3>
            <p>Un proceso integral que permite conocer en profundidad el aprendizaje, las fortalezas y las posibles dificultades de los pequeños, proporcionando una valaración personalizada y adaptación escolar.</p>
          </div>

          <div class="feature-card fade-up" style="transition-delay:0.2s">
            <div class="feature-icon" style="background:#EAF3EB;">🤝</div>
            <h3>Acompañamiento a Familias Y Colaboración con Escuelas</h3>
            <p>La familia es el primer entorno de aprendizaje. Acompañamos y guiamos
            a los padres con herramientas prácticas para el hogar. Además de dar orientación y apoyo a los docentes.</p>
          </div>

        </div>
      </div>
    </section>

    <!-- ========== SERVICIOS ========== -->
    <section class="services-section section">
      <div class="container">
        <div class="text-center fade-up">
          <span class="section-badge">Servicios</span>
          <h2 class="section-title">¿En qué podemos ayudarte?</h2>
          <p class="section-subtitle">
            Ofrecemos servicios especializados para el desarrollo y el bienestar
            integral de tu hijo, adaptados a cada etapa y necesidad.
          </p>
        </div>

        <div class="services-grid">
          <div class="service-card fade-up">
            <div class="service-icon">🔍</div>
            <h3>Evaluación Psicopedagógica</h3>
            <p>Identificamos las fortalezas y áreas de mejora para diseñar un plan
            de intervención completamente personalizado y efectivo.</p>
          </div>

          <div class="service-card fade-up" style="transition-delay:0.1s">
            <div class="service-icon">📚</div>
            <h3>Intervención en Aprendizaje</h3>
            <p>Apoyo especializado para dislexia, TDAH, discalculia, TEA y otras necesidades especiales...</p>
          </div>

          <div class="service-card fade-up" style="transition-delay:0.2s">
            <div class="service-icon">💛</div>
            <h3>Educación Emocional</h3>
            <p>Proporcionaremos herramientas prácticas para que cada niñ@ pueda afrontar los retos del día a día con mayor seguridad, equilibrio emocional y confianza..</p>
          </div>

          <div class="service-card fade-up" style="transition-delay:0.3s">
            <div class="service-icon">👨‍👩‍👧</div>
            <h3>Asesoramiento Familiar</h3>
            <p>Guiamos a las familias con herramientas concretas para la crianza
            consciente y el acompañamiento diario en casa.</p>
          </div>
        </div>

        <div class="services-cta fade-up">
          <a href="/servicios" class="btn btn-primary" data-link>Ver todos los servicios</a>
        </div>
      </div>
    </section>

    <!-- ========== CASOS DE ÉXITO ========== -->
    <section class="success-section section">
      <div class="container">
        <div class="text-center fade-up">
          <span class="section-badge">Casos de Éxito</span>
          <h2 class="section-title">Lo que dicen las familias</h2>
          <p class="section-subtitle">
            Cada historia es única. Aquí compartimos algunos de los testimonios
            de familias que han confiado en Raíces y Alas.
          </p>
        </div>

        <div class="testimonials-grid">

          <div class="testimonial-card fade-up">
            <div class="stars">★★★★★</div>
            <span class="quote-icon">"</span>
            <p class="testimonial-text">
              Mi hijo llegó con mucho rechazo a la lectura. Después de seis
              meses en Raíces y Alas no solo lee con fluidez, sino que ahora
              pide libros antes de dormir. El cambio ha sido increíble.
            </p>
            <div class="testimonial-author">
              <div class="author-avatar" style="background:#EAF3EB;color:#4A7C59;">M</div>
              <div class="author-info">
                <span class="author-name">María G.</span>
                <span class="author-role">Mamá de Lucas, 8 años</span>
              </div>
            </div>
          </div>

          <div class="testimonial-card fade-up" style="transition-delay:0.1s">
            <div class="stars">★★★★★</div>
            <span class="quote-icon">"</span>
            <p class="testimonial-text">
              Diagnosticaron a nuestra hija con TDAH y no sabíamos cómo
              ayudarla. Nos orientaron no solo a ella, sino también a nosotros
              como familia. Hoy gestiona sus emociones de una forma que nos asombra.
            </p>
            <div class="testimonial-author">
              <div class="author-avatar" style="background:#FDF0D5;color:#C8901A;">J</div>
              <div class="author-info">
                <span class="author-name">Javier & Ana</span>
                <span class="author-role">Padres de Sofía, 10 años</span>
              </div>
            </div>
          </div>

          <div class="testimonial-card fade-up" style="transition-delay:0.2s">
            <div class="stars">★★★★★</div>
            <span class="quote-icon">"</span>
            <p class="testimonial-text">
              Estábamos preocupados por la timidez extrema de nuestro hijo.
              Las sesiones de educación emocional han sido transformadoras.
              Ahora participa en clase y tiene amigos. Gracias de corazón.
            </p>
            <div class="testimonial-author">
              <div class="author-avatar" style="background:#EAF3EB;color:#4A7C59;">C</div>
              <div class="author-info">
                <span class="author-name">Carmen R.</span>
                <span class="author-role">Mamá de Tomás, 7 años</span>
              </div>
            </div>
          </div>

          

        </div>
      </div>
    </section>

    <!-- ========== CTA ========== -->
    <section class="cta-section">
      <div class="container">
        <h2>¿Listo para dar el primer paso?</h2>
        <p>
          Cada niño merece el mejor comienzo. Agenda una consulta inicial
          gratuita y descubramos juntos cómo podemos acompañar el desarrollo
          de tu hijo.
        </p>
        <div class="cta-actions">
          <a href="/contacto" class="btn btn-secondary" data-link>Solicitar consulta gratuita</a>
          <a href="/sobre-mi" class="btn btn-outline" data-link>Conocer más sobre mí</a>
        </div>
      </div>
    </section>
  `;
};
