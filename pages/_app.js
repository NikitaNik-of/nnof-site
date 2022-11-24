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


Router.events.on('routeChangeStart', () => {
  NProgress.configure({showSpinner: false});
  NProgress.start()
});
Router.events.on('routeChangeComplete', () => NProgress.done());
Router.events.on('routeChangeError', () => NProgress.done());


function MyApp({ Component, pageProps }) {

  const [stateSnow, setStateSnow] = useState(settings.isSnow)
  useEffect(() => {
    // hasCookie('snow') ? setStateSnow(getCookie('snow')) : setCookie('snow', settings.isSnow, {maxAge: 60 * 60 * 24})
    if (localStorage.getItem('snow') == null) localStorage.setItem('snow', settings.isSnow)
    else if (localStorage.getItem('snow') == 'true') setStateSnow(true)
    else setStateSnow(false)
  }, [])
  

  return(
    <ThemeProvider attribute='class' defaultTheme={settings.defaultTheme} enableSystem>
      <Snow stateSnow={stateSnow}/>
      <NavBar stateSnow={stateSnow} setStateSnow={setStateSnow}/>
      <Component {...pageProps} />
    </ThemeProvider>
  )
}

export default MyApp
