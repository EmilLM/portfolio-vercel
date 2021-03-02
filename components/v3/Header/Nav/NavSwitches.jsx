import MiscContext from "../../../MiscContext"
import {useContext} from "react"
// Icons made by <a href="https://www.flaticon.com/authors/good-ware" title="Good Ware">Good Ware</a> from <a href="https://www.flaticon.com/" title="Flaticon"> www.flaticon.com</a>

const NavSwitches = () => {
    const {animate, setAnimate, theme, setTheme} = useContext(MiscContext)
    return ( 
        <div className="switches-container">
            <button 
                className={`switch-animation ${animate ? "rotate": ""}`}
                onClick={()=>setAnimate(!animate)}
                >

            </button>
            <button 
                className={`switch-theme ${theme? "light": "dark"}`}
                onClick={()=>setTheme(!theme)}
            >

            </button>
        </div>
    );
}
 
export default NavSwitches;