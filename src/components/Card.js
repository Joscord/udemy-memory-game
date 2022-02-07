import React from 'react';
import './Card.css';

// Recibimos disabled
const Card = ({ card, handleChoice, flipped, isDisabled }) => {
	// Ahora hacemos un check de disabled para evitar que se seleccione si ya hay dos
	const handleClick = () => {
		if (!isDisabled) {
			handleChoice(card);
		}
	};

	return (
		<div className='card'>
			{/* Añadimos una propiedad disabled cuyo valor es dinámico */}
			<div className={flipped ? 'flipped' : ''}>
				<img src={card.src} className='front' alt='card-front' />
				<img
					src='/assets/images/cover.png'
					className='back'
					onClick={handleClick}
					alt='card-back'
					disabled={isDisabled}
				/>
			</div>
		</div>
	);
};

export default Card;
