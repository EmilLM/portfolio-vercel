
 const ContactLinks =() => {
    return (
        <div className="links-container">
           <p className="links-info">You can also reach me on:</p>
            
            <div className='links'>
                    <a
                        id="mail" 
                        href="mailto:luchianemil@gmail.com" 
                    >
                        <img src="/assets/icons/gmail.svg"  alt="gmail"/>
                        luchianemil
                    </a>
                    <a  
                        href='https://github.com/EmilLM' 
                        target={'_blank'} 
                        rel="noopener noreferrer" 
                    >   
                        <img src="/assets/icons/github-sign.svg" alt="github" />
                        EmilLM
                    </a>
                    <a  
                        href='https://www.linkedin.com/in/emil-luchian-9933b198/' 
                        target={'_blank'} 
                        rel="noopener noreferrer"
                    >
                        <img src="/assets/icons/linkedin.svg" alt="linkedin"  />
                        Emil Luchian
                    </a>
                    <a  
                        href='https://www.facebook.com/luchian.emil/'
                        target={'_blank'} 
                        rel="noopener noreferrer"
                     >
                        <img src="/assets/icons/facebook.svg" alt="facebook"  />
                        Emil Luchian
                    </a>
            </div>
        </div>
    );
};
export default ContactLinks