import React from 'react'
import Book from "./Books/Book";


function GenreBks(props){ 

    let bookArr = props.genre.books.map((book) => {
        return <Book 
                key={book.title}
                type='genre' 
                onAuthClick={(author, srchTyp) => props.onAuthClick(author, srchTyp)}
                handleRatingClick={null} 
                book={book}/>
        });

   
    return (
            <div className="genre-booklist-container">
                <h2>{props.genre.display_name}</h2>
                <div className="booklist-container">
                    {bookArr}
                </div>
            </div>
    )
}

export default GenreBks
