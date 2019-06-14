import React from 'react'
import LazyLoad from "react-lazyload";
import BookMainInfo from "./BookMainInfo";
import MinBookSubInfo from "./MinBookSubInfo";
import BookSubInfo from "./BookSubInfo";
import bkSymbl from "../../../Images/Book-Placeholder.png"


function Book(props) {
let isbns = {};
    if (props.type === 'genre'){
        isbns = props.book.isbns.filter((isbn, indx )=> indx === props.book.isbns.length-1)
        if (isbns !== null)
            {isbns = isbns[0]}
        isbns = props.book.primary_isbn13
    }
    let placeholderImg = <img src={bkSymbl} alt="book-symbol"/>;
    return (
        
        <div className="book-container">
            <LazyLoad height={200} once offset={100} placeholder={placeholderImg} >
                <BookMainInfo
                        key={props.book.title+'main-info'}
                        onAuthClick={(author, srchTyp) => props.onAuthClick(author, srchTyp)}
                        title={props.book.title}
                        author={props.book.author}
                        bkImg={props.book.book_image}
                        rank={props.book.rank} />
                {props.type === 'overview' ?
                    <MinBookSubInfo 
                    key={props.book.title+'min-sub-info'}
                    wksOnLst={props.book.weeks_on_list}
                    buyLnk={props.book.buy_links[2]}
                    dscrpt={props.book.dscrpt}/> 
                    :
                    <BookSubInfo 
                    key={props.book.title+'sub-info'}
                    buyLnk={props.book.buy_links[1]}
                    isbns={isbns}
                    dscrpt={props.book.dscrpt}/>
                }
            </LazyLoad>
        </div>
        
    )
}

export default Book
