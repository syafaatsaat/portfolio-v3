import { Period } from './models/Period.js'

/*
 * Single source of truth for all portfolio content, taken from
 * public/resume/Muhammad_Nur_Syafaat_CV_Junior_AI_Developer.pdf.
 * Themes only decide how this is presented.
 */

export const person = {
  firstName: 'Muhammad',
  middleName: 'Nur',
  lastName: 'Syafaat',
  shortName: 'Syafaat',
  role: 'Junior AI Developer',
  location: 'Singapore',
  timeZone: 'Asia/Singapore',
  timeZoneLabel: 'SGT',
  tagline: 'Computer Science graduate who builds and ships software with AI-assisted development.',
  about: [
    "I'm a Computer Science & Game Design graduate who builds and ships software with AI-assisted development. I've taken three web apps from idea to release by prompting and iterating with Claude Code.",
    'My foundations in Python, SQL, JavaScript and C++ come from data engineering and 3D simulation work. Today I evaluate data used to train AI models at TELUS International. Next, I want to grow in AI platform development and application security.',
  ],
  /** Phrase themes may emphasise inside the about text */
  aboutHighlight: 'Computer Science & Game Design',
  availability: 'Open to junior AI & software roles',
}

export const education = {
  degree: 'B.Sc. Computer Science & Game Design',
  shortDegree: 'B.Sc. CS & Game Design',
  school: 'DigiPen Institute of Technology Singapore',
  shortSchool: 'DigiPen Singapore',
  period: new Period({ year: 2018 }, { year: 2022 }),
}

export const experience = [
  {
    id: 'telus',
    role: 'Freelance AI Data Analyst',
    org: 'TELUS International',
    orgShort: 'TELUS International',
    note: null,
    period: new Period({ year: 2026, month: 7 }),
    bullets: [
      'Evaluate map data, search results and web content for relevance and accuracy to train global AI models: 300+ tasks a month under strict QA guidelines.',
      'Resolve complex data discrepancies through in-depth research with search engines and geospatial tools.',
    ],
  },
  {
    id: 'generation',
    role: 'Junior Data Engineer Program Trainee',
    org: 'Generation Singapore',
    orgShort: 'Generation SG',
    note: 'With Microsoft & Temasek Polytechnic',
    period: new Period({ year: 2024, month: 7 }, { year: 2024, month: 10 }),
    bullets: [
      'Designed and deployed 2 ETL pipelines in Python and SQL to automate data ingestion and transformation.',
      'Built Azure-based data platforms for structured data, cutting manual handling steps.',
      "Scraped and cleaned IMDb's Top 250 into structured CSVs and visualised it in Power BI and Tableau.",
    ],
  },
  {
    id: 'sit',
    role: 'Software Engineer Intern',
    org: 'Singapore Institute of Technology',
    orgShort: 'SIT',
    note: null,
    period: new Period({ year: 2022, month: 1 }, { year: 2022, month: 7 }),
    bullets: [
      'Built a C# data parser in Unity to integrate 50K+ CSV location records into a 3D simulation.',
      'Contributed to a 3D model of a 21.7 km² area of Singapore with Python and CityEngine.',
      'Developed 2D/3D visualisation features and redesigned menus from tester feedback.',
      'Agile sprints, daily stand-ups and Git-based team workflow.',
    ],
  },
]

export const skills = [
  {
    id: 'ai',
    key: 'A',
    title: 'AI-Assisted Dev',
    items: ['Claude Code', 'Prompting for codegen', 'AI-assisted debugging', 'Training data evaluation'],
  },
  {
    id: 'languages',
    key: 'B',
    title: 'Languages',
    items: ['Python', 'JavaScript', 'SQL', 'C++', 'C#', 'HTML', 'CSS'],
  },
  {
    id: 'frameworks',
    key: 'C',
    title: 'Frameworks & Platforms',
    items: ['React', 'Vue.js', 'Nuxt', 'Node.js', 'Tailwind CSS', 'Microsoft Azure', 'Power BI', 'Tableau'],
  },
  {
    id: 'tools',
    key: 'D',
    title: 'Tools & Practices',
    items: ['Git', 'VS Code', 'npm', 'Webpack', 'Jest', 'Agile / Scrum', 'OOP', 'Data Structures', 'SOLID'],
  },
]

