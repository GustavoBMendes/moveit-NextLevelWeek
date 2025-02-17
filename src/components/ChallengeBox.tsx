import { useContext } from 'react';
import { challengesContext } from '../contexts/ChallengesContext';
import { CountdownContext } from '../contexts/CountdownContext';
import styles from '../styles/components/ChallengeBox.module.css';

export function ChallengeBox() {
	const { activeChallenge, resetChallenge, completedChallenge } = useContext(challengesContext)
	const { stopCountDown } = useContext(CountdownContext);

	function handleChallengeSucceeded() {
		completedChallenge();
		stopCountDown();
	}

	function handleChallengeFailed() {
		resetChallenge();
		stopCountDown();
	}

	return(
		<div className={styles.challengeBoxContainer}>
			{ activeChallenge ? (
				<div className={styles.challengeActive}>
					<header>Ganhe {activeChallenge.amount}</header>

					<main>
						<img src={`icons/${activeChallenge.type}.svg`}/>
						<strong>Novo desafio</strong>
						<p>{activeChallenge.description}</p>
					</main>

					<footer>
						<button type='button' className={styles.challengeFailedButton} onClick={handleChallengeFailed}>Falhei</button>
						<button type='button' className={styles.challengeSucceedButton} onClick={handleChallengeSucceeded}>Completei</button>
					</footer>
				</div>
			) : (
				<div className={styles.challengeBoxContainer}>
					<div className={styles.challengeNotActive}>
						<strong>Finalize um ciclo para receber um desafio</strong>
						<p>
							<img src='icons/level-up.svg' alt='Level Up'/>
							Avance de level completando desafios.
						</p>
					</div>
				</div>
			) }
		</div>
	);
}