import styles from './page.module.css'
import Link from 'next/link'

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
        <h1>Hello</h1>
        <Link href={'/projects'}>Projects</Link>
      </div>
    </main>
  )
}
