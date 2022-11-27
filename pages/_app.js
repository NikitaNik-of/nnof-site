import { ThemeProvider, useTheme } from 'next-themes';
import '../styles/globals.css';
import settings from "../api/settings.json"

import Router from 'next/router';
import NProgress from 'nprogress'; //nprogress module
import 'nprogress/nprogress.css'; //styles of nprogress//Binding events. 
import Snow from '../components/animated/Snow';
import NavBar from '../components/NavBar';
import { useState } from 'react';
import { useEffect } from 'react';
import { hasCookie, getCookie, setCookie } from 'cookies-next';
import Footer from '../components/Footer';


Router.events.on('routeChangeStart', () => {
  NProgress.configure({showSpinner: false});
  NProgress.start()
});
Router.events.on('routeChangeComplete', () => NProgress.done());
Router.events.on('routeChangeError', () => NProgress.done());


function MyApp({ Component, pageProps }) {

  const [stateSnow, setStateSnow] = useState(true)
  useEffect(() => {
    if (settings.isSnow) {
      if (localStorage.getItem('snow') == null) localStorage.setItem('snow', true)
      else if (localStorage.getItem('snow') == 'true') setStateSnow(true)
      else setStateSnow(false)
    }
  }, [])
  

  return(
    <ThemeProvider attribute='class' defaultTheme={settings.defaultTheme} enableSystem>
      {(settings.isSnow) ? <Snow stateSnow={stateSnow}/> : null}
      <NavBar stateSnow={stateSnow} setStateSnow={setStateSnow}/>
      <Component {...pageProps} />
      <Footer version={settings.version}/>
    </ThemeProvider>
  )
}

export default MyApp
