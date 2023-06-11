import React from 'react';
import './ReviewItem.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrashCan } from '@fortawesome/free-solid-svg-icons';


const ReviewItem = ({ product, removeFromCart }) => {
    const {_id, name, price, img, quantity} = product;
    return (
        <div className='review-item'>
            <div className='xx'>
                <div>
                    <img src={img} alt="" />
                </div>
                <div className='review-details'>
                    <h3>{name}</h3>
                    <p>Price: <span className='orange-title'>${price}</span></p>
                    <p>Quantity: <span className='orange-title'>{quantity}</span></p>
                </div>
            </div>
            <button onClick={() => removeFromCart(_id)} className='btn-delete'> <FontAwesomeIcon className='delete-icon' icon={faTrashCan} /> </button>
        </div>
    );
};

export default ReviewItem;