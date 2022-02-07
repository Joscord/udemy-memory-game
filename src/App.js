import { useEffect, useState } from 'react';
import './App.css';
import CardGrid from './components/CardGrid';

const cardImages = [
	{ src: '/assets/images/helmet-1.png', matched: false },
	{ src: '/assets/images/potion-1.png', matched: false },
	{ src: '/assets/images/ring-1.png', matched: false },
	{ src: '/assets/images/scroll-1.png', matched: false },
	{ src: '/assets/images/shield-1.png', matched: false },
	{ src: '/assets/images/sword-1.png', matched: false },
];

function App() {
	const [cards, setCards] = useState([]);
	const [turns, setTurns] = useState(0);
	const [choiceOne, setChoiceOne] = useState(null);
	const [choiceTwo, setChoiceTwo] = useState(null);
	const [disabled, setDisabled] = useState(false);
	const shuffleCards = () => {
		const shuffledCards = [...cardImages, ...cardImages]
			.sort(() => Math.random() - 0.5)
			.map(card => ({
				...card,
				id: Math.random(),
			}));
		// Deshabilitmamos las cartas seleccionadas cuando entramos a un nuevo juego
		setChoiceOne(null)
		setChoiceTwo(null)
		setCards(shuffledCards);
		setTurns(0);
	};

	// Usamos otro useEffect para empezar el juego automáticamente
	useEffect(() => {
		shuffleCards();
	}, [])

	useEffect(() => {
		if (choiceOne && choiceTwo) {
			setDisabled(true)
			if (choiceOne.src === choiceTwo.src) {
				setCards(prevCards => {
					return prevCards.map(card => {
						if (card.src === choiceOne.src) {
							return {
								...card,
								matched: true,
							};
						} else {
							return card;
						}
					});
				});
				resetCards();
			} else {
				setTimeout(() => resetCards(), 1000);
			}
		}
	}, [choiceOne, choiceTwo]);
	const resetCards = () => {
		setChoiceOne(null);
		setChoiceTwo(null);
		setTurns(prevTurn => ++prevTurn);
		setDisabled(false);
	};

	const handleChoice = card => {
		choiceOne ? setChoiceTwo(card) : setChoiceOne(card);
	};

	return (
		<div className='app'>
			<h1>Memory Game</h1>
			<button onClick={shuffleCards}>New Game</button>
			<CardGrid
				cards={cards}
				handleChoice={handleChoice}
				choiceOne={choiceOne}
				choiceTwo={choiceTwo}
				disabled={disabled}
			/>
			{/* Añadimos los turnos */}
			<p>Turns: {turns}</p>
		</div>
	);
}

export default App;
