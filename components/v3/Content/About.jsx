
import {FaDownload, FaTools, FaPencilAlt, FaDatabase, FaDesktop} from 'react-icons/fa';
import { Fade, Flip, JackInTheBox, Bounce } from 'react-awesome-reveal';

const About = ({ children }) => {
	return (
		<div className='about-bg' id='about'>
			<div className='content-container about-content '>
				<h2 className='section-title'>About</h2>

				<div className='about-code'>
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
				</div>

				<Fade direction='right' triggerOnce>
					<a
						className='btn-download'
						href='/assets/CV_Luchian_Emil.pdf'
						download='CV_Luchian_Emil.pdf'
					>
						<FaDownload />
						Download CV
					</a>
				</Fade>

				<Flip direction='horizontal' cascade triggerOnce>
					<p className='about-info'>
						Studied front-end programming at{' '}
						<span>
							<a href='https://www.coderslab.ro/'>Coder's Lab</a>
						</span>
						. Learned the <span>MERN stack</span> and currently studying
						technologies like GraphQL, Jest, Docker and others.
					</p>
					<p className='about-info'>
						Striving to write <span>clean</span>, <span>scalable code</span>{' '}
						using best practices. <span>Efficient </span>and
						<span> resourceful</span> in reaching my objectives, in bringing
						code to life in <span>amazing designs</span>.
					</p>
				</Flip>
				<Bounce triggerOnce>{/* <h3>Skills</h3> */}</Bounce>
				<JackInTheBox triggerOnce>
					<div className='skills-container'>
						<div className='skills-card'>
							<FaPencilAlt/>
							<strong>UI/UX</strong>
							<ul>
								<li>Html5</li>
								<li>Css3/Scss</li>
								<li>Photoshop</li>
								<li>Adobe XD</li>
							</ul>
						</div>
						<div className='skills-card'>
							<FaDesktop />
							<strong>Front-end</strong>
							<ul>
								<li>Javascript</li>
								<li>React</li>
								<li>Next.js</li>
								<li>Material-UI</li>
							</ul>
						</div>
						<div className='skills-card'>
							<FaDatabase />
							<strong>Back-end</strong>
							<ul>
								<li>MongoDB</li>
								<li>Express.js</li>
								<li>Node.js</li>
								<li>Firebase</li>
							</ul>
						</div>
						<div className='skills-card '>
							<FaTools />
							<strong>Tools</strong>
							<ul>
								<li>Jest</li>
								<li>Git/Github</li>
								<li>GraphQL</li>
								<li>REST API</li>
							</ul>
						</div>
					</div>
				</JackInTheBox>
			</div>
			{children}
		</div>
	);
};

export default About;
