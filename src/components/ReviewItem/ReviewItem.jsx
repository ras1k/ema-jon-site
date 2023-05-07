import React from 'react';
import './ReviewItem.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrashCan } from '@fortawesome/free-solid-svg-icons';


const ReviewItem = ({ product }) => {
    return (
        <div className='review-item'>
            <div className='xx'>
                <div>
                    <img src={product.img} alt="" />
                </div>
                <div className='review-details'>
                    <h3>{product.name}</h3>
                    <p>Price: <span className='orange-title'>${product.price}</span></p>
                    <p>Shiping Charge: <span className='orange-title'>${product.shipping}</span></p>
                </div>
            </div>
            <button className='btn-delete'> <FontAwesomeIcon className='delete-icon' icon={faTrashCan} /> </button>
        </div>
    );
};

export default ReviewItem;