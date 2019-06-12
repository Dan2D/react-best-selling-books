import React from 'react'
import StarRating from "react-rating";

function BookSubInfo(props) {

    return (
        <div className="book-review-info">
            <a className="book-buy-link" 
            href={props.buyLnk.url}
            target="blank">
            Buy this Book
            </a>
            <p>{props.rating === 0 ? 'No Rating Available' : 
            <div>
            <StarRating
            initialRating={props.rating}
            emptySymbol="far fa-star fa-lg"
            fullSymbol="fas fa-star fa-lg"
            fractions={2}
            readonly /> {props.rating}</div>}</p>
            <p className='book-description'>Description...</p>
            <p >{props.dscrpt === "" ? 'No Description Available...' : props.dscrpt}</p>
    </div>
    )
}

export default BookSubInfo
