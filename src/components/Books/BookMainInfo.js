import React from 'react'
import noCover from "../../Images/Cover-PlaceHolder.jpg";

function BookMainInfo(props) {
    
    if (props.author){
        let authorTxt = props.author.split(/,|and /);
        var authorArr = authorTxt.map((author, indx) => {
            if (indx < authorTxt.length-1){
                return <span><button className="author-btn" onClick={null}>{author},</button></span>}
            else {return <button className="author-btn" onClick={null}>{author}</button>}
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
