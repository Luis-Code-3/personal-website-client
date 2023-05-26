
import styles from "./about.module.css"
import Image from "next/image"

const About = () => {
  return (
    <div className={styles.sectionContainer}>
        <div className={styles.leftBox}>
            <div className={styles.imageBox}>
                <Image
                className={styles.profPicture}
                src="/7F34391E-11E6-4E42-BF33-5D47B1AAA613.JPG"
                width={400}
                height={500}
                alt="Profile Picture"
                />
            </div>
            <div className={styles.borderBox}></div>
        </div>
        <div className={styles.rightBox}>
            <div className={styles.rightTop}>
                <h1 id="about">.about<span className={styles.paraSpan}>()</span></h1>
                <div></div>
            </div>
            <p>Hello! I'm <span className={styles.highlight}>Luis Cordova</span>, a software engineer specializing in building interactive web applications. With a five year background in graphic design and content creation, I bring a unique blend of creativity to my work. Some of the technologies I'm currently working with are <span className={styles.highlight}>JavaScript</span>, <span className={styles.highlight}>React</span>, <span className={styles.highlight}>Next.js</span>, <span className={styles.highlight}>TypeScript</span>, <span className={styles.highlight}>Node.js</span>, <span className={styles.highlight}>MongoDB</span>, & <span className={styles.highlight}>Express</span>, and I leverage my design skills using tools like <span className={styles.highlight}>Photoshop</span> & <span className={styles.highlight}>Illustrator</span>. I'm actively seeking new opportunities and would love to connect with you. Let's discuss how I can contribute to your project or organization!</p>

        </div>
    </div>
  )
}

export default About