import { Card } from 'ui-neumorphism';
import MiscContext from '../../MiscContext';
import { useContext } from 'react';

const ContactLinks = () => {
	const { theme } = useContext(MiscContext);

	return (
		<div className='links-container'>
			<p className='links-info'>You can also reach me on:</p>

			<div className='links'>
				<Card inset className='icon-container' dark={theme}>
					<a
						href='mailto:luchianemil@gmail.com'
						rel='noopener noreferrer'
						className={theme ? 'dark-emboss' : 'light-emboss'}
					>
						<img src='/assets/icons/gmail.svg' alt='gmail' />
					</a>
				</Card>
				<Card inset className='icon-container' dark={theme}>
					<a
						href='https://github.com/EmilLM'
						target={'_blank'}
						rel='noopener noreferrer'
						className={theme ? 'dark-emboss' : 'light-emboss'}
					>
						<img src='/assets/icons/github-sign.svg' alt='github' />
					</a>
				</Card>

				<Card inset className='icon-container' dark={theme}>
					<a
						href='https://www.linkedin.com/in/emil-luchian-9933b198/'
						target={'_blank'}
						rel='noopener noreferrer'
						className={theme ? 'dark-emboss' : 'light-emboss'}
					>
						<img src='/assets/icons/linkedin.svg' alt='linkedin' />
					</a>
				</Card>

				<Card inset className='icon-container' dark={theme}>
					<a
						href='https://www.facebook.com/luchian.emil/'
						target={'_blank'}
						rel='noopener noreferrer'
						className={theme ? 'dark-emboss' : 'light-emboss'}
					>
						<img src='/assets/icons/facebook.svg' alt='facebook' />
					</a>
				</Card>
			</div>
		</div>
	);
};
export default ContactLinks;
