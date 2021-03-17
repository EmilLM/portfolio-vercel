import Head from 'next/head';
import globalStyle from '../components/v5-glassmorphism/global.module.scss';
import Header from '../components/v5-glassmorphism/Header/Header.jsx';
import About from '../components/v5-glassmorphism/About/About.jsx';
import Projects from '../components/v5-glassmorphism/Projects/Projects.jsx';
import Contact from '../components/v5-glassmorphism/Contact/Contact';
import { useRef} from 'react';
import Coverflow from '../components/v5-glassmorphism/Projects/Coverflow/Coverflow';

export default function Glassmorphism() {
	const aboutRef = useRef(null);
	const scrollToRef = () =>
		aboutRef.current?.scrollIntoView({ behavior: 'smooth' });

	return (
		<>
			<Head>
				<title>Glassmorphism</title>
			</Head>
			<main className={globalStyle.v5}>
				<Header scrollToRef={scrollToRef} />
				<About aboutRef={aboutRef} />
				<Projects>
					<Coverflow />
				</Projects>
				<Contact />
			</main>
		</>
	);
}
