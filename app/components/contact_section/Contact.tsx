"use client"
import styles from "./contact.module.css"
import { motion } from "framer-motion"

const Contact = () => {
  return (
    <div className={styles.contactContainer}>
        <motion.div initial={{opacity: 0, y: 20}} whileInView={{opacity: 1, y: 0}} viewport={{once: true}} transition={{duration: 1}} className={styles.titleBox}>
            <div className={styles.contactBar}></div>
            <h1 id="contact">.contact<span className={styles.paraSpan}>()</span></h1>
            <div className={styles.contactBar}></div>
        </motion.div>
        <motion.p initial={{opacity: 0, y: 20}} whileInView={{opacity: 1, y: 0}} viewport={{once: true}} transition={{duration: 1}} className={styles.description}>If you want to reach out, my inbox is always open for inquiries and questions. I'll try my best to get back to you as quickly as possible!</motion.p>
        <div className={styles.linkBox}>
            <motion.a initial={{opacity: 0, y: 10}} whileInView={{opacity: 1, y: 0}} viewport={{once: true}} transition={{duration: 1, delay: .1}} href="mailto:luiscodebiz@gmail.com">Send Email</motion.a>
            <motion.a initial={{opacity: 0, y: 10}} whileInView={{opacity: 1, y: 0}} viewport={{once: true}} transition={{duration: 1, delay: .15}} href="https://www.linkedin.com/in/luis-angel-cordova/">LinkedIn</motion.a>
            <motion.a initial={{opacity: 0, y: 10}} whileInView={{opacity: 1, y: 0}} viewport={{once: true}} transition={{duration: 1, delay: .2}} href="https://discord.gg/ZAg5yD5S">Discord</motion.a>
        </div>
    </div>
  )
}

export default Contact