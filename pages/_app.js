import { ThemeProvider, useTheme } from 'next-themes';
import '../styles/globals.css';

import Router from 'next/router';
import NProgress from 'nprogress'; //nprogress module
import 'nprogress/nprogress.css'; //styles of nprogress//Binding events. 
Router.events.on('routeChangeStart', () => {
  NProgress.configure({showSpinner: false});
  NProgress.start()
});
Router.events.on('routeChangeComplete', () => NProgress.done());
Router.events.on('routeChangeError', () => NProgress.done());


function MyApp({ Component, pageProps }) {
  return(
    <ThemeProvider attribute='class' enableSystem>
      <Component {...pageProps}/>
    </ThemeProvider>
  )
}

export default MyApp
