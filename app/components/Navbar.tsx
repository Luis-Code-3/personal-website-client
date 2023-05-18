'use client'


import styles from "./navbar.module.css"
import Link from "next/link"
import { FaGithubSquare, FaLinkedin } from "react-icons/fa"

const Navbar = () => {
  return (
    <nav className={styles.navContainer}>
        <p>.Luis-Cordova<span className={styles.purpText}>()</span></p>
        <div className={styles.linkContainer}>
            <Link  href={"/"} className={styles.navLinks}>.about<span className={styles.purpText}>()</span></Link>
            <Link href={"/"} className={styles.navLinks}>.projects<span className={styles.purpText}>()</span></Link>
            <Link href={"/"} className={styles.navLinks}>.contact<span className={styles.purpText}>()</span></Link>
            <div>
                <a href="https://github.com/Luis-Code-3/"><FaGithubSquare href="" className={styles.svg}/></a>
                <a href="https://www.linkedin.com/in/luis-angel-cordova/"><FaLinkedin className={styles.svg}/></a>
            </div>
        </div>

    </nav>
  )
}

export default Navbar