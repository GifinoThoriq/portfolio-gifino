import styles from '../style/ui/DescProject.module.css'
import LinkSocialMedia from '../../LinkSocialMedia'

import { motion } from "framer-motion";

export default function DescProject({
    onCloseCardDescProject, 
    title, 
    description, 
    uisocialmedia,
}){

    function modalContainerHandler(){
        onCloseCardDescProject(false)
    }

    return(
        <motion.div 
            key={title}
            className={styles.modalContainer} 
            onClick={modalContainerHandler}
            initial={{backgroundColor: 'rgba(0,0,0,0)'}}
            animate={{backgroundColor: 'rgba(0,0,0,0.7)'}}
            exit={{
                backgroundColor: 'rgba(0,0,0,0)',
                transition: {
                    duration: 0.6
                }
            }}
        >
            <motion.div
                className={styles.modalInnerContainer}
                initial={{
                    opacity: 0.3,
                    transform:'translate(-50%, -150%)'
                }}
                animate={{
                    opacity: 1,
                    transform:'translate(-50%, -50%)'
                }}
                exit={{
                    transform:'translate(-50%, 50%)',
                    opacity: 0,
                    transition: {
                        duration: 0.3
                    }
                }}
            >
                <div className={styles.modalContent}>
                    <span className={styles.title}>{title}</span>
                    <span className={styles.description}>{description}</span>
                </div>

                <div className={styles.modalFooter}>
                    <span>See it more at</span>
                    <ul>
                        {uisocialmedia.map((links) =>
                            <li key={links.id}>
                                <LinkSocialMedia
                                    link={links.link}
                                    name={links.name}
                                />
                            </li>
                        )}
                    </ul>
                </div>
            </motion.div>
        </motion.div>
    )
}