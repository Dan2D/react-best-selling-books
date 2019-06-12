import React, {useEffect} from 'react'
import Book from "./Books/Book";

function GenreBks(props) {

    console.log("PROPS", props)
    let bookArr = props.genre.books.map((book) => {
        let indx = book['isbns'].length-1;
        if(indx < 0){indx = null}

        return <Book 
                key={book.title} 
                onClick={null}
                handleRatingClick={null} 
                book={book}
                title={book.title}
                author={book.author}
                bkImg={book.book_image} 
                rank={book.rank} 
                dscrpt={book.description}
                isbn={indx !== null ? book['isbns'][indx]['isbn10'] : null}
                buyLnk={book.buy_links[1]}/>
    })


    return (
            <div className="genre-booklist-container">
                <h2>{props.genre.books.display_name}</h2>
                <div className="booklist-container">
                    {props.genre.books ? bookArr : <div>LOADING....</div>}
                </div>
            </div>
    )
}

export default GenreBks
