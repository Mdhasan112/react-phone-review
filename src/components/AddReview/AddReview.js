import React from 'react';
import { Button } from 'react-bootstrap';
import useReview from '../../Hooks/useReview';
import ReviewDetail from '../ReviewDetail/ReviewDetail';

const AddReview = () => {
    const [reviews, setReviews] = useReview();
    return (
        <div>
            <h3 className='py-5'>Customer Review({reviews.length})</h3>
            <div className='review-map'>
            {
                reviews.map(review => 
                <ReviewDetail 
                key={review._id} 
                review={review}
                >
                    
                </ReviewDetail>)
            }
            </div>
            <Button variant="info">See more detail</Button>
        </div>
    );
};

export default AddReview;