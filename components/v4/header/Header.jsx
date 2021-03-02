import {useContext} from "react";
import MiscContext from "../../MiscContext";

import Navbar from "./Navbar";
import Intro from "./Intro";
import {Divider} from "ui-neumorphism"

const Header = () => {
    const {theme} = useContext(MiscContext);
    return (
        <header className="v4-header">
            <Navbar />
            <Divider className="v4-divider" dark={theme}/>
            <Intro/>
        </header>
        
    );
}
 
export default Header;