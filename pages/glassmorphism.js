import Head from 'next/head';
import globalStyle from '../components/v5/global.module.scss';
import Header from '../components/v5/Header/Header.jsx';
import About from '../components/v5/About/About.jsx';
import Projects  from "../components/v5/Projects/Projects.jsx";
import Contact from "../components/v5/Contact/Contact"
import {useRef, useEffect} from 'react';
import cookie from 'js-cookie';

export default function Glassmorphism() {

  const aboutRef = useRef(null);
  const scrollToRef = () => aboutRef.current?.scrollIntoView({ behavior: 'smooth' });
  useEffect(()=>{
    // cookie.set('route', '/glassmorphism')
    return () => cookie.remove('route')
  }, [])
  return (
    <>
      <Head>
        <title>Glassmorphism</title>
      </Head>
      <main className={globalStyle.v5}>
        <Header scrollToRef={scrollToRef}/>
        <About aboutRef={aboutRef}/>
        <Projects/>
        <Contact/>
      </main>
    </>
  )
}
