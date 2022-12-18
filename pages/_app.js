import '../styles/globals.css'
import Transition from '../components/Transition'
import Router from "next/router";
import { AnimatePresence, motion } from 'framer-motion'
import { useTransitionFix } from '../utils/UseTransitionFix';

const PAGE_VARIANTS = {
  initial: {
    opacity: 0,
  },
  animate: {
    opacity: 1,
  },
  exit: {
    opacity: 0,
  },
}

function MyApp({ Component, pageProps, router }) {

  const transitionCallback = useTransitionFix()

  return(
    <AnimatePresence exitBeforeEnter onExitComplete={transitionCallback}>
      <motion.div
        key={router.route}
        initial="initial"
        animate="animate"
        exit="exit"
        variants={PAGE_VARIANTS}
      >
        <Component {...pageProps} />
      </motion.div>
    </AnimatePresence>
  )
}

export default MyApp
