import { useState } from 'react';
import './App.css';

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

			<div className='card-grid'>
				{/* Iteramos a través del arreglo de cartas */}
				{
					cards.map(({id, src}) => (
						<div className='card' key={id}>
							<img src={src} className='front' alt='card-front'/>
							<img src='/assets/images/cover.png' className='back' alt='card-back'/>
						</div>
					))
				}
			</div>
		</div>
	);
}

export default App;
