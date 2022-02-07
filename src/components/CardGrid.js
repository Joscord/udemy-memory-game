import React from 'react';
// Importamos el nuevo componente Card
import Card from './Card';
// importamos los estilos
import './CardGrid.css';

const CardGrid = ({ cards, handleChoice }) => (
	<div className='card-grid'>
		{cards.map((card) => (
			<Card key={card.id} card={card} handleChoice={handleChoice} />
		))}
	</div>
);

export default CardGrid;
