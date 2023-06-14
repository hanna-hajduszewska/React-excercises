import Skills from '../Skills/Skills';
import styles from './Summary.module.css';

const Summary = () => {
	return (
		<div className={styles.summary}>
			<h3>Summary</h3>
			<div className={styles.skills}>
				<Skills />
			</div>
			<button>Continue</button>
		</div>
	);
};

export default Summary;
