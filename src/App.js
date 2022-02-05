import { useState } from 'react';
import './App.css';
// Creamos un arreglo con las cartas, si esta constante esta fuera del componente no es recreada cada vez que se reevalúa el componente
const cardImages = [
	{ src: '/img/helmet-1.png' },
	{ src: '/img/potion-1.png' },
	{ src: '/img/ring-1.png' },
	{ src: '/img/scroll-1.png' },
	{ src: '/img/shield-1.png' },
	{ src: '/img/sword-1.png' },
];

function App() {
	// Creamos un estado para almacenar las cartas
	const [cards, setCards] = useState([]);
	// Definimos una pieza de estado para los turnos
	const [turns, setTurns] = useState(0);
	// Crearemos una función para duplicar las cartas y barajarlas. Esta es la función que correrá cuando iniciamos un juego nuevo
	const shuffleCards = () => {
		// Duplicamos a través del spread operator
		const shuffledCards = [...cardImages, ...cardImages]
			// Barajamos las cartas con el método sort. En este método si la expresión del cuerpo de la función retorna un valor menor a 0 el elemento secondEle precede al firstEle, mayor a 0 el elemento firstEle precede a secondEle y si es igual a 0 las posiciones no cambian
			.sort(() =>
				// Esto puede dar negativo o positivo, alterando así el orden de las cartas al azar
				Math.random() - 0.5
			)
			// También usamos map para que nos devuelva un arreglo pero donde ahora el objeto también posea un id
			.map(card => ({
				...card,
				id: Math.random()
			}));
		// Actualizamos el estado con las nuevas cartas barajadas
		setCards(shuffledCards);
		setTurns(0);
	};
	return (
		<div className='app'>
			<h1>Memory Game</h1>
			{/* El evento onClick gatilla la función para comenzar un nuevo juego y barajar las cartas */}
			<button onClick={shuffleCards}>New Game</button>
		</div>
	);
}

export default App;
