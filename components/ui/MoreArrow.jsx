import Image from "next/image"
import styles from "./MoreArrow.module.css"
import { motion } from "framer-motion"

export default function MoreArrow(){
    return(
        <div className={styles.wrapper}>
            <motion.div
                animate={{ y: [10,20,10] }}
                transition={{ ease: "easeIn", duration: 2, repeat: Infinity }}
            >
                <Image
                    src={"/icon/Arrow.svg"}
                    width={48}
                    height={48}
                    className={styles.image}
                />
            </motion.div>       
            <span>Explore more!</span>
        </div>
    )
}