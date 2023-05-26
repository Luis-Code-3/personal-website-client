import styles from "./footer.module.css"
import { FaGithubSquare, FaLinkedin, FaTwitter, FaInstagram, FaYoutube, FaTiktok } from "react-icons/fa"

const Footer = () => {
  return (
    <div className={styles.footerContainer}>
        <div className={styles.linkContainer}>
            <p>Design & Build <span className={styles.purpText}>-</span> Luis Cordova</p>
            {/* <Link  href={"/"} className={styles.navLinks}>About</Link>
            <Link href={"/"} className={styles.navLinks}>Projects</Link>
            <Link href={"/"} className={styles.navLinks}>Contact</Link> */}
        </div>

        <div className={styles.iconContainer}>
            <a href="https://github.com/Luis-Code-3/"><FaGithubSquare className={styles.svg}/></a>
            <a href="https://www.linkedin.com/in/luis-angel-cordova/"><FaLinkedin className={styles.svg}/></a>
            <a href="https://www.instagram.com/nft.verse/"><FaInstagram className={styles.svg}/></a>
            <a href="https://twitter.com/NFTverse_"><FaTwitter className={styles.svg}/></a>
            <a href="https://www.youtube.com/@NFTVerse"><FaYoutube className={styles.svg}/></a>
            <a href="https://www.tiktok.com/@nft.verse"><FaTiktok className={styles.svg}/></a>
        </div>

    </div>
  )
}

export default Footer