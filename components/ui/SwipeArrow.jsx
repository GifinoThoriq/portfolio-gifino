import { useEffect } from "react"
import Image from "next/image"
import styles from "./SwipeArrow.module.css"
import { motion, useAnimation } from "framer-motion"

export default function MoreArrow(){

    const animation = useAnimation()

    useEffect(()=>{
        animation.start({
            x: [0,10,0],
            transition: {
                duration: 2,
                repeat: Infinity
            }
        })
    },[animation])

    return(
        <div className={styles.wrapper}>
            <motion.div
                initial={false}
                animate={animation}
            >
                <Image
                    src={"/icon/Arrow.svg"}
                    width={48}
                    height={48}
                    className={styles.image}
                />
            </motion.div>       
            <span>Swipe for more!</span>
        </div>
    )
}