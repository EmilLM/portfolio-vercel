import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
	faDownload,
	faTools,
	faPencilAlt,
	faDatabase,
	faDesktop,
} from '@fortawesome/free-solid-svg-icons';
import { Fade, Flip, JackInTheBox, Bounce } from 'react-awesome-reveal';
import { Card, Button } from 'ui-neumorphism';

import { useContext } from 'react';
import MiscContext from '../../MiscContext';

const About = () => {
	const { theme } = useContext(MiscContext);

	return (
		<Card className='v4-content v4-container' dark={theme}>
			<Card inset className='v4-about about-content' dark={theme}>
				<Fade direction='down' triggerOnce>
					<h2 className={theme ? 'dark-h-e' : 'light-h-e'}>About</h2>
				</Fade>

				<Fade direction='right' triggerOnce>
					<a
						href='/assets/CV_Luchian_Emil.pdf'
						download='CV_Luchian_Emil.pdf'
						className={'v4-btn-download'}
					>
						<Button dark={theme} color='var(--primary)'>
							<FontAwesomeIcon icon={faDownload} />
							&nbsp; Download CV
						</Button>
					</a>
				</Fade>

				<Fade direction='left' triggerOnce>
					<Card inset className='about-code' dark={theme}>
						<p>
							<span>Name :</span> 'Luchian Emil Moise',{' '}
						</p>
						<p>
							<span>Specialization :</span> 'Full stack web dev',
						</p>
						<p>
							<span>Stack :</span> 'MongoDB-Express-React-Node',
						</p>
						<p>
							<span>Location :</span> 'Bucharest, Romania'
						</p>
					</Card>
				</Fade>

				<Flip direction='horizontal' cascade triggerOnce>
					<Card className='about-info' dark={theme}>
						Studied front-end programming at{' '}
						<span>
							<a id='cl-link' href='https://www.coderslab.ro/'>
								Coder's Lab
							</a>
						</span>
						. Learned the <span>MERN stack</span> and currently studying
						technologies like GraphQL, Jest, Docker and others.
					</Card>
					<Card className='about-info' dark={theme}>
						Striving to write <span>clean</span>, <span>scalable code</span>{' '}
						using best practices. <span>Efficient </span>and
						<span> resourceful</span> in reaching my objectives, in bringing
						code to life in <span>amazing designs</span>.
					</Card>
				</Flip>
				<Bounce triggerOnce>{/* <h3>Skills</h3> */}</Bounce>
				<JackInTheBox triggerOnce>
					<div className='skills-container'>
						<Card inset className='skills-card' dark={theme}>
							<Card className='card-icon'>
								<FontAwesomeIcon icon={faPencilAlt} />
							</Card>
							<strong>UI/UX</strong>
							<ul>
								<li>Html5</li>
								<li>Css3/Scss</li>
								<li>Photoshop</li>
								<li>Adobe XD</li>
							</ul>
						</Card>
						<Card inset className='skills-card' dark={theme}>
							<Card className='card-icon'>
								<FontAwesomeIcon icon={faDesktop} />
							</Card>
							<strong>Front-end</strong>
							<ul>
								<li>Javascript</li>
								<li>React</li>
								<li>Next.js</li>
								<li>Material-UI</li>
							</ul>
						</Card>
						<Card inset className='skills-card' dark={theme}>
							<Card className='card-icon'>
								<FontAwesomeIcon icon={faDatabase} />
							</Card>
							<strong>Back-end</strong>
							<ul>
								<li>MongoDB</li>
								<li>Express.js</li>
								<li>Node.js</li>
								<li>Firebase</li>
							</ul>
						</Card>
						<Card inset className='skills-card' dark={theme}>
							<Card className='card-icon'>
								<FontAwesomeIcon icon={faTools} />
							</Card>
							<strong>Tools</strong>
							<ul>
								<li>Jest</li>
								<li>Git/Github</li>
								<li>GraphQL</li>
								<li>REST API</li>
							</ul>
						</Card>
					</div>
				</JackInTheBox>
			</Card>
		</Card>
	);
};

export default About;
