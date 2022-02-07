import React from 'react';
// Importamos el nuevo componente Card
import Card from './Card';
// importamos los estilos
import './CardGrid.css';

const CardGrid = ({ cards, handleChoice, choiceOne, choiceTwo, disabled }) => (
	<div className='card-grid'>
		{cards.map(card => (
			// pasamos la prop disabled
			<Card
				key={card.id}
				card={card}
				handleChoice={handleChoice}
				flipped={card === choiceOne || card === choiceTwo || card.matched}
				isDisabled={disabled}
			/>
		))}
	</div>
);

export default CardGrid;
