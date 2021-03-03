import '../styles/globals.scss'
import "../styles/main.scss"
// Import Swiper styles
import 'swiper/swiper.scss';
import 'swiper/components/navigation/navigation.scss';
import 'swiper/components/effect-coverflow/effect-coverflow.scss';

import Head from "next/head"


function MyApp({ Component, pageProps}) {
  
  
  return (
    <>
      <Head>
        <meta  name="viewport" content="minimum-scale=1, initial-scale=1, width=device-width"/>
      </Head>
        <Component {...pageProps} />
    </>
  ) 
}

export default MyApp

