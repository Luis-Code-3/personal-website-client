'use client'


import styles from "./navbar.module.css"
import Link from "next/link"
import { FaGithubSquare, FaLinkedin } from "react-icons/fa"
import { useState, useEffect } from "react"

const Navbar = () => {
    const [colorNav, setColorNav] = useState(false);
    

    const changeBackground = () => {
        if(window.scrollY >= 30) {
            setColorNav(true)
        } else {
            setColorNav(false)
        }
    }

    const scrollView = (id:string, offset:number) => {
        const section = document.getElementById(id);
        if (section) {
            const scrollPosition = section.getBoundingClientRect().top + window.pageYOffset - offset;
            window.scrollTo({ top: scrollPosition, behavior: 'smooth' });
        }
    }

    useEffect(() => {
        window.addEventListener('scroll', changeBackground)
        window.history.scrollRestoration = 'manual' // start from the top, not where you left off before manual refresh

        return () => {
            window.removeEventListener('scroll', changeBackground)
        }
    }, [])

  return (
    <nav className={`${styles.navContainer} ${colorNav && styles.linkActive}`}>
        <p>.Luis-Cordova<span className={styles.purpText}>()</span></p>
        <div className={styles.linkContainer}>
            <div onClick={() => scrollView('about', 100)} className={styles.navLinks}>.about<span className={styles.purpText}>()</span></div>
            <div onClick={() => scrollView('projects', 100)} className={styles.navLinks}>.projects<span className={styles.purpText}>()</span></div>
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