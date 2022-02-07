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
		setCards(shuffledCards);
		setTurns(0);
	};

	useEffect(() => {
		if (choiceOne && choiceTwo) {
			// Después de que seleccionamos dos cartas hacemos que la deshabilitación ocurra
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
		// Una vez terminado el turno habilitamos las cartas nuevamente
		setDisabled(false);
	};

	const handleChoice = card => {
		choiceOne ? setChoiceTwo(card) : setChoiceOne(card);
	};

	return (
		<div className='app'>
			<h1>Memory Game</h1>
			<button onClick={shuffleCards}>New Game</button>
			{/* Pasamos disabled por props */}
			<CardGrid
				cards={cards}
				handleChoice={handleChoice}
				choiceOne={choiceOne}
				choiceTwo={choiceTwo}
				disabled={disabled}
			/>
		</div>
	);
}

export default App;
