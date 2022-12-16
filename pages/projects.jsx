import { useState } from 'react'

import styles from '../styles/Project.module.css'
import IoTProject from '../components/projects/IoTProject'
import UiProject from '../components/projects/UiProject'
import WebProject from '../components/projects/WebProject'
import useWindowDimensions from '../helper/useWindowsDimensions'
import NavProject from '../components/projects/navigation/NavProject'

import { AnimatePresence } from 'framer-motion'

export default function project(){

    const { width } = useWindowDimensions()

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