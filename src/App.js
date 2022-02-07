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
	return (
		<div className='app'>
			<h1>Memory Game</h1>
			<button onClick={shuffleCards}>New Game</button>
			<CardGrid cards={cards}/>
		</div>
	);
}

export default App;
