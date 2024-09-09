import React from 'react';
import './Producs.css';

export default function Producs( {product} ) {

	const { title, price, img, id } = product;

	return (
		<div className="card">
			<div className="card__list">
				<img src={img} alt={title} className='card__img'/>
				<div className="card__text">
					<h3 className='card__title'>{title}</h3>
					<div className="card__price">{price}</div>
				</div>
			</div>
		</div>
	)
}
