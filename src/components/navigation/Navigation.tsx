import { useState } from 'react';
import { Link } from 'react-router-dom';
import styles from './Navigation.module.css';
import BlueButton from '../buttonBlue/ButtonBlue.tsx'
import { useAuth } from '../../hooks/UseAuth.ts';
import Modal from '../../components/modal/Modal';


const Navigation = () => {

	const {balance} = useAuth()

	const [isModalOpen, setIsModalOpen] = useState(false);

	return (
	<nav className={styles.navbar}>
		<div className={styles.navbarContent}>
		<div className={styles.navbarLeft}>
      <Link to={'/'} className={styles.navLink}>Home page</Link>
      <Link to={'/briefcase'} className={styles.navLink}>My crypto</Link>
		</div>
    <div className={styles.navbarRight}>
      <span className={styles.balance}>balance: ${balance}</span>
			<BlueButton onClick={() => setIsModalOpen(true)} padding={10} type='submit'>
				Top Up
			</BlueButton>
    </div>
		</div>
		<Modal onClose={() => setIsModalOpen(false)} isOpen={isModalOpen} />
  </nav>
	);
};

export default Navigation;