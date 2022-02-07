import { useEffect, useState } from 'react';
import './App.css';
import CardGrid from './components/CardGrid';

const cardImages = [
	{ src: '/assets/images/helmet-1.png' },
	{ src: '/assets/images/potion-1.png' },
	{ src: '/assets/images/ring-1.png' },
	{ src: '/assets/images/scroll-1.png' },
	{ src: '/assets/images/shield-1.png' },
	{ src: '/assets/images/sword-1.png' },
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

	// Usamos useEffect para hacer la comparación, Cada vez que el estado de una elección cambie se corre la función dentro y si ambos valores son truthy entonces podemos hacer la comparación a través de src. Independiente de cómo resulte la comparación luego se llama a la función de reseteo
	useEffect(() => {
		if (choiceOne && choiceTwo) {
			if (choiceOne.src === choiceTwo.src) {
				console.log('Cards matched!');
			}
			resetCards();
		}
	}, [choiceOne, choiceTwo]);
	// Definimos la función de reseteo
	const resetCards = () => {
		// Reseteamos las cartas
		setChoiceOne(null);
		setChoiceTwo(null);
		// Subimos los turnos
		setTurns(prevTurn => ++prevTurn);
	};

	const handleChoice = card => {
		choiceOne ? setChoiceTwo(card) : setChoiceOne(card);
		// Nótese que no podemos hacer la comparación aquí puesto que los estados no se cambian automáticamente sino que son "agendados" por React
	};

	return (
		<div className='app'>
			<h1>Memory Game</h1>
			<button onClick={shuffleCards}>New Game</button>
			{/* Pasamos la función de elección a CardGrip y esta lo pasará a Card */}
			<CardGrid cards={cards} handleChoice={handleChoice} />
		</div>
	);
}

export default App;
