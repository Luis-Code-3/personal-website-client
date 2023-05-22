"use client"

import { useState } from "react";
import { motion } from "framer-motion";
import styles from "./education.module.css"

type NavigationProps = {
    currentTab: string,
    setCurrentTab: React.Dispatch<React.SetStateAction<string>>,
    initialLoad: boolean,
}

type schoolProps = {
    initialLoad: boolean,
}

type EducationProps = {
    initialLoad: boolean,
}

const Navigation = ({currentTab, setCurrentTab, initialLoad}: NavigationProps) => {
    return (
        <motion.div initial={{opacity: 0}} animate={{opacity: 1}} transition={{duration: .5, delay: initialLoad ? .65 : 0}} className={styles.navTitles}>
            <div className={`${styles.titleBlock} ${currentTab === "ironhack" && styles.activeSelect}`} onClick={() => {setCurrentTab('ironhack')}}>
                <h4 className={`${styles.titleHeader} ${currentTab === "ironhack" && styles.activeTitle}`}>{'<'}Coding Bootcamp{' />'}</h4>
                <p>Jan 2023 - Mar 2023</p>
            </div>
            <div className={`${styles.titleBlock} ${currentTab === "degree" && styles.activeSelect}`} onClick={() => {setCurrentTab('degree')}}>
                <h4 className={`${styles.titleHeader} ${currentTab === "degree" && styles.activeTitle}`}>{'<'}Computer Science Bachelor's Degree{' />'}</h4>
                <p>May 2023 - Present</p>
            </div>
         </motion.div>
    );
}

const Ironhack = ({initialLoad}:  schoolProps) => {

    return(
        <motion.div initial={{opacity: 0, y: 10}} animate={{opacity: 1, y: 0}} transition={{duration: .5, delay: initialLoad ? .75 : 0}} className={styles.jobInfoContainer}>
            <div className={styles.textContainer}>
                <div className={styles.bulletPoint}></div>
                <p>Attended Ironhack, a 9-week in-person full stack web development bootcamp. Ironhack is an immersive software development bootcamp with locations all across the globe.</p>
            </div>

            <div className={styles.textContainer}>
                <div className={styles.bulletPoint}></div>
                <p>The tech stack we were intructed to use was MERN (MongoDB, Express, React, and NodeJS). We also used & learned a variety of other technlogies such as Git/GitHub, VSCode, CSS, HTML, Bootstrap, Javascript, Handlebars, and a multide of libraries.</p>
            </div>

            <div className={styles.textContainer}>
                <div className={styles.bulletPoint}></div>
                <p>Received 1st place for the the final project. We were intructed to build a full stack application using MERN that included the use of multiple external APIs and other guidelines to pass. The project can be found below and is called "SnipedIO".</p>
            </div>
        </motion.div>
    )
}

const Degree = ({initialLoad}:  schoolProps) => {
    return (
        <motion.div initial={{opacity: 0, y: 10}} animate={{opacity: 1, y: 0}} transition={{duration: .5, delay: initialLoad ? .75 : 0}} className={styles.jobInfoContainer}>
            <div className={styles.textContainer}>
                <div className={styles.bulletPoint}></div>
                <p>Attending Florida International University (FIU), currently in the process of acquiring a Bachelor's Degree in Computer Science.</p>
            </div>

            <div className={styles.textContainer}>
                <div className={styles.bulletPoint}></div>
                <p>Plan to work full-time, while acquiring my degree part time. I want to get a better understanding of the field</p>
            </div>
        </motion.div>
    )
}


const Education = ({initialLoad}: EducationProps) => {
    const [currentTab, setCurrentTab] = useState('ironhack')

    const chosenEducation = (currentTab: string) => {
        switch (currentTab) {
            case "ironhack":
                return (
                    <Ironhack initialLoad = {initialLoad}/>
                );
            case "degree":
                return (
                    <Degree initialLoad = {initialLoad}/>
                );
            default:
                return null;
        }
    }

    return (
        <div className={styles.expContainer}>
            <Navigation initialLoad = {initialLoad} currentTab = {currentTab} setCurrentTab = {setCurrentTab}/>
            {chosenEducation(currentTab)}
        </div>
    );
}

export default Education