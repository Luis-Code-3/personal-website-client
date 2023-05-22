"use client"
import styles from "./hobbies.module.css"
import { motion } from "framer-motion";

const Hobbies = () => {
    const hobbyList = ["Piano","Gym", "Reading", "Meditation", "Learning", "Designing"];
    const other = ["Basketball", "Classic Cars", "Creating Videos", "Fishing", "Spending Time with Family"]

  return (
    <div className={styles.expContainer}>
        <div className={styles.jobInfoContainer}>
            <motion.div initial= {{opacity: 0, y: 10}} animate= {{opacity: 1, y: 0}} transition={{duration: .5}} className={styles.columnContainer}>
                { hobbyList.map((lan, index) => {
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

export default Hobbies