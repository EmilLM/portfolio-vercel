import style from './links.module.scss';
const ContactLinks = () => {
	return (
		<div className={style.container}>
			<p>You can also reach me on:</p>

			<div className={style.links}>
				<a
					id='mail'
					href='mailto:luchianemil@gmail.com'
					rel='noopener noreferrer'
				>
					<img src='/assets/icons/gmail.svg' alt='gmail' />
				</a>
				<a
					href='https://github.com/EmilLM'
					target={'_blank'}
					rel='noopener noreferrer'
				>
					<img src='/assets/icons/github-sign.svg' alt='github' />
				</a>
				<a
					href='https://www.linkedin.com/in/emil-luchian-9933b198/'
					target={'_blank'}
					rel='noopener noreferrer'
				>
					<img src='/assets/icons/linkedin.svg' alt='linkedin' />
				</a>
				<a
					href='https://www.facebook.com/luchian.emil/'
					target={'_blank'}
					rel='noopener noreferrer'
				>
					<img src='/assets/icons/facebook.svg' alt='facebook' />
				</a>
			</div>
		</div>
	);
};
export default ContactLinks;
