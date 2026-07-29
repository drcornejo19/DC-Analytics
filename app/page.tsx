import { Brand } from "@/components/brand";
import { ContactForm } from "@/components/contact-form";

const problems = [
  ["01", "Tareas manuales repetitivas", "Procesos que consumen horas, generan errores y dependen de copiar información entre herramientas."],
  ["02", "Información dispersa", "Datos repartidos entre planillas, mensajes y sistemas que dificultan trabajar con una única versión de la realidad."],
  ["03", "Falta de seguimiento comercial", "Oportunidades sin responsables, próximos pasos ni recordatorios claros para convertir consultas en ventas."],
  ["04", "Resultados difíciles de medir", "Decisiones tomadas sin indicadores simples, actualizados y realmente útiles para el negocio."],
  ["05", "Procesos lentos y desordenados", "Circuitos improvisados que frenan al equipo y hacen más difícil crecer sin sumar complejidad."],
];

const services = [
  ["Automatización de procesos", "Reducí trabajo manual y liberá tiempo del equipo.", "Carga automática de datos, avisos, aprobaciones, reportes y tareas recurrentes."],
  ["CRM de ventas a medida", "Ordená cada oportunidad y mejorá el seguimiento comercial.", "Pipeline, contactos, actividades, presupuestos, recordatorios y reportes adaptados a tu proceso."],
  ["Sitios web y sistemas", "Convertí procesos internos o comerciales en herramientas claras y accesibles.", "Portales, paneles de gestión, formularios, sitios institucionales y sistemas empresariales."],
  ["Dashboards e indicadores", "Entendé qué está pasando sin revisar decenas de archivos.", "Tableros de ventas, operaciones, clientes, costos, productividad y objetivos."],
  ["Asistentes con IA", "Respondé, clasificá y procesá información con mayor velocidad.", "Chatbots, asistentes internos, búsqueda documental y generación de respuestas guiadas."],
  ["Integraciones", "Conectá herramientas para evitar duplicación y pérdida de datos.", "Integraciones entre CRM, email, formularios, planillas, APIs y sistemas de gestión."],
];

const workflowSteps = [
  ["1", "Entender el negocio", "Relevamos objetivos, tareas, herramientas, responsables y puntos de fricción."],
  ["2", "Diseñar la solución", "Definimos una propuesta simple, priorizada y alineada con el impacto esperado."],
  ["3", "Construir e integrar", "Desarrollamos, conectamos y probamos la solución con foco en seguridad y facilidad de uso."],
  ["4", "Medir y mejorar", "Acompañamos la adopción, observamos resultados y ajustamos lo necesario."],
];

const faqs = [
  ["¿Trabajan con pequeñas empresas?", "Sí. DC Analytics está orientada especialmente a pequeñas y medianas empresas que necesitan ordenar, automatizar o profesionalizar procesos sin incorporar estructuras innecesariamente complejas."],
  ["¿Las soluciones son personalizadas?", "Sí. Se parte del proceso real de cada empresa. Podemos adaptar una base existente o desarrollar una solución específica cuando el negocio lo requiere."],
  ["¿Cuánto tarda un proyecto?", "Depende del alcance, las integraciones y la disponibilidad de información. Después del relevamiento se entrega una estimación clara por etapas, evitando promesas decorativas que luego nadie puede sostener."],
  ["¿Tengo que saber de tecnología?", "No. La solución debe adaptarse al equipo, no obligar al equipo a convertirse en desarrollador. Explicamos cada decisión en lenguaje claro."],
  ["¿Ofrecen mantenimiento?", "Sí. El mantenimiento, soporte y mejora continua pueden incluirse según el tipo de proyecto y las necesidades operativas de la empresa."],
];

function Arrow() {
  return <span aria-hidden="true">→</span>;
}

