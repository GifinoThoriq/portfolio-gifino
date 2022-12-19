import { useState } from 'react'

import styles from '../styles/Project.module.css'
import IoTProject from '../components/projects/IoTProject'
import UiProject from '../components/projects/UiProject'
import WebProject from '../components/projects/WebProject'
import UseWindowDimensions from '../helper/useWindowsDimensions'
import NavProject from '../components/projects/navigation/NavProject'
import BackArrow from '../components/ui/BackArrow'

import { AnimatePresence } from 'framer-motion'

export default function Project(){

    const { width } = UseWindowDimensions()

    const [navIndex, setNavIndex] = useState(1)

    function navIndexHandler(i){
        setNavIndex(i)
    }

    return(
        <div className={styles.wrapper}>
            <div className={styles.container}>
                { width !== undefined &&
                    <NavProject 
                        width={width}
                        onNavIndex={navIndexHandler}
                    />
                }
                <div className={styles.titleSection}>
                    <BackArrow/>
                    <span>Projects</span>
                </div>
                <div className={styles.projectWrapper}>
                    <AnimatePresence
                        mode='wait'
                    >
                        {navIndex === 1 && <UiProject key={"ui"}/>}
                        {navIndex === 2 && <WebProject key={"web"}/>}
                        {navIndex === 3 && <IoTProject key={"iot"}/>}
                    </AnimatePresence>
                </div>
            </div>
        </div>
    )
}