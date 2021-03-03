import { useState, useContext, useEffect } from 'react';
import MiscContext from '../../MiscContext';
import StylesButton from './StylesButton';
import cookie from 'js-cookie';
import { FaLightbulb } from 'react-icons/fa';
import { IconButton, Card } from 'ui-neumorphism';

const Navbar = () => {
	const { theme, setTheme } = useContext(MiscContext);

	const handleTheme = () => {
		setTheme(!theme);
		cookie.set('neoTheme', !theme, { expires: 365 });
		console.log(cookie.get('neoTheme'));
	};
	const [offset, setOffset] = useState(false);
	const [isSmall, setIsSmall] = useState(false);

	useEffect(() => {
		window.onscroll = () => {
			if (window.pageYOffset > 60) {
				setOffset(true);
			} else setOffset(false);
		};
		// detecting small viewports
		if (window.innerWidth <= 767) {
			setIsSmall(true);
		} else setIsSmall(false);
	}, []);

	return (
		<Card className='v4-navbar' dark={theme}>
			<div className='v4-nav-container'>
				<IconButton
					text={false}
					// size={isSmall?"small":"large"}
					color={theme ? 'var(--primary-dark)' : 'var(--primary)'}
					className='v4-theme-change'
					id={offset ? 'theme-scrolling' : ''}
					onClick={handleTheme}
					dark={theme}
				>
					<FaLightbulb />
				</IconButton>

				<h1 className={theme ? 'dark-h-emboss' : 'light-h-emboss'}>
					Neumorphism
				</h1>

				<StylesButton offset={offset} isSmall={isSmall} />
			</div>
		</Card>
	);
};

export default Navbar;
