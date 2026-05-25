export type Lang = "en" | "es";

export const t = {
  en: {
    nav: {
      about: "About",
      education: "Education",
      projects: "Projects",
      goals: "Goals",
    },
    hero: {
      role: "Software Systems Engineer",
      availability: "Open to internships & junior roles",
      tagline:
        "I build software with intent, clean architecture, thoughtful interfaces, and a genuine interest in how technology can change the world.",
      cta_projects: "View Projects",
      cta_cv: "Download CV",
    },
    about: {
      label: "About",
      heading: "Technology as a way of life, not just a career.",
      p1: "I'm Nathan Santiago Martín del Campo Chung, a 21-year-old Software Engineering student at Universidad Autónoma de Guadalajara, graduating in 2027. My love for technology goes back to childhood: a father who is an engineer and always had the latest gadgets at home, video games that sparked my curiosity, and a first Apple device that made me fall completely in love with the idea that technology could be both powerful and beautiful. That moment sent me down a rabbit hole of Steve Jobs, he became, and still is, my biggest reference for what a technology leader can be.",
      p2: "For the past two years I've been fully immersed in the AI wave, from my first conversation with ChatGPT to becoming a daily Claude user. I follow closely the work of Dario Amodei and Elon Musk, and I'm convinced that AI has fundamentally removed the last excuse for not being able to build something. I consider myself a vibe coder at heart: I move fast, build with AI assistance, and ship. But I back that up with solid engineering fundamentals, because good vibes alone don't fix a broken architecture.",
      p3: "I'm the oldest of seven siblings, which taught me to stay composed under pressure and genuinely care for the people around me. My parents raised me with values I carry into every team I'm part of: honesty, empathy, responsibility, and initiative. I bring energy and a positive attitude to the people I work with, and I'm deeply grateful for every opportunity to learn.",
      stack_label: "Stack",
      languages_label: "Languages",
      languages: [
        { name: "Spanish", level: "Native" },
        { name: "English", level: "Intermediate-Advanced (B2)" },
      ],
      currently_label: "Currently",
      currently_text:
        "Finishing my degree while building AI-powered personal projects and exploring opportunities at top tech companies. My long-term vision is to found a technology company of my own, but first, I want to learn from the best and become a better engineer every single day.",
    },
    education: {
      label: "Education",
      heading: "Academic background.",
      degree: "B.S. in Software Engineering",
      institution: "Universidad Autónoma de Guadalajara",
      graduation: "Jan 2024 – Present · Expected graduation 2027",
      courses_label: "Relevant coursework",
      courses: [
        "Algorithms",
        "Data Structures",
        "Networking",
        "Digital Electronics",
        "Software Architecture",
        "Object-Oriented Programming",
        "Web Development",
        "Operating Systems",
      ],
    },
    projects: {
      label: "Projects",
      heading: "Things I've built.",
      subtitle:
        "Personal projects and explorations, works in progress and experiments.",
      items: [
        {
          name: "Hospital-App",
          description:
            "SwiftUI mobile app for private hospitals in Mexico: patient portal with medical directory and appointment management. Researched HL7 FHIR & SMART on FHIR integration and defined a B2B SaaS go-to-market strategy with a progressive MVP roadmap.",
          tech: ["SwiftUI", "HL7 FHIR", "OAuth 2.0"],
        },
        {
          name: "SAI – Landing Page",
          description:
            "Landing page for SAI, a content creation agency specializing in the real estate sector. Delivered a complete design system, services showcase, portfolio section, and contact form.",
          tech: ["Claude Code", "Next.js", "Tailwind CSS"],
        },
        {
          name: "Collete – Landing Page",
          description:
            "Landing page for Collete, a jewelry brand. Elegant visual design, product catalog, and conversion-focused CTAs. Built end-to-end with AI-assisted development workflows.",
          tech: ["Claude Code", "Next.js", "Tailwind CSS"],
        },
        {
          name: "Mexican Startup Opportunity Analysis",
          description:
            "Researched 25 U.S. software ideas adaptable to Mexico. Top picks: WhatsApp-native CFDI 4.0 invoicing and AI agent for SMBs. Modeled unit economics including API costs and margin per pricing tier.",
          tech: ["Product Strategy", "Market Research", "Financial Modeling"],
        },
      ],
    },
    goals: {
      label: "Goals",
      heading: "What I'm working toward.",
      items: [
        {
          title: "Land a role at a top tech company",
          body: "I want to start my professional career in the best environment possible, where I can learn from exceptional engineers, work on hard problems, and grow faster than I would anywhere else.",
        },
        {
          title: "Become a complete engineer",
          body: "From system design and database architecture to pixel-perfect UI. I want to be fluent in every layer of the products I build, not just one slice of the stack.",
        },
        {
          title: "Build AI-native products that matter",
          body: "The most impactful software right now lives at the intersection of AI and real human workflows. I want to keep building there, starting with the Hospital-App.",
        },
        {
          title: "Found a technology company",
          body: "My long-term goal is to create a tech company from scratch. I know that requires experience, capital, and the right team, so everything I do now is preparation for that moment.",
        },
      ],
    },
    footer: {
      open: "Open to opportunities",
    },
  },
  es: {
    nav: {
      about: "Sobre mí",
      education: "Educación",
      projects: "Proyectos",
      goals: "Metas",
    },
    hero: {
      role: "Ingeniero en Sistemas de Software",
      availability: "Abierto a prácticas y puestos junior",
      tagline:
        "Construyo software con intención, arquitectura limpia, interfaces cuidadas y un interés genuino por cómo la tecnología puede cambiar el mundo.",
      cta_projects: "Ver Proyectos",
      cta_cv: "Descargar CV",
    },
    about: {
      label: "Sobre mí",
      heading: "La tecnología como forma de vida, no solo una carrera.",
      p1: "Soy Nathan Santiago Martín del Campo Chung, estudiante de Ingeniería en Sistemas de Software en la Universidad Autónoma de Guadalajara, próximo a graduarme en 2027. Mi amor por la tecnología viene desde la infancia: un papá ingeniero que siempre tenía los últimos gadgets en casa, videojuegos que despertaron mi curiosidad, y el primer dispositivo Apple de nuestra familia que me hizo enamorarme de la idea de que la tecnología podía ser poderosa y hermosa al mismo tiempo. Ese momento me llevó a investigar a Steve Jobs, desde entonces es mi mayor referente de lo que un líder tecnológico puede ser.",
      p2: "En los últimos dos años he estado completamente inmerso en la ola de la IA, desde mi primera conversación con ChatGPT hasta convertirme en usuario diario de Claude. Sigo de cerca el trabajo de Dario Amodei y Elon Musk, y estoy convencido de que la IA eliminó la última excusa para no poder construir algo. Me considero un vibe coder de corazón: me muevo rápido, construyo con asistencia de IA y publico. Pero lo respaldo con bases sólidas de ingeniería, porque las buenas vibras solas no arreglan una arquitectura rota.",
      p3: "Soy el mayor de siete hermanos, lo que me enseñó a mantener la compostura bajo presión y a cuidar genuinamente a las personas a mi alrededor. Mis papás me inculcaron valores que llevo a cada equipo: honestidad, empatía, responsabilidad e iniciativa. Aporto energía y actitud positiva a las personas con quienes trabajo, y estoy profundamente agradecido por cada oportunidad de aprender.",
      stack_label: "Stack",
      languages_label: "Idiomas",
      languages: [
        { name: "Español", level: "Nativo" },
        { name: "Inglés", level: "Intermedio-Avanzado (B2)" },
      ],
      currently_label: "Actualmente",
      currently_text:
        "Terminando mi carrera mientras construyo proyectos personales con IA y exploro oportunidades en las mejores empresas de tecnología. Mi visión a largo plazo es fundar una empresa tecnológica propia, pero primero quiero aprender de los mejores y convertirme en un mejor ingeniero cada día.",
    },
    education: {
      label: "Educación",
      heading: "Formación académica.",
      degree: "Ingeniería en Sistemas de Software",
      institution: "Universidad Autónoma de Guadalajara",
      graduation: "Ene 2024 – Presente · Graduación prevista 2027",
      courses_label: "Materias relevantes",
      courses: [
        "Algoritmos",
        "Estructuras de Datos",
        "Redes",
        "Electrónica Digital",
        "Arquitectura de Software",
        "Programación Orientada a Objetos",
        "Desarrollo Web",
        "Sistemas Operativos",
      ],
    },
    projects: {
      label: "Proyectos",
      heading: "Lo que he construido.",
      subtitle:
        "Proyectos personales y exploraciones, trabajos en proceso y experimentos.",
      items: [
        {
          name: "Hospital-App",
          description:
            "App móvil en SwiftUI para hospitales privados en México: portal del paciente con directorio médico y gestión de citas. Investigación de integración HL7 FHIR & SMART on FHIR y estrategia go-to-market B2B SaaS con roadmap progresivo desde MVP.",
          tech: ["SwiftUI", "HL7 FHIR", "OAuth 2.0"],
        },
        {
          name: "SAI – Landing Page",
          description:
            "Landing page para SAI, agencia de creación de contenido especializada en el sector inmobiliario. Sistema de diseño completo, showcase de servicios, sección de portafolio y formulario de contacto.",
          tech: ["Claude Code", "Next.js", "Tailwind CSS"],
        },
        {
          name: "Collete – Landing Page",
          description:
            "Landing page para Collete, una marca de joyería. Diseño visual elegante, catálogo de productos y CTAs orientados a conversión. Construida con flujos de desarrollo asistido por IA.",
          tech: ["Claude Code", "Next.js", "Tailwind CSS"],
        },
        {
          name: "Análisis de Oportunidades Startup",
          description:
            "Investigué 25 ideas de software de EE.UU. adaptables a México. Top picks: facturación CFDI 4.0 nativa en WhatsApp y agente IA para PyMEs. Modelé unit economics incluyendo costos de API y márgenes por tier.",
          tech: ["Estrategia de Producto", "Investigación de Mercado", "Modelado Financiero"],
        },
      ],
    },
    goals: {
      label: "Metas",
      heading: "Hacia dónde voy.",
      items: [
        {
          title: "Entrar a una empresa tecnológica top",
          body: "Quiero comenzar mi carrera profesional en el mejor entorno posible, donde pueda aprender de ingenieros excepcionales, trabajar en problemas difíciles y crecer más rápido que en cualquier otro lugar.",
        },
        {
          title: "Convertirme en un ingeniero completo",
          body: "Desde el diseño de sistemas y arquitectura de base de datos hasta UI pixel-perfect. Quiero ser fluido en cada capa de los productos que construyo, no solo en una parte del stack.",
        },
        {
          title: "Construir productos nativos de IA que importen",
          body: "El software más impactante ahora vive en la intersección de la IA y los flujos de trabajo humanos reales. Quiero seguir construyendo ahí, empezando con Hospital-App.",
        },
        {
          title: "Fundar una empresa de tecnología",
          body: "Mi meta a largo plazo es crear una empresa tecnológica desde cero. Sé que eso requiere experiencia, capital y el equipo correcto, así que todo lo que hago ahora es preparación para ese momento.",
        },
      ],
    },
    footer: {
      open: "Abierto a oportunidades",
    },
  },
} as const;
