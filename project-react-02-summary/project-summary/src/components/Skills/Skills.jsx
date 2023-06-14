import styles from './Skills.module.css';
import { nanoid } from 'nanoid';

const skills = [
	{
		category: 'Reaction',
		score: 80,
		icon: './images/icon-reaction.svg',
	},
	{
		category: 'Memory',
		score: 92,
		icon: './images/icon-memory.svg',
	},
	{
		category: 'Verbal',
		score: 61,
		icon: './images/icon-verbal.svg',
	},
	{
		category: 'Visual',
		score: 72,
		icon: './images/icon-visual.svg',
	},
];

const Skills = () => {
	return (
		<>
			{skills.map((skill) => {
				return (
					<div
						className={[
							styles.skillItem,
							styles[`${skill.category.toLowerCase()}`],
						].join(' ')}
						key={nanoid()}
					>
						<img src={skill.icon} alt={skill.category} />
						<h6 className={styles.title}>{skill.category}</h6>
						<span className={styles.score}>{skill.score}</span>
						<span className={styles.maxScore}>/ 100</span>
					</div>
				);
			})}
		</>
	);
};

export default Skills;
