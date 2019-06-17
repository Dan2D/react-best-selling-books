import React from 'react'
import noCover from "../../../Images/Book-Placeholder.png";

function BookMainInfo(props) {
    
    if (props.author){
        let authorTxt = props.author.split(/,|\sand\s|\swith\s/);
        var authorArr = authorTxt.map((author, indx) => {
            if (indx < authorTxt.length-1){
                return <span key={author}><button className="author-btn" onClick={() => props.onAuthClick(author, 'author')}>{author},</button></span>}
            else {return <button key={author} className="author-btn" onClick={() => props.onAuthClick(author, 'author')}>{author}</button>}
        });
    }
let bookCover = props.bkImg !== null ? props.bkImg : noCover;
    return (
    <div className="book-general-info">
        <div><strong>#{props.rank}</strong></div>
        <img src={bookCover} alt={props.title}/>
        <h5>{props.title}</h5>
        <div className="author-info">
            <p>by</p>
            <div className="author-btn-container">{authorArr}</div>
        </div>
    </div>
    )
}

export default BookMainInfo
