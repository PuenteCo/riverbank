import type {
  NavLink,
  BarItem,
  PanelMetric,
  ProblemCard,
  MethodStep,
  AICard,
  Employee,
  Product,
  TargetSector,
  Credential,
} from '../types';

export const NAV_LINKS: NavLink[] = [
  { label: 'Metodología', href: '#metodo' },
  { label: 'Inteligencia Artificial', href: '#ia' },
  { label: 'Programas', href: '#productos' },
  { label: 'Sectores', href: '#sectores' },
];

export const HERO_BAR_ITEMS: BarItem[] = [
  {
    icon: '🧠',
    title: 'Pedagogía intercultural',
    description: 'No gramática — cultura, contexto, confianza',
  },
  {
    icon: '🤖',
    title: 'IA integrada',
    description: 'Adaptación continua al perfil de cada empleado',
  },
  {
    icon: '📊',
    title: 'ROI medible',
    description: 'Dashboard en tiempo real para RRHH y dirección',
  },
  {
    icon: '🏢',
    title: '100% corporativo',
    description: 'Diseñado para equipos, no para individuos',
  },
];

export const PANEL_METRICS: PanelMetric[] = [
  {
    value: '78',
    suffix: '%',
    description: 'de empleados con formación en inglés',
    highlight: 'nunca lo usan en contextos reales de trabajo',
  },
  {
    value: '3',
    suffix: '×',
    description: 'más retención cuando el aprendizaje',
    highlight: 'conecta idioma con cultura',
  },
  {
    value: '6',
    suffix: 'mo',
    description: 'para alcanzar',
    highlight: 'fluidez operacional real con el Método Puente',
  },
];

export const PROBLEM_CARDS: ProblemCard[] = [
  {
    number: '01',
    icon: '📚',
    title: 'Gramática sin comunicación',
    body: 'Los programas tradicionales enseñan reglas. Los empleados aprenden a no cometer errores — pero nunca aprenden a comunicarse con confianza.',
  },
  {
    number: '02',
    icon: '🌍',
    title: 'Sin contexto cultural',
    body: 'Hablar inglés con un cliente de Tennessee no es solo pronunciar correctamente. Es entender el humor, el tono, las expectativas implícitas. Eso no se enseña en ninguna academia.',
  },
  {
    number: '03',
    icon: '📉',
    title: 'ROI invisible para la empresa',
    body: 'RRHH no puede medir si el programa funciona. No hay datos. No hay métricas de impacto real. Solo facturas y la esperanza de que algo mejore.',
  },
  {
    number: '04',
    icon: '⏱️',
    title: 'Formatos que no funcionan',
    body: 'Clases a las 7am o 6pm. Un solo instructor para 20 personas con niveles distintos. Los mejores empleados no asisten. Los que asisten no progresan.',
  },
];

export const METHOD_STEPS: MethodStep[] = [
  {
    number: '— 01',
    title: 'Inmersión Cultural Aplicada',
    description:
      'Usamos contenido real — series, podcasts, negociaciones grabadas, artículos de prensa — calibrado para la industria de cada empresa. Un equipo de exportadoras aprende con escenarios de negociación internacional. Un BPO, con llamadas y tickets reales.',
    tag: 'Contenido contextual',
  },
  {
    number: '— 02',
    title: 'Gramática Cognitiva, no Gramática Tradicional',
    description:
      'El programa incluye gramática — pero gramática cognitiva. No enseñamos reglas para memorizar, sino patrones para entender. El empleado aprende por qué el inglés funciona como funciona, y eso le permite adaptarse a situaciones nuevas en lugar de buscar la regla correcta en su memoria.',
    tag: 'Comprensión profunda',
  },
  {
    number: '— 03',
    title: 'Duración y Objetivos a la Medida',
    description:
      'La duración del programa depende del nivel inicial y de los propósitos específicos del equipo. Un equipo con nivel B1 orientado a reuniones ejecutivas no requiere el mismo recorrido que un equipo A2 enfocado en atención al cliente. El diagnóstico inicial define la ruta — no un número de meses fijo.',
    tag: 'Diseño a la medida',
  },
];

export const AI_CARDS: AICard[] = [
  {
    icon: '🎯',
    title: 'Diagnóstico Inteligente de Brechas',
    description:
      'Al inicio del programa, nuestra IA evalúa a cada empleado en 4 dimensiones: comprensión cultural, fluidez oral, comprensión auditiva nativa, y confianza comunicativa. El currículo se adapta automáticamente.',
  },
  {
    icon: '🔄',
    title: 'Rutas de Aprendizaje Adaptativas',
    description:
      'El plan de cada empleado se ajusta semana a semana según su progreso real. Si alguien avanza rápido en comprensión auditiva pero tiene brechas en comunicación escrita formal, el sistema lo detecta y re-prioriza.',
  },
  {
    icon: '🎙️',
    title: 'Práctica Conversacional con IA',
    description:
      'Entre sesiones, los empleados practican conversaciones en inglés con un agente de IA entrenado en contextos específicos de su industria. El agente da feedback en tiempo real sobre tono, registro, y claridad cultural.',
  },
  {
    icon: '📊',
    title: 'Dashboard de RRHH en Tiempo Real',
    description:
      'Cada empresa tiene acceso a un panel con progreso individual y grupal, predicción de tiempo para alcanzar objetivos, alertas de empleados que necesitan atención extra, y reportes listos para presentar a dirección.',
  },
  {
    icon: '🌐',
    title: 'Contenido Generado por Industria',
    description:
      'La IA genera micro-lecciones específicas al sector: si su empresa exporta café, el contenido incluye vocabulario de commodities, negociación de contratos FOB, y cultura de negocios de los principales mercados compradores.',
  },
  {
    icon: '🔮',
    title: 'Predicción de Impacto en Negocio',
    description:
      'Correlacionamos el progreso del equipo con métricas de negocio para proyectar cuándo — no si — la inversión en formación se traduce en resultados medibles para la empresa.',
  },
];

