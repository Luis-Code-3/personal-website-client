import styles from './page.module.css'
import Link from 'next/link'
import About from './components/About'
import InfoSection from './components/InfoSection'

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
      </div>
    </main>
  )
}
