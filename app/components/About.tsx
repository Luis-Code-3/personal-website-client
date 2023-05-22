
import styles from "./about.module.css"
import Image from "next/image"

const About = () => {
  return (
    <div className={styles.sectionContainer}>
        <div className={styles.leftBox}>
            <div className={styles.imageBox}>
                <Image
                className={styles.profPicture}
                src="/Screen Shot 2023-01-27 at 9.24.50 AM.png"
                width={400}
                height={500}
                alt="Profile Picture"
                />
            </div>
            <div className={styles.borderBox}></div>
        </div>
        <div className={styles.rightBox}>
            <div className={styles.rightTop}>
                <h1>.about<span className={styles.paraSpan}>()</span></h1>
                <div></div>
            </div>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla culpa ea quam iure ad. Aut quae qui minima id delectus sit rem tempora autem labore explicabo, repellat placeat, recusandae libero eum quam. Minima eius excepturi, nulla error vero accusamus. Adipisci rerum vel, aliquid voluptates asperiores dolor quaerat veritatis repudiandae sapiente. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Repellendus cum voluptates error, dolorem cupiditate dolor. Animi ipsam dignissimos magni molestias neque alias necessitatibus.</p>

        </div>
    </div>
  )
}

export default About