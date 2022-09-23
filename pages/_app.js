import { ThemeProvider, useTheme } from 'next-themes';
import '../styles/globals.css';

function MyApp({ Component, pageProps }) {
  return(
    <ThemeProvider attribute='class' enableSystem={true}>
      <Component {...pageProps}/>
    </ThemeProvider>
  )
}

export default MyApp
