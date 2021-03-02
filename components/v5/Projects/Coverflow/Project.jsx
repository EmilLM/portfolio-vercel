import style from './project.module.scss';

const Project = ({ project }) => {
	const { title, stack, link, sourceLink } = project;
	return (
		<div
			className={style.content}
			// swiper parallax 
			data-swiper-parallax='-30%'
			data-swiper-parallax-scale='.6'
			data-swiper-parallax-opacity='0'
		>
			<h3>{title}</h3>
			<p>-{stack}-</p>
			<a href={link} target='_blank' rel='noopener noreferrer'>
				Demo
			</a>
			<a href={sourceLink} target='_blank' rel='noopener noreferrer'>
				Source
			</a>
		</div>
	);
};

export default Project;
