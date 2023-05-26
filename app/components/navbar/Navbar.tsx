'use client'


import styles from "./navbar.module.css"
import { FaGithubSquare, FaLinkedin } from "react-icons/fa"
import { useState, useEffect } from "react"
import {useRouter, usePathname, useSearchParams} from "next/navigation"

const Navbar = () => {
    const [colorNav, setColorNav] = useState(false);

    const router = useRouter();
    const pathname = usePathname();
    const searchParams = useSearchParams();
    const search = searchParams.get('a')
    
    
    

    const changeBackground = () => {
        if(window.scrollY >= 30) {
            setColorNav(true)
        } else {
            setColorNav(false)
        }
    }

    const scrollView = async (id:string, offset:number) => {
        if (pathname !== "/") {
            router.push(`/?a=${id}`)
        } else {
            const section = document.getElementById(id);
            if (section) {
                const scrollPosition = section.getBoundingClientRect().top + window.pageYOffset - offset;
                window.scrollTo({ top: scrollPosition, behavior: 'smooth' });
            }
        }
    }

    useEffect(() => {
        window.addEventListener('scroll', changeBackground)
        window.history.scrollRestoration = 'manual' // start from the top, not where you left off before manual refresh

        return () => {
            window.removeEventListener('scroll', changeBackground)
        }
    }, [])

    useEffect(() => {
        if(search) {
            const section = document.getElementById(search);
            if (section) {
                const scrollPosition = section.getBoundingClientRect().top + window.pageYOffset - 100;
                window.scrollTo({ top: scrollPosition, behavior: 'smooth' });
            }
        }
    }, [search])

  return (
    <nav className={`${styles.navContainer} ${colorNav && styles.linkActive}`}>
        <p>.Luis-Cordova<span className={styles.purpText}>()</span></p>
        <div className={styles.linkContainer}>
            <div onClick={() => scrollView('about', 100)} className={styles.navLinks}>.about<span className={styles.purpText}>()</span></div>
            <div onClick={() => scrollView('projects', 100)} className={styles.navLinks}>.projects<span className={styles.purpText}>()</span></div>
            <div onClick={() => scrollView('contact', 100)} className={styles.navLinks}>.contact<span className={styles.purpText}>()</span></div>
            <div>
                <a href="https://github.com/Luis-Code-3/"><FaGithubSquare href="" className={styles.svg}/></a>
                <a href="https://www.linkedin.com/in/luis-angel-cordova/"><FaLinkedin className={styles.svg}/></a>
            </div>
        </div>

    </nav>
  )
}

export default Navbar