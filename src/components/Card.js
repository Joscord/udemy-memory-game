import React from 'react';
import './Card.css';

const Card = ({card, handleChoice}) => {

	const handleClick = () => {
		handleChoice(card)
	}

	return (
		<div className='card'>
			<img src={card.src} className='front' alt='card-front' />
			<img
				src='/assets/images/cover.png'
				className='back'
				onClick={handleClick}
				alt='card-back'
			/>
		</div>
	);
};

export default Card;
