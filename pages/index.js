import styles from '../styles/home.module.scss';
import Link from 'next/link';
import Head from 'next/head';
import Image from 'next/image';

import glassImg from '../public/assets/glassmorphism.webp';
import neuImg from '../public/assets/neumorphism.webp';
import wavesImg from '../public/assets/waves_about.webp';
const Home = () => {
	return (
		<>
			<Head>
				<title>Portfolio</title>
			</Head>
			<div className={styles.container}>
				<h2 className={styles.title}>
					<span className={styles.choose}>Choose </span>
					<span className={styles.your}>your</span>
					<span className={styles.style}>style </span>
				</h2>
				<div className={styles.accordion}>
					<div className={`${styles.section} ${styles.glassmorphism}`}>
						<Image
							alt='glassmorphism'
							src={glassImg}
							layout='fill'
							priority
							// placeholder='blur'
						/>
						<Link href='/glassmorphism'>
							<a className={styles.type}>Glassmorphism</a>
						</Link>
					</div>
					<div className={`${styles.waves} ${styles.section}`}>
						<Image
							alt='waves design'
							src={wavesImg}
							layout='fill'
							priority
							// placeholder='blur'
						/>

						<Link href='/waves'>
							<a className={styles.type}>Waves</a>
						</Link>
					</div>
					<div className={`${styles.neumorphism} ${styles.section}`}>
						<Image
							alt='neumorphism'
							src={neuImg}
							layout='fill'
							priority
							// placeholder='blur'
						/>

						<Link href='/neumorphism'>
							<a className={styles.type}>Neumorphism</a>
						</Link>
					</div>
				</div>
			</div>
		</>
	);
};

export default Home;
