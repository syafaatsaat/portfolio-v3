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
    motif: 'lines',
    featured: true,
  },
]

export const projectsNote = 'Linework, Holo Vault and Memory Legends built end to end with Claude Code.'

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

export const profile = { person, education, experience, skills, projects, projectsNote, links }
