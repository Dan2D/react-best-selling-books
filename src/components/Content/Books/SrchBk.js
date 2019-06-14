import React from 'react'
import LazyLoad from "react-lazyload"

function SrchBk(props) {
    //Make a function that assigns all these values for you
    let title, coverImg, bookId, rvwLnk, pubDt;
    if (props.srchTyp === 'title')
        {title = props.book.querySelector('best_book title').textContent;
        coverImg = props.book.querySelector('best_book small_image_url').textContent;
        bookId = props.book.querySelector('best_book id').textContent;
        rvwLnk = 'https://www.goodreads.com/book/show/'+bookId
        pubDt = props.book.querySelector('original_publication_year').textContent;
        }
    else 
        {title = props.book.querySelector('title_without_series').textContent;
        coverImg = props.book.querySelector('small_image_url').textContent;
        rvwLnk = props.book.querySelector('link').textContent;
        pubDt = props.book.querySelector('publication_year').textContent;
        }
    return (
        <LazyLoad height={200} once offset={100} >
        <div>
            <h5>{title}</h5>
            <img src={coverImg} alt={title}/>
            {props.srchTyp === 'title' ? <p>by: {props.author}</p> : null}
            <a href={rvwLnk} rel='noopener noreferrer'  target="_blank">...more info</a>
            <p>Published: {pubDt}</p>
        </div>
        </LazyLoad>
    )
}

export default SrchBk
