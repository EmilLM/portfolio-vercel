import style from './projects.module.scss';


const Projects = (props) => {
	return (
		<>
			<div className={style.container}>
				<h1 className={style.title}>Projects</h1>
				{props.children}
			</div>
		</>
	);
};

export default Projects;
