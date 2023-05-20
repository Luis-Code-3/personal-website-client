'use client'


import styles from "./navbar.module.css"
import Link from "next/link"
import { FaGithubSquare, FaLinkedin } from "react-icons/fa"
import { useState, useEffect } from "react"

const Navbar = () => {
    const [colorNav, setColorNav] = useState(false);
    //console.log("render");
    

    const changeBackground = () => {
        if(window.scrollY >= 30) {
            setColorNav(true)
        } else {
            setColorNav(false)
        }
    }

    useEffect(() => {
        window.addEventListener('scroll', changeBackground)

        return () => {
            window.removeEventListener('scroll', changeBackground)
        }
    }, [])

  return (
    <nav className={`${styles.navContainer} ${colorNav && styles.linkActive}`}>
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