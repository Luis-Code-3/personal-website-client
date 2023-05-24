import styles from "./page.module.css"
import projects from "../../../data/projects.json"
import { FaGithubSquare } from "react-icons/fa"
import Link from "next/link"
import ImageSlider from "@/app/components/ImageSlider"

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

const page = () => {

    const selectedProject: selectedProjectObj[] = projects.filter((project) => {
      return project.id === 1;
    })
    



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
                {selectedProject[0].techStack.map((tech:string) => {
                  return <span>{tech}</span>
                })}
              </div>

              <p className={styles.bigDescription}>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Magnam sed numquam, reiciendis aliquid sit molestias nesciunt doloribus aspernatur? Velit animi veritatis excepturi laborum, a odit commodi minus rem nulla magnam inventore possimus in suscipit nihil consequuntur? Veritatis incidunt natus quidem provident, voluptatem deleniti quas commodi sit harum perspiciatis ipsam nesciunt modi non doloremque, assumenda voluptas? Impedit quia, aspernatur ipsam velit voluptate sequi deleniti eligendi maiores ad facilis tempore beatae ut.</p>
              <Link className={styles.nextLink} href={`/projects/${2}`}>Next Project...</Link>
            </div>
        </div>
      </div>
    )
  }
  
  export default page