function DashboardVisual() {
  return (
    <div className="relative mx-auto w-full max-w-[640px]" aria-label="Vista conceptual de un dashboard empresarial">
      <div className="absolute -inset-8 -z-10 rounded-full bg-blue-600/15 blur-3xl" />
      <div className="card overflow-hidden border-blue-400/30 p-3 shadow-[0_28px_100px_rgba(0,50,180,.28)] sm:p-5 lg:rotate-[-1deg]">
        <div className="mb-4 flex items-center justify-between border-b border-white/8 pb-4">
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.14em] text-blue-400">Dashboard conceptual</p>
            <p className="mt-1 font-bold text-white">Resumen ejecutivo</p>
          </div>
          <div className="rounded-lg border border-white/10 bg-white/5 px-3 py-2 text-xs text-slate-400">Este mes</div>
        </div>
        <div className="grid gap-3 sm:grid-cols-3">
          {[["Procesos", "Organizados"], ["Información", "Centralizada"], ["Seguimiento", "Activo"]].map(([label, value], index) => (
            <div key={label} className="rounded-xl border border-white/8 bg-[#0a1522] p-4">
              <span className="text-xs text-slate-400">{label}</span>
              <strong className="mt-2 block text-lg text-white">{value}</strong>
              <div className="mt-4 h-1.5 overflow-hidden rounded-full bg-white/5"><div className="h-full rounded-full bg-blue-500" style={{ width: `${72 + index * 8}%` }} /></div>
            </div>
          ))}
        </div>
        <div className="mt-3 grid gap-3 sm:grid-cols-[1.6fr_1fr]">
          <div className="rounded-xl border border-white/8 bg-[#0a1522] p-4">
            <div className="flex items-center justify-between"><span className="text-sm font-semibold">Evolución operativa</span><span className="text-xs text-slate-500">Ejemplo visual</span></div>
            <div className="mt-7 flex h-40 items-end gap-2">
              {[24, 34, 30, 45, 42, 58, 66, 62, 75, 84, 89, 96].map((height, index) => <div key={index} className="flex-1 rounded-t bg-gradient-to-t from-blue-700 to-blue-400" style={{ height: `${height}%` }} />)}
            </div>
          </div>
          <div className="rounded-xl border border-white/8 bg-[#0a1522] p-4">
            <span className="text-sm font-semibold">Flujo automatizado</span>
            <div className="mt-5 grid gap-3">
              {["Captura", "Validación", "Acción", "Reporte"].map((step, index) => <div key={step} className="flex items-center gap-3 text-xs text-slate-300"><span className="grid h-8 w-8 place-items-center rounded-lg border border-blue-500/30 bg-blue-500/10 font-bold text-blue-300">{index + 1}</span><span>{step}</span></div>)}
            </div>
          </div>
        </div>
      </div>
      <p className="mt-4 text-center text-xs text-slate-500">Interfaz ilustrativa. No representa métricas ni clientes reales.</p>
    </div>
  );
}

