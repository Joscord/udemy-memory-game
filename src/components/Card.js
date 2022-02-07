import React from 'react';

const Card = ({src, id}) => {
	return (
		<div className='card' key={id}>
			<img src={src} className='front' alt='card-front' />
			<img src='/assets/images/cover.png' className='back' alt='card-back' />
		</div>
	);
};

export default Card;
