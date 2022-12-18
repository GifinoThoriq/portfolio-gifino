import '../styles/globals.css'
import Transition from '../components/Transition'
import Router from "next/router";

function MyApp({ Component, pageProps }) {

  const routeChange = () => {
    // Temporary fix to avoid flash of unstyled content
    // during route transitions. Keep an eye on this
    // issue and remove this code when resolved:
    // https://github.com/vercel/next.js/issues/17464

    const tempFix = () => {
      const allStyleElems = document.querySelectorAll('style[media="x"]');
      allStyleElems.forEach((elem) => {
        elem.removeAttribute("media");
      });
    };
    tempFix();
  };

  Router.events.on("routeChangeComplete", routeChange );
  Router.events.on("routeChangeStart", routeChange );

  return(
    <Transition>
      <Component {...pageProps} />
    </Transition>
  )
}

export default MyApp
