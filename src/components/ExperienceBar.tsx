import { useContext } from 'react';
import { challengesContext } from '../contexts/ChallengesContext';
import styles from '../styles/components/ExperienceBar.module.css';

export function ExperienceBar() {
	const { currentExperience, experienceToNextLevel } = useContext(challengesContext);

	const percentToNextLvl = Math.round(currentExperience * 100) / experienceToNextLevel;

	return(
		<header className={styles.experienceBar}>
			<span>0 xp</span>
			<div>
				<div style={{ width: `${percentToNextLvl}%` }}/>

				<span className={styles.currentExperience} style={{ left: `${percentToNextLvl}%` }}>{currentExperience} xp</span>
			</div>
			<span>{experienceToNextLevel} xp</span>
		</header>
	)
}