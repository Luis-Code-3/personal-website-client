import styles from "./page.module.css"

const NotFound = () => {
  return (
    <div className={styles.notContainer}>
        <h1>404</h1>
        <p>Project you were searching for was not found.</p>
    </div>
  )
}

export default NotFound