import React from 'react';
import StarRatings from 'react-star-ratings';
import './Rating.scss'

const Rating = (props) => {
  return(
    <StarRatings 
      rating={props.rate}
      starDimension='20px'
      starSpacing='5px'
      starEmptyColor={'#000'}
      starRatedColor={'#37474f'}
      starHoverColor={'#b0bec5'}
      />
  )
}

export default Rating;