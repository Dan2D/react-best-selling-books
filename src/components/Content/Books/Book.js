import React from 'react'
import LazyLoad from "react-lazyload";
import BookMainInfo from "./BookMainInfo";
import MinBookSubInfo from "./MinBookSubInfo";
import BookSubInfo from "./BookSubInfo";
import bkSymbl from "../../../Images/Book-Placeholder.png";
import "./Book.css";


function Book(props) {
    console.log(props.book)
    // Still need to assign isbn to single book view for rating lookup
    let isbn = props.book.primary_isbn13;
    if (props.type === 'genre')
        {let isbns = props.book.isbns.filter((isbn, indx )=> indx === props.book.isbns.length-1);
            console.log(isbns)
        if (isbns !== null) 
            {isbn = isbns[0].isbn13}}
    let placeholderImg = <img src={bkSymbl} alt="book-symbol"/>;
    return (
        <div className="book-container">
            <LazyLoad height={200} once offset={100} placeholder={placeholderImg} >
                <BookMainInfo
                        key={props.book.title+'main-info'}
                        onTtlClick={(book) =>  props.onTtlClick(book)}
                        onAuthClick={(author, srchTyp) => props.onAuthClick(author, srchTyp)}
                        type={props.type}
                        book={props.book}
                        title={props.book.title}
                        author={props.book.author}
                        bkImg={props.book.book_image}
                        rank={props.book.rank} />
                {props.type === 'overview' ?
                    <MinBookSubInfo 
                    key={props.book.title+'min-sub-info'}
                    wksOnLst={props.book.weeks_on_list}/>  :
                    <BookSubInfo 
                    key={props.book.title+'sub-info'}
                    buyLnk={props.book.buy_links[1]}
                    isbn={isbn}
                    dscrpt={props.book.description}/>
                }
            </LazyLoad>
        </div>
    )
}

export default Book;
