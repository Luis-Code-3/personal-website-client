"use client"
import styles from "./technologies.module.css"
import { motion } from "framer-motion";

const Technologies = () => {
    const languages = ["JavaScript","TypeScript", "NodeJS", "HTML", "CSS"];
    const frameworks = ["React.js","Express.js", "Next.js", "Sass", "Bootstrap", "Handlebars", "Vite"];
    const databases = ["MongoDB", "Git", "GitHub"]
    const libraries = ["Framer Motion", "Chart.js", "React-Transition-Group", "Mongoose", "Bcrypt.js", "JSON Web Tokens", "Axios" ]
    const tools = ["Adobe Photoshop", "Adobe Premiere Pro", "Adobe Illustrator", "Visual Studio Code", "Milanote"]

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

            <motion.div initial= {{opacity: 0, y: 10}} animate= {{opacity: 1, y: 0}} transition={{duration: .5, delay: .1}}  className={styles.columnContainer}>
                { frameworks.map((item, index) => {
                    return (
                    <div key={index} className={styles.textContainer}>
                        <div className={styles.bulletPoint}></div>
                        <p>{item}</p>
                    </div>
                    )
                })}
            </motion.div>

            <motion.div initial= {{opacity: 0, y: 10}} animate= {{opacity: 1, y: 0}} transition={{duration: .5, delay: .15}}  className={styles.columnContainer}>
                { libraries.map((item, index) => {
                    return (
                    <div key={index} className={styles.textContainer}>
                        <div className={styles.bulletPoint}></div>
                        <p>{item}</p>
                    </div>
                    )
                })}
            </motion.div>

            <motion.div initial= {{opacity: 0, y: 10}} animate= {{opacity: 1, y: 0}} transition={{duration: .5, delay: .2}} className={styles.columnContainer}>
                { tools.map((item, index) => {
                    return (
                    <div key={index} className={styles.textContainer}>
                        <div className={styles.bulletPoint}></div>
                        <p>{item}</p>
                    </div>
                    )
                })}
            </motion.div>

            <motion.div initial= {{opacity: 0, y: 10}} animate= {{opacity: 1, y: 0}} transition={{duration: .5, delay: .25}}  className={styles.columnContainer}>
                { databases.map((item, index) => {
                    return (
                    <div key={index} className={styles.textContainer}>
                        <div className={styles.bulletPoint}></div>
                        <p>{item}</p>
                    </div>
                    )
                })}
            </motion.div>

            
        </div>
    </div>
  )
}

export default Technologies