"use client"
import styles from "./softSkills.module.css"
import { motion } from "framer-motion";

const SoftSkills = () => {
    const languages = ["Emotional Intelligence","Listening", "Critical Thinking", "Communication", "Adaptability"];
    const other = ["Creative", "Empathetic", "Fast Learner"]

  return (
    <div className={styles.expContainer}>
        <div className={styles.jobInfoContainer}>
            <motion.div initial= {{opacity: 0, y: 10}} animate= {{opacity: 1, y: 0}} transition={{duration: .5}} className={styles.columnContainer}>
                { languages.map((lan, index) => {
                    return (
                    <div key={index} className={styles.textContainer}>
                        <div className={styles.bulletPoint}></div>
                        <p>{lan}</p>
                    </div>
                    )
                })}
            </motion.div>

            <motion.div initial= {{opacity: 0, y: 10}} animate= {{opacity: 1, y: 0}} transition={{duration: .5, delay: .1}} className={styles.columnContainer}>
                { other.map((lan, index) => {
                    return (
                    <div key={index} className={styles.textContainer}>
                        <div className={styles.bulletPoint}></div>
                        <p>{lan}</p>
                    </div>
                    )
                })}
            </motion.div>
        </div>
    </div>
  )
}

export default SoftSkills