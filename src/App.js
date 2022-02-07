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
			if (choiceOne.src === choiceTwo.src) {
				// Modificamos el estado de las cartas para cambiar la propiedad matched
				setCards(prevCards => {
					return prevCards.map(card => {
						// Revisamos si la carta del arreglo que estamos iterando es igual a la carta escogida (una o dos da igual porque la propiedad src es la misma). Y si lo es entonces cambiamos la propiedad matched.
						if (card.src === choiceOne.src) {
							// Retornamos un nuevo objeto con las mismas propiedades de la carta pero con la propiedad matched cambiada. Así retornamos un nuevo objeto carta al arreglo nuevo (nuevo estado) en lugar de la carta vieja
							return {
								...card,
								matched: true,
							};
							// Añadimos una cláusula else para que si las carta del arreglo en la iteración actual no hace match con la opción entonces simplemente devolvamos la misma carta
						} else {
							return card;
						}
					});
				});
				resetCards();
			} else {
				// Queremos demorar el reset cuando no se ha  producido un match. Por eso tuvimos que añadir un else y un segundo resetCards para manejar esa situación.
				setTimeout(() => resetCards(), 1000);
			}
		}
	}, [choiceOne, choiceTwo]);
	const resetCards = () => {
		setChoiceOne(null);
		setChoiceTwo(null);
		setTurns(prevTurn => ++prevTurn);
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
			/>
		</div>
	);
}

export default App;
