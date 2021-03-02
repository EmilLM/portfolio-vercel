import style from './projects.module.scss';
import Coverflow from './Coverflow/Coverflow';
import Project from './Coverflow/Project';
const Projects = () => {
	return (
		<>
			<div className={style.container}>
				<h1 className={style.title}>Projects</h1>
				<Coverflow>
					<Project />
				</Coverflow>
			</div>
		</>
	);
};

export default Projects;
