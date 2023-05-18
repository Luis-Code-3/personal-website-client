import styles from './page.module.css'
import Link from 'next/link'

export default function Home() {
  return (
    <main className={styles.main}>
      <h1>Hello</h1>
      <Link href={'/projects'}>Projects</Link>
    </main>
  )
}
