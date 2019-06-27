import React, {useEffect} from 'react'
import ContentLoader from "react-content-loader";

function SrchBk(props) {
    let title, coverImg, bookId, rvwLnk, pubDt;
    function qryAssign(input)
        {return props.book.querySelector(input).textContent;}

    function handleAuthClick()
        {return props.onAuthClick(props.author, 'author');}

        useEffect(() => {
            console.log("TRUE")
            let placeholders = document.getElementsByClassName("srch-book-placeholder");
            let books = document.getElementsByClassName("book-hide");
                for (let i = 0; i < placeholders.length; i++){
                    placeholders[i].style.display = "none";
                    books[i].style.display = "block";
                }
        });
        
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

        let bookPlaceholder = <ContentLoader
                                className="srch-book-placeholder"
                                style={{display:"block"}}
                                height={550}
                                width={300}
                                speed={2}
                                primaryColor="#f3f3f3"
                                secondaryColor="#ecebeb">
                                    <rect x="0" y="0" rx="4" ry="4" width="40" height="39" /> 
                                    <rect x="0" y="515" rx="4" ry="4" width="250" height="13" /> 
                                    <rect x="0" y="50" rx="4" ry="4" width="300" height="450" /> 
                                    <rect x="0" y="535" rx="4" ry="4" width="150" height="13" /> 
                                    <rect x="0" y="555" rx="4" ry="4" width="100" height="13" />
                            </ContentLoader>;

    return (
        <div className="srch-bk-container" data-ref={props.srchTyp}>
            {bookPlaceholder}
            <div className="book-hide" style={{display:"none"}}>
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
        </div>
    )
}

export default SrchBk
