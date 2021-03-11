import MiscContext from '../../../MiscContext';
import { useContext } from 'react';
import cookie from 'js-cookie';
// Icons made by <a href="https://www.flaticon.com/authors/good-ware" title="Good Ware">Good Ware</a> from <a href="https://www.flaticon.com/" title="Flaticon"> www.flaticon.com</a>

const NavSwitches = () => {
	const { animate, setAnimate, theme, setTheme } = useContext(MiscContext);

	const handleAnimate = () => {
		setAnimate(!animate);
		cookie.set('animate', !animate, { expires: 365 });
	};

	const handleTheme = () => {
		setTheme(!theme);
		cookie.set('theme', !theme, { expires: 365 });
	};
	return (
		<div className='switches-container'>
			<button
				className={`switch-animation ${animate ? 'rotate' : ''}`}
				onClick={handleAnimate}
			></button>
			<button
				className={`switch-theme ${theme ? 'light' : 'dark'}`}
				onClick={handleTheme}
			></button>
		</div>
	);
};

export default NavSwitches;
