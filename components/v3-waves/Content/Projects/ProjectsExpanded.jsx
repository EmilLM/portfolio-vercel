
import Project from "./Project";
import projects from "../../../../utils/projectsData"
import {useRef, useEffect} from "react"

const ProjectsExpanded = () => {

    const projectRef = useRef();
    const scrollToRef = () => projectRef.current?.scrollIntoView({ behavior: 'smooth' });
    
    useEffect( ()=> {
        scrollToRef();
    }, [])
    
    return ( 
        <div ref={projectRef}>
            {projects.map(project =>  <Project key={project.id} project={project} />)}
                  
        </div>           
    );
}
 
export default ProjectsExpanded;