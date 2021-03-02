import { useState, useContext } from 'react';
import About from './About';
import ProjectsExpanded from './Projects/ProjectsExpanded';
import Waves from '../Waves';
import SlickCarousel from './Projects/SlickCarousel';
import ExpandButton from './Projects/Expand';
import MiscContext from '../../MiscContext';

import { Flip, Fade } from 'react-awesome-reveal';
import Coverflow from '../../v5/Projects/Coverflow/Coverflow';
export default function Content() {
	const { theme } = useContext(MiscContext);
	const [expand, setExpand] = useState(false);

	return (
		<main className={theme ? 'main-dark' : 'main-light'}>
			<About>
				<Waves wavesClass={'about-waves'} />
			</About>

			<div id='projects'>
				<div className='projects-header'>
					<Flip direction='vertical' triggerOnce>
						<h2 className='section-title'>Projects</h2>
					</Flip>

					<Coverflow />
					<ExpandButton setExpand={setExpand} expand={expand} />

					<Waves wavesClass='carousel-waves' />
				</div>
				{expand && <ProjectsExpanded />}
			</div>
		</main>
	);
}
