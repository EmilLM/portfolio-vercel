import Head from 'next/head';
import Content from '../components/v3-waves/Content/Content.jsx';
import Header from '../components/v3-waves/Header/Header';
import Footer from '../components/v3-waves/Footer/Footer';
import MiscContext from '../components/MiscContext.jsx';
import { useEffect, useState } from 'react';
export default function Waves({ animateCookie, themeCookie }) {
	const [animate, setAnimate] = useState(false);
	const [theme, setTheme] = useState(false);

	useEffect(() => {
		setAnimate(animateCookie);
		setTheme(themeCookie);
	}, [themeCookie, animateCookie]);

	return (
		<>
			<Head>
				<title>WaVeS DeSiGn</title>
			</Head>
			<MiscContext.Provider value={{ animate, setAnimate, theme, setTheme }}>
				<Header />
				<Content />
				<Footer />
			</MiscContext.Provider>
		</>
	);
}

export async function getServerSideProps({ req, res }) {
	const animateCookie = await JSON.parse(req.cookies.animate || null);
	const themeCookie = await JSON.parse(req.cookies.theme || null);
	return {
		props: {
			animateCookie,
			themeCookie,
		},
	};
}
