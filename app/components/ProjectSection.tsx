"use client"

import ProjectCard from "./ProjectCard"
import styles from "./projectSection.module.css"
import { useState } from "react"
import { motion } from "framer-motion"

type Project = {
    id: number;
    name: string;
    smallDescription: string;
    bigDescription: string;
    techStack: string[];
    thumbnailImage: string;
    images: string[];
    github: string;
    liveApp: string;
}

type ProjectSectionProps = {
    projects: Project[]
}

const ProjectSection = ({projects}: ProjectSectionProps) => {

    const [projectsList, setProjectsList] = useState(projects.slice(0,3));
    const [showButton, setShowButton] = useState(true);
    const [loadCount, setLoadCount] = useState(1);

    const loadMore = () => {
        const currentAmount = projectsList.length;
        setProjectsList(projects.slice(0,currentAmount + 3))
        if (currentAmount + 3 >= projects.length) {
            setShowButton(false);
        }
        setLoadCount((prev) => prev + 1);
    }


  return (
    <>
    <motion.div initial={{opacity: 0, y: 20}} whileInView={{opacity: 1, y: 0}} viewport={{once: true}} transition={{duration: 1}} className={styles.projectTitleContainer}>
            <h1 id="projects">.projects<span className={styles.paraSpan}>()</span></h1>
            <div className={styles.projectBar}></div>
    </motion.div>
    <div className={styles.projectsContainer}>
        {projectsList.map((project, index) => {
            const staggerIndex = index - ((loadCount - 1) * 3);
            return (
                <ProjectCard key={index} index= {staggerIndex} thumbnail = {project.thumbnailImage} name={project.name} description= {project.smallDescription} techStack={project.techStack} id={project.id}/>
            )
        })}
    </div>
    {showButton && <motion.div initial={{opacity: 0}} whileInView={{opacity: 1}} viewport={{once: true}} transition={{duration: 1}} onClick={loadMore} className={styles.loadMore}>Load More...</motion.div>}
    </>
  )
}

export default ProjectSection