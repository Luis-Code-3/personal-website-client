import styles from "./page.module.css"
import projects from "../../../data/projects.json"
import { FaGithubSquare } from "react-icons/fa"
import Link from "next/link"
import ImageSlider from "@/app/components/ImageSlider"
import { notFound } from "next/navigation"
import { Metadata } from "next"

type selectedProjectObj = {
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

type PageProps = {
    params: {id: string};
}

export async function generateStaticParams () {
  return projects.map((project) => {
    return {
      id: project.id.toString()
    }
  })
}

export async function generateMetadata ({params}: PageProps): Promise<Metadata> {

  const selectedProject: selectedProjectObj | undefined = projects.find((project) => {
    return project.id.toString() === params.id;
  });

  if (!selectedProject) {
    return {
      title: "404 Not Found",
      description: "Project was not found"
    }
  }

  return {
    title: selectedProject.name,
    description: `Project selected is ${selectedProject.name}`
  }
}

const page = ({params}: PageProps) => {
  

    const selectedProject: selectedProjectObj[] = projects.filter((project) => {
      return project.id.toString() === params.id;
    })

    if (selectedProject.length === 0) {
      return notFound();
    }

    const nextProjectId = () => {
      // const currentId = params.id;
      if (+params.id === projects.length) {
        const nextId = "1";
        return nextId
      } else {
        return (+params.id + 1).toString()
      }
    }

    return (
      <div className={styles.mainContainer}>
        <div className={styles.scrollTarget}>
          <span className={styles.spanOne}></span>
          <span className={styles.spanTwo}></span>
          <span className={styles.spanThree}></span>
          <span className={styles.spanFour}></span>
        </div>
        <div className= {styles.scrollLight}></div>
        <div className={styles.backBar}></div>
        <div className={styles.contentContainer}>
            <ImageSlider images={selectedProject[0].images}/>
            <div className={styles.infoContainer}>
              <div className={styles.titleBox}>
                <h1>{selectedProject[0].name} <span className={styles.paraSpan}>()</span></h1>
                <div className={styles.titleBar}></div>
              </div>

              <div className={styles.linkContainer}>
                <a className={styles.liveLink} href={selectedProject[0].liveApp}>Visit App</a>
                <a className={styles.iconContainer} href={selectedProject[0].github}><FaGithubSquare className={styles.svg}/></a>
                {selectedProject[0].techStack.map((tech:string, index) => {
                  return <span key={index}>{tech}</span>
                })}
              </div>
              <div className={styles.containerDescription}>
                {selectedProject[0].bigDescription.split('\n').map((paragraph, index) => {
                  return <p key={index} className={styles.bigDescription}>{paragraph}</p>
                })}
              </div>
              <Link className={styles.nextLink} href={`/projects/${nextProjectId()}`}>Next Project...</Link>
            </div>
        </div>
      </div>
    )
  }
  
  export default page