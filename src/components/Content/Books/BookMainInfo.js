import React from 'react'
import noCover from "../../../Images/Book-Placeholder.png";

function BookMainInfo(props) {
      
    if (props.author){
        let authorTxt = props.author.split(/,|\sand\s|\swith\s/);
        var authorArr = authorTxt.map((author, indx) => {
            if (indx < authorTxt.length-1){
                return <span key={author}>
                            <button 
                            className="author-btn" 
                            onClick={() => props.onAuthClick(author, 'author')}>
                                {author},
                            </button>
                        </span>}
            else 
                {return <button 
                        key={author} 
                        className="author-btn" 
                        onClick={() => props.onAuthClick(author, 'author')}>
                            {author}
                        </button>}
        });
    }
    let bookCover = props.bkImg !== null ? props.bkImg : noCover;

    function handleTtlClick() {
        return props.onTtlClick(props.book);
    }
 
    let descriptionBlk = <div className="book-container__description">
                            <h4>Description</h4>
                            <p>{props.dscrpt ? props.dscrpt : "No Description Available..."}</p>
                        </div>

    return (
        <div className="book-container__gen-info" data-ref={props.type} >
                {props.type === 'book' ? null : 
                <div>
                    <strong>#{props.rank}</strong>
                </div>}
            <div className="book-container__cover" 
                 data-ref={props.type}>
                    <img 
                    src={bookCover} 
                    alt={props.title}/>
                {props.type === 'genre' || props.type === 'book' ? descriptionBlk : <></>}
            </div>
            <div className="book-container__title-author">
                <button 
                className="book-title" 
                onClick={handleTtlClick}>
                    {props.title}
                </button>
                <div className="book-container__author-info">
                    <p>by</p>
                    <div className="book-container__author-btns" 
                         data-ref={props.type}>
                        {authorArr}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default BookMainInfo
