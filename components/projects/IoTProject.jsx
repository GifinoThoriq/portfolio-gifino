import { useState } from 'react'
import styles from './style/Project.module.css'
import DescProject from './ui/DescProject';
import ProjectSlide from './ui/ProjectSlide';
import { motion, AnimatePresence } from 'framer-motion'

export default function UiProject(){

    const [cardDescShown, isCardDescShown] = useState(false)
    const [descContent, setDescContent] = useState({
        title : '',
        description: '',
        socialmedia: ''
    })

    
    function thumbnailClickHandler(title, description, socialmedia){
        setDescContent({
            title,
            description,
            socialmedia
        })
        isCardDescShown(true)
    }
    
    function closeCardHandler(){
        isCardDescShown(false)
    }

    const variants = {
        out: {
            opacity: 0,
            y: 100,
            transition:{
                duration: 0.5
            }
        },
        in: {
            opacity: 1,
            y: 0,
            transition:{
                duration: 0.8,
            }
        }
    };

    return(
        <motion.div 
            className={styles.container}
            variants={variants}
            initial="out"
            animate="in"
            exit="out"
        >
            <div className={styles.projectContainer}>
                <AnimatePresence>
                    {cardDescShown === true 
                        ? <DescProject
                            key={descContent.title}
                            statusOpen={cardDescShown}
                            onCloseCardDescProject={closeCardHandler}
                            title={descContent.title} 
                            description={descContent.description}
                            uisocialmedia={descContent.socialmedia}
                            /> 
                        : ''
                    }
                </AnimatePresence>
                <ProjectSlide
                    onthumbnailClick={thumbnailClickHandler}
                    project={"iot"}
                />
            </div>
        </motion.div>
    )
}