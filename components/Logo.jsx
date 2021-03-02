
const Logo = ({clsName}) => {

    return (
        <div className={` swirl-in logo footer-logo tooltip ${clsName} `} >
            <span className="logo-text">LEM</span>
            <div className="bottom">
                <p>Stands for my full name initials!</p>
                <i></i>
            </div>
        </div>          
    ) 
}
 
export default Logo;