import { Card } from 'ui-neumorphism';
import Contact from './Contact';
import MiscContext from '../../MiscContext';
import { useContext } from 'react';

const Footer = () => {
	const year = new Date().getFullYear();
	const { theme } = useContext(MiscContext);
	return (
		<>
			<Card flat className='v4-contact v4-container' dark={theme}>
				<Card className='contact v4-contact-container' dark={theme}>
					<Contact />
				</Card>
				<Card flat className='date'>
					<p className={theme ? 'dark-h-e' : 'light-h-e'}>
						Copyleft <span id="c">&copy;</span>
						<span>{year}</span>
					</p>
				</Card>
			</Card>
		</>
	);
};

export default Footer;
