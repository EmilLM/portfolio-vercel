import styles from '../styles/home.module.scss';
import Link from 'next/link';
import {useEffect} from 'react';
import { useRouter } from 'next/router'
import cookie from 'js-cookie';

const  Home = () => {
    // const router = useRouter();
    // useEffect(()=> {
    //     router.push(route)
    // }, [route])
    return ( 
        <div className={styles.container}>
            <h2 className={styles.title}>
                <span className={styles.choose}>Choose </span> 
                <span className={styles.your}>your</span> 
                <span className={styles.style}>style </span> 
            </h2>
            <div className={styles.accordion}>
                <div className={`${styles.glassmorphism} ${styles.section}`}>
                    <Link href="/glassmorphism" >
                        <a className={styles.type} onClick={()=>cookie.set('route', '/glassmorphism')}>Glassmorphism</a>
                    </Link>
                </div>
                <div className={`${styles.waves} ${styles.section}`}>
                    <Link href="/waves">
                        <a className={styles.type} onClick={()=>cookie.set('route', '/waves')}>Waves</a>
                    </Link>
                </div>
                <div className={`${styles.neumorphism} ${styles.section}`}>
                    <Link href="/neumorphism" >
                        <a className={styles.type} onClick={()=>cookie.set('route', '/neumorphism')}>Neumorphism</a>
                    </Link>
                </div>
            </div>
        </div>
    );
}
 
export default Home ;

// export async function getServerSideProps({req}) {
//   return {
//     props: {route: req.cookies.route || ""}
//   }
// }