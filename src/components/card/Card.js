import React from 'react';
import * as BootStrapCard from 'react-bootstrap/Card';
import Rating from '../rating/Rating';
import './Card.scss';

const Card = () => {
  return (
    <BootStrapCard className="border-0 card text-center" style={{ width: '258px', marginLeft:'100px'  }}>
      <BootStrapCard.Img className="card__img" variant="top" src='/assets/images/test.jpg' />
      <BootStrapCard.Body>
        <BootStrapCard.Title>
          <h2 className="h2-light card__title">Aladdin</h2>
        </BootStrapCard.Title>
        <Rating 
          rate={3.5} />
      </BootStrapCard.Body>
    </BootStrapCard>
  )
}

export default Card;