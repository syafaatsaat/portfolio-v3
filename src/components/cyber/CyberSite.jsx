import '../../styles/cyber/index.css'
import { useExitAnimation } from '../../states/hooks/useExitAnimation.js'
import CrtOverlay from './primitives/CrtOverlay.jsx'
import About from './sections/About.jsx'
import Contact from './sections/Contact.jsx'
import Desktop from './sections/Desktop.jsx'
import Experience from './sections/Experience.jsx'
import Footer from './sections/Footer.jsx'
import Projects from './sections/Projects.jsx'
import Skills from './sections/Skills.jsx'
import Taskbar from './sections/Taskbar.jsx'

/** Easter-egg theme: SYAF_OS (Cybercore × Y2K). Implements the shared Site contract ({ profile, onToggleTheme }). */
export default function CyberSite({ profile, onToggleTheme }) {
  const { person, education, experience, skills, projects, projectsNote, links } = profile
  const fullName = `${person.firstName} ${person.middleName} ${person.lastName}`
  // Exit powers the screen off first; the theme switches once the animation ends
  const powerOff = useExitAnimation(onToggleTheme)

  return (
    <div className="cyber">
      <Taskbar timeZone={person.timeZone} timeZoneLabel={person.timeZoneLabel} onExit={powerOff.start} />
      <main id="top">
        <Desktop person={person} cvUrl={links.cv} projectCount={projects.length} />
        <About person={person} education={education} />
        <Experience items={experience} />
        <Skills groups={skills} />
        <Projects items={projects} note={projectsNote} />
        <Contact links={links} availability={person.availability} name={person.shortName} />
      </main>
      <Footer name={fullName} />
      <CrtOverlay mode={powerOff.isLeaving ? 'off' : 'on'} onAnimationEnd={powerOff.handleAnimationEnd} />
    </div>
  )
}
