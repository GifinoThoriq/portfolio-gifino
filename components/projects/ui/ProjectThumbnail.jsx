import { motion } from 'framer-motion';
import styles from '../style/ui/ProjectThumbnail.module.css';
import Image from 'next/image';

export default function ProjectThumbnail({src, alt}){
    return(
        <motion.div 
        className={styles.projectThumbnail}
        whileHover={{scale: 1.05}}
        >
            <Image
                src={src}
                layout="fill"
                objectFit='contain'
                priority={true}
                alt={alt}
            />
        </motion.div>
    )
}