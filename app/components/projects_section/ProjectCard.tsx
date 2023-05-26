"use client"
import styles from "./projectCard.module.css"
import Image from "next/image"
import Link from "next/link"
import { motion } from "framer-motion"

type ProjectCardProps = {
    id: number;
    name: string;
    description: string;
    techStack: string[];
    thumbnail: string;
    index: number;
}

const ProjectCard = ({thumbnail, name, description, techStack, id, index}: ProjectCardProps) => {
  return (
    <motion.div initial={{opacity:0}} whileInView={{opacity:1}} viewport={{once: true}} transition={{duration: .5, delay: index * 0.2}}>
        <Link href={`/projects/${id}`} className={styles.cardContainer}>
            <div className={styles.imageBox}>
                    <Image
                    className={styles.projectPicture}
                    src={thumbnail}
                    width={400}
                    height={200}
                    alt="Project Picture"
                    />
            </div>
            <div className={styles.infoBox}>
                <div className={styles.titleBox}>
                    <h4>{name}</h4>
                    <div></div>
                </div>
                <p className={styles.description}>{description}</p>
                <div className={styles.techStack}>
                    {techStack.map((tech, index) => {
                        return <span key={index}>{tech}</span>
                    })}
                </div>
            </div>
        </Link>
    </motion.div>
  )
}

export default ProjectCard