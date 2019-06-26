import React from 'react'

function SrchBk(props) {
    let title, coverImg, bookId, rvwLnk, pubDt;
    function qryAssign(input)
        {return props.book.querySelector(input).textContent;}

    function handleAuthClick()
        {return props.onAuthClick(props.author, 'author');}
        // TODO(Button logic to only show 10 button but re-render button num to inc as select upper pages)
    if (props.srchTyp === 'title')
        {title = qryAssign('best_book title');
        coverImg = qryAssign('best_book image_url')
        bookId = qryAssign('best_book id');
        rvwLnk = 'https://www.goodreads.com/book/show/'+bookId
        pubDt = qryAssign('original_publication_year');
        }
    else 
        {title = qryAssign('title_without_series');
        coverImg = qryAssign('image_url');
        rvwLnk = qryAssign('link');
        pubDt = qryAssign('publication_year');
        }
    return (
        <div className="srch-bk-container" data-ref={props.srchTyp}>
            <div>{props.indx+"."}</div>
            <img className="srch-bk-container__cover" src={coverImg} alt={title}/>
            <h5 className="srch-bk-container__title">{title}</h5>
            {props.srchTyp === 'title' ? 
            <div className="srch-bk-container__author-info">
                <p>by: </p>
                <button className="srch-bk-container__author-btns" 
                        onClick={handleAuthClick}>
                        {props.author}
                </button>
            </div> 
            : null}
            <p>Published: {pubDt}</p>
            <a href={rvwLnk} rel='noopener noreferrer'  target="_blank">...more info</a>
        </div>
    )
}

export default SrchBk
