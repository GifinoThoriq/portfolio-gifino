import '../styles/globals.css'
import Transition from '../components/Transition'

function MyApp({ Component, pageProps }) {
  const getLayout = Component.getLayout || ((page) => page)
  return getLayout(
    <Transition>
      <Component {...pageProps} />
    </Transition>
  )
}

export default MyApp
