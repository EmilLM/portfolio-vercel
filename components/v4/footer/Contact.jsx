
import ContactLinks from './ContactLinks'
import ContactForm from '../../v3/Footer/ContactForm';
import {Slide, Fade} from "react-awesome-reveal";
import MiscContext from '../../MiscContext';
import {useContext} from "react";
import { Divider} from 'ui-neumorphism';

const Contact = () => {
    const {theme} = useContext(MiscContext)
    
    // lightForm={"light-form"} darkForm={"dark-form"}
    return ( 
        <>
            <Slide direction="down" triggerOnce>
                <h2 className={theme?"dark-h-e":"light-h-e"}>Contact</h2>
            </Slide>
            
            <div className="contact-container">
                <Slide direction="left" triggerOnce>
                    <ContactForm />
                </Slide>
                <Fade>
                    <Divider dark={theme} className="contact-bar"/>
                </Fade>

                <Slide direction="right" triggerOnce>
                   <ContactLinks/>
                </Slide>
                
            </div>
        </>
    );
}
 
export default Contact;