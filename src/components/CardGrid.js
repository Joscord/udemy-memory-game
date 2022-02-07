import React from 'react';
// Importamos el nuevo componente Card
import Card from './Card';

const CardGrid = ({cards}) => (
	<div className='card-grid'>
		{cards.map(({ id, src }) => (
			<Card id={id} src={src} />
		))}
	</div>
);

export default CardGrid;
