import { useState } from 'react'
import { motion, useAnimation } from 'framer-motion'
import styles from './NavBurger.module.css'
import NavBurgerItem from './NavBurgerItem';

export default function NavBurger({onIndexChange, list}){

    const [open, isOpen] = useState(false);
    const [navIndex, setNavIndex] = useState(1)

    const path01Controls = useAnimation();
    const path02Controls = useAnimation();
    const navControls = useAnimation();

    const path01Variants = {
        open: { d: 'M3.06061 2.99999L21.0606 21', stroke:'#F8F9FA' },
        closed: { d: 'M0 9.5L24 9.5', stroke:'#343A40' },
    }

    const path02Variants = {
        open: { d: 'M3.00006 21.0607L21 3.06064', stroke:'#F8F9FA' },
        moving: { d: 'M0 14.5L24 14.5' },
        closed: { d: 'M0 14.5L15 14.5', stroke:'#343A40' },
    }

    async function burgerHandler(){

        isOpen(!open);

        // start animation
        if (!open) {
            await path02Controls.start(path02Variants.moving);
            path01Controls.start(path01Variants.open);
            path02Controls.start(path02Variants.open);
            navControls.start({x:-300})

        } else {
            path01Controls.start(path01Variants.closed);
            await path02Controls.start(path02Variants.moving);
            path02Controls.start(path02Variants.closed);
            navControls.start({x:0})
        }
    
    }
    
    function listHandler(i){
        burgerHandler()
        setNavIndex(i)
        onIndexChange(i)
    }

    return(
        <div className={styles.wrapper}>
            <button className={styles.btnBurger} onClick={burgerHandler}>
                <svg width='36' height='36' viewBox='0 0 24 24'>
                    <motion.path
                        {...path01Variants.closed}
                        animate={path01Controls}
                        transition={{ duration: 0.4 }}
                    />
                    <motion.path
                        {...path02Variants.closed}
                        animate={path02Controls}
                        transition={{ duration: 0.4 }}
                    />
                </svg>
            </button>
            <motion.nav
                className={styles.nav}
                animate={navControls}
                transition={{duration: 0.6, ease:"easeInOut"}}
            >
                <ul>
                    {
                        list.map((item,i)=>{
                            return(
                                <NavBurgerItem
                                    key={i}
                                    item={item}
                                    index={i}
                                    navIndex={navIndex}
                                    onListHandler={listHandler}
                                />
                            )
                        })
                    }
                </ul>
            </motion.nav>
        </div>
    )
}