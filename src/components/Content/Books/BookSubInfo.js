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
            <div>{props.rating === 0 ? 'No Rating Available' : 
            <div>
            <StarRating
            initialRating={props.rating}
            emptySymbol="far fa-star fa-lg"
            fullSymbol="fas fa-star fa-lg"
            fractions={2}
            readonly /> {props.rating}</div>}</div>
            <p className='book-description'>Description...</p>
            <div>{props.dscrpt === "" ? 'No Description Available...' : props.dscrpt}</div>
    </div>
    )
}

export default BookSubInfo
