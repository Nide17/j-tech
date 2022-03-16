import '../styles/globals.css'
import 'bootstrap/dist/css/bootstrap.css';
import { config } from '@fortawesome/fontawesome-svg-core'
import '@fortawesome/fontawesome-svg-core/styles.css'

/* Tell Font Awesome to skip adding the CSS automatically since it's being imported above */
config.autoAddCss = false 

import Layout from '../components/Layout'
import {useEffect} from 'react'

function MyApp({ Component, pageProps }) {

  useEffect(() => {
    import("bootstrap/dist/js/bootstrap");
}, []);

  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>)
}

export default MyApp
