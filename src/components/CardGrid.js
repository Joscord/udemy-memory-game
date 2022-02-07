import React from 'react';
// Importamos el nuevo componente Card
import Card from './Card';
// importamos los estilos
import './CardGrid.css';

const CardGrid = ({ cards, handleChoice, choiceOne, choiceTwo }) => (
	<div className='card-grid'>
		{cards.map(card => (
			// Añadimos una propiedad flipped. Si es true podremos usar clases de CSS para mostrar el frente de la carta y no el cover. Y si es false no aplicamos estos estilos y la carta muestra el cover
			<Card
				key={card.id}
				card={card}
				handleChoice={handleChoice}
				flipped={card === choiceOne || card === choiceTwo || card.matched}
			/>
		))}
	</div>
);

export default CardGrid;
