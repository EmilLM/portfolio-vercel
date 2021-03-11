import Logo from '../../Logo/Logo';
import { Button, Card, Divider } from 'ui-neumorphism';
import { FaArrowDown } from 'react-icons/fa';

import { useRef, useContext } from 'react';
import MiscContext from '../../MiscContext';

const Intro = () => {
	const { theme } = useContext(MiscContext);

	const scrollRef = useRef();
	const scrollToRef = () =>
		scrollRef.current?.scrollIntoView({ behavior: 'smooth' });

	return (
		<>
			<Card flat className='header-intro v4-container' dark={theme}>
				<Card className='header-card' dark={theme}>
					<div className='logo-container'>
						<Logo
							clsName={`v4-logo ${theme ? 'dark-active' : 'light-active'}`}
						/>
					</div>
					<div className='title-container'>
						<h1
							className={`header-text focus-in ${
								theme ? 'dark-h-e' : 'light-h-e'
							} `}
						>
							Apps <br /> Portfolio
						</h1>
						<Button
							dark={theme}
							color='var(--primary)'
							className='explore-button'
							onClick={() => scrollToRef()}
						>
							Explore &nbsp;
							<FaArrowDown className='heartbeat' />
						</Button>
					</div>
					<div className='img-container'>
						<img
							alt='app-build-img'
							src='/assets/header-img.svg'
							className='bounce-in'
						/>
					</div>
				</Card>
			</Card>
			<div ref={scrollRef} style={{ width: '100%' }}>
				<Divider dark={theme} />
			</div>
		</>
	);
};

export default Intro;

{
	/* <div className="header-inner">
    <div className="text-container">
        <h1 className={`header-text focus-in`}>APPS PORTFOLIO </h1>
        <Logo/>
    </div>
    <img alt="app-build-img" src="/assets/header-img.svg" />
</div>   */
}
