import { Card } from 'ui-neumorphism';
import { FaGithubSquare } from 'react-icons/fa';
import { GoScreenFull } from 'react-icons/go';
import MiscContext from '../../MiscContext';
import React, { useContext } from 'react';
import Image from 'next/image';

const Project = ({
	project,
	active,
	setCurrentSlide,
	nextActive,
	prevActive,
}) => {
	const { id, src, altText, link, sourceLink, title, description, stack } = project;
	const { theme } = useContext(MiscContext);

	const bgImage = {
		'--backgroundImage': `url(/assets/${src})`,
	};
	return (
		<div
			id={`${active}${prevActive}${nextActive}`}
			className={`v4-project-container project-${id}`}
			onClick={() => setCurrentSlide(project.id)}
		>
			<div
				className={`v4-card ${
					theme ? 'dark-deep-engrave' : 'light-deep-engrave'
				}`}
			>
				<Card className='card-content' dark={theme}>
					<Image
						alt={altText}
						src={`/assets/${src}`}
						layout='fill'
						style={bgImage}
					/>

					<div className='info'>
						<h1 className='title light-h-e'>{title}</h1>
						<p className='v4-description '>{description}</p>
						<p className='v4-stack'>{stack}</p>
						<div className='project-links v4-links'>
							<a
								href={link}
								target='_blank'
								rel='noopener noreferrer'
								id='demo'
							>
								<GoScreenFull />
								&nbsp; Demo
							</a>
							<a
								href={sourceLink}
								target='_blank'
								rel='noopener noreferrer'
								id='source'
							>
								<FaGithubSquare />
								&nbsp; Source
							</a>
						</div>
					</div>
				</Card>
			</div>
		</div>
	);
};

export default Project;
