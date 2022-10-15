import React from 'react';
import './ReviewDetail.css'

const ReviewDetail = ({review}) => {
    const {name, comment , picture} = review
    return (
        <div className='review-d-container'>
            {/* <img src={picture} alt="" /> */}
           <h3>{name}</h3>
            <p>{comment}</p>
        </div>
    );
};

export default ReviewDetail;