export default function Home() {
  const whatsapp = process.env.WHATSAPP_NUMBER ?? "WHATSAPP_NUMBER";
  const email = process.env.CONTACT_EMAIL ?? "CONTACT_EMAIL";
  const whatsappHref = whatsapp === "WHATSAPP_NUMBER" ? "#contacto" : `https://wa.me/${whatsapp.replace(/\D/g, "")}`;

  return (
    <main id="inicio">
      <header className="fixed inset-x-0 top-0 z-50 border-b border-white/8 bg-[#07101a]/88 backdrop-blur-xl">
        <div className="container flex min-h-20 items-center justify-between gap-6">
          <Brand />
          <nav aria-label="Navegación principal" className="hidden items-center gap-7 lg:flex">
            {[['Inicio', '#inicio'], ['Soluciones', '#soluciones'], ['Cómo trabajamos', '#proceso'], ['Nosotros', '#nosotros'], ['Contacto', '#contacto']].map(([label, href]) => <a key={href} className="nav-link text-sm font-semibold text-slate-300 hover:text-white" href={href}>{label}</a>)}
          </nav>
          <a className="button button-primary min-h-11 px-4 text-sm" href="#contacto">Hablemos <Arrow /></a>
        </div>
      </header>

      <section className="grid-noise relative overflow-hidden pb-24 pt-36 lg:pb-32 lg:pt-44">
        <div className="absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-blue-500/60 to-transparent" />
        <div className="container grid items-center gap-16 lg:grid-cols-[.93fr_1.07fr]">
          <div>
            <span className="eyebrow rounded-full border border-white/15 bg-white/[.03] px-4 py-2">Automatización e inteligencia artificial para empresas</span>
            <h1 className="mt-7 text-[clamp(2.8rem,6vw,5rem)] font-extrabold leading-[1.02] tracking-[-0.055em] text-white">
              Automatizamos procesos. <span className="text-blue-500">Impulsamos resultados.</span>
            </h1>
            <p className="mt-7 max-w-xl text-lg leading-8 text-slate-300">Desarrollamos soluciones digitales a medida para que pequeñas y medianas empresas trabajen con menos tareas manuales, información más ordenada y mejores herramientas para decidir.</p>
            <div className="mt-9 flex flex-col gap-3 sm:flex-row">
              <a className="button button-primary" href="#contacto">Solicitar una consulta <Arrow /></a>
              <a className="button button-secondary" href="#soluciones">Ver soluciones <Arrow /></a>
            </div>
            <div className="mt-10 grid gap-4 border-t border-white/10 pt-7 sm:grid-cols-3">
              {["Soluciones a medida", "Enfoque empresarial", "Implementación clara"].map((item) => <div key={item} className="flex items-center gap-3 text-sm font-semibold text-slate-300"><span className="grid h-8 w-8 place-items-center rounded-lg border border-blue-500/30 bg-blue-500/10 text-blue-400">✓</span>{item}</div>)}
            </div>
          </div>
          <DashboardVisual />
        </div>
      </section>

      <section className="section" aria-labelledby="problemas-title">
        <div className="container">
          <span className="eyebrow">Problemas que resolvemos</span>
          <h2 id="problemas-title" className="section-title">Cuando el negocio crece, el desorden también. A menos que alguien lo organice.</h2>
          <p className="section-copy">Detectamos los puntos donde se pierde tiempo, información o seguimiento y los convertimos en procesos más simples, visibles y escalables.</p>
          <div className="mt-12 grid gap-4 md:grid-cols-2 lg:grid-cols-5">
            {problems.map(([number, title, copy]) => <article key={number} className="card min-h-64 p-5"><span className="text-xs font-extrabold tracking-[.16em] text-blue-400">{number}</span><h3 className="mt-8 text-lg font-bold leading-snug">{title}</h3><p className="mt-4 text-sm leading-7 text-slate-400">{copy}</p></article>)}
          </div>
        </div>
      </section>

      <section id="soluciones" className="section border-y border-white/8 bg-[#09131f]/76" aria-labelledby="services-title">
        <div className="container">
          <span className="eyebrow">Nuestras soluciones</span>
          <h2 id="services-title" className="section-title">Tecnología que se adapta al negocio, no al revés.</h2>
          <p className="section-copy">Cada servicio se diseña alrededor de un beneficio operativo o comercial concreto. La tecnología es el medio. El resultado para la empresa es el criterio.</p>
          <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {services.map(([title, benefit, example], index) => <article key={title} className="card flex min-h-80 flex-col p-7"><div className="grid h-12 w-12 place-items-center rounded-xl border border-blue-500/35 bg-blue-500/10 text-lg font-black text-blue-300">{String(index + 1).padStart(2, '0')}</div><h3 className="mt-7 text-xl font-bold">{title}</h3><p className="mt-3 font-semibold leading-7 text-blue-200">{benefit}</p><p className="mt-4 text-sm leading-7 text-slate-400"><strong className="text-slate-200">Ejemplos:</strong> {example}</p><a href="#contacto" className="mt-auto pt-7 text-sm font-bold text-blue-400">Consultar por esta solución <Arrow /></a></article>)}
          </div>
        </div>
      </section>

      <section id="proceso" className="section" aria-labelledby="process-title">
        <div className="container">
          <span className="eyebrow">Cómo trabajamos</span>
          <h2 id="process-title" className="section-title">Un proceso claro, ágil y enfocado en resultados.</h2>
          <div className="mt-12 grid gap-5 lg:grid-cols-4">
            {workflowSteps.map(([number, title, copy]) => <article key={number} className="relative border-t border-blue-500/55 pt-8"><span className="grid h-12 w-12 place-items-center rounded-full bg-blue-600 font-extrabold shadow-[0_14px_35px_rgba(37,99,255,.28)]">{number}</span><h3 className="mt-6 text-lg font-bold">{title}</h3><p className="mt-3 text-sm leading-7 text-slate-400">{copy}</p></article>)}
          </div>
        </div>
      </section>

      <section className="section border-y border-white/8 bg-[#09131f]/76" aria-labelledby="case-title">
        <div className="container grid items-center gap-12 lg:grid-cols-[.82fr_1.18fr]">
          <div>
            <span className="eyebrow">Caso práctico conceptual</span>
            <h2 id="case-title" className="section-title">Cómo podría digitalizarse la gestión de una imprenta.</h2>
            <p className="section-copy">Este ejemplo ilustra una solución posible. No corresponde a un cliente real ni representa resultados obtenidos.</p>
            <div className="mt-8 rounded-2xl border border-blue-500/25 bg-blue-500/8 p-5 text-sm leading-7 text-blue-100">La solución se definiría después de relevar el circuito real de ventas, administración y producción.</div>
          </div>
          <div className="card overflow-hidden p-5 sm:p-7">
            <div className="flex flex-col justify-between gap-4 border-b border-white/8 pb-5 sm:flex-row sm:items-center"><div><span className="text-xs font-bold uppercase tracking-[.14em] text-blue-400">CRM + Producción</span><h3 className="mt-2 text-xl font-bold">Flujo de trabajo de ejemplo</h3></div><span className="rounded-full border border-blue-500/25 bg-blue-500/10 px-3 py-2 text-xs font-semibold text-blue-200">Demostración conceptual</span></div>
            <div className="mt-6 grid gap-3 sm:grid-cols-5">
              {["Clientes", "Presupuestos", "Trabajos", "Producción", "Recordatorios"].map((item, index) => <div key={item} className="rounded-xl border border-white/8 bg-[#0a1522] p-4 text-center"><span className="mx-auto grid h-10 w-10 place-items-center rounded-lg bg-blue-500/10 font-bold text-blue-300">{index + 1}</span><strong className="mt-3 block text-xs">{item}</strong></div>)}
            </div>
            <div className="mt-5 grid gap-3 sm:grid-cols-3">
              {[['Presupuesto enviado', 'Próximo paso visible'], ['Trabajo aprobado', 'Estado de producción'], ['Cliente sin respuesta', 'Recordatorio comercial']].map(([title, text]) => <div key={title} className="rounded-xl border border-white/8 bg-white/[.025] p-4"><span className="text-sm font-semibold">{title}</span><p className="mt-2 text-xs leading-6 text-slate-400">{text}</p></div>)}
            </div>
          </div>
        </div>
      </section>

      <section id="nosotros" className="section" aria-labelledby="about-title">
        <div className="container grid gap-12 lg:grid-cols-[1fr_.8fr]">
          <div>
            <span className="eyebrow">Sobre DC Analytics</span>
            <h2 id="about-title" className="section-title">Soluciones cercanas, personalizadas y construidas con lógica de negocio.</h2>
            <p className="section-copy">DC Analytics fue fundada por David Cornejo en Buenos Aires para ayudar a empresas a transformar procesos cotidianos en sistemas más claros, medibles y eficientes. El enfoque combina análisis, automatización y desarrollo sin esconder las decisiones importantes detrás de jerga técnica.</p>
          </div>
          <aside className="card p-7 sm:p-9">
            <span className="text-xs font-extrabold uppercase tracking-[.16em] text-blue-400">Fundador</span>
            <h3 className="mt-4 text-3xl font-extrabold">David Cornejo</h3>
            <p className="mt-2 text-slate-400">Buenos Aires, Argentina</p>
            <div className="my-7 glow-line" />
            <ul className="grid gap-4 text-sm leading-7 text-slate-300">
              <li>✓ Relevamiento directo de cada necesidad.</li>
              <li>✓ Soluciones ajustadas al tamaño y proceso de la empresa.</li>
              <li>✓ Comunicación clara durante la implementación.</li>
              <li>✓ Sin equipos, certificaciones ni experiencia ficticia de utilería corporativa.</li>
            </ul>
          </aside>
        </div>
      </section>

      <section className="section border-y border-white/8 bg-[#09131f]/76" aria-labelledby="faq-title">
        <div className="container grid gap-10 lg:grid-cols-[.7fr_1.3fr]">
          <div><span className="eyebrow">Preguntas frecuentes</span><h2 id="faq-title" className="section-title">Antes de empezar.</h2><p className="section-copy">Respuestas claras a las dudas habituales de un proyecto digital.</p></div>
          <div className="grid gap-3">{faqs.map(([question, answer]) => <details key={question} className="card group p-5"><summary className="flex cursor-pointer list-none items-center justify-between gap-5 font-bold"><span>{question}</span><span className="text-blue-400 transition group-open:rotate-45">+</span></summary><p className="mt-4 border-t border-white/8 pt-4 text-sm leading-7 text-slate-400">{answer}</p></details>)}</div>
        </div>
      </section>

      <section id="contacto" className="section" aria-labelledby="contact-title">
        <div className="container grid gap-12 lg:grid-cols-[.72fr_1.28fr]">
          <div>
            <span className="eyebrow">Contacto</span>
            <h2 id="contact-title" className="section-title">Hablemos de tu próximo proyecto.</h2>
            <p className="section-copy">Contanos qué proceso querés ordenar, automatizar o medir. La primera conversación sirve para entender el problema y evaluar el mejor camino.</p>
            <div className="mt-8 grid gap-4 text-sm">
              <a className="card flex items-center justify-between p-5 font-semibold" href={whatsappHref} target={whatsappHref.startsWith('http') ? '_blank' : undefined} rel="noreferrer">WhatsApp <span className="text-blue-400">{whatsapp}</span></a>
              <a className="card flex items-center justify-between p-5 font-semibold" href={email === 'CONTACT_EMAIL' ? '#contacto' : `mailto:${email}`}>Email <span className="text-blue-400">{email}</span></a>
            </div>
          </div>
          <ContactForm />
        </div>
      </section>

      <footer className="border-t border-white/8 bg-[#050c14] py-12">
        <div className="container grid gap-10 md:grid-cols-2 lg:grid-cols-4">
          <div><Brand /><p className="mt-5 max-w-xs text-sm leading-7 text-slate-500">Automatización e Inteligencia Artificial para Empresas.</p></div>
          <div><h3 className="text-sm font-bold">Servicios</h3><div className="mt-4 grid gap-3 text-sm text-slate-400"><a href="#soluciones">Automatización</a><a href="#soluciones">CRM a medida</a><a href="#soluciones">Dashboards</a><a href="#soluciones">Desarrollo e integraciones</a></div></div>
          <div><h3 className="text-sm font-bold">Contacto</h3><div className="mt-4 grid gap-3 text-sm text-slate-400"><span>Buenos Aires, Argentina</span><span>{email}</span><span>{whatsapp}</span></div></div>
          <div><h3 className="text-sm font-bold">Redes</h3><div className="mt-4 flex gap-3"><a className="grid h-10 w-10 place-items-center rounded-lg border border-white/10 text-xs font-bold text-slate-300" href="#">in</a><a className="grid h-10 w-10 place-items-center rounded-lg border border-white/10 text-xs font-bold text-slate-300" href="#">ig</a><a className="grid h-10 w-10 place-items-center rounded-lg border border-white/10 text-xs font-bold text-slate-300" href={whatsappHref}>wa</a></div></div>
        </div>
        <div className="container mt-10 flex flex-col justify-between gap-3 border-t border-white/8 pt-6 text-xs text-slate-600 sm:flex-row"><span>© {new Date().getFullYear()} DC Analytics. Todos los derechos reservados.</span><span>Privacidad · Términos</span></div>
      </footer>
    </main>
  );
}