export const DEMO_EMPLOYEES: Employee[] = [
  {
    avatar: '👩',
    name: 'Valentina R.',
    role: 'Gerente de Cuenta',
    progress: 82,
    animationDuration: '1.8s',
  },
  {
    avatar: '👨',
    name: 'Carlos M.',
    role: 'Analista de Operaciones',
    progress: 65,
    animationDuration: '2.1s',
  },
  {
    avatar: '👩',
    name: 'Daniela P.',
    role: 'Directora Comercial',
    progress: 91,
    animationDuration: '1.5s',
  },
  {
    avatar: '👨',
    name: 'Sebastián L.',
    role: 'Soporte Técnico',
    progress: 48,
    animationDuration: '2.4s',
  },
];

export const DEMO_INSIGHTS = [
  '🎯 <strong>Sebastián L.</strong> muestra baja práctica conversacional esta semana. La IA sugiere ajustar nivel de los ejercicios y activar recordatorios.',
  '🚀 <strong>Daniela P.</strong> está en trayectoria para alcanzar fluidez operacional <strong>3 semanas antes</strong> de lo proyectado.',
  '📈 El equipo muestra <strong>+34% en confianza comunicativa</strong> vs semana 1. Vocabulario de negociación: área más mejorada.',
  '⚠️ Patrón detectado: 3 empleados evitan ejercicios orales. La IA propone sesión grupal sin evaluación la próxima semana.',
];

export const PRODUCTS: Product[] = [
  {
    number: '01',
    category: 'Programa base',
    name: 'Inmersión In-Company',
    description:
      'Sesiones en vivo — presencial o remoto — diseñadas específicamente para la industria y los objetivos de negocio de su empresa. No es una clase: es una intervención cultural aplicada. Incluye diagnóstico inicial, diseño curricular por equipo, sesiones semanales y acceso a la plataforma de práctica asincrónica con IA.',
    badge: 'Desde 8 personas',
    badgeVariant: 'dark',
  },
  {
    number: '02',
    category: 'Plataforma digital',
    name: 'Portal Corporativo con IA',
    description:
      'Acceso permanente a la plataforma Puente: micro-lecciones de 10 minutos basadas en contenido cultural real, práctica conversacional con agente de IA especializado en su industria, seguimiento individual y grupal, y dashboard completo para RRHH. Disponible 24/7 sin depender de horarios de sesión.',
    badge: 'Incluido en todos los planes',
    badgeVariant: 'accent',
  },
  {
    number: '03',
    category: 'Certificación',
    name: 'Comunicación Intercultural Profesional',
    description:
      'Una certificación corporativa que mide lo que realmente importa: si el empleado puede funcionar efectivamente en entornos angloparlantes. No evalúa gramática — evalúa competencia comunicativa intercultural. Las empresas la usan para procesos de ascenso, selección y reporte de métricas de RRHH.',
    badge: 'Diferenciador de mercado',
    badgeVariant: 'outline',
  },
];

export const TARGET_SECTORS: TargetSector[] = [
  {
    emoji: '☕',
    title: 'Exportadoras y Agroindustria',
    description:
      'Café, flores, aguacate, cacao. Equipos que negocian con compradores de EE.UU., Europa y Asia necesitan inglés de negociación internacional, no inglés de libro de texto.',
    tag: '→ Inglés para exportación',
  },
  {
    emoji: '📞',
    title: 'BPO y Contact Centers',
    description:
      'La diferencia entre un agente que "habla inglés" y uno que realmente conecta con un cliente de Atlanta está en la competencia cultural — no en el acento.',
    tag: '→ Inglés de atención al cliente',
  },
  {
    emoji: '💻',
    title: 'Startups y Empresas Tech',
    description:
      'Equipos que presentan a inversores, trabajan con clientes de Silicon Valley o Latam tech, y necesitan comunicarse en el inglés del ecosistema tecnológico global.',
    tag: '→ Inglés para startups',
  },
  {
    emoji: '🏛️',
    title: 'Consultoría y Servicios Profesionales',
    description:
      'Firmas donde la imagen se juega en cada presentación, cada propuesta y cada reunión con clientes internacionales. El inglés es reputación.',
    tag: '→ Inglés ejecutivo',
  },
];

export const CREDENTIALS: Credential[] = [
  { text: 'Licenciada en Lenguas Modernas' },
  { text: 'Máster en Enseñanza de Español como Lengua Extranjera' },
  { text: 'Especialista en pedagogía intercultural aplicada' },
  { text: 'Diseñadora del Método Puente — Directora Académica' },
];
