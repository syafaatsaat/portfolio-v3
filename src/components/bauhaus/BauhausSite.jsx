import '../../styles/bauhaus/index.css'
import About from './sections/About.jsx'
import Contact from './sections/Contact.jsx'
import Experience from './sections/Experience.jsx'
import Footer from './sections/Footer.jsx'
import Hero from './sections/Hero.jsx'
import Nav from './sections/Nav.jsx'
import Projects from './sections/Projects.jsx'
import Skills from './sections/Skills.jsx'

/** Main theme: Bento × Bauhaus. Implements the shared Site contract ({ profile, onToggleTheme }). */
export default function BauhausSite({ profile, onToggleTheme }) {
  const { person, education, experience, skills, projects, projectsNote, links } = profile
  const fullName = `${person.firstName} ${person.middleName} ${person.lastName}`
  const currentJob = experience.find((job) => job.period.isCurrent)

  return (
    <div className="bauhaus">
      <Nav brand={person.shortName} />
      <main id="top">
        <Hero person={person} cvUrl={links.cv} />
        <About person={person} education={education} current={currentJob} />
        <Experience items={experience} />
        <Skills groups={skills} />
        <Projects items={projects} note={projectsNote} />
        <Contact links={links} availability={person.availability} />
      </main>
      <Footer name={fullName} onBootEasterEgg={onToggleTheme} />
    </div>
  )
}
