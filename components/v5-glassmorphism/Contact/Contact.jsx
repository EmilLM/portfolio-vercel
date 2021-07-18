import ContactForm from './ContactForm';
import style from './contact.module.scss';
import ContactLinks from './ContactLinks';
import { useEffect, useRef } from 'react';
import contactBg from '../../../public/assets/bg/contact.webp';
import Image from 'next/image';

const Contact = () => {
	const year = new Date().getFullYear();
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
				<Image
					alt='glassmorphism'
					src={contactBg}
					className={style.bg}
					layout='fill'
				/>
				<h1 className={style.title}>Contact</h1>
				<div className={style.card_contact} ref={tilt}>
					<ContactForm />
					<ContactLinks />
				</div>
				<div className={style.footer}>
					<p>
						Copyleft <span>&copy;</span> {year}
					</p>
				</div>
			</div>
		</>
	);
};

export default Contact;
