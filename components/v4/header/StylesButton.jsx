import {useState, useContext} from 'react';
import MenuDropdown from "./MenuDropdown";
import MiscContext from "../../MiscContext";
import { Button, IconButton} from 'ui-neumorphism';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faChevronDown, faUndoAlt} from "@fortawesome/free-solid-svg-icons";

const StylesButton = ({offset, isSmall}) => {
    
    const {theme} = useContext(MiscContext)
    const [showMenu, setShowMenu] = useState(false);

    
    if (offset ||isSmall) return (
        <IconButton 
            text={false} 
            color='var(--primary)' 
            onClick={()=>setShowMenu(!showMenu)}
            className={offset?"style-scrolling":"style-change"}
            // size={isSmall?"small":"large"}
            dark={theme} 
        >
            <FontAwesomeIcon icon={faUndoAlt}/> 
            {showMenu && <MenuDropdown/>}
        </IconButton>
    )
  
    return (
        <Button 
            color='var(--primary)' 
            onClick={()=>setShowMenu(!showMenu)}
            className="style-change"
            dark={theme} 
        >
             Change style &nbsp;
            <FontAwesomeIcon 
                icon={faChevronDown} 
                className={showMenu ? "rotate-up": "rotate-down"}
            /> 
            {showMenu && <MenuDropdown/>}
        </Button>
    )
    // return null
}
 
export default StylesButton;