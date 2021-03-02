import {useState, useContext} from 'react';
import MiscContext from '../../MiscContext'
import emailjs from 'emailjs-com';
import classNames from '../../../classNames'


export default function ContactForm() {
    const {theme} = useContext(MiscContext);
    const {lightForm, darkForm, btnLight, btnDark} = classNames;
    const [formState, setFormState] = useState({
        nameInput: "",
        emailInput: "",
        messageInput: ""
    });
    const {nameInput, emailInput, messageInput} = formState;
    const isEnabled= nameInput.length > 0 && emailInput.length > 0 && messageInput.length > 0;

    const handleChange = e => {
        setFormState({
            ...formState,
            [e.target.name] : e.target.value,
        })
    };
    
    const [isValid, setIsValid] = useState(false);

    const sendEmail = () => {
        const templateParams = {
            name: nameInput,
            message: messageInput,
            email: emailInput
        }
        emailjs.send('1234-GMAIL','template_jczgxtd', templateParams, 'user_VIMh8mewaR5I6RPSpsz35')
            .then((response) => {
                console.log('SUCCESS!', response);
            }, (err) => {
                console.log('FAILED...', err);
            });
    }
   
    const handleSubmit = e => {
        e.preventDefault();
        if (emailInput.includes('@') && emailInput.includes('.com')) {
            setIsValid(true);
        } else {
            setIsValid(false);
        }
        sendEmail();
        setFormState({
            nameInput: "",
            emailInput: "",
            messageInput: ""
        });
    };

    

    return(
        <div className="form-container">
                <p className="form-info">Feel free to leave some feedback.</p>
            <form onSubmit={handleSubmit} >
                    <input  
                        className={theme?darkForm:lightForm}
                        name="nameInput" type="text"
                        autoComplete="off"
                        value={nameInput}
                        onChange={handleChange}
                        noValidate 
                        placeholder={"Name"}
                    />
    
                    <input  
                        className={theme?darkForm:lightForm}
                        type="email" name="emailInput"
                        value={emailInput} onChange={handleChange}
                        // noValidate
                        placeholder={"Email"}
                    />
               
                    <textarea
                        className={theme?darkForm:lightForm}
                        name="messageInput" id="messageArea"
                        value={messageInput}
                        onChange={handleChange}
                        placeholder={"Message"}
                    />
                
                <button 
                    type="submit" 
                    disabled={!isEnabled}
                    className={`btn ${theme?btnDark:btnLight}`}
                >
                    {isValid?"Message sent!":"Send"}
                </button>
                
            </form>
            
        </div>      
    )
}
