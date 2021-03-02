import React, {useState, useEffect} from 'react';
import Scrollspy from 'react-scrollspy'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faEnvelope, faFolder} from '@fortawesome/free-solid-svg-icons'
import NavSwitches from './NavSwitches.jsx';

const NavBar = () =>{
    const [offset, setOffset] = useState(false);
    
    useEffect(() => {
        window.onscroll = () => {
            if (window.pageYOffset > 60) {
                setOffset(true)
            } else setOffset(false)
        }
    }, [offset]);
   
        return (
            <section className='nav_section'>
                <nav className="navbar"  id={offset ? "scrolling":""}>
    
                        <ul>
                            <Scrollspy items={['header','about', 'projects', 'contact']} 
                                currentClassName="is-active"
                                componentTag={"div"} 
                                offset={-335}
                                style={{display: "flex"}}
                            >
                                {/* added header to items as a way to avoid "about" navbar highlight from start */}
                                <li className="nav-item" style={{display: "none"}}> <a className="nav-link" href="#header">header</a> </li>
                                <li className="nav-item"> 
                                    <FontAwesomeIcon icon={faUser}/>
                                    <a className="nav-link" href="#about">About</a> 
                                </li>
                                <li className="nav-item"> 
                                    <FontAwesomeIcon icon={faFolder} />
                                    <a className="nav-link" href="#projects">Projects</a>
                                </li>
                                <li className="nav-item"> 
                                    <FontAwesomeIcon icon={faEnvelope} />
                                    <a className="nav-link" href="#contact">Contact</a> 
                                </li>
                            </Scrollspy>
                        </ul>
                    <NavSwitches/>
                </nav>
                
            </section>

        )

}

export default React.memo(NavBar);