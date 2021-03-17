import { useEffect, useRef } from 'react';
import style from './header.module.scss';
import Link from 'next/link';
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
				<h1 className={style.title}>Portfolio</h1>
				<div className={style.content} ref={tilt}>
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
