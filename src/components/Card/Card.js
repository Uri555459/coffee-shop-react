import React from 'react'
import { Link } from 'react-router-dom'

import './card.scss'

const Card = (props) => {

  return (
    <Link to={`/single/${props.id}`} className='card'>
      <div className='card__img-wrap'>
        <img className='card__img' src={props.url} alt="" />
      </div>
      <div className="card__title">{props.name}</div>
      {props.country && <div className='card__country'>{props.country}</div>}
      <div className='card__price'>{props.price}</div>
    </Link>
  );
};

export default Card;