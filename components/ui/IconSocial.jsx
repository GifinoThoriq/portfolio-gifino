import { useState } from 'react'
import { motion, useAnimation } from 'framer-motion';
import styles from './IconSocial.module.css';
import Image from 'next/image';

export default function IconSocial({image}){

    const logoHover = useAnimation()

    const logoHoverAnimate = {
        rest:{
            rotate: 0,
            borderRadius: "10%",
            transition: {
                duration: 0.5,
                ease: "easeOut",
            }
        },
        hover:{
            rotate: 180,
            borderRadius: "50%",
            transition: {
                duration: 0.5,
                ease: "easeIn",
            }
        }

    }

    return(
        <div className={styles.container}>
            <motion.div 
                className={styles.iconWrapper}
                animate={logoHover}
            >
            </motion.div>
            <motion.div
                onHoverStart={() => 
                    logoHover.start(logoHoverAnimate.hover)                                   
                }
                onHoverEnd={() => 
                    logoHover.start(logoHoverAnimate.rest)
                }
            >
                <Image
                    className={styles.iconSocial}
                    src={image}
                    width={20}
                    height={20}
                />
            </motion.div>
        </div>
    )
}