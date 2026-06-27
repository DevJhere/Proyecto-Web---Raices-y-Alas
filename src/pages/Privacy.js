export const Privacy = () => {
  const fecha = '27 de junio de 2026';

  return `
    <div class="container section privacy-page">

      <div class="privacy-hero">
        <span class="section-badge">Legal</span>
        <h1 class="section-title">Política de Privacidad</h1>
        <p class="section-subtitle">
          Tu privacidad es importante para nosotros. Esta política explica cómo tratamos
          tus datos personales de acuerdo con la normativa europea y española vigente.
        </p>
        <p class="privacy-updated">Última actualización: <strong>${fecha}</strong></p>
      </div>

      <div class="privacy-grid">

        <!-- 1. Responsable -->
        <div class="privacy-card">
          <div class="privacy-card__icon">🏢</div>
          <h2 class="privacy-card__title">1. Responsable del Tratamiento</h2>
          <div class="privacy-card__body">
            <table class="privacy-table">
              <tbody>
                <tr><th>Titular</th><td>Samantha Cruellas García</td></tr>
                <tr><th>Actividad</th><td>Raíces y Alas — Psicopedagogía Infantil</td></tr>
                <tr><th>Dirección</th><td>Sama de Langreo, Asturias, España</td></tr>
                <tr><th>Email</th><td><a href="mailto:psicopedagogia.raicesyalas21@gmail.com" class="privacy-link">psicopedagogia.raicesyalas21@gmail.com</a></td></tr>
              </tbody>
            </table>
          </div>
        </div>

        <!-- 2. Marco legal -->
        <div class="privacy-card">
          <div class="privacy-card__icon">⚖️</div>
          <h2 class="privacy-card__title">2. Marco Legal Aplicable</h2>
          <div class="privacy-card__body">
            <p>El tratamiento de tus datos personales se rige por:</p>
            <ul class="privacy-list">
              <li>
                <strong>Reglamento (UE) 2016/679 (RGPD)</strong> — Reglamento General de
                Protección de Datos del Parlamento Europeo y del Consejo, de 27 de abril de 2016.
              </li>
              <li>
                <strong>Ley Orgánica 3/2018 (LOPDGDD)</strong> — Ley Orgánica de Protección de
                Datos Personales y garantía de los derechos digitales, de 5 de diciembre de 2018.
              </li>
              <li>
                <strong>Ley 34/2002 (LSSI)</strong> — Ley de Servicios de la Sociedad de la
                Información y de Comercio Electrónico.
              </li>
              <li>
                <strong>Directiva (UE) 2022/2555 (NIS 2)</strong> — Relativa a las medidas para
                un elevado nivel común de ciberseguridad en la Unión Europea.
              </li>
            </ul>
          </div>
        </div>

        <!-- 3. Datos recogidos -->
        <div class="privacy-card">
          <div class="privacy-card__icon">📋</div>
          <h2 class="privacy-card__title">3. Datos Personales que Recopilamos</h2>
          <div class="privacy-card__body">
            <p>Solo recogemos los datos estrictamente necesarios para cada finalidad:</p>

            <h3 class="privacy-subtitle">Formulario de contacto</h3>
            <ul class="privacy-list">
              <li>Nombre y apellidos del contacto (padre, madre o tutor legal).</li>
              <li>Dirección de correo electrónico.</li>
              <li>Contenido del mensaje (consulta o descripción de la situación).</li>
            </ul>

            <h3 class="privacy-subtitle">Datos de navegación</h3>
            <ul class="privacy-list">
              <li>Información técnica gestionada por el navegador (ver sección de Cookies).</li>
            </ul>

            <p class="privacy-note">
              ⚠️ <strong>No recopilamos</strong> datos de salud, diagnósticos clínicos ni
              ninguna categoría especial de datos a través de esta web. La información sensible
              relativa a los menores atendidos se gestiona exclusivamente en el ámbito
              de la consulta presencial, bajo los protocolos de confidencialidad profesional.
            </p>
          </div>
        </div>

        <!-- 4. Finalidad -->
        <div class="privacy-card">
          <div class="privacy-card__icon">🎯</div>
          <h2 class="privacy-card__title">4. Finalidad del Tratamiento</h2>
          <div class="privacy-card__body">
            <ul class="privacy-list">
              <li>
                <strong>Atender consultas:</strong> responder a los mensajes enviados a través del
                formulario de contacto o por correo electrónico.
              </li>
              <li>
                <strong>Gestión de citas:</strong> coordinar la comunicación previa a la primera
                sesión de evaluación o asesoramiento.
              </li>
              <li>
                <strong>Información sobre servicios:</strong> facilitar, a petición expresa del
                interesado, información sobre los servicios disponibles.
              </li>
            </ul>
            <p>
              No utilizamos tus datos para elaborar perfiles comerciales ni para cedérselos a
              terceros con fines publicitarios.
            </p>
          </div>
        </div>

        <!-- 5. Base jurídica -->
        <div class="privacy-card">
          <div class="privacy-card__icon">📜</div>
          <h2 class="privacy-card__title">5. Base Jurídica del Tratamiento</h2>
          <div class="privacy-card__body">
            <table class="privacy-table">
              <thead>
                <tr><th>Tratamiento</th><th>Base jurídica (Art. 6 RGPD)</th></tr>
              </thead>
              <tbody>
                <tr>
                  <td>Gestión de consultas y contacto</td>
                  <td>Interés legítimo del responsable (Art. 6.1.f) y ejecución de medidas precontractuales (Art. 6.1.b)</td>
                </tr>
                <tr>
                  <td>Cookies no esenciales</td>
                  <td>Consentimiento del usuario (Art. 6.1.a)</td>
                </tr>
                <tr>
                  <td>Cookies esenciales</td>
                  <td>Interés legítimo para el funcionamiento técnico del servicio (Art. 6.1.f)</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        <!-- 6. Menores de edad -->
        <div class="privacy-card privacy-card--highlight">
          <div class="privacy-card__icon">👶</div>
          <h2 class="privacy-card__title">6. Protección de Datos de Menores</h2>
          <div class="privacy-card__body">
            <p>
              En virtud del <strong>artículo 8 del RGPD</strong> y el
              <strong>artículo 7 de la LOPDGDD</strong>, el tratamiento de datos personales
              de menores de <strong>14 años</strong> requiere el consentimiento expreso y
              verificable de su padre, madre o tutor legal.
            </p>

            <h3 class="privacy-subtitle">Compromisos específicos con las familias</h3>
            <ul class="privacy-list">
              <li>
                Cualquier información compartida a través de esta web por parte de un padre,
                madre o tutor en relación con un menor se trata con la máxima
                <strong>confidencialidad profesional</strong>.
              </li>
              <li>
                Los datos de los menores atendidos en consulta <strong>no se recogen en
                esta web</strong>; se gestionan únicamente a través de los formularios
                de consentimiento físicos firmados en la primera sesión.
              </li>
              <li>
                La historia psicopedagógica del menor está protegida por el
                <strong>secreto profesional</strong> y solo podrá ser compartida con
                terceros (colegios, servicios sanitarios, etc.) con autorización expresa
                de los tutores legales.
              </li>
              <li>
                En ningún caso se publicarán datos, fotos ni información identificativa
                de los menores en esta web o en nuestras redes sociales sin consentimiento
                escrito previo.
              </li>
            </ul>
          </div>
        </div>

        <!-- 7. Conservación -->
        <div class="privacy-card">
          <div class="privacy-card__icon">🗂️</div>
          <h2 class="privacy-card__title">7. Plazo de Conservación de los Datos</h2>
          <div class="privacy-card__body">
            <ul class="privacy-list">
              <li>
                <strong>Consultas y mensajes:</strong> se conservarán durante el tiempo
                necesario para dar respuesta a tu consulta y, posteriormente, durante
                <strong>3 años</strong> para atender posibles responsabilidades.
              </li>
              <li>
                <strong>Preferencias de cookies:</strong> almacenadas en tu dispositivo
                (localStorage) hasta que las elimines o las cambies manualmente. No caducan
                por inactividad, pero puedes resetearlas en cualquier momento desde el
                aviso de cookies.
              </li>
            </ul>
            <p>
              Transcurridos los plazos indicados, los datos serán eliminados de forma
              segura o anonimizados.
            </p>
          </div>
        </div>

        <!-- 8. Destinatarios -->
        <div class="privacy-card">
          <div class="privacy-card__icon">🤝</div>
          <h2 class="privacy-card__title">8. Destinatarios y Transferencias</h2>
          <div class="privacy-card__body">
            <p>
              Tus datos <strong>no se venden ni se ceden a terceros</strong> con fines
              comerciales. Podrán acceder a ellos únicamente:
            </p>
            <ul class="privacy-list">
              <li>
                <strong>WhatsApp Business (Meta Platforms Ireland Ltd.):</strong> cuando
                utilizas el botón de contacto por WhatsApp, tu mensaje es procesado por Meta.
                Meta opera bajo el Marco de Privacidad de Datos UE–EE. UU. Consulta la
                <a href="https://www.whatsapp.com/legal/privacy-policy-eea" target="_blank"
                   rel="noopener noreferrer" class="privacy-link">política de privacidad de WhatsApp</a>.
              </li>
              <li>
                <strong>Autoridades públicas:</strong> en caso de requerimiento legal o
                resolución judicial, según lo exigido por la legislación aplicable.
              </li>
            </ul>
            <p>
              No realizamos transferencias internacionales de datos fuera del Espacio
              Económico Europeo, salvo las inherentes al uso de WhatsApp indicadas arriba.
            </p>
          </div>
        </div>

        <!-- 9. Derechos -->
        <div class="privacy-card">
          <div class="privacy-card__icon">🛡️</div>
          <h2 class="privacy-card__title">9. Tus Derechos</h2>
          <div class="privacy-card__body">
            <p>
              En virtud de los artículos 15 al 22 del RGPD, puedes ejercer en cualquier
              momento los siguientes derechos:
            </p>

            <div class="rights-grid">
              <div class="right-item">
                <span class="right-label">Acceso</span>
                <p>Conocer qué datos tuyos tratamos.</p>
              </div>
              <div class="right-item">
                <span class="right-label">Rectificación</span>
                <p>Corregir datos inexactos o incompletos.</p>
              </div>
              <div class="right-item">
                <span class="right-label">Supresión</span>
                <p>Solicitar que eliminemos tus datos ("derecho al olvido").</p>
              </div>
              <div class="right-item">
                <span class="right-label">Limitación</span>
                <p>Restringir el tratamiento en determinadas circunstancias.</p>
              </div>
              <div class="right-item">
                <span class="right-label">Portabilidad</span>
                <p>Recibir tus datos en un formato estructurado y legible.</p>
              </div>
              <div class="right-item">
                <span class="right-label">Oposición</span>
                <p>Oponerte al tratamiento basado en interés legítimo.</p>
              </div>
            </div>

            <p class="mt-1">
              Para ejercer cualquiera de estos derechos, envía un correo a
              <a href="mailto:psicopedagogia.raicesyalas21@gmail.com" class="privacy-link">
                psicopedagogia.raicesyalas21@gmail.com
              </a>
              indicando el derecho que deseas ejercer e incluyendo una copia de tu documento
              de identidad. Responderemos en el plazo máximo de <strong>1 mes</strong>
              (prorrogable a 3 meses en casos complejos).
            </p>
            <p class="privacy-note">
              Si consideras que el tratamiento de tus datos vulnera la normativa, puedes
              presentar una reclamación ante la
              <a href="https://www.aepd.es" target="_blank" rel="noopener noreferrer"
                 class="privacy-link">Agencia Española de Protección de Datos (AEPD)</a>.
            </p>
          </div>
        </div>

        <!-- 10. Cookies -->
        <div class="privacy-card">
          <div class="privacy-card__icon">🍪</div>
          <h2 class="privacy-card__title">10. Política de Cookies</h2>
          <div class="privacy-card__body">
            <p>
              Esta web utiliza únicamente <strong>cookies propias</strong>. No usamos
              cookies de terceros con fines publicitarios ni de seguimiento.
            </p>

            <table class="privacy-table mt-1">
              <thead>
                <tr>
                  <th>Cookie</th>
                  <th>Tipo</th>
                  <th>Finalidad</th>
                  <th>Duración</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td><code>cookie_consent</code></td>
                  <td>Propia — esencial</td>
                  <td>Guarda tu preferencia de aceptación o rechazo de cookies</td>
                  <td>Hasta que la borres manualmente</td>
                </tr>
              </tbody>
            </table>

            <p class="mt-1">
              Puedes cambiar tus preferencias en cualquier momento usando el enlace
              <strong>"Cookies"</strong> en el pie de página, o eliminando los datos del
              sitio desde la configuración de tu navegador.
            </p>
          </div>
        </div>

        <!-- 11. Seguridad -->
        <div class="privacy-card">
          <div class="privacy-card__icon">🔒</div>
          <h2 class="privacy-card__title">11. Seguridad de los Datos</h2>
          <div class="privacy-card__body">
            <p>
              Aplicamos medidas técnicas y organizativas apropiadas para garantizar un
              nivel de seguridad adecuado al riesgo, conforme al artículo 32 del RGPD:
            </p>
            <ul class="privacy-list">
              <li>Comunicaciones cifradas mediante protocolo <strong>HTTPS/TLS</strong>.</li>
              <li>Acceso restringido a los datos únicamente por el responsable del tratamiento.</li>
              <li>No almacenamiento de contraseñas ni datos bancarios en esta web.</li>
              <li>Revisión periódica de las medidas de seguridad implementadas.</li>
            </ul>
          </div>
        </div>

        <!-- 12. Modificaciones -->
        <div class="privacy-card">
          <div class="privacy-card__icon">📝</div>
          <h2 class="privacy-card__title">12. Modificaciones de esta Política</h2>
          <div class="privacy-card__body">
            <p>
              Podemos actualizar esta Política de Privacidad para adaptarla a cambios
              legislativos o modificaciones en nuestros servicios. La fecha de
              "Última actualización" que figura en la cabecera refleja siempre
              la versión vigente. Te recomendamos revisarla periódicamente.
            </p>
            <p>
              En caso de cambios sustanciales que afecten a tus derechos, lo comunicaremos
              a través de un aviso destacado en la web.
            </p>
          </div>
        </div>

      </div><!-- /privacy-grid -->

      <div class="privacy-footer">
        <p>¿Tienes dudas sobre cómo tratamos tus datos?</p>
        <a href="/contacto" data-link class="btn btn-primary">Contacta con nosotros</a>
      </div>

    </div>
  `;
};
