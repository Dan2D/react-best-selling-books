import React from 'react'

function BookSubInfo(props) {

    return (
        <div className="book-review-info">
            <a className="book-buy-link" 
            href={props.buyLnk.url}
            target="blank">
            Buy this Book
            </a>
            <p>{props.rating === 0 ? 'No Rating Available' : props.rating}</p>
            <p className='book-description'>Description...</p>
            <p >{props.dscrpt === "" ? 'No Description Available...' : props.dscrpt}</p>
    </div>
    )
}

export default BookSubInfo
