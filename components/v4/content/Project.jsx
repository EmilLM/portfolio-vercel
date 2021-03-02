import { Card } from 'ui-neumorphism';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithubSquare } from '@fortawesome/free-brands-svg-icons';
import { faLaptopCode } from '@fortawesome/free-solid-svg-icons';
import MiscContext from '../../MiscContext';
import React, { useContext } from 'react';

const Project = ({
	project,
	active,
	setCurrentSlide,
	nextActive,
	prevActive,
}) => {
	const { id, src, link, sourceLink, title, description, stack } = project;
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
				<Card className='card-content' dark={theme} style={bgImage}>
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
								<FontAwesomeIcon icon={faLaptopCode} /> &nbsp; Demo
							</a>
							<a
								href={sourceLink}
								target='_blank'
								rel='noopener noreferrer'
								id='source'
							>
								<FontAwesomeIcon icon={faGithubSquare} />
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
