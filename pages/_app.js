import '../styles/globals.css'
import Transition from '../components/Transition'
import Router from "next/router";

function MyApp({ Component, pageProps }) {

  const routeChange = () => {
    const tempFix = () => {
      const allStyleElems = document.querySelectorAll('style[media="x"]');
      allStyleElems.forEach((elem) => {
        elem.removeAttribute("media");
      });
    };
    tempFix();
  };

  Router.events.on("routeChangeStart", routeChange );
  Router.events.on("routeChangeComplete", routeChange );

  return(
    <Transition>
      <Component {...pageProps} />
    </Transition>
  )
}

export default MyApp
