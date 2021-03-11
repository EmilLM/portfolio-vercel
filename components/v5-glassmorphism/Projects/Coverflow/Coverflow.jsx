import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Navigation, EffectCoverflow, Parallax } from 'swiper';
import projects from '../../../../projectsData';
import Project from './Project';

SwiperCore.use([Navigation, EffectCoverflow, Parallax]);

const Coverflow = (props) => {
	return (
		<>
			<Swiper
				effect='coverflow'
				parallax
				spaceBetween={20}
				speed={800}
				slidesPerView={2}
				centeredSlides
				grabCursor
				coverflowEffect={{
					rotate: 50, // Slde rotate in degrees
					stretch: 0, // Stretch space between slides (in px)
					depth: 100, // Depth offset in px (slides translate in Z axis)
					modifier: 1, // Effect multipler
					slideShadows: true, // Enables slides shadows
				}}
				loop
				navigation
				breakpoints={{
					400: {
						spaceBetween: 0,
					},
					600: {
						spaceBetween: 50,
					},
				}}
			>
				{projects.map((project) => {
					return (
						<SwiperSlide
							key={project.id}
							style={{ backgroundImage: `url(/assets/${project.src})` }}
						>
							<Project project={project} />
						</SwiperSlide>
					);
				})}
			</Swiper>
		</>
	);
};

export default Coverflow;
