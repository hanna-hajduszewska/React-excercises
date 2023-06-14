import styles from './Result.module.css';

const Result = () => {
	return (
		<div className={styles.result_card}>
			<h3 className={styles.heading}>Your Result</h3>
			<div className={styles.score_wrapper}>
				<strong>76</strong>
				<span>of 100</span>
			</div>
			<h4>Great</h4>
			<p>
				You scored higher than 65% of the people who have taken these
				tests.
			</p>
		</div>
	);
};

export default Result;
