import { ThemeProvider, useTheme } from 'next-themes';
import '../styles/globals.css';
import settings from "../api/settings.json"

import Router, { useRouter } from 'next/router';
import NProgress from 'nprogress'; //nprogress module
import 'nprogress/nprogress.css'; //styles of nprogress//Binding events. 
import Snowing from '../components/animated/Snowing';
import NavBar from '../components/NavBar';
import { useState } from 'react';
import { useEffect } from 'react';
import Footer from '../components/Footer';


Router.events.on('routeChangeStart', () => {
  NProgress.configure({showSpinner: false});
  NProgress.start()
});
Router.events.on('routeChangeComplete', () => NProgress.done());
Router.events.on('routeChangeError', () => NProgress.done());


function MyApp({ Component, pageProps }) {

  const [stateSnow, setStateSnow] = useState(true)
  const path = useRouter().pathname
  useEffect(() => {
    if (settings.isSnow) {
      if (localStorage.getItem('snow') == null) localStorage.setItem('snow', true)
      else if (localStorage.getItem('snow') == 'true') setStateSnow(true)
      else setStateSnow(false)
    }
  }, [])
  

  return(
    <ThemeProvider attribute='class' defaultTheme={settings.defaultTheme} enableSystem>
      {(settings.isSnow & path!="/snow") ? <Snowing stateSnow={stateSnow}/> : null}
      {(path!="/snow") ? <NavBar stateSnow={stateSnow} setStateSnow={setStateSnow}/> : null}
      <Component {...pageProps} />
      {(path!="/snow") ? <Footer version={settings.version}/> : null}
    </ThemeProvider>
  )
}

export default MyApp
