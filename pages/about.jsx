import styles from '../styles/About.module.css'
import { motion } from 'framer-motion'
import LinkSocialMedia from '../components/LinkSocialMedia'
import {linksocialmedia} from '../constant/SocialMedia'
import BackArrow from '../components/ui/BackArrow'

export default function about(){

    return(
        <div className={styles.wrapper}>
            <div className={styles.container}>
                <div className={styles.sectionRight}>
                    <BackArrow/>
                    <span className={styles.title}>About</span>
                </div>
                <div className={styles.sectionLeft}>
                    <p>
                        Hello! My name is <strong>Gifino Thoriq</strong>, I am a student from Asia e University pursuing degree in
                        Information and Communication Technology. I am a detail-oriented, reliable, responsible, and hard-working
                        person who has a keen interest in the UI UX, as well as Front-end development and the way they are implemented
                        in today industry
                    </p>
                    <div className={styles.underline}/>
                    <div className={styles.descriptionBottom}>
                        <div className={styles.socialMedia}>
                            <ul className={styles.socialMediaContent}>
                                {linksocialmedia.map((links) =>
                                    <li key={links.id}>
                                        <LinkSocialMedia
                                            link={links.link}
                                            name={links.name}
                                        />
                                    </li>
                                )}
                            </ul>
                        </div>
                        <div className={styles.wrapperButton}>
                            <motion.button 
                                className={styles.button} 
                                whileHover={{
                                    borderRadius: 0,
                                    backgroundColor: '#F8F9FA',
                                    color:"#343A40",
                                    borderColor:'#343A40',
                                    transition:{
                                        duration: 0.5,
                                        ease:'easeIn'
                                    }
                                }}
                            >
                                <a href="/download/cv.pdf" download="Gifino_Thoriq_CV">Download CV</a>
                            </motion.button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}