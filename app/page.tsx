import styles from './page.module.css'
import About from './components/About'
import InfoSection from './components/InfoSection'
import ProjectSection from './components/ProjectSection'
import projects from "../data/projects.json"
import Contact from './components/Contact'

export default function Home() {

  return (
    <main className={styles.main}>
      <div className={styles.scrollTarget}>
        <span className={styles.spanOne}></span>
        <span className={styles.spanTwo}></span>
        <span className={styles.spanThree}></span>
        <span className={styles.spanFour}></span>
      </div>
      <div className= {styles.scrollLight}></div>
      <div className={styles.backBar}></div>
      <div className={styles.contentContainer}>
          <About/>
          <InfoSection/>
          <ProjectSection projects={projects}/>
          <Contact/>
      </div>
    </main>
  )
}