/** motif: which illustration a theme draws for the project ('lines' | 'card' | 'tiles') */
// liveUrl: deployed app; leave null to show only the source link
// preview: screenshot in /public/projects; leave null to show the illustrated art
// featured: shown on the home page; every project is listed on /projects
export const projects = [
  {
    id: 'linework',
    name: 'Linework',
    sourceUrl: 'https://github.com/syafaatsaat/linework',
    liveUrl: 'https://linework-delta.vercel.app/',
    preview: '/projects/linework.webp',
    category: 'Web · Client-side',
    description: 'A CV builder that runs entirely in the browser, so user data never leaves the device.',
    motif: 'lines',
    featured: true,
  },
  {
    id: 'holo-vault',
    name: 'Holo Vault',
    sourceUrl: 'https://github.com/syafaatsaat/holo-vault',
    liveUrl: 'https://holo-vault-two.vercel.app/',
    preview: '/projects/holo-vault.webp',
    category: 'React · Commerce',
    description: 'A React shopping app for Pokémon TCG singles, priced at market value.',
    motif: 'card',
    featured: true,
  },
  {
    id: 'memory-legends',
    name: 'Memory Legends: See See',
    sourceUrl: 'https://github.com/syafaatsaat/memory-legends-see-see',
    liveUrl: 'https://memory-legends-see-see.vercel.app/',
    preview: '/projects/memory-legends.webp',
    category: 'Web · Game',
    description: 'A hero memory game for Mobile Legends: Bang Bang fans.',
    motif: 'tiles',
    featured: true,
  },
  {
    id: 'battleship',
    name: 'Battleship',
    sourceUrl: 'https://github.com/syafaatsaat/battleship',
    liveUrl: 'https://syafaatsaat.github.io/battleship/',
    preview: '/projects/battleship.webp',
    category: 'Web · Game',
    description: 'A classic Battleship game, play with a friend locally or challenge a bot.',
    motif: 'grid',
    featured: true,
  },
  {
    id: 'portfolio-v2',
    name: 'Portfolio V2',
    sourceUrl: 'https://github.com/syafaatsaat/odin-portfolio',
    liveUrl: 'https://syafaatsaat.github.io/odin-portfolio/',
    preview: '/projects/portfolio-v2.webp',
    category: 'Web · Portfolio',
    description: 'My previous portfolio, a space-mission themed site built for The Odin Project.',
    motif: 'lines',
    featured: false,
  },
  {
    id: 'etch-a-sketch',
    name: 'Etch A Sketch',
    sourceUrl: 'https://github.com/syafaatsaat/etch-a-sketch',
    liveUrl: 'https://syafaatsaat.github.io/etch-a-sketch/',
    preview: '/projects/etch-a-sketch.webp',
    category: 'Web · DOM',
    description: 'A browser sketchpad that paints random colours as you hover, on a grid you can resize.',
    motif: 'lines',
    featured: false,
  },
  {
    id: 'weather-app',
    name: 'Weather App',
    sourceUrl: 'https://github.com/syafaatsaat/weather-app',
    liveUrl: 'https://syafaatsaat.github.io/weather-app/',
    preview: '/projects/weather-app.webp',
    category: 'Web · API',
    description: 'Look up the current weather anywhere, with data from the Visual Crossing API.',
    motif: 'lines',
    featured: false,
  },
  {
    id: 'what-to-do',
    name: 'what-to-do',
    sourceUrl: 'https://github.com/syafaatsaat/what-to-do',
    liveUrl: 'https://syafaatsaat.github.io/what-to-do/',
    preview: '/projects/what-to-do.webp',
    category: 'Web · Productivity',
    description: 'A to-do app that groups tasks into projects, each with a due date and priority.',
    motif: 'lines',
    featured: false,
  },
  {
    id: 'library-app',
    name: 'Library App',
    sourceUrl: 'https://github.com/syafaatsaat/library-app',
    liveUrl: 'https://syafaatsaat.github.io/library-app/',
    preview: '/projects/library-app.webp',
    category: 'Web · JavaScript',
    description: 'Keep track of your books, their page counts and whether you have read them yet.',
    motif: 'lines',
    featured: false,
  },
  {
    id: 'tic-tac-toe',
    name: 'tic-tac-toe',
    sourceUrl: 'https://github.com/syafaatsaat/tic-tac-toe',
    liveUrl: 'https://syafaatsaat.github.io/tic-tac-toe/',
    preview: '/projects/tic-tac-toe.webp',
    category: 'Web · Game',
    description: 'Tic Tac Toe with a retro CRT look, against a friend or a bot with three difficulty levels.',
    motif: 'lines',
    featured: false,
  },
  {
    id: 'calculator',
    name: 'Calculator',
    sourceUrl: 'https://github.com/syafaatsaat/calculator',
    liveUrl: 'https://syafaatsaat.github.io/calculator/',
    preview: '/projects/calculator.webp',
    category: 'Web · JavaScript',
    description: 'An on-screen calculator for everyday arithmetic, with keyboard support.',
    motif: 'lines',
    featured: false,
  },
  {
    id: 'rock-paper-scissors',
    name: 'Rock Paper Scissors',
    sourceUrl: 'https://github.com/syafaatsaat/rock-paper-scissors',
    liveUrl: 'https://syafaatsaat.github.io/rock-paper-scissors/',
    preview: '/projects/rock-paper-scissors.webp',
    category: 'Web · Game',
    description: 'The classic hand game, played against the computer.',
    motif: 'lines',
    featured: false,
  },
]

export const projectsNote = 'Linework, Holo Vault and Memory Legends built end to end with Claude Code.'

/** Earlier versions of this portfolio, oldest first; v3 is this site. Shown by each theme's easter egg. */
export const pastEditions = [
  { id: 'v1', year: 2024, stack: 'HTML · CSS · JavaScript', url: 'https://syafaatsaat.github.io/portfolio/' },
  { id: 'v2', year: 2026, stack: 'HTML · CSS · JavaScript', url: 'https://syafaatsaat.github.io/odin-portfolio/' },
]

export const links = {
  email: 'syafaatsaat@gmail.com',
  linkedin: {
    url: 'https://linkedin.com/in/muhd-nur-syafaat-bin-mohd-saat',
    label: 'in/muhd-nur-syafaat-bin-mohd-saat',
  },
  github: {
    url: 'https://github.com/syafaatsaat',
    label: '@syafaatsaat',
  },
  cv: '/resume/Muhammad_Nur_Syafaat_CV_Junior_AI_Developer.pdf',
}

export const profile = { person, education, experience, skills, projects, projectsNote, pastEditions, links }
