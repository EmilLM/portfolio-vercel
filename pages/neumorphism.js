import Head from 'next/head';
import Header from "../components/v4-neumorphism/header/Header";
import Content from "../components/v4-neumorphism/content/Content"
import Footer from '../components/v4-neumorphism/footer/Footer';
import MiscContext from '../components/MiscContext.jsx'
import {useEffect, useState} from 'react';

import 'ui-neumorphism/dist/index.css';
import { overrideThemeVariables } from 'ui-neumorphism';

const Neumorphism = ({themeCookie}) => {
  const [theme, setTheme] = useState(false);

    useEffect(()=>{
        overrideThemeVariables({

            '--light-bg': '#E4EBF5',
            '--light-bg-dark-shadow': '#bec8e4',
            '--light-bg-light-shadow': '#fff',

            '--dark-bg': '#292E35',
            '--dark-bg-dark-shadow': '#21252a',
            '--dark-bg-light-shadow': '#313740',

            '--primary': '#0101FF',
            '--primary-dark': '#c7befd',
            '--primary-light': '#4526f9'
            
        })
        setTheme(themeCookie)
    }, [])

    return (
        <>
            <Head>
                <title>Neumorphism</title>
            </Head>
            <MiscContext.Provider value={{theme, setTheme}}>
                <Header/>
                <Content/>
                <Footer/>
            </MiscContext.Provider>
        </>
    );
}
 
export default Neumorphism;

export async function getServerSideProps({req, res}) {
  const themeCookie = JSON.parse(req.cookies.neoTheme || null)
  return {
    props: {
      themeCookie
    }
  }
} 