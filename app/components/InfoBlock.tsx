import styles from "./infoBlock.module.css"
import Experience from "./Experience";
import Education from "./Education";
import Technologies from "./Technologies";
import SoftSkills from "./SoftSkills";
import Hobbies from "./Hobbies";

type InfoBlockProps = {
    currentTab: string,
    initialLoad: boolean,
}

// const Education = () => {
//     return (
//         <div></div>
//     );
// }

// const Technologies = () => {
//     return (
//         <div></div>
//     );
// }

// const Skills = () => {
//     return (
//         <div></div>
//     );
// }

// const SocialMedia = () => {
//     return (
//         <div></div>
//     );
// }

const InfoBlock = ({currentTab, initialLoad}: InfoBlockProps) => {
    
    

    switch (currentTab) {
        case "experience":
            return (
                <Experience initialLoad = {initialLoad}/>
            );
        case "education":
            return (
                <Education initialLoad = {initialLoad}/>
            );
        case "technologies":
            return (
                <Technologies/>
            );
        case "skills":
            return (
                <SoftSkills/>
            );
        case "hobbies":
            return (
                <Hobbies/>
            );
        default:
            return null;
    }

}

export default InfoBlock