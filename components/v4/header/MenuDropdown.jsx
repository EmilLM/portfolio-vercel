import { Card, CardContent } from 'ui-neumorphism';
import Link from 'next/link';
import { useState, useContext } from 'react';
import MiscContext from '../../MiscContext';

import { useRouter } from 'next/router';

const MenuDropdown = () => {
	const { theme } = useContext(MiscContext);
	const router = useRouter();

	return (
		<Card className='style-change-menu' dark={theme}>
			<CardContent dark={theme}>
				<ul>
					<li className='first-draft'>First draft - N/A</li>
					<li className={theme ? 'dark-engrave' : 'light-engrave'}>
						<Link href='/glassmorphism'>
							<a>Glassmorphism</a>
						</Link>
					</li>
					<li className={theme ? 'dark-engrave' : 'light-engrave'}>
						<Link href='/waves'>
							<a>Flowing waves</a>
						</Link>
					</li>
					<li
						className={
							theme ? 'dark-engrave dark-active ' : 'light-engrave light-active'
						}
					>
						<Link href='/neumorphism'>
							<a>Neumorphism</a>
						</Link>
					</li>
				</ul>
			</CardContent>
		</Card>
	);
};

export default MenuDropdown;
