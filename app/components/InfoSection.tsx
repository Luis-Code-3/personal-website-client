"use client"

import InfoBlock from "./InfoBlock"
import styles from "./infoSection.module.css"
import { useState, useEffect } from "react"

type NavigationProps = {
    currentTab: string,
    setCurrentTab: React.Dispatch<React.SetStateAction<string>>,
}

const Navigation = ({setCurrentTab, currentTab}: NavigationProps) => {

    const calculateLeftPosition = () => {
        const tabs = ["experience", "education", "technologies", "skills", "hobbies"];
        const tabIndex = tabs.indexOf(currentTab);
        return `${tabIndex * 20}%`;
    }


  return (
    <>
    <div className={styles.navTitles}>
            <span className={`${styles.navName} ${currentTab === "experience" && styles.activeSpan}`} onClick={() => {setCurrentTab('experience')}}>Experience</span>
            <span className={`${styles.navName} ${currentTab === "education" && styles.activeSpan}`} onClick={() => {setCurrentTab('education')}}>Education</span>
            <span className={`${styles.navName} ${currentTab === "technologies" && styles.activeSpan}`} onClick={() => {setCurrentTab('technologies')}}>Technologies</span>
            <span className={`${styles.navName} ${currentTab === "skills" && styles.activeSpan}`} onClick={() => {setCurrentTab('skills')}}>Soft-Skills</span>
            <span className={`${styles.navName} ${currentTab === "hobbies" && styles.activeSpan}`} onClick={() => {setCurrentTab('hobbies')}}>Hobbies</span>
    </div>
    <div className={styles.bottomDiv}>
        <div className={styles.bottomSelect} style={{left: calculateLeftPosition()}}></div>
        <div className={styles.bottomBackbar}></div>
    </div>
    </>
  )
}

const InfoSection = () => {

    const [currentTab, setCurrentTab] = useState('experience')
    const [initialLoad, setInitialLoad] = useState(true);
  
    useEffect(() => {
      if (initialLoad) {
        setInitialLoad(false);
      }
      
    }, []);

  return (
    <div className={styles.infoContainer}>
        <Navigation currentTab = {currentTab} setCurrentTab = {setCurrentTab}/>
        <InfoBlock initialLoad={initialLoad} currentTab = {currentTab}/>
    </div>
  )
}

export default InfoSection