"use client"

import styles from "./imageSlide.module.css"
import Image from "next/image"
import { useState } from "react"
import { FaAngleRight, FaAngleLeft} from "react-icons/fa"

type ImageSliderProps = {
    images: string[];
}

const ImageSlider = ({images}: ImageSliderProps) => {

    const [currentPicture, setCurrentPicture] = useState(0);

    const prevPicture = () => {
        if (currentPicture === 0) {
            setCurrentPicture(images.length - 1);
        } else {
            setCurrentPicture((prev) => prev - 1);
        }
    }

    const nextPicture = () => {
        if (currentPicture === images.length - 1) {
            setCurrentPicture(0)
        } else {
            setCurrentPicture((prev) => prev + 1)
        }
    }

    const selectPicture = (index:number) => {
        setCurrentPicture(index)
    }


  return (
    <div className={styles.sliderContainer}>
        {images.map((img, index) => {
            return <Image priority={true} key={index} className={`${styles.picture} ${index === currentPicture ? styles.pictureActive : ''}`} src={img} width={1000} height={500} alt="Picture"/>
        })}
        {/* <Image className={`${styles.picture} ${styles.pictureActive}`} src={images[currentPicture]} width={500} height={250} alt="Picture"/> */}
        <div onClick={prevPicture} className={styles.backButton}><FaAngleLeft className={styles.svg}/></div>
        <div onClick={nextPicture}  className={styles.forwardButton}><FaAngleRight className={styles.svg}/></div>
        <div className={styles.containerDots}></div>
        <div className={styles.containerDotsTwo}>
            {images.map((img, index) => {
                    return <div 
                    key={index}
                    onClick={() => selectPicture(index)}
                    className={`${styles.dot} ${index === currentPicture ? styles.activeDot : ''}`}
                    ></div>
                })}
        </div>
    </div>
  )
}

export default ImageSlider