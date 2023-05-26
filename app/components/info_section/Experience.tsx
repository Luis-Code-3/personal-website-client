"use client"

import { useState } from "react";
import { motion } from "framer-motion";
import styles from "./experience.module.css"

type NavigationProps = {
    currentTab: string,
    setCurrentTab: React.Dispatch<React.SetStateAction<string>>,
    initialLoad: boolean,
}

type JobProps = {
    initialLoad: boolean,
}

type ExperienceProps = {
    initialLoad: boolean,
}

const Navigation = ({currentTab, setCurrentTab, initialLoad}: NavigationProps) => {
    return (
        <motion.div initial={{opacity: 0}} animate={{opacity: 1}} transition={{duration: .5, delay: initialLoad ? .65 : 0}} className={styles.navTitles}>
            <div className={`${styles.titleBlock} ${currentTab === "nftverse" && styles.activeSelect}`} onClick={() => {setCurrentTab('nftverse')}}>
                <h4 className={`${styles.titleHeader} ${currentTab === "nftverse" && styles.activeTitle}`}>{'<'}NFT Verse{' />'}</h4>
                <p>Aug 2021 - Present</p>
            </div>
            <div className={`${styles.titleBlock} ${currentTab === "csm" && styles.activeSelect}`} onClick={() => {setCurrentTab('csm')}}>
                <h4 className={`${styles.titleHeader} ${currentTab === "csm" && styles.activeTitle}`}>{'<'}Card Stock Market{' />'}</h4>
                <p>Sep 2020 - Nov 2021</p>
            </div>
            <div className={`${styles.titleBlock} ${currentTab === "aoc" && styles.activeSelect}`} onClick={() => {setCurrentTab('aoc')}}>
                <h4 className={`${styles.titleHeader} ${currentTab === "aoc" && styles.activeTitle}`}>{'<'}Age Of Culture{' />'}</h4>
                <p>Jan 2018 - Jun 2021</p>
            </div>
            <div className={`${styles.titleBlock} ${currentTab === "vector" && styles.activeSelect}`} onClick={() => {setCurrentTab('vector')}}>
                <h4 className={`${styles.titleHeader} ${currentTab === "vector" && styles.activeTitle}`}>{'<'}Vector Marketing{' />'}</h4>
                <p>Aug 2017 - Jan 2018</p>
            </div>
         </motion.div>
    );
}

const Nftverse = ({initialLoad}:  JobProps) => {

    return(
        <motion.div initial={{opacity: 0, y: 10}} animate={{opacity: 1, y: 0}} transition={{duration: .5, delay: initialLoad ? .75 : 0}} className={styles.jobInfoContainer}>
            <div className={styles.textContainer}>
                <div className={styles.bulletPoint}></div>
                <p>YouTube: Over 140,000 subscribers, with over 5.6 million views and 500,000 watch hours. Created educational videos, reviews, interviews, and shorts using Photoshop, Premiere, and Illustrator.</p>
            </div>

            <div className={styles.textContainer}>
                <div className={styles.bulletPoint}></div>
                <p>Instagram: 100,000 followers, with millions of impressions and high engagement. Created graphics using Photoshop and Illustrator, as well as reels (videos) using Premiere. Used platform to promote exclusive content for subscribers.</p>
            </div>

            <div className={styles.textContainer}>
                <div className={styles.bulletPoint}></div>
                <p>Twitter: Over 60,000 followers, with hundreds of thousands of impressions. Used text-based tweets to engage with audience and promote content.</p>
            </div>

            <div className={styles.textContainer}>
                <div className={styles.bulletPoint}></div>
                <p>Discord: Over 10,000 members, with daily communication. Used text-based and graphical posts, as well as videos, to engage with audience and foster community. Conducted live Q&A sessions and other events to promote engagement.</p>
            </div>
        </motion.div>
    )
}

