import { useEffect, useRef } from 'react';
import style from './header.module.scss';
import Link from 'next/link';
import Img from 'react-optimized-image';
import headerBg from '../../../public/assets/bg/intro.webp';

import { GiArrowDunk } from 'react-icons/gi';
import { VscCompareChanges } from 'react-icons/vsc';
import VanillaTilt from 'vanilla-tilt';

const Header = ({ scrollToRef }) => {
	const tilt = useRef(null);
	const options = {
		speed: 500,
		max: 10,
	};
	useEffect(() => {
		VanillaTilt.init(tilt.current, options);
	}, [options]);

	return (
		<>
			<div className={style.container}>
				{/* <Img alt='glassmorphism' src={headerBg} /> */}

				<h1 className={style.title}>Portfolio</h1>
				<div className={style.content} ref={tilt}>
					<h2>Luchian M. Emil</h2>
					<p>- Web Developer -</p>
					<div className={style.header_buttons}>
						<button onClick={scrollToRef}>
							<GiArrowDunk /> &nbsp; Explore
						</button>
						<Link href='/'>
							<a>
								<VscCompareChanges /> &nbsp; Home
							</a>
						</Link>
					</div>
				</div>
			</div>
		</>
	);
};

export default Header;
