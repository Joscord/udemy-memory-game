import React from 'react';
import './Card.css'

const Card = ({src, id}) => {
	return (
		<div className='card'>
			<img src={src} className='front' alt='card-front' />
			<img src='/assets/images/cover.png' className='back' alt='card-back' />
		</div>
	);
};

export default Card;
