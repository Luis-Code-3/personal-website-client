import styles from "./footer.module.css"
import Link from "next/link"
import { FaGithubSquare, FaLinkedin, FaTwitter, FaInstagram, FaYoutube, FaTiktok } from "react-icons/fa"

const Footer = () => {
  return (
    <div className={styles.footerContainer}>
        <div className={styles.linkContainer}>
            <p>2023, Luis Cordova, LLC</p>
            <Link  href={"/"} className={styles.navLinks}>About</Link>
            <Link href={"/"} className={styles.navLinks}>Projects</Link>
            <Link href={"/"} className={styles.navLinks}>Contact</Link>
        </div>

        <div className={styles.iconContainer}>
            <a href="https://github.com/Luis-Code-3/"><FaGithubSquare className={styles.svg}/></a>
            <a href="https://github.com/Luis-Code-3/"><FaLinkedin className={styles.svg}/></a>
            <a href="https://github.com/Luis-Code-3/"><FaInstagram className={styles.svg}/></a>
            <a href="https://github.com/Luis-Code-3/"><FaTwitter className={styles.svg}/></a>
            <a href="https://github.com/Luis-Code-3/"><FaYoutube className={styles.svg}/></a>
            <a href="https://github.com/Luis-Code-3/"><FaTiktok className={styles.svg}/></a>
        </div>

    </div>
  )
}

export default Footer