import Logo from "../../Logo"
import MiscContext from "../../MiscContext"
import {useContext} from "react"

const HeaderIntro = () => {
    const {animate} = useContext(MiscContext);
    return (
        <div className="header-inner">
            <div className="text-container">
                <h1 className={`header-text focus-in ${animate?"pop-up":""}`}>APPS PORTFOLIO </h1>
                <Logo/>
            </div>
            <img alt="app-build-img" src={" /assets/header-img.svg"} className={animate?"float": "bounce-in"} />
        </div>  
    );
}
 
export default HeaderIntro;