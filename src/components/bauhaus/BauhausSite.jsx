import '../../styles/bauhaus/index.css'
import About from './sections/About.jsx'
import Contact from './sections/Contact.jsx'
import Experience from './sections/Experience.jsx'
import Footer from './sections/Footer.jsx'
import Hero from './sections/Hero.jsx'
import Nav from './sections/Nav.jsx'
import Projects from './sections/Projects.jsx'
import ProjectsPage from './sections/ProjectsPage.jsx'
import Skills from './sections/Skills.jsx'
import SkillsTicker from './sections/SkillsTicker.jsx'

/** Main theme: Bento × Bauhaus. Implements the shared Site contract ({ profile, page, onToggleTheme }). */
export default function BauhausSite({ profile, page, onToggleTheme }) {
  const { person, education, experience, skills, projects, projectsNote, pastEditions, links } = profile
  const fullName = `${person.firstName} ${person.middleName} ${person.lastName}`
  const currentJob = experience.find((job) => job.period.isCurrent)

  return (
    <div className="bauhaus">
      <Nav brand={person.shortName} />
      {page === 'projects' ? (
        <main id="top">
          <ProjectsPage items={projects} note={projectsNote} />
        </main>
      ) : (
        <main id="top">
          <Hero person={person} cvUrl={links.cv} editions={pastEditions} />
          <SkillsTicker groups={skills} />
          <About person={person} education={education} current={currentJob} />
          <Experience items={experience} />
          <Skills groups={skills} />
          <Projects items={projects.filter((project) => project.featured)} total={projects.length} note={projectsNote} />
          <Contact links={links} availability={person.availability} />
        </main>
      )}
      <Footer name={fullName} onBootEasterEgg={onToggleTheme} />
    </div>
  )
}
