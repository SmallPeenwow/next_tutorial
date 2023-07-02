import Image from 'next/image';
import styles from './page.module.css';
import Hero from 'public/hero.png';

export default function Home() {
	return (
		<div>
			{/* <Image src={Hero} alt='home picture' className={styles.img} /> */}
			<Image src='/hero.png' alt='home picture' height={500} width={500} />
		</div>
	);
}
