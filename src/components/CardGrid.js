import React from 'react';
// Importamos el nuevo componente Card
import Card from './Card';
// importamos los estilos
import './CardGrid.css';

const CardGrid = ({cards}) => (
	<div className='card-grid'>
		{cards.map(({ id, src }) => (
			<Card id={id} src={src} key={id}/>
		))}
	</div>
);

export default CardGrid;
