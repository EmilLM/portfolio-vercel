import style from './project.module.scss';
import { useState } from 'react';
import { FaGithubSquare } from 'react-icons/fa';
import { GoScreenFull } from 'react-icons/go';
const Project = ({ project }) => {
	const { title, stack, link, sourceLink, description } = project;
	const [showInfo, setShowInfo] = useState(false);

	return (
		<>
			<button
				data-swiper-parallax-scale='.6'
				data-swiper-parallax-opacity='0'
				className={showInfo ? style.close : style.show}
				onClick={() => setShowInfo(!showInfo)}
			>
				{showInfo ? 'X' : '?'}
			</button>

			<div
				className={showInfo ? style.content : style.exit}
				// swiper parallax
				data-swiper-parallax-scale='.6'
				data-swiper-parallax-opacity='0'
			>
				<h3>{title}</h3>
				<p>{description}</p>
				<strong>-{stack}-</strong>
				<div className={style.links}>
					<a href={link} target='_blank' rel='noopener noreferrer'>
						<GoScreenFull />
						Demo
					</a>

					<a href={sourceLink} target='_blank' rel='noopener noreferrer'>
						<FaGithubSquare />
						Source
					</a>
				</div>
			</div>
		</>
	);
};

export default Project;
