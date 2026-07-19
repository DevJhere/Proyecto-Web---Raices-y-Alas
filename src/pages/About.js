import profilePic from "../../assets/images/Personal Samantha.jpeg";

export const About = () => {
  return `
    <div class="container section">
      <div class="about-grid">
        <div class="about-image-wrapper">
          <div class="profile-frame">
            <img src="${profilePic}" alt="Samantha Cruellas García, psicopedagoga"
                 class="profile-image"
                 width="1086" height="1448"
                 loading="lazy" decoding="async" />
          </div>
        </div>
        <div class="about-content">
          <span class="section-badge">Sobre Mí</span>
          <h1 style="font-size: clamp(2rem, 4vw, 2.8rem); margin-bottom: 8px;">Mi Perfil Profesional</h1>
          <h3 class="about-name">Samantha Cruellas García - Psicopedagoga</h3>
          <p class="about-paragraph mb-1">
            Soy maestra de Educación Infantil, maestra de Educación Primaria, especialista en Pedagogía Terapéutica y psicopedagoga. Mi trayectoria nace una vocación clara: acompañar a cada niño desde una mirada cercana, respetuosa y personalizada
          </p>
          <p class="about-paragraph mb-1">
            En Raíces y Alas ayudo a familias y niños a comprender mejor sus necesidades, potenciar las fortalezas y avanzar en su desarrollo, aprendizaje y bienestar emocional.
          </p>
          <p class="about-paragraph">
           Trabajo desde la escucha, la empatía y la orientación práctica, ofreciendo estrategias adaptadas a cada caso. Porque cada niño tiene su propio ritmo, su propia historia y un potencial único que merece ser acompañado. 
          </p>

          <p class="about-paragraph about-quote">
            "Raíces para crecer con seguridad. Alas para avanzar con confianza."
          </p>
        </div>
      </div>
    </div>
  `;
};
