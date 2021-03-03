import Head from 'next/head'
import Content from '../components/v3/Content/Content.jsx'
import Header from "../components/v3/Header/Header"
import Footer from "../components/v3/Footer/Footer"
import MiscContext from '../components/MiscContext.jsx'
import {useEffect, useState} from 'react';

export default function Waves({animateCookie, themeCookie}) {

  const [animate, setAnimate] = useState(false);
  const [theme, setTheme] = useState(false);

  useEffect(()=> {
    setAnimate(animateCookie);
    setTheme(themeCookie)
  }, [])

  return (
    <>
      <Head>
        <title>WaVeS DeSiGn</title>
      </Head>
      <MiscContext.Provider value={{animate, setAnimate, theme, setTheme}}>
        <Header />
        <Content />
        <Footer/>
      </MiscContext.Provider>
    </>
  )
}

export async function getServerSideProps({req, res}) {
  const animateCookie = JSON.parse(req.cookies.animate);
  const themeCookie = JSON.parse(req.cookies.theme)
  return {
    props: {
      animateCookie,
      themeCookie
    }
  }
} 