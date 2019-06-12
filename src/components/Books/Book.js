import React from 'react'



function Book(props) {
    if (props.author){
        let authorTxt = props.author.split(/,|and /);
        var authorArr = authorTxt.map((author, indx) => {
            if (indx < authorTxt.length-1){
                return <span><button className="author-btn" onClick={null}>{author},</button></span>}
            else {return <button className="author-btn" onClick={null}>{author}</button>}
        });
    }

    return (
        <div className="book-container">
            <div className="book-general-info">
                <div><strong>#{props.rank}</strong></div>
                <img src={props.bkImg} alt={props.title}/>
                <h5>{props.title}</h5>
                <div className="author-info">
                    <p>by</p>
                    <div className="author-btn-container">{authorArr}</div>
                </div>
            </div>
            <div className="book-review-info">
                <p className="book-list-duration">{props.wksOnLst !== 1 ? props.wksOnLst +' Weeks On List...' : 'New This Week'}</p>
                <a className="book-buy-link" 
                href={props.buyLnk.url}
                target="blank">
                Buy this Book
                </a>
                <p className='book-description'>Description...</p>
                <p >{props.dscrpt === "" ? 'No Description Available...' : props.dscrpt}</p>
            </div>
        </div>
    )
}

export default Book
