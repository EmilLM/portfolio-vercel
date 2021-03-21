import Project from './Project';
import projectsData from '../../../utils/projectsData';
import { FaAngleRight, FaAngleLeft } from 'react-icons/fa';
import { useState } from 'react';

const ProjectsSlider = ({ theme }) => {
	const [currentSlide, setCurrentSlide] = useState(1);
	const sliderLength = projectsData.length;

	const nextSlide = () => {
		setCurrentSlide(currentSlide === sliderLength - 1 ? 0 : currentSlide + 1);
	};
	const prevSlide = () => {
		setCurrentSlide(currentSlide === 0 ? sliderLength - 1 : currentSlide - 1);
	};

	return (
		<div className='v4-slider'>
			<div className='v4-slide-wrapper'>
				{projectsData.map((project) => {
					return (
						<Project
							project={project}
							key={project.id}
							active={currentSlide === project.id ? 'active' : ''}
							nextActive={
								project.id === (currentSlide + 1) % sliderLength
									? 'nextActive'
									: ''
							}
							prevActive={
								project.id === (currentSlide + sliderLength - 1) % sliderLength
									? 'prevActive'
									: ''
							}
							setCurrentSlide={setCurrentSlide}
						/>
					);
				})}
			</div>

			<button
				className={`prev-slide ${theme && 'prev-slide-dark'}`}
				onClick={prevSlide}
			>
				<FaAngleLeft />
			</button>
			<button
				className={`next-slide ${theme && 'next-slide-dark'}`}
				onClick={nextSlide}
			>
				<FaAngleRight />
			</button>
		</div>
	);
};

export default ProjectsSlider;