const CardStockMarket = ({initialLoad}:  JobProps) => {
    return (
        <motion.div initial={{opacity: 0, y: 10}} animate={{opacity: 1, y: 0}} transition={{duration: .5, delay: initialLoad ? .75 : 0}} className={styles.jobInfoContainer}>
            <div className={styles.textContainer}>
                <div className={styles.bulletPoint}></div>
                <p>Created and implemented advertising campaigns that generated thousands of sales for partner companies. Developed custom graphics and videos with scripts, and networked with other social media accounts to amplify campaign reach.</p>
            </div>

            <div className={styles.textContainer}>
                <div className={styles.bulletPoint}></div>
                <p>Grew the brand's social media following by over 50,000 in two years, with high engagement per post. Created content for Instagram, Twitter, and YouTube using tools such as Photoshop, Premiere, and Illustrator.</p>
            </div>

            <div className={styles.textContainer}>
                <div className={styles.bulletPoint}></div>
                <p>Hosted in-person card shows in Miami, with up to 500 attendees. Coordinated venue booking, marketing, and vendor relations to ensure a successful event.</p>
            </div>

            <div className={styles.textContainer}>
                <div className={styles.bulletPoint}></div>
                <p>Developed and launched a successful subscription-based service called Card Stock Market, with over 1,000 active monthly paid subscribers. Provided subscribers with exclusive information, leaks, and access to rare collectibles.</p>
            </div>
        </motion.div>
    )
}

const AgeOfCulture = ({initialLoad}:  JobProps) => {
    return (
        <motion.div initial={{opacity: 0, y: 10}} animate={{opacity: 1, y: 0}} transition={{duration: .5, delay: initialLoad ? .75 : 0}} className={styles.jobInfoContainer}>
            <div className={styles.textContainer}>
                <div className={styles.bulletPoint}></div>
                <p>Grew Age Of Culture's Instagram account from 0 followers to over 300,000 followers with high engagement per post (10,000 likes or more).</p>
            </div>

            <div className={styles.textContainer}>
                <div className={styles.bulletPoint}></div>
                <p>Created advertising campaigns that resulted in over 500 active paid subscriptions for AdvantageIO</p>
            </div>

            <div className={styles.textContainer}>
                <div className={styles.bulletPoint}></div>
                <p>Managed the entire social media account for Age Of Culture, a social media brand dedicated to streetwear and sneaker culture.</p>
            </div>

            <div className={styles.textContainer}>
                <div className={styles.bulletPoint}></div>
                <p>Analyzed content trends by identifying current types of content and patterns in the social media niche, and replicated/customized them for success.</p>
            </div>

            <div className={styles.textContainer}>
                <div className={styles.bulletPoint}></div>
                <p>Partnered with multiple companies to run advertisements and created a business called AdvantageIO, which funneled customers through Age of Culture.</p>
            </div>
        </motion.div>
    )
}

const Vector = ({initialLoad}:  JobProps) => {
    return (
        <motion.div initial={{opacity: 0, y: 10}} animate={{opacity: 1, y: 0}} transition={{duration: .5, delay: initialLoad ? .75 : 0}} className={styles.jobInfoContainer}>
            <div className={styles.textContainer}>
                <div className={styles.bulletPoint}></div>
                <p>As assistant manager, I co-managed an entire office sales team, conducted interviews for sales rep positions, and conducted training for sales representatives.</p>
            </div>

            <div className={styles.textContainer}>
                <div className={styles.bulletPoint}></div>
                <p>As a lead sales representative I sold over $32,000 of kitchen cutlery with an average order of $600 w/ a closing ratio of 72% and accumulated a 750 customer referral network.</p>
            </div>
        </motion.div>
    )
}

const Experience = ({initialLoad}: ExperienceProps) => {
    const [currentTab, setCurrentTab] = useState('nftverse')

    const chosenJob = (currentTab: string) => {
        switch (currentTab) {
            case "nftverse":
                return (
                    <Nftverse initialLoad = {initialLoad}/>
                );
            case "csm":
                return (
                    <CardStockMarket initialLoad = {initialLoad}/>
                );
            case "aoc":
                return (
                    <AgeOfCulture initialLoad = {initialLoad}/>
                );
            case "vector":
                return (
                    <Vector initialLoad = {initialLoad}/>
                );
            default:
                return null;
        }
    }

    return (
        <div className={styles.expContainer}>
            <Navigation initialLoad = {initialLoad} currentTab = {currentTab} setCurrentTab = {setCurrentTab}/>
            {chosenJob(currentTab)}
        </div>
    );
}

export default Experience