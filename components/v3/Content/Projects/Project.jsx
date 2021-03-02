
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faGithubSquare } from '@fortawesome/free-brands-svg-icons';
import {faLaptopCode} from '@fortawesome/free-solid-svg-icons'
import Waves from "../../Waves"
// import Image from "next/image"
// next.js Image not compatible with firebase, image isnt displayed!???
const Project = ({project}) => {

    const {src, link, sourceLink, altText, title, description, stack, wavesClass} = project;
  

    return ( 
        <div className="project-container">
            <div className="content-container project">
                <h3> &lt; {title} /&gt;</h3>

                <div className="image-container">
                    <a href={link} target="_blank">
                        <img className="project-image" src={`/assets/${src}`} alt={altText} />
                    </a>
                </div>

                <div className="description">
                    <p>{description}</p>
                    <strong>{stack}</strong>

                    <div className="project-links">
                        <a href={link} target="_blank" rel="noopener noreferrer" id="demo">
                            <FontAwesomeIcon icon={faLaptopCode}/>&nbsp; Demo
                        </a>   
                        <a href={sourceLink} target="_blank" rel="noopener noreferrer">
                            <FontAwesomeIcon icon={faGithubSquare}/>&nbsp; Source
                        </a>
                    </div>

                </div> 

            </div> 
        <Waves wavesClass={wavesClass}/>
        </div>
     );
}
 
export default Project;