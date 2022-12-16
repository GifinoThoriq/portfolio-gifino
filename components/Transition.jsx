import { motion, AnimatePresence } from 'framer-motion'
import { useRouter } from "next/router";


export default function Transition({children}){

    const { asPath } = useRouter();
    const variants = {
        out: {
          opacity: 0,
          y: 40,
          transition: {
            duration: 0.75
          }
        },
        in: {
            opacity: 1,
            y: 0,
            transition: {
              duration: 0.75,
              delay: 0.5
            }
        }
    };

    return(
        <div style={{overflow:'hidden'}}>
            <AnimatePresence 
                initial={false}
                mode={'wait'}
            >
                <motion.div
                    key={asPath}
                    variants={variants}
                    animate="in"
                    initial="out"
                    exit="out"
                    className='aselole'
                >
                    {children}
                </motion.div>
            </AnimatePresence>
        </div>

        
    )
}