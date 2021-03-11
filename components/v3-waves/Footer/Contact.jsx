import React from 'react';
import ContactLinks from './ContactLinks'
import ContactForm from './ContactForm';
import {Slide, Fade} from "react-awesome-reveal";
const Contact = () => {
    return ( 
        <div className="content-container contact" >
            <Slide direction="down" triggerOnce>
                <h2 className="section-title" >Contact</h2>
            </Slide>
            
            <div className="contact-container">


                <Slide direction="horizontal" triggerOnce>
                    <ContactForm />
                </Slide>
                
                <div className="contact-bar"/>
    
                <Slide direction="right" triggerOnce>
                    <ContactLinks />
                </Slide>
                
            </div>
        </div>  
    );
}
 
export default Contact;