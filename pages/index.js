import styles from '../styles/home.module.scss';
import Link from 'next/link';
import Head from 'next/head';
import Image from 'next/image';
import Img from 'react-optimized-image';
import glass from '../public/assets/glassmorphism.webp';

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
					<div className={styles.glass}>
						<Img alt='glassmorphism' src={glass} />
						<Link href='/glassmorphism'>
							<a className={styles.type}>Glassmorphism</a>
						</Link>
					</div>
					<div className={`${styles.waves} ${styles.section}`}>
						<Image
							src='/assets/waves_about.webp'
							alt='waves design'
							layout='fill'
							priority
						/>
						<Link href='/waves'>
							<a className={styles.type}>Waves</a>
						</Link>
					</div>
					<div className={`${styles.neumorphism} ${styles.section}`}>
						<Image
							src='/assets/neumorphism.webp'
							alt='neumorphism'
							layout='fill'
							priority
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
