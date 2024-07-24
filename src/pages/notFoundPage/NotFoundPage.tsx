import { Link } from "react-router-dom";
import styles from "./NotFoundPage.module.css";
import BlueButton from '../../components/buttonBlue/ButtonBlue.tsx'

const NotFoundPage = () => {
	return (
		<div className={styles.container}>
			<div className={styles.errorContent}>
				<h1>404</h1>
				<p>Sorry, the page was not found!</p>
			</div>
			<BlueButton type="submit">
				<Link className={styles.link} to="/">back home</Link>
			</BlueButton>
		</div>
	);
};

export default NotFoundPage;