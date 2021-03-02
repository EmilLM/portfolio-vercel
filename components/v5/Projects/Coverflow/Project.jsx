import style from './project.module.scss';
import { useState } from 'react';

const Project = ({ project }) => {
	const { title, stack, link, sourceLink, description } = project;
	const [showInfo, setShowInfo] = useState(false);

	return (
		<>
			<div
				className={style.button_info}
				// swiper parallax
				data-swiper-parallax='-30%'
				data-swiper-parallax-scale='.6'
				data-swiper-parallax-opacity='0'
			>
				{!showInfo ? (
					<button
						className={!showInfo ? style.pulse : ''}
						onClick={() => setShowInfo(!showInfo)}
					>
						?
					</button>
				) : (
					<button
						className={style.close}
						onClick={() => setShowInfo(!showInfo)}
					>
						X
					</button>
				)}
			</div>
			{showInfo ? (
				// rework the cond render
				<div
					className={`${style.content } ${!showInfo?style.exit:null}`}
					// swiper parallax
					data-swiper-parallax='-30%'
					data-swiper-parallax-scale='.6'
					data-swiper-parallax-opacity='0'
				>
					<h3>{title}</h3>
					<p>{description}</p>
					<p>-{stack}-</p>
					<div>
						<a href={link} target='_blank' rel='noopener noreferrer'>
							Demo
						</a>
						&nbsp;
						<a href={sourceLink} target='_blank' rel='noopener noreferrer'>
							Source
						</a>
					</div>
				</div>
			) : (
				''
			)}
		</>
	);
};

export default Project;
