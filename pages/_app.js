import { ThemeProvider, useTheme } from 'next-themes';
import '../styles/globals.css';
import settings from "../api/settings.json"

import Router from 'next/router';
import NProgress from 'nprogress'; //nprogress module
import 'nprogress/nprogress.css'; //styles of nprogress//Binding events. 
import Snow from '../components/animated/Snow';
Router.events.on('routeChangeStart', () => {
  NProgress.configure({showSpinner: false});
  NProgress.start()
});
Router.events.on('routeChangeComplete', () => NProgress.done());
Router.events.on('routeChangeError', () => NProgress.done());


function MyApp({ Component, pageProps }) {
  return(
    <ThemeProvider attribute='class' defaultTheme={settings.defaultTheme} enableSystem>
      <Snow stateSnow={settings.isSnow}/>
      <Component {...pageProps}/>
    </ThemeProvider>
  )
}

export default MyApp
