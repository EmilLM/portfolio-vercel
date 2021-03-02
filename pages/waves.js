import Head from 'next/head'
import Content from '../components/v3/Content/Content.jsx'
import Header from "../components/v3/Header/Header"
import Footer from "../components/v3/Footer/Footer"



export default function Waves() {
  
  return (
    <>
      <Head>
        <title>WaVeS DeSiGn</title>
      </Head>
      <Header />
      <Content />
      <Footer/>
    </>
  )
}
