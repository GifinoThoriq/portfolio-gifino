import '../styles/globals.css'
import Transition from '../components/Transition'

function MyApp({ Component, pageProps }) {

  return(
    <Transition>
      <Component {...pageProps} />
    </Transition>
  )
}

export default MyApp
