import React from 'react'
import LazyLoad from "react-lazyload";
import BookMainInfo from "./BookMainInfo";
import MinBookSubInfo from "./MinBookSubInfo";
import BookSubInfo from "./BookSubInfo";


function Book(props) {
let isbns = {};
    if (props.type === 'genre'){
        isbns = props.book.isbns.filter((isbn, indx )=> indx === props.book.isbns.length-1)
        isbns = isbns[0]
    }
    console.log(props)
    return (
        
        <div className="book-container">
            <LazyLoad height={200} once offset={100} >
                <BookMainInfo
                        key={props.book.title+'main-info'}
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
                    rating={props.book.rating}
                    dscrpt={props.book.dscrpt}/>
                }
            </LazyLoad>
        </div>
        
    )
}

export default Book
