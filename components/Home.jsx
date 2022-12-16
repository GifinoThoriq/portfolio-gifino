import styles from '../styles/Home.module.css'
import Link from 'next/link';
import { motion, useAnimation } from 'framer-motion'
import { useEffect, useState } from 'react';
import Image from 'next/image';
import useWindowDimensions from '../helper/useWindowsDimensions'
import NavBurger from './ui/NavBurger';
import { useRouter } from 'next/router';

export default function Home(){

    const { width } = useWindowDimensions()

    const router = useRouter()

    const list = ["About", "Projects", "Experiences"]

    function indexChangeHandler(i){
        router.push(`/${list[i].toLowerCase()}`)
    }

    const [aboutAnimation, setAboutAnimation] = useState()
    const [projectAnimation, setProjectAnimation] = useState()
    const [experienceAnimation, setExperienceAnimation] = useState()

    const hoverNav = {
        fontWeight: 600
    }

    const hoverTransition = {
        damping: 10
    }

    const animation = useAnimation()

    useEffect(()=>{
        animation.start({
            x: 72,
            y: 30,
            transition: {
                bounce: 0
            }
        })
    },[])

    useEffect(()=>{
        if(aboutAnimation == true){
            animation.start({
                x: 50,
                y: 12,
            });
        }

        if(aboutAnimation == false) {
            animation.start({
                x: 72,
                y: 30,
                transition: {
                    bounce: 0
                }
            });
        }

    },[aboutAnimation])

    useEffect(()=>{
        if(projectAnimation == true){
            animation.start({
                x: 50,
                y: 40,
            });
        }

        if(projectAnimation == false){
            animation.start({
                x: 72,
                y: 30,
                transition: {
                    bounce: 0
                }
            });
        }

    },[projectAnimation])

    useEffect(()=>{
        if(experienceAnimation == true){
            animation.start({
                x: 100,
                y: 12,
            });
        }

        if(experienceAnimation == false){
            animation.start({
                x: 72,
                y: 30,
                transition: {
                    bounce: 0
                }
            });
        }


    },[experienceAnimation])

    return(
        <div className={styles.home}>
            {
                width <= 768 
                &&
                <NavBurger
                    onIndexChange={indexChangeHandler}
                    list = {list}
                />
            }
            <div className={styles.content}>
                <div className={styles.sectionTop}>
                    <span>Hello!</span>
                </div>
                <div className={styles.sectionMiddle}>
                    {
                        width > 768 
                        &&
                        <div className={styles.navLeft}>
                            <motion.div 
                                className={styles.listContainer} 
                                onHoverStart={()=>setAboutAnimation(true)}
                                onHoverEnd={()=>setAboutAnimation(false)}
                            >
                                <span whileHover={hoverNav}>
                                    <Link href="/about">
                                        <motion.a
                                            whileHover={hoverNav}
                                            transition={hoverTransition}
                                        >
                                            01 About
                                        </motion.a>
                                    </Link>
                                </span>
                            </motion.div>
                            <motion.div 
                                className={styles.listContainer}
                                onHoverStart={()=>setProjectAnimation(true)}
                                onHoverEnd={()=>setProjectAnimation(false)}
                            >
                                <span>
                                    <Link href="/projects">
                                        <motion.a 
                                            whileHover={hoverNav}
                                            transition={hoverTransition}
                                        >
                                            03 Projects
                                        </motion.a>
                                    </Link>
                                </span>
                            </motion.div>
                        </div>
                    }

                    <div className={styles.pictureContainer}>
                        <div className={styles.square}></div>
                        <motion.div
                            animate={animation} 
                            className={styles.square}>
                            <Image
                                src={'/profile.png'}
                                layout="fill"
                                objectFit='contain'
                            />
                        </motion.div>
                    </div>
                    {
                        width > 768
                        &&
                        <div className={styles.navRight}>
                            <motion.div 
                                className={styles.listContainer}
                                onHoverStart={()=>setExperienceAnimation(true)}
                                onHoverEnd={()=>setExperienceAnimation(false)}
                            >
                                <span whileHover={hoverNav}>
                                    <Link href="/experiences">
                                        <motion.a
                                            whileHover={hoverNav}
                                            transition={hoverTransition}
                                        >
                                            02 Experience
                                        </motion.a>
                                    </Link>
                                </span>
                        </motion.div>
                        </div>
                    }
                    
                </div>
                <div className={styles.sectionBottom}>
                    <span>I'm Gifino Thoriq</span>
                </div>
            </div>
        </div>
    )
}