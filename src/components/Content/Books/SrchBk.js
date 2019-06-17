import React from 'react'
import LazyLoad from "react-lazyload"

function SrchBk(props) {
    let title, coverImg, bookId, rvwLnk, pubDt;
    function qryAssign(input)
        {return props.book.querySelector(input).textContent;}
        
    if (props.srchTyp === 'title')
        {title = qryAssign('best_book title');
        coverImg = qryAssign('best_book small_image_url')
        bookId = qryAssign('best_book id');
        rvwLnk = 'https://www.goodreads.com/book/show/'+bookId
        pubDt = qryAssign('original_publication_year');
        }
    else 
        {title = qryAssign('title_without_series');
        coverImg = qryAssign('small_image_url');
        rvwLnk = qryAssign('link');
        pubDt = qryAssign('publication_year');
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
