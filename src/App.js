import { useState } from 'react';
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
	// Definimos dos piezas de estado para cuando vayamos a elegir cada carta
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
	// Función para manejar la elección. La función recibe la carta elegida por el usuario. POr ahora sólo la mostraremos en consola.
	const handleChoice = card => {
		// Revisamos de cuál elección se trata a través de un operador ternario
		choiceOne ? setChoiceTwo(card) : setChoiceOne(card);
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
