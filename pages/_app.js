import '../styles/globals.scss'
import "../styles/main.scss"

import {useState} from 'react';
import Head from "next/head"
import MiscContext from "../components/MiscContext.jsx";
// Import Swiper styles
import 'swiper/swiper.scss';
import 'swiper/components/navigation/navigation.scss';
import 'swiper/components/effect-coverflow/effect-coverflow.scss';

function MyApp({ Component, pageProps}) {
  
  
  const [animate, setAnimate] = useState(false);
  const [theme, setTheme] = useState(false);
 
  return (
    <>
      <Head>
        <meta  name="viewport" content="minimum-scale=1, initial-scale=1, width=device-width"/>
      </Head>
      <MiscContext.Provider value={{animate, setAnimate, theme, setTheme}}>
        <Component {...pageProps} />
      </MiscContext.Provider>
    </>
  ) 
}

export default MyApp
