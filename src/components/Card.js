import React from 'react';
import './Card.css';

// Recibimos la propiedad flipped
const Card = ({ card, handleChoice, flipped }) => {
	const handleClick = () => {
		handleChoice(card);
	};

	return (
		<div className='card'>
			{/* Usamos el operador ternario para evaluar el valor de flipped y aplicar o no la clase flipped */}
			<div className={flipped ? 'flipped' : ''}>
				<img src={card.src} className='front' alt='card-front' />
				<img
					src='/assets/images/cover.png'
					className='back'
					onClick={handleClick}
					alt='card-back'
				/>
			</div>
		</div>
	);
};

export default Card;
