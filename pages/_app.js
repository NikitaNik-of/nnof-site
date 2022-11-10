import { ThemeProvider, useTheme } from 'next-themes';
import Construction from '../components/Construction';
import '../styles/globals.css';

function MyApp({ Component, pageProps }) {
  return(
    <ThemeProvider attribute='class' enableSystem>
      <Construction {...pageProps}/>
    </ThemeProvider>
  )
}

export default MyApp
