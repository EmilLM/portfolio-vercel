
import Navbar from "./Nav/Navbar"
import HeaderIntro from "./HeaderIntro"
import Waves from "../Waves"
import MiscContext from "../../MiscContext"
import {useContext} from 'react';

export default function Header() {
    const {theme} = useContext(MiscContext);

    return (
        <header id="header" className={theme?"header-dark": "header-light"}>
            
            <Navbar/>
            <HeaderIntro/>
            <Waves wavesClass={"header-waves"}/>
        </header>
    )
}

